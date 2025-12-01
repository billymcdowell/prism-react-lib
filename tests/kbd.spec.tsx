// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Kbd } from '@/components/ui/kbd'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Kbd', () => {
  it('renders kbd', () => {
    render(
      <span>
        Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
      </span>
    )
    expect(screen.getByText('⌘')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
  })
})

