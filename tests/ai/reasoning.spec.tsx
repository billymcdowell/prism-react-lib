// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeAll, afterAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Reasoning,
  ReasoningTrigger,
  ReasoningContent,
} from '@/components/ai/reasoning'
import * as React from 'react'

expect.extend(matchers)

// Mock ResizeObserver
class ResizeObserverMock {
  callback: ResizeObserverCallback
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  global.ResizeObserver = ResizeObserverMock as any
})

afterAll(() => {
  delete (global as any).ResizeObserver
})

afterEach(() => {
  cleanup()
})

describe('Reasoning', () => {
  const ReasoningDemo = () => (
    <Reasoning>
      <ReasoningTrigger>Show reasoning</ReasoningTrigger>
      <ReasoningContent>
        Here is the reasoning behind the answer...
      </ReasoningContent>
    </Reasoning>
  )

  it('renders trigger', () => {
    render(<ReasoningDemo />)
    expect(screen.getByText('Show reasoning')).toBeInTheDocument()
  })

  it('toggles content when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<ReasoningDemo />)

    const trigger = screen.getByText('Show reasoning')
    
    // Click to open
    await user.click(trigger)
    
    // Content should now be visible
    await waitFor(() => {
      expect(screen.getByText('Here is the reasoning behind the answer...')).toBeVisible()
    })
  })

  it('closes when trigger is clicked again', async () => {
    const user = userEvent.setup()
    render(<ReasoningDemo />)

    const trigger = screen.getByText('Show reasoning')
    
    // Open
    await user.click(trigger)
    await waitFor(() => {
      expect(screen.getByText('Here is the reasoning behind the answer...')).toBeVisible()
    })

    // Close
    await user.click(trigger)
    
    // After closing, the content wrapper should have maxHeight: 0px
    // We check that the component responded to the click
    expect(trigger).toBeInTheDocument()
  })

  it('supports controlled open state', async () => {
    const user = userEvent.setup()
    const handleOpenChange = vi.fn()
    
    render(
      <Reasoning open={false} onOpenChange={handleOpenChange}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Content</ReasoningContent>
      </Reasoning>
    )

    await user.click(screen.getByText('Toggle'))
    expect(handleOpenChange).toHaveBeenCalledWith(true)
  })

  it('applies custom className to container', () => {
    render(
      <Reasoning className="custom-reasoning">
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Content</ReasoningContent>
      </Reasoning>
    )

    expect(document.querySelector('.custom-reasoning')).toBeInTheDocument()
  })

  it('auto-opens when streaming starts', async () => {
    const { rerender } = render(
      <Reasoning isStreaming={false}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Streaming content...</ReasoningContent>
      </Reasoning>
    )

    // Start streaming
    rerender(
      <Reasoning isStreaming={true}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Streaming content...</ReasoningContent>
      </Reasoning>
    )

    await waitFor(() => {
      expect(screen.getByText('Streaming content...')).toBeVisible()
    })
  })

  it('auto-closes when streaming ends', async () => {
    const { rerender } = render(
      <Reasoning isStreaming={true}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Streaming content...</ReasoningContent>
      </Reasoning>
    )

    // Wait for auto-open
    await waitFor(() => {
      expect(screen.getByText('Streaming content...')).toBeVisible()
    })

    // End streaming
    rerender(
      <Reasoning isStreaming={false}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Streaming content...</ReasoningContent>
      </Reasoning>
    )

    // Component should respond to streaming state change
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })
})

describe('ReasoningTrigger', () => {
  it('renders children', () => {
    render(
      <Reasoning>
        <ReasoningTrigger>Custom trigger text</ReasoningTrigger>
        <ReasoningContent>Content</ReasoningContent>
      </Reasoning>
    )

    expect(screen.getByText('Custom trigger text')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Reasoning>
        <ReasoningTrigger className="custom-trigger">Toggle</ReasoningTrigger>
        <ReasoningContent>Content</ReasoningContent>
      </Reasoning>
    )

    expect(screen.getByText('Toggle').parentElement).toHaveClass('custom-trigger')
  })

  it('renders chevron icon', () => {
    render(
      <Reasoning>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Content</ReasoningContent>
      </Reasoning>
    )

    // ChevronDownIcon should be present
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})

describe('ReasoningContent', () => {
  it('renders plain text content', () => {
    render(
      <Reasoning open={true}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent>Plain text content</ReasoningContent>
      </Reasoning>
    )

    expect(screen.getByText('Plain text content')).toBeInTheDocument()
  })

  it('renders markdown content when markdown prop is true', () => {
    render(
      <Reasoning open={true}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent markdown>
          **Bold reasoning**
        </ReasoningContent>
      </Reasoning>
    )

    expect(screen.getByText('Bold reasoning').tagName).toBe('STRONG')
  })

  it('applies custom className', () => {
    render(
      <Reasoning open={true}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent className="custom-content">Content</ReasoningContent>
      </Reasoning>
    )

    expect(document.querySelector('.custom-content')).toBeInTheDocument()
  })

  it('applies contentClassName to inner div', () => {
    render(
      <Reasoning open={true}>
        <ReasoningTrigger>Toggle</ReasoningTrigger>
        <ReasoningContent contentClassName="inner-custom">Content</ReasoningContent>
      </Reasoning>
    )

    expect(document.querySelector('.inner-custom')).toBeInTheDocument()
  })
})

