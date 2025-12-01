// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { JSXPreview } from '@/components/ai/jsx-preview'
import * as React from 'react'

expect.extend(matchers)

// Mock react-jsx-parser
vi.mock('react-jsx-parser', () => ({
  default: ({ jsx }: { jsx: string }) => {
    // Simple mock that renders the JSX string as text
    return <div data-testid="jsx-parser">{jsx}</div>
  },
}))

afterEach(() => {
  cleanup()
})

describe('JSXPreview', () => {
  it('renders JSX content', () => {
    render(<JSXPreview jsx="<div>Hello World</div>" />)
    expect(screen.getByTestId('jsx-parser')).toBeInTheDocument()
  })

  it('renders the JSX string', () => {
    render(<JSXPreview jsx="<span>Test Content</span>" />)
    expect(screen.getByText('<span>Test Content</span>')).toBeInTheDocument()
  })

  it('handles empty JSX', () => {
    render(<JSXPreview jsx="" />)
    expect(screen.getByTestId('jsx-parser')).toBeInTheDocument()
  })

  it('handles streaming mode prop', () => {
    render(<JSXPreview jsx="<div>Streaming</div>" isStreaming={true} />)
    expect(screen.getByTestId('jsx-parser')).toBeInTheDocument()
  })

  it('handles non-streaming mode', () => {
    render(<JSXPreview jsx="<div>Complete</div>" isStreaming={false} />)
    expect(screen.getByText('<div>Complete</div>')).toBeInTheDocument()
  })

  it('renders with isStreaming true', () => {
    render(
      <JSXPreview 
        jsx="<div><span>Nested</span></div>" 
        isStreaming={true} 
      />
    )
    expect(screen.getByTestId('jsx-parser')).toBeInTheDocument()
  })

  it('renders self-closing tags', () => {
    render(
      <JSXPreview 
        jsx="<div><br /><span>Content</span></div>" 
        isStreaming={false} 
      />
    )
    expect(screen.getByTestId('jsx-parser')).toBeInTheDocument()
  })

  it('preserves properly closed tags', () => {
    render(
      <JSXPreview 
        jsx="<div>Already closed</div>" 
        isStreaming={true} 
      />
    )
    expect(screen.getByText('<div>Already closed</div>')).toBeInTheDocument()
  })

  it('defaults isStreaming to false', () => {
    render(<JSXPreview jsx="<div>Default</div>" />)
    expect(screen.getByText('<div>Default</div>')).toBeInTheDocument()
  })
})

