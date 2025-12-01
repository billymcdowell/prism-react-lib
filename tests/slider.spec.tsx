// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeAll, afterAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Slider } from '@/components/ui/slider'
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
})

afterAll(() => {
  delete (global as any).ResizeObserver
})

afterEach(() => {
  cleanup()
})

describe('Slider', () => {
  it('renders slider', () => {
    render(<Slider />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('renders with default value', () => {
    render(<Slider defaultValue={[50]} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('renders with min and max', () => {
    render(<Slider min={10} max={90} defaultValue={[50]} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '10')
    expect(slider).toHaveAttribute('aria-valuemax', '90')
  })

  it('renders with step', () => {
    render(<Slider step={10} defaultValue={[50]} />)
    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })

  it('renders range slider with multiple thumbs', () => {
    render(<Slider defaultValue={[25, 75]} />)
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveAttribute('aria-valuenow', '25')
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '75')
  })

  it('applies custom className', () => {
    render(<Slider className="custom-slider" />)
    const slider = document.querySelector('[data-slot="slider"]')
    expect(slider).toHaveClass('custom-slider')
  })

  it('renders disabled state', () => {
    render(<Slider disabled defaultValue={[50]} />)
    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('data-disabled')
  })

  it('calls onValueChange when value changes', async () => {
    const handleValueChange = vi.fn()
    render(<Slider defaultValue={[50]} onValueChange={handleValueChange} />)
    
    const slider = screen.getByRole('slider')
    
    // Simulate keyboard interaction
    slider.focus()
    await userEvent.keyboard('{ArrowRight}')
    
    expect(handleValueChange).toHaveBeenCalled()
  })

  it('supports keyboard navigation', async () => {
    render(<Slider defaultValue={[50]} />)
    
    const slider = screen.getByRole('slider')
    slider.focus()
    
    await userEvent.keyboard('{ArrowRight}')
    expect(Number(slider.getAttribute('aria-valuenow'))).toBeGreaterThanOrEqual(50)
  })

  it('renders with orientation', () => {
    render(<Slider orientation="vertical" defaultValue={[50]} />)
    const slider = document.querySelector('[data-slot="slider"]')
    expect(slider).toHaveAttribute('data-orientation', 'vertical')
  })

  it('has correct data-slot attributes', () => {
    render(<Slider defaultValue={[50]} />)
    
    expect(document.querySelector('[data-slot="slider"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="slider-track"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="slider-range"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="slider-thumb"]')).toBeInTheDocument()
  })
})

