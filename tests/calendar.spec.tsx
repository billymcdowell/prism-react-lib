// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Calendar } from '@/components/ui/calendar'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Calendar', () => {
  it('renders calendar', () => {
    render(<Calendar mode="single" />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('displays current month', () => {
    const date = new Date(2024, 0, 1) // Jan 2024
    render(<Calendar mode="single" defaultMonth={date} />)
    expect(screen.getByText('January 2024')).toBeInTheDocument()
  })
})

