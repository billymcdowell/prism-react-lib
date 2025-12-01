// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { DateInput } from '@/components/ui/date-input'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('DateInput', () => {
  it('renders date inputs correctly', () => {
    const onChange = vi.fn()
    const date = new Date(2024, 0, 1) // Jan 1, 2024
    render(<DateInput value={date} onChange={onChange} />)

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(3) // Month, Day, Year
    
    expect(screen.getByPlaceholderText('M')).toHaveValue('1')
    expect(screen.getByPlaceholderText('D')).toHaveValue('1')
    expect(screen.getByPlaceholderText('YYYY')).toHaveValue('2024')
  })

  it('updates value on change', async () => {
    const onChange = vi.fn()
    const date = new Date(2024, 0, 1)
    const user = userEvent.setup()
    render(<DateInput value={date} onChange={onChange} />)

    const dayInput = screen.getByPlaceholderText('D')
    
    await user.clear(dayInput)
    await user.type(dayInput, '15')

    expect(onChange).toHaveBeenCalled()
    // Check the last call
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0]
    expect(lastCall.getDate()).toBe(15)
  })
})

