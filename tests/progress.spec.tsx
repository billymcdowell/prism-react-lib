// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Progress } from '@/components/ui/progress'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Progress', () => {
  it('renders progress bar', () => {
    render(<Progress value={50} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('displays correct value via indicator transform', () => {
    render(<Progress value={75} />)
    const progressbar = screen.getByRole('progressbar')
    const indicator = progressbar.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: 'translateX(-25%)' })
  })

  it('handles zero value', () => {
    render(<Progress value={0} />)
    const progressbar = screen.getByRole('progressbar')
    const indicator = progressbar.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: 'translateX(-100%)' })
  })

  it('handles 100% value', () => {
    render(<Progress value={100} />)
    const progressbar = screen.getByRole('progressbar')
    const indicator = progressbar.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('handles undefined value', () => {
    render(<Progress />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Progress value={50} className="custom-progress" />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveClass('custom-progress')
  })

  it('has correct data-slot attribute', () => {
    render(<Progress value={50} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('data-slot', 'progress')
  })
})

