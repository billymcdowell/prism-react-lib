// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Button } from '@/components/ui/button'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders as disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('applies variant classes', () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-destructive')
  })
})

