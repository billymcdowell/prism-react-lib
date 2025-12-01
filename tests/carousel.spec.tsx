// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, beforeAll, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import * as React from 'react'

expect.extend(matchers)

// Mock ResizeObserver which is used by Embla Carousel
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })

  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

afterEach(() => {
  cleanup()
})

describe('Carousel', () => {
  it('renders carousel structure', () => {
    render(
      <Carousel aria-label="carousel">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )

    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
    expect(screen.getByText('Slide 3')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'carousel' })).toBeInTheDocument()
    expect(screen.getAllByRole('group')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })
})

