// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('RadioGroup', () => {
  it('renders radio group', () => {
    render(
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    )

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  it('allows selecting a radio option', async () => {
    const user = userEvent.setup()
    render(
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    
    await user.click(radios[0])
    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  it('switches selection between options', async () => {
    const user = userEvent.setup()
    render(
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    
    await user.click(radios[0])
    expect(radios[0]).toBeChecked()
    
    await user.click(radios[1])
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  it('respects defaultValue', () => {
    render(
      <RadioGroup defaultValue="option2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  it('calls onValueChange callback', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    
    render(
      <RadioGroup onValueChange={handleValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    )

    await user.click(screen.getAllByRole('radio')[0])
    expect(handleValueChange).toHaveBeenCalledWith('option1')
  })

  it('supports disabled state', () => {
    render(
      <RadioGroup disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>
    )

    expect(screen.getByRole('radio')).toBeDisabled()
  })
})

