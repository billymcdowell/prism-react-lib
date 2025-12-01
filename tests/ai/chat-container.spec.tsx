// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  ChatContainerRoot,
  ChatContainerContent,
  ChatContainerScrollAnchor,
} from '@/components/ai/chat-container'
import * as React from 'react'

expect.extend(matchers)

// Mock use-stick-to-bottom
vi.mock('use-stick-to-bottom', () => ({
  StickToBottom: ({ children, className, role, ...props }: any) => (
    <div className={className} role={role} data-testid="stick-to-bottom" {...props}>
      {children}
    </div>
  ),
  'StickToBottom.Content': ({ children, className, ...props }: any) => (
    <div className={className} data-testid="stick-to-bottom-content" {...props}>
      {children}
    </div>
  ),
}))

// Add the Content component to StickToBottom
const MockStickToBottom = vi.mocked(await import('use-stick-to-bottom')).StickToBottom as any
MockStickToBottom.Content = ({ children, className, ...props }: any) => (
  <div className={className} data-testid="stick-to-bottom-content" {...props}>
    {children}
  </div>
)

afterEach(() => {
  cleanup()
})

describe('ChatContainer', () => {
  it('renders ChatContainerRoot with children', () => {
    render(
      <ChatContainerRoot>
        <div>Chat messages</div>
      </ChatContainerRoot>
    )

    expect(screen.getByText('Chat messages')).toBeInTheDocument()
  })

  it('ChatContainerRoot has log role for accessibility', () => {
    render(
      <ChatContainerRoot>
        <div>Messages</div>
      </ChatContainerRoot>
    )

    expect(screen.getByRole('log')).toBeInTheDocument()
  })

  it('applies custom className to ChatContainerRoot', () => {
    render(
      <ChatContainerRoot className="custom-container">
        <div>Content</div>
      </ChatContainerRoot>
    )

    expect(screen.getByTestId('stick-to-bottom')).toHaveClass('custom-container')
  })

  it('renders ChatContainerContent with children', () => {
    render(
      <ChatContainerRoot>
        <ChatContainerContent>
          <div>Message 1</div>
          <div>Message 2</div>
        </ChatContainerContent>
      </ChatContainerRoot>
    )

    expect(screen.getByText('Message 1')).toBeInTheDocument()
    expect(screen.getByText('Message 2')).toBeInTheDocument()
  })

  it('applies custom className to ChatContainerContent', () => {
    render(
      <ChatContainerRoot>
        <ChatContainerContent className="custom-content">
          <div>Content</div>
        </ChatContainerContent>
      </ChatContainerRoot>
    )

    expect(screen.getByTestId('stick-to-bottom-content')).toHaveClass('custom-content')
  })

  it('renders ChatContainerScrollAnchor', () => {
    render(
      <ChatContainerRoot>
        <ChatContainerContent>
          <div>Messages</div>
        </ChatContainerContent>
        <ChatContainerScrollAnchor data-testid="scroll-anchor" />
      </ChatContainerRoot>
    )

    const anchor = screen.getByTestId('scroll-anchor')
    expect(anchor).toBeInTheDocument()
    expect(anchor).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom className to ChatContainerScrollAnchor', () => {
    render(
      <ChatContainerRoot>
        <ChatContainerScrollAnchor 
          className="custom-anchor" 
          data-testid="scroll-anchor" 
        />
      </ChatContainerRoot>
    )

    expect(screen.getByTestId('scroll-anchor')).toHaveClass('custom-anchor')
  })

  it('renders complete chat container structure', () => {
    render(
      <ChatContainerRoot className="chat-root">
        <ChatContainerContent className="chat-content">
          <div>User: Hello</div>
          <div>Bot: Hi there!</div>
        </ChatContainerContent>
        <ChatContainerScrollAnchor data-testid="anchor" />
      </ChatContainerRoot>
    )

    expect(screen.getByText('User: Hello')).toBeInTheDocument()
    expect(screen.getByText('Bot: Hi there!')).toBeInTheDocument()
    expect(screen.getByTestId('anchor')).toBeInTheDocument()
  })
})

