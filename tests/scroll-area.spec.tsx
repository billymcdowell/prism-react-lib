// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ScrollArea', () => {
  it('renders scroll area with content', () => {
    render(
      <ScrollArea className="h-[200px] w-[350px]">
        <div>Scrollable content</div>
      </ScrollArea>
    )

    expect(screen.getByText('Scrollable content')).toBeInTheDocument()
  })

  it('renders with correct data-slot attribute', () => {
    render(
      <ScrollArea className="h-[200px]">
        <div>Content</div>
      </ScrollArea>
    )

    const scrollArea = document.querySelector('[data-slot="scroll-area"]')
    expect(scrollArea).toBeInTheDocument()
  })

  it('renders viewport with correct data-slot', () => {
    render(
      <ScrollArea className="h-[200px]">
        <div>Content</div>
      </ScrollArea>
    )

    const viewport = document.querySelector('[data-slot="scroll-area-viewport"]')
    expect(viewport).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <ScrollArea className="custom-scroll-class">
        <div>Content</div>
      </ScrollArea>
    )

    const scrollArea = document.querySelector('[data-slot="scroll-area"]')
    expect(scrollArea).toHaveClass('custom-scroll-class')
  })

  it('renders multiple children', () => {
    render(
      <ScrollArea className="h-[200px]">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ScrollArea>
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('renders nested content correctly', () => {
    render(
      <ScrollArea className="h-[200px] w-[350px]">
        <div className="p-4">
          <h4>Heading</h4>
          <p>Paragraph content</p>
        </div>
      </ScrollArea>
    )

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Paragraph content')).toBeInTheDocument()
  })
})

