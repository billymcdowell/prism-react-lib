// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { FeedbackBar } from '@/components/ai/feedback-bar'
import { Star } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('FeedbackBar', () => {
  it('renders with title', () => {
    render(<FeedbackBar title="Was this helpful?" />)
    expect(screen.getByText('Was this helpful?')).toBeInTheDocument()
  })

  it('renders custom icon', () => {
    render(
      <FeedbackBar 
        title="Rate this" 
        icon={<Star data-testid="custom-icon" />} 
      />
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('renders helpful button', () => {
    render(<FeedbackBar title="Feedback" />)
    expect(screen.getByLabelText('Helpful')).toBeInTheDocument()
  })

  it('renders not helpful button', () => {
    render(<FeedbackBar title="Feedback" />)
    expect(screen.getByLabelText('Not helpful')).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(<FeedbackBar title="Feedback" />)
    expect(screen.getByLabelText('Close')).toBeInTheDocument()
  })

  it('calls onHelpful when helpful button is clicked', () => {
    const handleHelpful = vi.fn()
    render(<FeedbackBar title="Feedback" onHelpful={handleHelpful} />)
    
    fireEvent.click(screen.getByLabelText('Helpful'))
    expect(handleHelpful).toHaveBeenCalledTimes(1)
  })

  it('calls onNotHelpful when not helpful button is clicked', () => {
    const handleNotHelpful = vi.fn()
    render(<FeedbackBar title="Feedback" onNotHelpful={handleNotHelpful} />)
    
    fireEvent.click(screen.getByLabelText('Not helpful'))
    expect(handleNotHelpful).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(<FeedbackBar title="Feedback" onClose={handleClose} />)
    
    fireEvent.click(screen.getByLabelText('Close'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(
      <FeedbackBar 
        title="Feedback" 
        className="custom-feedback" 
      />
    )
    
    expect(document.querySelector('.custom-feedback')).toBeInTheDocument()
  })

  it('renders without title', () => {
    render(<FeedbackBar />)
    expect(screen.getByLabelText('Helpful')).toBeInTheDocument()
  })

  it('renders without callbacks', () => {
    render(<FeedbackBar title="Feedback" />)
    
    // Should not throw when buttons are clicked without handlers
    fireEvent.click(screen.getByLabelText('Helpful'))
    fireEvent.click(screen.getByLabelText('Not helpful'))
    fireEvent.click(screen.getByLabelText('Close'))
  })
})

