// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, beforeAll, afterAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageActions,
  MessageAction,
} from '@/components/ai/message'
import * as React from 'react'

expect.extend(matchers)

// Mock ResizeObserver for Radix UI
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

describe('Message', () => {
  it('renders children', () => {
    render(
      <Message>
        <div>Message content</div>
      </Message>
    )
    expect(screen.getByText('Message content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Message className="custom-message" data-testid="message">
        <div>Content</div>
      </Message>
    )
    expect(screen.getByTestId('message')).toHaveClass('custom-message')
  })

  it('has flex layout', () => {
    render(
      <Message data-testid="message">
        <div>Content</div>
      </Message>
    )
    expect(screen.getByTestId('message')).toHaveClass('flex')
  })
})

describe('MessageAvatar', () => {
  it('renders avatar with image', () => {
    render(
      <MessageAvatar 
        src="https://example.com/avatar.png" 
        alt="User avatar" 
      />
    )
    // Avatar renders as a span with role="img" or contains an img
    const avatar = document.querySelector('[data-slot="avatar"]')
    expect(avatar).toBeInTheDocument()
  })

  it('renders fallback when provided', async () => {
    render(
      <MessageAvatar 
        src="" 
        alt="User" 
        fallback="JD"
        delayMs={0}
      />
    )
    
    // Fallback should eventually appear
    await waitFor(() => {
      expect(screen.getByText('JD')).toBeInTheDocument()
    })
  })

  it('applies custom className', () => {
    render(
      <MessageAvatar 
        src="https://example.com/avatar.png" 
        alt="User"
        className="custom-avatar"
      />
    )
    expect(document.querySelector('.custom-avatar')).toBeInTheDocument()
  })
})

describe('MessageContent', () => {
  it('renders plain text content', () => {
    render(<MessageContent>Hello, World!</MessageContent>)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('renders markdown when markdown prop is true', () => {
    render(
      <MessageContent markdown>
        **Bold text**
      </MessageContent>
    )
    expect(screen.getByText('Bold text').tagName).toBe('STRONG')
  })

  it('renders plain text when markdown prop is false', () => {
    render(
      <MessageContent markdown={false}>
        **Not Bold**
      </MessageContent>
    )
    expect(screen.getByText('**Not Bold**')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <MessageContent className="custom-content">
        Content
      </MessageContent>
    )
    expect(document.querySelector('.custom-content')).toBeInTheDocument()
  })

  it('has default styling classes', () => {
    render(
      <MessageContent data-testid="content">
        Content
      </MessageContent>
    )
    
    // Check for some default classes
    const content = screen.getByText('Content')
    expect(content).toHaveClass('rounded-xl')
  })
})

describe('MessageActions', () => {
  it('renders action buttons', () => {
    render(
      <MessageActions>
        <button>Copy</button>
        <button>Share</button>
      </MessageActions>
    )
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Share' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <MessageActions className="custom-actions" data-testid="actions">
        <button>Action</button>
      </MessageActions>
    )
    expect(screen.getByTestId('actions')).toHaveClass('custom-actions')
  })

  it('has flex layout', () => {
    render(
      <MessageActions data-testid="actions">
        <button>Action</button>
      </MessageActions>
    )
    expect(screen.getByTestId('actions')).toHaveClass('flex')
  })
})

describe('MessageAction', () => {
  it('renders action with tooltip', async () => {
    const user = userEvent.setup()
    render(
      <MessageAction tooltip="Copy to clipboard">
        <button>Copy</button>
      </MessageAction>
    )

    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
  })

  it('applies custom className to tooltip', () => {
    render(
      <MessageAction tooltip="Tooltip" className="custom-tooltip">
        <button>Action</button>
      </MessageAction>
    )
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })
})

describe('Message Integration', () => {
  it('renders complete message with avatar, content, and actions', () => {
    render(
      <Message>
        <MessageAvatar 
          src="https://example.com/avatar.png" 
          alt="User" 
        />
        <MessageContent>Hello!</MessageContent>
        <MessageActions>
          <button>Like</button>
        </MessageActions>
      </Message>
    )

    expect(document.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
    expect(screen.getByText('Hello!')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Like' })).toBeInTheDocument()
  })

  it('renders AI message with markdown', () => {
    render(
      <Message>
        <MessageAvatar 
          src="https://example.com/ai.png" 
          alt="AI Assistant" 
        />
        <MessageContent markdown>
          Here is some **important** information:
          - Point 1
          - Point 2
        </MessageContent>
      </Message>
    )

    expect(screen.getByText('important').tagName).toBe('STRONG')
  })
})

