// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Toggle } from '@/components/ui/toggle'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Toggle', () => {
  it('renders toggle button', () => {
    render(<Toggle>Toggle</Toggle>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  it('toggles state on click', async () => {
    const user = userEvent.setup()
    render(<Toggle>Toggle</Toggle>)
    
    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('data-state', 'off')
    
    await user.click(toggle)
    expect(toggle).toHaveAttribute('data-state', 'on')
    
    await user.click(toggle)
    expect(toggle).toHaveAttribute('data-state', 'off')
  })

  it('respects defaultPressed prop', () => {
    render(<Toggle defaultPressed>Toggle</Toggle>)
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'on')
  })

  it('respects pressed prop (controlled)', () => {
    render(<Toggle pressed={true}>Toggle</Toggle>)
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'on')
  })

  it('calls onPressedChange callback', async () => {
    const user = userEvent.setup()
    const handlePressedChange = vi.fn()
    
    render(<Toggle onPressedChange={handlePressedChange}>Toggle</Toggle>)
    
    await user.click(screen.getByRole('button'))
    expect(handlePressedChange).toHaveBeenCalledWith(true)
    
    await user.click(screen.getByRole('button'))
    expect(handlePressedChange).toHaveBeenCalledWith(false)
  })

  it('supports disabled state', () => {
    render(<Toggle disabled>Toggle</Toggle>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const handlePressedChange = vi.fn()
    
    render(<Toggle disabled onPressedChange={handlePressedChange}>Toggle</Toggle>)
    
    await user.click(screen.getByRole('button'))
    expect(handlePressedChange).not.toHaveBeenCalled()
  })

  it('applies variant styles', () => {
    render(<Toggle variant="outline">Toggle</Toggle>)
    const toggle = screen.getByRole('button')
    expect(toggle).toHaveClass('border')
  })

  it('applies size styles', () => {
    const { rerender } = render(<Toggle size="sm">Toggle</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('h-8')
    
    rerender(<Toggle size="lg">Toggle</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('h-10')
  })

  it('applies custom className', () => {
    render(<Toggle className="custom-toggle">Toggle</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('custom-toggle')
  })

  it('has correct data-slot attribute', () => {
    render(<Toggle>Toggle</Toggle>)
    expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'toggle')
  })

  it('renders with aria-pressed attribute', async () => {
    const user = userEvent.setup()
    render(<Toggle>Toggle</Toggle>)
    
    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })
})

