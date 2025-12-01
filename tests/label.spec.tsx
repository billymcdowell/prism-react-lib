// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Label } from '@/components/ui/label'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Label', () => {
  it('renders label', () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email')
  })
})

