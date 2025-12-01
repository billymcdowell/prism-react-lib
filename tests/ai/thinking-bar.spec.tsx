// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ThinkingBar } from '@/components/ai/thinking-bar'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ThinkingBar', () => {
  it('renders with default text', () => {
    render(<ThinkingBar />)
    expect(screen.getByText('Thinking')).toBeInTheDocument()
  })

  it('renders with custom text', () => {
    render(<ThinkingBar text="Processing" />)
    expect(screen.getByText('Processing')).toBeInTheDocument()
  })

  it('renders stop button when onStop is provided', () => {
    render(<ThinkingBar onStop={() => {}} />)
    expect(screen.getByRole('button', { name: 'Answer now' })).toBeInTheDocument()
  })

  it('does not render stop button when onStop is not provided', () => {
    render(<ThinkingBar />)
    expect(screen.queryByRole('button', { name: 'Answer now' })).not.toBeInTheDocument()
  })

  it('renders custom stop label', () => {
    render(<ThinkingBar onStop={() => {}} stopLabel="Stop generating" />)
    expect(screen.getByRole('button', { name: 'Stop generating' })).toBeInTheDocument()
  })

  it('calls onStop when stop button is clicked', () => {
    const handleStop = vi.fn()
    render(<ThinkingBar onStop={handleStop} />)
    
    fireEvent.click(screen.getByRole('button', { name: 'Answer now' }))
    expect(handleStop).toHaveBeenCalledTimes(1)
  })

  it('renders as clickable when onClick is provided', () => {
    render(<ThinkingBar onClick={() => {}} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('does not render as button when onClick is not provided', () => {
    render(<ThinkingBar />)
    // Should be plain text, not a button (when onClick is not provided)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ThinkingBar onClick={handleClick} />)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<ThinkingBar className="custom-thinking" />)
    expect(document.querySelector('.custom-thinking')).toBeInTheDocument()
  })

  it('renders shimmer effect on text', () => {
    render(<ThinkingBar />)
    // TextShimmer component should apply shimmer animation
    const text = screen.getByText('Thinking')
    expect(text).toHaveClass('animate-[shimmer_4s_infinite_linear]')
  })

  it('shows chevron icon when onClick is provided', () => {
    render(<ThinkingBar onClick={() => {}} />)
    // ChevronRight icon should be present
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('does not show chevron when onClick is not provided', () => {
    render(<ThinkingBar />)
    // No chevron when not clickable
    expect(document.querySelector('svg')).not.toBeInTheDocument()
  })

  it('renders both onClick and onStop buttons', () => {
    render(<ThinkingBar onClick={() => {}} onStop={() => {}} />)
    
    // Should have clickable thinking text and stop button
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})

