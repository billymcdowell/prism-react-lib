/* eslint-disable max-lines */
'use client'

import { type FC, useState, useEffect, useRef, JSX } from 'react'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Calendar } from './calendar'
import { Label } from './label'
import { Switch } from './switch'
import { ChevronUpIcon, ChevronDownIcon, CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from './sheet'

export interface DateRangePickerProps {
    /** Click handler for applying the updates from DateRangePicker. */
    onUpdate?: (values: { range: DateRange, rangeCompare?: DateRange }) => void
    /** Initial value for start date */
    initialDateFrom?: Date | string
    /** Initial value for end date */
    initialDateTo?: Date | string
    /** Initial value for start date for compare */
    initialCompareFrom?: Date | string
    /** Initial value for end date for compare */
    initialCompareTo?: Date | string
    /** Alignment of popover */
    align?: 'start' | 'center' | 'end'
    /** Option for locale */
    locale?: string
    /** Option for showing compare feature */
    showCompare?: boolean
}

const formatDate = (date: Date, locale: string = 'en-us'): string => {
    return date.toLocaleDateString(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

const getDateAdjustedForTimezone = (dateInput: Date | string): Date => {
    if (typeof dateInput === 'string') {
        // Split the date string to get year, month, and day parts
        const parts = dateInput.split('-').map((part) => parseInt(part, 10))
        // Create a new Date object using the local timezone
        // Note: Month is 0-indexed, so subtract 1 from the month part
        const date = new Date(parts[0], parts[1] - 1, parts[2])
        return date
    } else {
        // If dateInput is already a Date object, return it directly
        return dateInput
    }
}

interface DateRange {
    from: Date
    to: Date | undefined
}

interface Preset {
    name: string
    label: string
}

// Define presets
const PRESETS: Preset[] = [
    { name: 'today', label: 'Today' },
    { name: 'yesterday', label: 'Yesterday' },
    { name: 'last7', label: 'Last 7 days' },
    { name: 'last14', label: 'Last 14 days' },
    { name: 'last30', label: 'Last 30 days' },
    { name: 'thisWeek', label: 'This Week' },
    { name: 'lastWeek', label: 'Last Week' },
    { name: 'thisMonth', label: 'This Month' },
    { name: 'lastMonth', label: 'Last Month' }
]

interface DateInputProps {
    value?: Date
    onChange: (date: Date) => void
    className?: string
}

interface DateParts {
    day: number
    month: number
    year: number
}

const DateInput: FC<DateInputProps> = ({ value, onChange, className }) => {
    const [date, setDate] = useState<DateParts>(() => {
        const d = value ? new Date(value) : new Date()
        return {
            day: d.getDate(),
            month: d.getMonth() + 1, // JavaScript months are 0-indexed
            year: d.getFullYear()
        }
    })

    const monthRef = useRef<HTMLInputElement | null>(null)
    const dayRef = useRef<HTMLInputElement | null>(null)
    const yearRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        const d = value ? new Date(value) : new Date()
        setDate({
            day: d.getDate(),
            month: d.getMonth() + 1,
            year: d.getFullYear()
        })
    }, [value])

    const validateDate = (field: keyof DateParts, value: number): boolean => {
        if (
            (field === 'day' && (value < 1 || value > 31)) ||
            (field === 'month' && (value < 1 || value > 12)) ||
            (field === 'year' && (value < 1000 || value > 9999))
        ) {
            return false
        }

        // Validate the day of the month
        const newDate = { ...date, [field]: value }
        const d = new Date(newDate.year, newDate.month - 1, newDate.day)
        return d.getFullYear() === newDate.year &&
            d.getMonth() + 1 === newDate.month &&
            d.getDate() === newDate.day
    }

    const handleInputChange =
        (field: keyof DateParts) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value ? Number(e.target.value) : ''
            const isValid = typeof newValue === 'number' && validateDate(field, newValue)

            // If the new value is valid, update the date
            const newDate = { ...date, [field]: newValue }
            setDate(newDate)

            // only call onChange when the entry is valid
            if (isValid) {
                onChange(new Date(newDate.year, newDate.month - 1, newDate.day))
            }
        }

    const initialDate = useRef<DateParts>(date)

    const handleBlur = (field: keyof DateParts) => (
        e: React.FocusEvent<HTMLInputElement>
    ): void => {
        if (!e.target.value) {
            setDate(initialDate.current)
            return
        }

        const newValue = Number(e.target.value)
        const isValid = validateDate(field, newValue)

        if (!isValid) {
            setDate(initialDate.current)
        } else {
            // If the new value is valid, update the initial value
            initialDate.current = { ...date, [field]: newValue }
        }
    }

    const handleKeyDown =
        (field: keyof DateParts) => (e: React.KeyboardEvent<HTMLInputElement>) => {
            // Allow command (or control) combinations
            if (e.metaKey || e.ctrlKey) {
                return
            }

            // Prevent non-numeric characters, excluding allowed keys
            if (
                !/^[0-9]$/.test(e.key) &&
                ![
                    'ArrowUp',
                    'ArrowDown',
                    'ArrowLeft',
                    'ArrowRight',
                    'Delete',
                    'Tab',
                    'Backspace',
                    'Enter'
                ].includes(e.key)
            ) {
                e.preventDefault()
                return
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault()
                let newDate = { ...date }

                if (field === 'day') {
                    if (date[field] === new Date(date.year, date.month, 0).getDate()) {
                        newDate = { ...newDate, day: 1, month: (date.month % 12) + 1 }
                        if (newDate.month === 1) newDate.year += 1
                    } else {
                        newDate.day += 1
                    }
                }

                if (field === 'month') {
                    if (date[field] === 12) {
                        newDate = { ...newDate, month: 1, year: date.year + 1 }
                    } else {
                        newDate.month += 1
                    }
                }

                if (field === 'year') {
                    newDate.year += 1
                }

                setDate(newDate)
                onChange(new Date(newDate.year, newDate.month - 1, newDate.day))
            } else if (e.key === 'ArrowDown') {
                e.preventDefault()
                let newDate = { ...date }

                if (field === 'day') {
                    if (date[field] === 1) {
                        newDate.month -= 1
                        if (newDate.month === 0) {
                            newDate.month = 12
                            newDate.year -= 1
                        }
                        newDate.day = new Date(newDate.year, newDate.month, 0).getDate()
                    } else {
                        newDate.day -= 1
                    }
                }

                if (field === 'month') {
                    if (date[field] === 1) {
                        newDate = { ...newDate, month: 12, year: date.year - 1 }
                    } else {
                        newDate.month -= 1
                    }
                }

                if (field === 'year') {
                    newDate.year -= 1
                }

                setDate(newDate)
                onChange(new Date(newDate.year, newDate.month - 1, newDate.day))
            }

            if (e.key === 'ArrowRight') {
                if (
                    e.currentTarget.selectionStart === e.currentTarget.value.length ||
                    (e.currentTarget.selectionStart === 0 &&
                        e.currentTarget.selectionEnd === e.currentTarget.value.length)
                ) {
                    e.preventDefault()
                    if (field === 'month') dayRef.current?.focus()
                    if (field === 'day') yearRef.current?.focus()
                }
            } else if (e.key === 'ArrowLeft') {
                if (
                    e.currentTarget.selectionStart === 0 ||
                    (e.currentTarget.selectionStart === 0 &&
                        e.currentTarget.selectionEnd === e.currentTarget.value.length)
                ) {
                    e.preventDefault()
                    if (field === 'day') monthRef.current?.focus()
                    if (field === 'year') dayRef.current?.focus()
                }
            }
        }

    return (
        <div className={cn("flex border rounded-lg items-center text-sm px-1", className)}>
            <input
                type="text"
                ref={monthRef}
                max={12}
                maxLength={2}
                value={date.month.toString()}
                onChange={handleInputChange('month')}
                onKeyDown={handleKeyDown('month')}
                onFocus={(e) => {
                    if (window.innerWidth > 1024) {
                        e.target.select()
                    }
                }}
                onBlur={handleBlur('month')}
                className="p-0 outline-none w-6 border-none text-center"
                placeholder="M"
            />
            <span className="opacity-20 -mx-px">/</span>
            <input
                type="text"
                ref={dayRef}
                max={31}
                maxLength={2}
                value={date.day.toString()}
                onChange={handleInputChange('day')}
                onKeyDown={handleKeyDown('day')}
                onFocus={(e) => {
                    if (window.innerWidth > 1024) {
                        e.target.select()
                    }
                }}
                onBlur={handleBlur('day')}
                className="p-0 outline-none w-6 border-none text-center"
                placeholder="D"
            />
            <span className="opacity-20 -mx-px">/</span>
            <input
                type="text"
                ref={yearRef}
                max={9999}
                maxLength={4}
                value={date.year.toString()}
                onChange={handleInputChange('year')}
                onKeyDown={handleKeyDown('year')}
                onFocus={(e) => {
                    if (window.innerWidth > 1024) {
                        e.target.select()
                    }
                }}
                onBlur={handleBlur('year')}
                className="p-0 outline-none w-12 border-none text-center"
                placeholder="YYYY"
            />
        </div>
    )
}

