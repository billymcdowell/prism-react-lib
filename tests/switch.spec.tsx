// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Switch } from '@/components/ui/switch'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Switch', () => {
  it('renders switch', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<Switch />)
    
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveAttribute('data-state', 'unchecked')
    
    await user.click(switchEl)
    expect(switchEl).toHaveAttribute('data-state', 'checked')
    
    await user.click(switchEl)
    expect(switchEl).toHaveAttribute('data-state', 'unchecked')
  })

  it('respects defaultChecked prop', () => {
    render(<Switch defaultChecked />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveAttribute('data-state', 'checked')
  })

  it('respects checked prop (controlled)', () => {
    render(<Switch checked={true} />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveAttribute('data-state', 'checked')
  })

  it('calls onCheckedChange callback', async () => {
    const user = userEvent.setup()
    const handleCheckedChange = vi.fn()
    
    render(<Switch onCheckedChange={handleCheckedChange} />)
    
    await user.click(screen.getByRole('switch'))
    expect(handleCheckedChange).toHaveBeenCalledWith(true)
    
    await user.click(screen.getByRole('switch'))
    expect(handleCheckedChange).toHaveBeenCalledWith(false)
  })

  it('supports disabled state', () => {
    render(<Switch disabled />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toBeDisabled()
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const handleCheckedChange = vi.fn()
    
    render(<Switch disabled onCheckedChange={handleCheckedChange} />)
    
    await user.click(screen.getByRole('switch'))
    expect(handleCheckedChange).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<Switch className="custom-switch" />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveClass('custom-switch')
  })

  it('has correct data-slot attribute', () => {
    render(<Switch />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveAttribute('data-slot', 'switch')
  })

  it('renders thumb element', () => {
    render(<Switch />)
    const thumb = document.querySelector('[data-slot="switch-thumb"]')
    expect(thumb).toBeInTheDocument()
  })
})

