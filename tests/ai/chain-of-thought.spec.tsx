// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  ChainOfThought,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
} from '@/components/ai/chain-of-thought'
import { Circle } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ChainOfThought', () => {
  const ChainOfThoughtDemo = () => (
    <ChainOfThought>
      <ChainOfThoughtStep>
        <ChainOfThoughtTrigger>Step 1: Analyze</ChainOfThoughtTrigger>
        <ChainOfThoughtContent>
          <ChainOfThoughtItem>Analysis content here</ChainOfThoughtItem>
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>
      <ChainOfThoughtStep>
        <ChainOfThoughtTrigger>Step 2: Process</ChainOfThoughtTrigger>
        <ChainOfThoughtContent>
          <ChainOfThoughtItem>Processing content here</ChainOfThoughtItem>
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>
    </ChainOfThought>
  )

  it('renders all steps', () => {
    render(<ChainOfThoughtDemo />)
    expect(screen.getByText('Step 1: Analyze')).toBeInTheDocument()
    expect(screen.getByText('Step 2: Process')).toBeInTheDocument()
  })

  it('expands content when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<ChainOfThoughtDemo />)

    const trigger = screen.getByText('Step 1: Analyze')
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Analysis content here')).toBeVisible()
    })
  })

  it('collapses content when trigger is clicked again', async () => {
    const user = userEvent.setup()
    render(<ChainOfThoughtDemo />)

    const trigger = screen.getByText('Step 1: Analyze')
    
    // Open
    await user.click(trigger)
    await waitFor(() => {
      expect(screen.getByText('Analysis content here')).toBeVisible()
    })

    // Close
    await user.click(trigger)
    await waitFor(() => {
      const content = screen.queryByText('Analysis content here')
      if (content) {
        expect(content).not.toBeVisible()
      } else {
        expect(content).toBeNull()
      }
    })
  })

  it('applies custom className to ChainOfThought container', () => {
    render(
      <ChainOfThought className="custom-chain">
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>Step</ChainOfThoughtTrigger>
          <ChainOfThoughtContent>Content</ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    )

    expect(document.querySelector('.custom-chain')).toBeInTheDocument()
  })

  it('renders with custom left icon', () => {
    render(
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<Circle data-testid="custom-icon" />}>
            Step with icon
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>Content</ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    )

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('sets isLast prop correctly on last step', () => {
    render(<ChainOfThoughtDemo />)
    
    // The last step should have data-last="true"
    const steps = document.querySelectorAll('[data-last]')
    expect(steps.length).toBeGreaterThan(0)
    
    const lastStep = Array.from(steps).pop()
    expect(lastStep).toHaveAttribute('data-last', 'true')
  })

  it('renders ChainOfThoughtItem with correct styling', () => {
    render(
      <ChainOfThoughtItem className="custom-item">Test item</ChainOfThoughtItem>
    )

    const item = screen.getByText('Test item')
    expect(item).toHaveClass('text-muted-foreground')
    expect(item).toHaveClass('custom-item')
  })

  it('allows swapIconOnHover to be disabled', () => {
    render(
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger 
            leftIcon={<Circle data-testid="icon" />}
            swapIconOnHover={false}
          >
            Step
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>Content</ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})

