// @vitest-environment jsdom
import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Skeleton } from '@/components/ui/skeleton'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Skeleton', () => {
  it('renders skeleton', () => {
    render(<Skeleton />)
    
    const skeleton = document.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toBeInTheDocument()
  })

  it('applies pulse animation class', () => {
    render(<Skeleton />)
    
    const skeleton = document.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toHaveClass('animate-pulse')
  })

  it('applies custom className', () => {
    render(<Skeleton className="h-4 w-full" />)
    
    const skeleton = document.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toHaveClass('h-4')
    expect(skeleton).toHaveClass('w-full')
  })

  it('renders with custom dimensions', () => {
    render(<Skeleton className="h-12 w-12 rounded-full" />)
    
    const skeleton = document.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toHaveClass('h-12')
    expect(skeleton).toHaveClass('w-12')
    expect(skeleton).toHaveClass('rounded-full')
  })

  it('renders multiple skeletons', () => {
    render(
      <div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    )
    
    const skeletons = document.querySelectorAll('[data-slot="skeleton"]')
    expect(skeletons).toHaveLength(3)
  })

  it('has correct default styling', () => {
    render(<Skeleton />)
    
    const skeleton = document.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toHaveClass('bg-accent')
    expect(skeleton).toHaveClass('rounded-md')
  })
})

