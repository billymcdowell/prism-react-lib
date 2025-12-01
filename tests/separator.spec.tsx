// @vitest-environment jsdom
import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Separator } from '@/components/ui/separator'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Separator', () => {
  it('renders separator', () => {
    render(<Separator />)
    
    const separator = document.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
  })

  it('renders horizontal separator by default', () => {
    render(<Separator />)
    
    const separator = document.querySelector('[data-slot="separator"]')
    expect(separator).toHaveAttribute('data-orientation', 'horizontal')
  })

  it('renders vertical separator', () => {
    render(<Separator orientation="vertical" />)
    
    const separator = document.querySelector('[data-slot="separator"]')
    expect(separator).toHaveAttribute('data-orientation', 'vertical')
  })

  it('applies custom className', () => {
    render(<Separator className="custom-separator" />)
    
    const separator = document.querySelector('[data-slot="separator"]')
    expect(separator).toHaveClass('custom-separator')
  })

  it('is decorative by default', () => {
    render(<Separator />)
    
    const separator = document.querySelector('[data-slot="separator"]')
    // When decorative, role="none" or aria-hidden might be applied
    expect(separator).toHaveAttribute('role', 'none')
  })

  it('can be non-decorative', () => {
    render(<Separator decorative={false} />)
    
    const separator = document.querySelector('[data-slot="separator"]')
    expect(separator).toHaveAttribute('role', 'separator')
  })

  it('renders in flex container context', () => {
    const { container } = render(
      <div style={{ display: 'flex', flexDirection: 'row', height: '100px' }}>
        <div>Left</div>
        <Separator orientation="vertical" />
        <div>Right</div>
      </div>
    )

    const separator = container.querySelector('[data-slot="separator"]')
    expect(separator).toBeInTheDocument()
  })
})