/** The DateRangePicker component allows a user to select a range of dates */
export const DateRangePicker: FC<DateRangePickerProps> & {
    filePath: string
} = ({
    initialDateFrom = new Date(new Date().setHours(0, 0, 0, 0)),
    initialDateTo,
    initialCompareFrom,
    initialCompareTo,
    onUpdate,
    align = 'end',
    locale = 'en-US',
    showCompare = true
}): JSX.Element => {
        const [isOpen, setIsOpen] = useState(false)

        const [range, setRange] = useState<DateRange>({
            from: getDateAdjustedForTimezone(initialDateFrom),
            to: initialDateTo
                ? getDateAdjustedForTimezone(initialDateTo)
                : getDateAdjustedForTimezone(initialDateFrom)
        })
        const [rangeCompare, setRangeCompare] = useState<DateRange | undefined>(
            initialCompareFrom
                ? {
                    from: new Date(new Date(initialCompareFrom).setHours(0, 0, 0, 0)),
                    to: initialCompareTo
                        ? new Date(new Date(initialCompareTo).setHours(0, 0, 0, 0))
                        : new Date(new Date(initialCompareFrom).setHours(0, 0, 0, 0))
                }
                : undefined
        )

        // Refs to store the values of range and rangeCompare when the date picker is opened
        const openedRangeRef = useRef<DateRange | undefined>(undefined)
        const openedRangeCompareRef = useRef<DateRange | undefined>(undefined)

        const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined)

        const [isSmallScreen, setIsSmallScreen] = useState(
            typeof window !== 'undefined' ? window.innerWidth < 960 : false
        )

        useEffect(() => {
            const handleResize = (): void => {
                setIsSmallScreen(window.innerWidth < 960)
            }

            window.addEventListener('resize', handleResize)

            // Clean up event listener on unmount
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }, [])

        const getPresetRange = (presetName: string): DateRange => {
            const preset = PRESETS.find(({ name }) => name === presetName)
            if (!preset) throw new Error(`Unknown date range preset: ${presetName}`)
            const from = new Date()
            const to = new Date()
            const first = from.getDate() - from.getDay()

            switch (preset.name) {
                case 'today':
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'yesterday':
                    from.setDate(from.getDate() - 1)
                    from.setHours(0, 0, 0, 0)
                    to.setDate(to.getDate() - 1)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'last7':
                    from.setDate(from.getDate() - 6)
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'last14':
                    from.setDate(from.getDate() - 13)
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'last30':
                    from.setDate(from.getDate() - 29)
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'thisWeek':
                    from.setDate(first)
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'lastWeek':
                    from.setDate(from.getDate() - 7 - from.getDay())
                    to.setDate(to.getDate() - to.getDay() - 1)
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'thisMonth':
                    from.setDate(1)
                    from.setHours(0, 0, 0, 0)
                    to.setHours(23, 59, 59, 999)
                    break
                case 'lastMonth':
                    from.setMonth(from.getMonth() - 1)
                    from.setDate(1)
                    from.setHours(0, 0, 0, 0)
                    to.setDate(0)
                    to.setHours(23, 59, 59, 999)
                    break
            }

            return { from, to }
        }

        const setPreset = (preset: string): void => {
            const range = getPresetRange(preset)
            setRange(range)
            if (rangeCompare) {
                const rangeCompare = {
                    from: new Date(
                        range.from.getFullYear() - 1,
                        range.from.getMonth(),
                        range.from.getDate()
                    ),
                    to: range.to
                        ? new Date(
                            range.to.getFullYear() - 1,
                            range.to.getMonth(),
                            range.to.getDate()
                        )
                        : undefined
                }
                setRangeCompare(rangeCompare)
            }
        }

        const checkPreset = (): void => {
            for (const preset of PRESETS) {
                const presetRange = getPresetRange(preset.name)

                const normalizedRangeFrom = new Date(range.from);
                normalizedRangeFrom.setHours(0, 0, 0, 0);
                const normalizedPresetFrom = new Date(
                    presetRange.from.setHours(0, 0, 0, 0)
                )

                const normalizedRangeTo = new Date(range.to ?? 0);
                normalizedRangeTo.setHours(0, 0, 0, 0);
                const normalizedPresetTo = new Date(
                    presetRange.to?.setHours(0, 0, 0, 0) ?? 0
                )

                if (
                    normalizedRangeFrom.getTime() === normalizedPresetFrom.getTime() &&
                    normalizedRangeTo.getTime() === normalizedPresetTo.getTime()
                ) {
                    setSelectedPreset(preset.name)
                    return
                }
            }

            setSelectedPreset(undefined)
        }

        const resetValues = (): void => {
            setRange({
                from:
                    typeof initialDateFrom === 'string'
                        ? getDateAdjustedForTimezone(initialDateFrom)
                        : initialDateFrom,
                to: initialDateTo
                    ? typeof initialDateTo === 'string'
                        ? getDateAdjustedForTimezone(initialDateTo)
                        : initialDateTo
                    : typeof initialDateFrom === 'string'
                        ? getDateAdjustedForTimezone(initialDateFrom)
                        : initialDateFrom
            })
            setRangeCompare(
                initialCompareFrom
                    ? {
                        from:
                            typeof initialCompareFrom === 'string'
                                ? getDateAdjustedForTimezone(initialCompareFrom)
                                : initialCompareFrom,
                        to: initialCompareTo
                            ? typeof initialCompareTo === 'string'
                                ? getDateAdjustedForTimezone(initialCompareTo)
                                : initialCompareTo
                            : typeof initialCompareFrom === 'string'
                                ? getDateAdjustedForTimezone(initialCompareFrom)
                                : initialCompareFrom
                    }
                    : undefined
            )
        }

        useEffect(() => {
            checkPreset()
        }, [range])

        const PresetButton = ({
            preset,
            label,
            isSelected
        }: {
            preset: string
            label: string
            isSelected: boolean
        }): JSX.Element => (
            <Button
                className={cn(isSelected && 'pointer-events-none')}
                variant="ghost"
                onClick={() => {
                    setPreset(preset)
                }}
            >
                <>
                    <span className={cn('pr-2 opacity-0', isSelected && 'opacity-70')}>
                        <CheckIcon width={18} height={18} />
                    </span>
                    {label}
                </>
            </Button>
        )

        // Helper function to check if two date ranges are equal
        const areRangesEqual = (a?: DateRange, b?: DateRange): boolean => {
            if (!a || !b) return a === b // If either is undefined, return true if both are undefined
            return (
                a.from.getTime() === b.from.getTime() &&
                (!a.to || !b.to || a.to.getTime() === b.to.getTime())
            )
        }

        useEffect(() => {
            if (isOpen) {
                openedRangeRef.current = range
                openedRangeCompareRef.current = rangeCompare
            }
        }, [isOpen])

        const triggerContent = (
            <Button size={'lg'} variant="outline">
                <div className="text-right">
                    <div className="py-1">
                        <div>{`${formatDate(range.from, locale)}${range.to != null ? ' - ' + formatDate(range.to, locale) : ''
                            }`}</div>
                    </div>
                    {rangeCompare != null && (
                        <div className="opacity-60 text-xs -mt-1">
                            <>
                                vs. {formatDate(rangeCompare.from, locale)}
                                {rangeCompare.to != null
                                    ? ` - ${formatDate(rangeCompare.to, locale)}`
                                    : ''}
                            </>
                        </div>
                    )}
                </div>
                <div className="pl-1 opacity-60 -mr-2 scale-125">
                    {isOpen ? (<ChevronUpIcon width={24} />) : (<ChevronDownIcon width={24} />)}
                </div>
            </Button>
        )

        const popoverContent = (
            <>
                <div className="flex flex-row py-2">
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:flex-row gap-2 px-3 justify-end items-center lg:items-start pb-4 lg:pb-0">
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex gap-2">
                                        <DateInput
                                            className="w-full justify-center"
                                            value={range.from}
                                            onChange={(date) => {
                                                const toDate =
                                                    range.to == null || date > range.to ? date : range.to
                                                setRange((prevRange) => ({
                                                    ...prevRange,
                                                    from: date,
                                                    to: toDate
                                                }))
                                            }}
                                        />
                                        <div className="py-1">-</div>
                                        <DateInput
                                            className="w-full justify-center"
                                            value={range.to}
                                            onChange={(date) => {
                                                const fromDate = date < range.from ? date : range.from
                                                setRange((prevRange) => ({
                                                    ...prevRange,
                                                    from: fromDate,
                                                    to: date
                                                }))
                                            }}
                                        />
                                    </div>
                                    {rangeCompare != null && (
                                        <div className="flex gap-2 w-full">
                                            <p>vs.</p>
                                            <DateInput
                                                className="w-full justify-center"
                                                value={rangeCompare?.from}
                                                onChange={(date) => {
                                                    if (rangeCompare) {
                                                        const compareToDate =
                                                            rangeCompare.to == null || date > rangeCompare.to
                                                                ? date
                                                                : rangeCompare.to
                                                        setRangeCompare((prevRangeCompare) => ({
                                                            ...prevRangeCompare,
                                                            from: date,
                                                            to: compareToDate
                                                        }))
                                                    } else {
                                                        setRangeCompare({
                                                            from: date,
                                                            to: new Date()
                                                        })
                                                    }
                                                }}
                                            />
                                            <div className="py-1">-</div>
                                            <DateInput
                                                className="w-full justify-center"
                                                value={rangeCompare?.to}
                                                onChange={(date) => {
                                                    if (rangeCompare && rangeCompare.from) {
                                                        const compareFromDate =
                                                            date < rangeCompare.from
                                                                ? date
                                                                : rangeCompare.from
                                                        setRangeCompare({
                                                            ...rangeCompare,
                                                            from: compareFromDate,
                                                            to: date
                                                        })
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <Calendar
                                    mode="range"
                                    onSelect={(value: { from?: Date, to?: Date } | undefined) => {
                                        if (value?.from != null) {
                                            setRange({ from: value.from, to: value?.to })
                                        }
                                    }}
                                    selected={range}
                                    numberOfMonths={isSmallScreen ? 1 : 2}
                                    defaultMonth={
                                        new Date(
                                            new Date().setMonth(
                                                new Date().getMonth() - (isSmallScreen ? 0 : 1)
                                            )
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[200px] overflow-x-auto ">
                        <div className="flex flex-col gap-1 items-end">
                            {PRESETS.map((preset) => (
                                <PresetButton
                                    key={preset.name}
                                    preset={preset.name}
                                    label={preset.label}
                                    isSelected={selectedPreset === preset.name}
                                />
                            ))}

                        </div>
                    </div>
                </div>
                {isSmallScreen ? (
                    <SheetFooter>

                        <div className="flex grow gap-2 w-full">
                            {showCompare && (
                                <div className="flex items-center space-x-2 pr-4 py-1">
                                    <Switch
                                        defaultChecked={Boolean(rangeCompare)}
                                        onCheckedChange={(checked: boolean) => {
                                            if (checked) {
                                                if (!range.to) {
                                                    setRange({
                                                        from: range.from,
                                                        to: range.from
                                                    })
                                                }
                                                setRangeCompare({
                                                    from: new Date(
                                                        range.from.getFullYear(),
                                                        range.from.getMonth(),
                                                        range.from.getDate() - 365
                                                    ),
                                                    to: range.to
                                                        ? new Date(
                                                            range.to.getFullYear() - 1,
                                                            range.to.getMonth(),
                                                            range.to.getDate()
                                                        )
                                                        : new Date(
                                                            range.from.getFullYear() - 1,
                                                            range.from.getMonth(),
                                                            range.from.getDate()
                                                        )
                                                })
                                            } else {
                                                setRangeCompare(undefined)
                                            }
                                        }}
                                        id="compare-mode"
                                    />
                                    <Label htmlFor="compare-mode">Compare</Label>
                                </div>
                            )}
                        </div>
                        <SheetClose asChild>
                            <Button
                                onClick={() => {
                                    setIsOpen(false)
                                    resetValues()
                                }}
                                variant="ghost"
                            >
                                Cancel
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button
                                onClick={() => {
                                    setIsOpen(false)
                                    if (
                                        !areRangesEqual(range, openedRangeRef.current) ||
                                        !areRangesEqual(rangeCompare, openedRangeCompareRef.current)
                                    ) {
                                        onUpdate?.({ range, rangeCompare })
                                    }
                                }}
                            >
                                Update
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                ) : (
                    <div className="flex justify-end gap-2 py-2 pr-4">
                        <div className="flex grow gap-2 w-full">
                            {showCompare && (
                                <div className="flex items-center space-x-2 pr-4 py-1">
                                    <Switch
                                        defaultChecked={Boolean(rangeCompare)}
                                        onCheckedChange={(checked: boolean) => {
                                            if (checked) {
                                                if (!range.to) {
                                                    setRange({
                                                        from: range.from,
                                                        to: range.from
                                                    })
                                                }
                                                setRangeCompare({
                                                    from: new Date(
                                                        range.from.getFullYear(),
                                                        range.from.getMonth(),
                                                        range.from.getDate() - 365
                                                    ),
                                                    to: range.to
                                                        ? new Date(
                                                            range.to.getFullYear() - 1,
                                                            range.to.getMonth(),
                                                            range.to.getDate()
                                                        )
                                                        : new Date(
                                                            range.from.getFullYear() - 1,
                                                            range.from.getMonth(),
                                                            range.from.getDate()
                                                        )
                                                })
                                            } else {
                                                setRangeCompare(undefined)
                                            }
                                        }}
                                        id="compare-mode"
                                    />
                                    <Label htmlFor="compare-mode">Compare</Label>
                                </div>
                            )}
                        </div>
                        <Button
                            onClick={() => {
                                setIsOpen(false)
                                resetValues()
                            }}
                            variant="ghost"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                setIsOpen(false)
                                if (
                                    !areRangesEqual(range, openedRangeRef.current) ||
                                    !areRangesEqual(rangeCompare, openedRangeCompareRef.current)
                                ) {
                                    onUpdate?.({ range, rangeCompare })
                                }
                            }}
                        >
                            Update
                        </Button>
                    </div>
                )}
            </>
        )

        if (isSmallScreen) {
            return (
                <Sheet>
                    <SheetTrigger asChild>
                        {triggerContent}
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        {popoverContent}
                    </SheetContent>
                </Sheet>
            )
        } else {

            return (

                <Popover
                    modal={true}
                    open={isOpen}
                    onOpenChange={(open: boolean) => {
                        if (!open) {
                            resetValues()
                        }
                        setIsOpen(open)
                    }}
                >
                    <PopoverTrigger asChild>
                        {triggerContent}
                    </PopoverTrigger>
                    <PopoverContent align={align} className="w-auto max-w-[98dvw] md:max-w-none">
                        {popoverContent}
                    </PopoverContent>
                </Popover>
            )
        }
    }

DateRangePicker.displayName = 'DateRangePicker'
DateRangePicker.filePath =
    'libs/shared/ui-kit/src/lib/date-range-picker/date-range-picker.tsx'