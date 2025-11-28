import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker, DateRangePickerProps } from '@/components/ui/date-range-picker';
import { useState } from 'react';

const meta: Meta<typeof DateRangePicker> = {
    title: 'UI/DateRangePicker',
    component: DateRangePicker,
    tags: ['autodocs'],
    argTypes: {
        align: {
            control: 'select',
            options: ['start', 'center', 'end'],
            description: 'Alignment of the popover',
        },
        locale: {
            control: 'text',
            description: 'Locale for date formatting',
        },
        showCompare: {
            control: 'boolean',
            description: 'Enable/disable compare mode',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const DateRangePickerWrapper = (args: DateRangePickerProps) => {
    const [values, setValues] = useState({
        from: args.initialDateFrom,
        to: args.initialDateTo,
        compareFrom: args.initialCompareFrom,
        compareTo: args.initialCompareTo,
    });

    return (
        <div className="flex flex-col gap-8 items-start">
            <DateRangePicker
                {...args}
                initialDateFrom={values.from}
                initialDateTo={values.to}
                initialCompareFrom={values.compareFrom}
                initialCompareTo={values.compareTo}
                onUpdate={(newValues) => {
                    setValues({
                        from: newValues.range.from,
                        to: newValues.range.to,
                        compareFrom: newValues.rangeCompare?.from,
                        compareTo: newValues.rangeCompare?.to,
                    });
                    args.onUpdate?.(newValues);
                }}
            />
            <div className="text-sm text-muted-foreground bg-slate-100 p-4 rounded-md max-w-md">
                <p><strong>Selected Range:</strong></p>
                <p>From: {values.from instanceof Date ? values.from.toLocaleDateString() : values.from}</p>
                <p>To: {values.to instanceof Date ? values.to.toLocaleDateString() : values.to}</p>
                {args.showCompare && (
                    <>
                        <p className="mt-2"><strong>Compare Range:</strong></p>
                        <p>From: {values.compareFrom instanceof Date ? values.compareFrom.toLocaleDateString() : values.compareFrom || 'N/A'}</p>
                        <p>To: {values.compareTo instanceof Date ? values.compareTo.toLocaleDateString() : values.compareTo || 'N/A'}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        showCompare: true,
        align: 'center',
    }
};

export const WithInitialRange: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        initialDateFrom: new Date(new Date().setDate(new Date().getDate() - 7)), // Last 7 days
        initialDateTo: new Date(),
        showCompare: true,
        align: 'center',
    },
};

export const WithoutCompare: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        showCompare: false,
        align: 'center',
    },
};

export const WithComparePresets: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        showCompare: true,
        initialDateFrom: new Date(2023, 0, 1),
        initialDateTo: new Date(2023, 0, 31),
        initialCompareFrom: new Date(2022, 0, 1),
        initialCompareTo: new Date(2022, 0, 31),
        align: 'center',
    },
};

export const AlignStart: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        align: 'start',
        showCompare: true,
    }
}

export const LocaleGerman: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        locale: 'de-DE',
        align: 'center',
        showCompare: true,
    }
}

export const WithStringInitialValues: Story = {
    render: (args) => <DateRangePickerWrapper {...args} />,
    args: {
        initialDateFrom: '2024-01-01',
        initialDateTo: '2024-01-31',
        showCompare: true,
        align: 'center',
    }
}
