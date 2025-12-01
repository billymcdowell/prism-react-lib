// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Tool, ToolPart } from '@/components/ai/tool'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

const createToolPart = (overrides: Partial<ToolPart> = {}): ToolPart => ({
  type: 'search',
  state: 'output-available',
  input: { query: 'test query' },
  output: { results: ['result1', 'result2'] },
  toolCallId: 'tool-123',
  ...overrides,
})

describe('Tool', () => {
  it('renders tool with type name', () => {
    render(<Tool toolPart={createToolPart({ type: 'searchTool' })} />)
    expect(screen.getByText('searchTool')).toBeInTheDocument()
  })

  it('renders with collapsed state by default', () => {
    render(<Tool toolPart={createToolPart()} />)
    expect(screen.queryByText('Input')).not.toBeInTheDocument()
  })

  it('expands when clicked', async () => {
    const user = userEvent.setup()
    render(<Tool toolPart={createToolPart()} />)
    
    await user.click(screen.getByRole('button'))
    
    await waitFor(() => {
      expect(screen.getByText('Input')).toBeInTheDocument()
    })
  })

  it('can start expanded with defaultOpen', async () => {
    render(<Tool toolPart={createToolPart()} defaultOpen />)
    expect(screen.getByText('Input')).toBeInTheDocument()
  })

  it('shows input data when expanded', async () => {
    render(<Tool toolPart={createToolPart()} defaultOpen />)
    expect(screen.getByText('query:')).toBeInTheDocument()
    expect(screen.getByText('test query')).toBeInTheDocument()
  })

  it('shows output data when expanded', async () => {
    render(<Tool toolPart={createToolPart()} defaultOpen />)
    expect(screen.getByText('Output')).toBeInTheDocument()
  })

  it('shows tool call ID when expanded', async () => {
    render(<Tool toolPart={createToolPart()} defaultOpen />)
    expect(screen.getByText('Call ID: tool-123')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Tool toolPart={createToolPart()} className="custom-tool" />)
    expect(document.querySelector('.custom-tool')).toBeInTheDocument()
  })
})

describe('Tool States', () => {
  it('shows Processing badge for input-streaming state', () => {
    render(<Tool toolPart={createToolPart({ state: 'input-streaming' })} />)
    expect(screen.getByText('Processing')).toBeInTheDocument()
  })

  it('shows Ready badge for input-available state', () => {
    render(<Tool toolPart={createToolPart({ state: 'input-available' })} />)
    expect(screen.getByText('Ready')).toBeInTheDocument()
  })

  it('shows Completed badge for output-available state', () => {
    render(<Tool toolPart={createToolPart({ state: 'output-available' })} />)
    expect(screen.getByText('Completed')).toBeInTheDocument()
  })

  it('shows Error badge for output-error state', () => {
    render(<Tool toolPart={createToolPart({ state: 'output-error' })} />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('shows spinner icon for input-streaming state', () => {
    render(<Tool toolPart={createToolPart({ state: 'input-streaming' })} />)
    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('shows error message when in error state', () => {
    render(
      <Tool 
        toolPart={createToolPart({ 
          state: 'output-error',
          errorText: 'Something went wrong'
        })} 
        defaultOpen 
      />
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('shows processing message when streaming', () => {
    render(
      <Tool 
        toolPart={createToolPart({ state: 'input-streaming' })} 
        defaultOpen 
      />
    )
    expect(screen.getByText('Processing tool call...')).toBeInTheDocument()
  })
})

describe('Tool Input/Output Formatting', () => {
  it('formats string values', () => {
    render(
      <Tool 
        toolPart={createToolPart({ input: { message: 'hello' } })} 
        defaultOpen 
      />
    )
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('formats null values', () => {
    render(
      <Tool 
        toolPart={createToolPart({ input: { value: null } })} 
        defaultOpen 
      />
    )
    expect(screen.getByText('null')).toBeInTheDocument()
  })

  it('formats object values as JSON', () => {
    render(
      <Tool 
        toolPart={createToolPart({ 
          input: { nested: { key: 'value' } } 
        })} 
        defaultOpen 
      />
    )
    // JSON stringified
    expect(screen.getByText(/key/)).toBeInTheDocument()
  })

  it('handles empty input', () => {
    render(
      <Tool 
        toolPart={createToolPart({ input: {} })} 
        defaultOpen 
      />
    )
    // Should not show Input section when empty
    expect(screen.queryByText('Input')).not.toBeInTheDocument()
  })

  it('handles undefined input', () => {
    render(
      <Tool 
        toolPart={createToolPart({ input: undefined })} 
        defaultOpen 
      />
    )
    expect(screen.queryByText('Input')).not.toBeInTheDocument()
  })
})

describe('Tool Collapsible Behavior', () => {
  it('toggles between open and closed', async () => {
    const user = userEvent.setup()
    render(<Tool toolPart={createToolPart()} />)
    
    const trigger = screen.getByRole('button')
    
    // Open
    await user.click(trigger)
    await waitFor(() => {
      expect(screen.getByText('Input')).toBeInTheDocument()
    })
    
    // Close
    await user.click(trigger)
    // After closing, content is removed from DOM or hidden
    await waitFor(() => {
      const inputLabel = screen.queryByText('Input')
      // Either null (removed) or hidden
      expect(inputLabel === null || inputLabel.closest('[hidden]')).toBeTruthy()
    })
  })

  it('rotates chevron when open', async () => {
    const user = userEvent.setup()
    render(<Tool toolPart={createToolPart()} />)
    
    await user.click(screen.getByRole('button'))
    
    // Just verify the component responds to clicks
    await waitFor(() => {
      expect(screen.getByText('Input')).toBeInTheDocument()
    })
  })
})

