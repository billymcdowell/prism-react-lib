// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, beforeAll, afterAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Source, SourceTrigger, SourceContent } from '@/components/ai/source'
import * as React from 'react'

expect.extend(matchers)

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  global.ResizeObserver = ResizeObserverMock as any
  ;(window as any).DOMRect = class DOMRect {
    static fromRect() {
      return { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0, toJSON: () => {} }
    }
  }
})

afterAll(() => {
  delete (global as any).ResizeObserver
  delete (window as any).DOMRect
})

afterEach(() => {
  cleanup()
})

describe('Source', () => {
  it('renders trigger with domain', () => {
    render(
      <Source href="https://example.com/article">
        <SourceTrigger />
      </Source>
    )
    
    expect(screen.getByText('example.com')).toBeInTheDocument()
  })

  it('renders trigger with custom label', () => {
    render(
      <Source href="https://example.com/article">
        <SourceTrigger label="[1]" />
      </Source>
    )
    
    expect(screen.getByText('[1]')).toBeInTheDocument()
  })

  it('renders trigger with numeric label', () => {
    render(
      <Source href="https://example.com">
        <SourceTrigger label={1} />
      </Source>
    )
    
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders as a link', () => {
    render(
      <Source href="https://example.com/article">
        <SourceTrigger />
      </Source>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com/article')
  })

  it('opens in new tab', () => {
    render(
      <Source href="https://example.com">
        <SourceTrigger />
      </Source>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows favicon when showFavicon is true', () => {
    render(
      <Source href="https://example.com">
        <SourceTrigger showFavicon />
      </Source>
    )
    
    const favicon = screen.getByRole('img', { name: 'favicon' })
    expect(favicon).toBeInTheDocument()
  })

  it('hides favicon by default', () => {
    render(
      <Source href="https://example.com">
        <SourceTrigger />
      </Source>
    )
    
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('applies custom className to trigger', () => {
    render(
      <Source href="https://example.com">
        <SourceTrigger className="custom-trigger" />
      </Source>
    )
    
    expect(screen.getByRole('link')).toHaveClass('custom-trigger')
  })

  it('strips www from domain', () => {
    render(
      <Source href="https://www.example.com">
        <SourceTrigger />
      </Source>
    )
    
    expect(screen.getByText('example.com')).toBeInTheDocument()
  })

  it('handles invalid URLs gracefully', () => {
    render(
      <Source href="not-a-valid-url">
        <SourceTrigger />
      </Source>
    )
    
    // Should fall back to showing the href or a portion of it
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})

describe('SourceContent', () => {
  it('renders title and description', async () => {
    const user = userEvent.setup()
    render(
      <Source href="https://example.com/article">
        <SourceTrigger />
        <SourceContent 
          title="Article Title" 
          description="Article description text" 
        />
      </Source>
    )

    await user.hover(screen.getByRole('link'))
    
    await waitFor(() => {
      expect(screen.getByText('Article Title')).toBeInTheDocument()
      expect(screen.getByText('Article description text')).toBeInTheDocument()
    })
  })

  it('applies custom className', async () => {
    const user = userEvent.setup()
    render(
      <Source href="https://example.com">
        <SourceTrigger />
        <SourceContent 
          title="Title" 
          description="Desc"
          className="custom-content"
        />
      </Source>
    )

    await user.hover(screen.getByRole('link'))
    
    await waitFor(() => {
      expect(document.querySelector('.custom-content')).toBeInTheDocument()
    })
  })

  it('shows domain in content', async () => {
    const user = userEvent.setup()
    render(
      <Source href="https://docs.example.com/page">
        <SourceTrigger />
        <SourceContent 
          title="Documentation" 
          description="API docs" 
        />
      </Source>
    )

    await user.hover(screen.getByRole('link'))
    
    await waitFor(() => {
      expect(screen.getByText('docs.example.com')).toBeInTheDocument()
    })
  })
})

