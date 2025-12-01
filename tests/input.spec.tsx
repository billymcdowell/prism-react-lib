// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Input } from '@/components/ui/input'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Input', () => {
  it('renders input', () => {
    render(<Input type="email" placeholder="Email" />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email')
  })

  it('handles change', async () => {
    const user = userEvent.setup()
    render(<Input />)
    const input = screen.getByRole('textbox')
    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })
})

