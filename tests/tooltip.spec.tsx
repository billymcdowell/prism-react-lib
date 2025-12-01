// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, beforeAll, afterAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import * as React from 'react'

expect.extend(matchers)

// Mock ResizeObserver and DOMRect for Radix UI
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  global.ResizeObserver = ResizeObserverMock as any
  // Mock DOMRect for Radix positioning
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

describe('Tooltip', () => {
  it('renders tooltip trigger', () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    )

    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('renders trigger with data-slot attribute', () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    )

    expect(document.querySelector('[data-slot="tooltip-trigger"]')).toBeInTheDocument()
  })

  it('renders with TooltipProvider wrapper', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('renders trigger as child component with asChild', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Custom Button</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip for button</TooltipContent>
      </Tooltip>
    )

    expect(screen.getByRole('button', { name: 'Custom Button' })).toBeInTheDocument()
  })

  it('supports multiple tooltips', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>First trigger</TooltipTrigger>
          <TooltipContent>First tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>Second trigger</TooltipTrigger>
          <TooltipContent>Second tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.getByText('First trigger')).toBeInTheDocument()
    expect(screen.getByText('Second trigger')).toBeInTheDocument()
  })

  it('applies custom className to trigger', () => {
    render(
      <Tooltip>
        <TooltipTrigger className="custom-trigger">Hover me</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    )

    expect(screen.getByText('Hover me')).toHaveClass('custom-trigger')
  })
})

