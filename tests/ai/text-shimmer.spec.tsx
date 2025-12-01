// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { TextShimmer } from '@/components/ai/text-shimmer'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('TextShimmer', () => {
  it('renders children text', () => {
    render(<TextShimmer>Shimmering text</TextShimmer>)
    expect(screen.getByText('Shimmering text')).toBeInTheDocument()
  })

  it('renders as span by default', () => {
    render(<TextShimmer>Default element</TextShimmer>)
    expect(screen.getByText('Default element').tagName).toBe('SPAN')
  })

  it('renders as custom element', () => {
    render(<TextShimmer as="div">As div</TextShimmer>)
    expect(screen.getByText('As div').tagName).toBe('DIV')
  })

  it('renders as heading', () => {
    render(<TextShimmer as="h1">As heading</TextShimmer>)
    expect(screen.getByText('As heading').tagName).toBe('H1')
  })

  it('applies custom className', () => {
    render(<TextShimmer className="custom-shimmer">Styled</TextShimmer>)
    expect(screen.getByText('Styled')).toHaveClass('custom-shimmer')
  })

  it('has shimmer animation class', () => {
    render(<TextShimmer>Animated</TextShimmer>)
    expect(screen.getByText('Animated')).toHaveClass('animate-[shimmer_4s_infinite_linear]')
  })

  it('applies background clip text', () => {
    render(<TextShimmer>Clipped</TextShimmer>)
    expect(screen.getByText('Clipped')).toHaveClass('bg-clip-text')
  })

  it('makes text transparent for gradient effect', () => {
    render(<TextShimmer>Transparent</TextShimmer>)
    expect(screen.getByText('Transparent')).toHaveClass('text-transparent')
  })

  it('applies custom duration via style', () => {
    render(<TextShimmer duration={2}>Fast shimmer</TextShimmer>)
    expect(screen.getByText('Fast shimmer')).toHaveStyle({ animationDuration: '2s' })
  })

  it('applies default duration of 4s', () => {
    render(<TextShimmer>Default duration</TextShimmer>)
    expect(screen.getByText('Default duration')).toHaveStyle({ animationDuration: '4s' })
  })

  it('applies spread via background style', () => {
    render(<TextShimmer spread={30}>Wide spread</TextShimmer>)
    const element = screen.getByText('Wide spread')
    expect(element).toHaveAttribute('style')
  })

  it('clamps spread to minimum of 5', () => {
    render(<TextShimmer spread={2}>Min spread</TextShimmer>)
    const element = screen.getByText('Min spread')
    // Spread should be clamped to 5, so gradient should use 45% and 55%
    expect(element).toBeInTheDocument()
  })

  it('clamps spread to maximum of 45', () => {
    render(<TextShimmer spread={60}>Max spread</TextShimmer>)
    const element = screen.getByText('Max spread')
    // Spread should be clamped to 45, so gradient should use 5% and 95%
    expect(element).toBeInTheDocument()
  })

  it('uses default spread of 20', () => {
    render(<TextShimmer>Default spread</TextShimmer>)
    const element = screen.getByText('Default spread')
    // With spread=20, gradient should use 30% and 70%
    expect(element).toBeInTheDocument()
  })

  it('passes additional props to element', () => {
    render(
      <TextShimmer data-testid="shimmer" id="my-shimmer">
        With props
      </TextShimmer>
    )
    
    const element = screen.getByTestId('shimmer')
    expect(element).toHaveAttribute('id', 'my-shimmer')
  })

  it('has font-medium class', () => {
    render(<TextShimmer>Medium font</TextShimmer>)
    expect(screen.getByText('Medium font')).toHaveClass('font-medium')
  })
})

