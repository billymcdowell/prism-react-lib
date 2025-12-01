// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Checkbox } from '@/components/ui/checkbox'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Checkbox', () => {
  it('renders checkbox', () => {
    render(<Checkbox id="terms" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('toggles state on click', async () => {
    const user = userEvent.setup()
    render(<Checkbox id="terms" />)
    const checkbox = screen.getByRole('checkbox')
    
    expect(checkbox).not.toBeChecked()
    
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})

