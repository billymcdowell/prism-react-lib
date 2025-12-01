// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { AutoComplete, type Option } from '@/components/ui/autocomplete'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

// Mock ScrollIntoView for cmdk
window.HTMLElement.prototype.scrollIntoView = vi.fn()

// Mock ResizeObserver for cmdk
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('AutoComplete', () => {
  const options: Option[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
  ]

  it('renders with placeholder', () => {
    render(
      <AutoComplete
        options={options}
        emptyMessage="No results."
        placeholder="Select a fruit"
      />
    )
    expect(screen.getByPlaceholderText('Select a fruit')).toBeInTheDocument()
  })

  it('filters options when typing', async () => {
    const user = userEvent.setup()
    render(
      <AutoComplete
        options={options}
        emptyMessage="No results."
        placeholder="Select a fruit"
      />
    )

    const input = screen.getByPlaceholderText('Select a fruit')
    await user.type(input, 'Blue')
    
    // Should show Blueberry
    expect(screen.getByText('Blueberry')).toBeInTheDocument()
    // Should not show Apple
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })

  it('selects an option', async () => {
    const onValueChange = vi.fn()
    const user = userEvent.setup()
    render(
      <AutoComplete
        options={options}
        emptyMessage="No results."
        placeholder="Select a fruit"
        onValueChange={onValueChange}
      />
    )

    const input = screen.getByPlaceholderText('Select a fruit')
    await user.click(input) // Open dropdown
    await user.type(input, 'Ban')
    await user.click(screen.getByText('Banana'))

    expect(onValueChange).toHaveBeenCalledWith(expect.objectContaining({ value: 'banana', label: 'Banana' }))
    expect(input).toHaveValue('Banana')
  })
})

