// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Textarea } from '@/components/ui/textarea'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Textarea', () => {
  it('renders textarea', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Textarea placeholder="Enter your message" />)
    expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument()
  })

  it('handles text input', async () => {
    const user = userEvent.setup()
    render(<Textarea />)
    
    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'Hello, World!')
    
    expect(textarea).toHaveValue('Hello, World!')
  })

  it('handles multiline text', async () => {
    const user = userEvent.setup()
    render(<Textarea />)
    
    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'Line 1{Enter}Line 2{Enter}Line 3')
    
    expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3')
  })

  it('supports disabled state', () => {
    render(<Textarea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('supports readonly state', () => {
    render(<Textarea readOnly value="Read only text" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
  })

  it('calls onChange callback', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    
    render(<Textarea onChange={handleChange} />)
    
    await user.type(screen.getByRole('textbox'), 'Test')
    expect(handleChange).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<Textarea className="custom-textarea" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-textarea')
  })

  it('supports rows attribute', () => {
    render(<Textarea rows={5} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5')
  })

  it('supports maxLength attribute', () => {
    render(<Textarea maxLength={100} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('maxlength', '100')
  })

  it('has correct data-slot attribute', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'textarea')
  })

  it('supports controlled value', () => {
    const { rerender } = render(<Textarea value="Initial" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toHaveValue('Initial')
    
    rerender(<Textarea value="Updated" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toHaveValue('Updated')
  })

  it('supports required attribute', () => {
    render(<Textarea required />)
    expect(screen.getByRole('textbox')).toBeRequired()
  })
})

