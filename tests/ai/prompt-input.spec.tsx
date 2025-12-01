// @vitest-environment jsdom
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeAll, afterAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from '@/components/ai/prompt-input'
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

describe('PromptInput', () => {
  it('renders with textarea', () => {
    render(
      <PromptInput>
        <PromptInputTextarea placeholder="Type a message..." />
      </PromptInput>
    )
    expect(screen.getByPlaceholderText('Type a message...')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const handleValueChange = vi.fn()
    const user = userEvent.setup()
    
    render(
      <PromptInput onValueChange={handleValueChange}>
        <PromptInputTextarea placeholder="Type here" />
      </PromptInput>
    )

    await user.type(screen.getByPlaceholderText('Type here'), 'Hello')
    expect(handleValueChange).toHaveBeenCalled()
  })

  it('focuses textarea when container is clicked', async () => {
    const user = userEvent.setup()
    render(
      <PromptInput data-testid="container">
        <PromptInputTextarea placeholder="Type here" />
      </PromptInput>
    )

    const container = screen.getByTestId('container')
    const textarea = screen.getByPlaceholderText('Type here')
    
    await user.click(container)
    expect(document.activeElement).toBe(textarea)
  })

  it('applies disabled state', () => {
    render(
      <PromptInput disabled>
        <PromptInputTextarea placeholder="Disabled" />
      </PromptInput>
    )

    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
  })

  it('applies custom className', () => {
    render(
      <PromptInput className="custom-input" data-testid="container">
        <PromptInputTextarea />
      </PromptInput>
    )

    expect(screen.getByTestId('container')).toHaveClass('custom-input')
  })

  it('calls onSubmit when Enter is pressed', async () => {
    const handleSubmit = vi.fn()
    const user = userEvent.setup()
    
    render(
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea placeholder="Type here" />
      </PromptInput>
    )

    const textarea = screen.getByPlaceholderText('Type here')
    await user.type(textarea, 'Hello{Enter}')
    
    expect(handleSubmit).toHaveBeenCalled()
  })

  it('does not submit on Shift+Enter', async () => {
    const handleSubmit = vi.fn()
    const user = userEvent.setup()
    
    render(
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea placeholder="Type here" />
      </PromptInput>
    )

    const textarea = screen.getByPlaceholderText('Type here')
    await user.type(textarea, 'Hello{Shift>}{Enter}{/Shift}')
    
    expect(handleSubmit).not.toHaveBeenCalled()
  })

  it('renders with controlled value', () => {
    render(
      <PromptInput value="Controlled value" onValueChange={() => {}}>
        <PromptInputTextarea />
      </PromptInput>
    )

    expect(screen.getByRole('textbox')).toHaveValue('Controlled value')
  })

  it('renders loading state', () => {
    render(
      <PromptInput isLoading data-testid="container">
        <PromptInputTextarea />
      </PromptInput>
    )

    expect(screen.getByTestId('container')).toBeInTheDocument()
  })
})

describe('PromptInputTextarea', () => {
  it('renders with placeholder', () => {
    render(
      <PromptInput>
        <PromptInputTextarea placeholder="Enter prompt" />
      </PromptInput>
    )

    expect(screen.getByPlaceholderText('Enter prompt')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <PromptInput>
        <PromptInputTextarea className="custom-textarea" />
      </PromptInput>
    )

    expect(screen.getByRole('textbox')).toHaveClass('custom-textarea')
  })

  it('can disable autosize', () => {
    render(
      <PromptInput>
        <PromptInputTextarea disableAutosize />
      </PromptInput>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('handles onKeyDown callback', async () => {
    const handleKeyDown = vi.fn()
    const user = userEvent.setup()
    
    render(
      <PromptInput>
        <PromptInputTextarea onKeyDown={handleKeyDown} />
      </PromptInput>
    )

    await user.type(screen.getByRole('textbox'), 'a')
    expect(handleKeyDown).toHaveBeenCalled()
  })
})

describe('PromptInputActions', () => {
  it('renders action buttons', () => {
    render(
      <PromptInput>
        <PromptInputTextarea />
        <PromptInputActions>
          <button>Send</button>
          <button>Attach</button>
        </PromptInputActions>
      </PromptInput>
    )

    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Attach' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <PromptInput>
        <PromptInputActions className="custom-actions" data-testid="actions">
          <button>Action</button>
        </PromptInputActions>
      </PromptInput>
    )

    expect(screen.getByTestId('actions')).toHaveClass('custom-actions')
  })
})

describe('PromptInputAction', () => {
  it('renders action with tooltip', () => {
    render(
      <PromptInput>
        <PromptInputActions>
          <PromptInputAction tooltip="Send message">
            <button>Send</button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    )

    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('stops click propagation', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(
      <PromptInput onClick={handleClick}>
        <PromptInputActions>
          <PromptInputAction tooltip="Action">
            <button>Click Me</button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    )

    await user.click(screen.getByRole('button', { name: 'Click Me' }))
    // The click on the action button should not propagate to PromptInput
  })
})

describe('PromptInput Integration', () => {
  it('renders complete prompt input', () => {
    render(
      <PromptInput>
        <PromptInputTextarea placeholder="Ask anything..." />
        <PromptInputActions>
          <PromptInputAction tooltip="Attach file">
            <button>📎</button>
          </PromptInputAction>
          <PromptInputAction tooltip="Send">
            <button>Send</button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    )

    expect(screen.getByPlaceholderText('Ask anything...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '📎' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })
})

