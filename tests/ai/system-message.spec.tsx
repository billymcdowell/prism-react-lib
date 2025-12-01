// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { SystemMessage } from '@/components/ai/system-message'
import { Bell } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('SystemMessage', () => {
  it('renders children as message content', () => {
    render(<SystemMessage>This is a system message</SystemMessage>)
    expect(screen.getByText('This is a system message')).toBeInTheDocument()
  })

  it('renders action variant by default', () => {
    render(<SystemMessage>Action message</SystemMessage>)
    // Action variant should have info icon by default
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('renders error variant', () => {
    render(<SystemMessage variant="error">Error occurred</SystemMessage>)
    expect(screen.getByText('Error occurred')).toBeInTheDocument()
  })

  it('renders warning variant', () => {
    render(<SystemMessage variant="warning">Warning message</SystemMessage>)
    expect(screen.getByText('Warning message')).toBeInTheDocument()
  })

  it('renders with fill=true', () => {
    render(<SystemMessage fill>Filled message</SystemMessage>)
    expect(screen.getByText('Filled message')).toBeInTheDocument()
  })

  it('renders with fill=false', () => {
    render(<SystemMessage fill={false}>Outlined message</SystemMessage>)
    expect(screen.getByText('Outlined message')).toBeInTheDocument()
  })

  it('renders custom icon', () => {
    render(
      <SystemMessage icon={<Bell data-testid="custom-icon" />}>
        Custom icon message
      </SystemMessage>
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('hides icon when isIconHidden is true', () => {
    render(
      <SystemMessage isIconHidden>
        No icon message
      </SystemMessage>
    )
    expect(document.querySelector('svg')).not.toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(
      <SystemMessage cta={{ label: 'Click here' }}>
        Message with CTA
      </SystemMessage>
    )
    expect(screen.getByRole('button', { name: 'Click here' })).toBeInTheDocument()
  })

  it('handles CTA click', () => {
    const handleClick = vi.fn()
    render(
      <SystemMessage cta={{ label: 'Action', onClick: handleClick }}>
        Clickable CTA
      </SystemMessage>
    )
    
    fireEvent.click(screen.getByRole('button', { name: 'Action' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(
      <SystemMessage className="custom-message">
        Styled message
      </SystemMessage>
    )
    expect(document.querySelector('.custom-message')).toBeInTheDocument()
  })

  it('shows AlertCircle icon for error variant', () => {
    render(<SystemMessage variant="error">Error</SystemMessage>)
    // AlertCircle should be rendered
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('shows AlertTriangle icon for warning variant', () => {
    render(<SystemMessage variant="warning">Warning</SystemMessage>)
    // AlertTriangle should be rendered
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('shows Info icon for action variant', () => {
    render(<SystemMessage variant="action">Action</SystemMessage>)
    // Info icon should be rendered
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})

describe('SystemMessage variants with fill', () => {
  it('renders action variant with fill', () => {
    render(
      <SystemMessage variant="action" fill>
        Filled action
      </SystemMessage>
    )
    expect(document.querySelector('.bg-zinc-100')).toBeInTheDocument()
  })

  it('renders error variant with fill', () => {
    render(
      <SystemMessage variant="error" fill>
        Filled error
      </SystemMessage>
    )
    expect(document.querySelector('.bg-red-100')).toBeInTheDocument()
  })

  it('renders warning variant with fill', () => {
    render(
      <SystemMessage variant="warning" fill>
        Filled warning
      </SystemMessage>
    )
    expect(document.querySelector('.bg-amber-100')).toBeInTheDocument()
  })

  it('renders action variant without fill (border only)', () => {
    render(
      <SystemMessage variant="action" fill={false}>
        Bordered action
      </SystemMessage>
    )
    expect(document.querySelector('.border-zinc-200')).toBeInTheDocument()
  })

  it('renders error variant without fill (border only)', () => {
    render(
      <SystemMessage variant="error" fill={false}>
        Bordered error
      </SystemMessage>
    )
    expect(document.querySelector('.border-red-600')).toBeInTheDocument()
  })

  it('renders warning variant without fill (border only)', () => {
    render(
      <SystemMessage variant="warning" fill={false}>
        Bordered warning
      </SystemMessage>
    )
    expect(document.querySelector('.border-amber-600')).toBeInTheDocument()
  })
})

