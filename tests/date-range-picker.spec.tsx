// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import * as React from 'react'

expect.extend(matchers)

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})

afterEach(() => {
  cleanup()
})

describe('DateRangePicker', () => {
  it('renders trigger with initial date', () => {
    const initialDateFrom = new Date(2024, 0, 1)
    const initialDateTo = new Date(2024, 0, 5)
    
    render(
      <DateRangePicker
        initialDateFrom={initialDateFrom}
        initialDateTo={initialDateTo}
        showCompare={false}
      />
    )

    // Format: "Jan 1, 2024 - Jan 5, 2024" (depends on locale)
    expect(screen.getByRole('button')).toHaveTextContent('Jan 1, 2024 - Jan 5, 2024')
  })

  it('opens calendar popover on click', async () => {
    const user = userEvent.setup()
    render(<DateRangePicker />)

    const trigger = screen.getByRole('button')
    await user.click(trigger)

    // Should show calendar controls
    expect(screen.getByText('Today')).toBeVisible() // Preset button
    // Date range picker shows 2 months, so multiple grids
    const grids = screen.getAllByRole('grid')
    expect(grids.length).toBeGreaterThanOrEqual(1)
    expect(grids[0]).toBeVisible()
  })
})

