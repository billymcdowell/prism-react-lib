// @vitest-environment jsdom
import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Toaster } from '@/components/ui/sonner'
import * as React from 'react'

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light' }),
}))

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Toaster (Sonner)', () => {
  it('renders toaster component', () => {
    const { container } = render(<Toaster />)
    
    // Sonner renders a section with toaster role
    const toaster = container.querySelector('section') || container.querySelector('ol')
    expect(toaster).toBeInTheDocument()
  })

  it('renders toaster with class', () => {
    const { container } = render(<Toaster className="custom-toaster" />)
    
    // Container should exist
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with position prop', () => {
    const { container } = render(<Toaster position="top-center" />)
    
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with expand prop', () => {
    const { container } = render(<Toaster expand />)
    
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with richColors prop', () => {
    const { container } = render(<Toaster richColors />)
    
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders with closeButton prop', () => {
    const { container } = render(<Toaster closeButton />)
    
    expect(container.firstChild).toBeInTheDocument()
  })
})

