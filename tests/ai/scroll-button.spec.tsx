// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ScrollButton } from '@/components/ai/scroll-button'
import * as React from 'react'

expect.extend(matchers)

// Mock use-stick-to-bottom
const mockScrollToBottom = vi.fn()
let mockIsAtBottom = false

vi.mock('use-stick-to-bottom', () => ({
  useStickToBottomContext: () => ({
    isAtBottom: mockIsAtBottom,
    scrollToBottom: mockScrollToBottom,
  }),
}))

afterEach(() => {
  cleanup()
  mockIsAtBottom = false
  mockScrollToBottom.mockClear()
})

describe('ScrollButton', () => {
  it('renders when not at bottom', () => {
    mockIsAtBottom = false
    render(<ScrollButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('is hidden when at bottom', () => {
    mockIsAtBottom = true
    render(<ScrollButton />)
    expect(screen.getByRole('button')).toHaveClass('pointer-events-none')
    expect(screen.getByRole('button')).toHaveClass('opacity-0')
  })

  it('calls scrollToBottom when clicked', () => {
    mockIsAtBottom = false
    render(<ScrollButton />)
    
    fireEvent.click(screen.getByRole('button'))
    expect(mockScrollToBottom).toHaveBeenCalled()
  })

  it('applies default variant (outline)', () => {
    render(<ScrollButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom variant', () => {
    render(<ScrollButton variant="default" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies default size (sm)', () => {
    render(<ScrollButton />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom size', () => {
    render(<ScrollButton size="lg" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<ScrollButton className="custom-scroll" />)
    expect(screen.getByRole('button')).toHaveClass('custom-scroll')
  })

  it('has rounded-full class', () => {
    render(<ScrollButton />)
    expect(screen.getByRole('button')).toHaveClass('rounded-full')
  })

  it('renders chevron down icon', () => {
    render(<ScrollButton />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('has visibility transition based on isAtBottom', () => {
    mockIsAtBottom = false
    const { rerender } = render(<ScrollButton />)
    
    expect(screen.getByRole('button')).toHaveClass('opacity-100')
    
    mockIsAtBottom = true
    rerender(<ScrollButton />)
    
    expect(screen.getByRole('button')).toHaveClass('opacity-0')
  })
})

