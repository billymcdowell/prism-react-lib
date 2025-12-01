// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Spinner } from '@/components/ui/spinner'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Spinner', () => {
  it('renders spinner', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Spinner />)
    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })

  it('applies spin animation class', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('animate-spin')
  })

  it('applies default size class', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('size-4')
  })

  it('applies custom className', () => {
    render(<Spinner className="size-8 text-blue-500" />)
    const spinner = screen.getByRole('status')
    expect(spinner).toHaveClass('size-8')
    expect(spinner).toHaveClass('text-blue-500')
  })

  it('renders as SVG element', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('status')
    expect(spinner.tagName.toLowerCase()).toBe('svg')
  })
})

