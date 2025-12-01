// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Badge } from '@/components/ui/badge'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Badge', () => {
  it('renders default badge', () => {
    render(<Badge>Badge</Badge>)
    expect(screen.getByText('Badge')).toBeInTheDocument()
    expect(screen.getByText('Badge')).toHaveClass('bg-primary')
  })

  it('renders destructive badge', () => {
    render(<Badge variant="destructive">Destructive</Badge>)
    expect(screen.getByText('Destructive')).toHaveClass('bg-destructive')
  })

  it('renders outline badge', () => {
    render(<Badge variant="outline">Outline</Badge>)
    expect(screen.getByText('Outline')).toHaveClass('text-foreground')
  })
})

