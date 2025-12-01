// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from '@/components/ui/popover'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Popover', () => {
  it('opens popover on trigger click', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )

    expect(screen.queryByText('Popover content')).not.toBeInTheDocument()

    await user.click(screen.getByText('Open Popover'))

    expect(screen.getByText('Popover content')).toBeVisible()
  })

  it('closes popover on trigger click when open', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )

    await user.click(screen.getByText('Open Popover'))
    expect(screen.getByText('Popover content')).toBeVisible()

    await user.click(screen.getByText('Open Popover'))

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument()
    })
  })

  it('renders with controlled open state', async () => {
    render(
      <Popover open={true}>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Popover content')).toBeVisible()
  })

  it('applies custom className to content', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent className="custom-class">Popover content</PopoverContent>
      </Popover>
    )

    await user.click(screen.getByText('Open Popover'))

    expect(screen.getByText('Popover content')).toHaveClass('custom-class')
  })

  it('renders with anchor', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverAnchor>
          <span>Anchor element</span>
        </PopoverAnchor>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Anchor element')).toBeInTheDocument()
    
    await user.click(screen.getByText('Open Popover'))
    expect(screen.getByText('Popover content')).toBeVisible()
  })
})

