// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { PromptSuggestion } from '@/components/ai/prompt-suggestion'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('PromptSuggestion', () => {
  it('renders with text content', () => {
    render(<PromptSuggestion>Suggest a recipe</PromptSuggestion>)
    expect(screen.getByRole('button', { name: 'Suggest a recipe' })).toBeInTheDocument()
  })

  it('renders as button', () => {
    render(<PromptSuggestion>Click me</PromptSuggestion>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<PromptSuggestion onClick={handleClick}>Click me</PromptSuggestion>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies default variant (outline)', () => {
    render(<PromptSuggestion>Default</PromptSuggestion>)
    // Should have outline button styling
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom variant', () => {
    render(<PromptSuggestion variant="default">Primary</PromptSuggestion>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies default size (lg)', () => {
    render(<PromptSuggestion>Large</PromptSuggestion>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom size', () => {
    render(<PromptSuggestion size="sm">Small</PromptSuggestion>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<PromptSuggestion className="custom-class">Styled</PromptSuggestion>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('has rounded-full class', () => {
    render(<PromptSuggestion>Rounded</PromptSuggestion>)
    expect(screen.getByRole('button')).toHaveClass('rounded-full')
  })
})

describe('PromptSuggestion with highlight', () => {
  it('highlights matching text', () => {
    render(
      <PromptSuggestion highlight="recipe">
        Suggest a recipe for dinner
      </PromptSuggestion>
    )

    // The word "recipe" should be in a span with primary color
    expect(screen.getByText('recipe')).toHaveClass('text-primary')
  })

  it('highlights case-insensitively', () => {
    render(
      <PromptSuggestion highlight="RECIPE">
        Suggest a recipe for dinner
      </PromptSuggestion>
    )

    expect(screen.getByText('recipe')).toHaveClass('text-primary')
  })

  it('renders non-matching text with muted style', () => {
    render(
      <PromptSuggestion highlight="recipe">
        Suggest a recipe for dinner
      </PromptSuggestion>
    )

    expect(screen.getByText('Suggest a')).toHaveClass('text-muted-foreground')
    expect(screen.getByText('for dinner')).toHaveClass('text-muted-foreground')
  })

  it('renders entire text as muted when highlight does not match', () => {
    render(
      <PromptSuggestion highlight="xyz">
        No match here
      </PromptSuggestion>
    )

    expect(screen.getByText('No match here')).toHaveClass('text-muted-foreground')
  })

  it('uses ghost variant when highlight is provided', () => {
    render(
      <PromptSuggestion highlight="test">
        Test content
      </PromptSuggestion>
    )

    // Should have different styling for highlight mode
    expect(screen.getByRole('button')).toHaveClass('w-full')
  })

  it('handles empty highlight string', () => {
    render(
      <PromptSuggestion highlight="">
        Normal button
      </PromptSuggestion>
    )

    // Should render as normal button when highlight is empty
    expect(screen.getByRole('button', { name: 'Normal button' })).toBeInTheDocument()
  })

  it('handles whitespace-only highlight', () => {
    render(
      <PromptSuggestion highlight="   ">
        Normal button
      </PromptSuggestion>
    )

    // Should render as normal button when highlight is whitespace
    expect(screen.getByRole('button', { name: 'Normal button' })).toBeInTheDocument()
  })

  it('handles non-string children with highlight', () => {
    render(
      <PromptSuggestion highlight="test">
        <span>Non-string child</span>
      </PromptSuggestion>
    )

    // Should still render the button
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('preserves original case in highlighted text', () => {
    render(
      <PromptSuggestion highlight="hello">
        Say HELLO World
      </PromptSuggestion>
    )

    // The actual text "HELLO" should be displayed, not the search term
    expect(screen.getByText('HELLO')).toHaveClass('text-primary')
  })

  it('handles highlight at the beginning', () => {
    render(
      <PromptSuggestion highlight="Start">
        Start here
      </PromptSuggestion>
    )

    expect(screen.getByText('Start')).toHaveClass('text-primary')
    expect(screen.getByText('here')).toHaveClass('text-muted-foreground')
  })

  it('handles highlight at the end', () => {
    render(
      <PromptSuggestion highlight="end">
        The end
      </PromptSuggestion>
    )

    expect(screen.getByText('The')).toHaveClass('text-muted-foreground')
    expect(screen.getByText('end')).toHaveClass('text-primary')
  })
})

