// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import * as React from 'react'

expect.extend(matchers)

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

afterEach(() => {
  cleanup()
})

describe('Command', () => {
  it('renders command input', () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
    expect(screen.getByPlaceholderText('Type a command...')).toBeInTheDocument()
  })

  it('filters items', async () => {
    const user = userEvent.setup()
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    const input = screen.getByPlaceholderText('Type a command...')
    await user.type(input, 'Cal')
    
    expect(screen.getByText('Calendar')).toBeVisible()
    expect(screen.getByText('Calculator')).toBeVisible()
    expect(screen.queryByText('Search Emoji')).toBeNull() // Or not visible depending on cmdk impl
  })
})

