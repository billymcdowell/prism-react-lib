// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Steps,
  StepsTrigger,
  StepsContent,
  StepsItem,
  StepsBar,
} from '@/components/ai/steps'
import { CheckCircle } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Steps', () => {
  const StepsDemo = () => (
    <Steps>
      <StepsTrigger>View Steps</StepsTrigger>
      <StepsContent>
        <StepsItem>Step 1: Initialize</StepsItem>
        <StepsItem>Step 2: Process</StepsItem>
        <StepsItem>Step 3: Complete</StepsItem>
      </StepsContent>
    </Steps>
  )

  it('renders trigger', () => {
    render(<StepsDemo />)
    expect(screen.getByText('View Steps')).toBeInTheDocument()
  })

  it('is open by default', () => {
    render(<StepsDemo />)
    expect(screen.getByText('Step 1: Initialize')).toBeVisible()
  })

  it('can be closed by clicking trigger', async () => {
    const user = userEvent.setup()
    render(<StepsDemo />)

    await user.click(screen.getByText('View Steps'))

    await waitFor(() => {
      const content = screen.queryByText('Step 1: Initialize')
      if (content) {
        expect(content).not.toBeVisible()
      } else {
        expect(content).toBeNull()
      }
    })
  })

  it('can start closed', () => {
    render(
      <Steps defaultOpen={false}>
        <StepsTrigger>Toggle</StepsTrigger>
        <StepsContent>
          <StepsItem>Hidden Step</StepsItem>
        </StepsContent>
      </Steps>
    )

    const content = screen.queryByText('Hidden Step')
    if (content) {
      expect(content).not.toBeVisible()
    }
  })

  it('applies custom className', () => {
    render(
      <Steps className="custom-steps" data-testid="steps">
        <StepsTrigger>Toggle</StepsTrigger>
        <StepsContent>Content</StepsContent>
      </Steps>
    )

    expect(screen.getByTestId('steps')).toHaveClass('custom-steps')
  })
})

describe('StepsTrigger', () => {
  it('renders with left icon', () => {
    render(
      <Steps>
        <StepsTrigger leftIcon={<CheckCircle data-testid="icon" />}>
          With Icon
        </StepsTrigger>
        <StepsContent>Content</StepsContent>
      </Steps>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('shows chevron icon when no left icon', () => {
    render(
      <Steps>
        <StepsTrigger>No Left Icon</StepsTrigger>
        <StepsContent>Content</StepsContent>
      </Steps>
    )

    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Steps>
        <StepsTrigger className="custom-trigger">Trigger</StepsTrigger>
        <StepsContent>Content</StepsContent>
      </Steps>
    )

    expect(screen.getByText('Trigger').parentElement?.parentElement).toHaveClass('custom-trigger')
  })

  it('supports swapIconOnHover', () => {
    render(
      <Steps>
        <StepsTrigger 
          leftIcon={<CheckCircle data-testid="icon" />}
          swapIconOnHover={true}
        >
          Hover to swap
        </StepsTrigger>
        <StepsContent>Content</StepsContent>
      </Steps>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('can disable swapIconOnHover', () => {
    render(
      <Steps>
        <StepsTrigger 
          leftIcon={<CheckCircle data-testid="icon" />}
          swapIconOnHover={false}
        >
          No swap
        </StepsTrigger>
        <StepsContent>Content</StepsContent>
      </Steps>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})

describe('StepsContent', () => {
  it('renders children', () => {
    render(
      <Steps>
        <StepsTrigger>Toggle</StepsTrigger>
        <StepsContent>
          <div>Content here</div>
        </StepsContent>
      </Steps>
    )

    expect(screen.getByText('Content here')).toBeInTheDocument()
  })

  it('renders default StepsBar', () => {
    render(
      <Steps>
        <StepsTrigger>Toggle</StepsTrigger>
        <StepsContent>
          <StepsItem>Item</StepsItem>
        </StepsContent>
      </Steps>
    )

    // Default bar should be present
    expect(document.querySelector('.bg-muted')).toBeInTheDocument()
  })

  it('renders custom bar', () => {
    render(
      <Steps>
        <StepsTrigger>Toggle</StepsTrigger>
        <StepsContent bar={<div data-testid="custom-bar">Custom</div>}>
          <StepsItem>Item</StepsItem>
        </StepsContent>
      </Steps>
    )

    expect(screen.getByTestId('custom-bar')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Steps>
        <StepsTrigger>Toggle</StepsTrigger>
        <StepsContent className="custom-content">
          <StepsItem>Item</StepsItem>
        </StepsContent>
      </Steps>
    )

    expect(document.querySelector('.custom-content')).toBeInTheDocument()
  })
})

describe('StepsItem', () => {
  it('renders content', () => {
    render(<StepsItem>Step item content</StepsItem>)
    expect(screen.getByText('Step item content')).toBeInTheDocument()
  })

  it('applies muted foreground style', () => {
    render(<StepsItem>Styled item</StepsItem>)
    expect(screen.getByText('Styled item')).toHaveClass('text-muted-foreground')
  })

  it('applies custom className', () => {
    render(<StepsItem className="custom-item">Item</StepsItem>)
    expect(screen.getByText('Item')).toHaveClass('custom-item')
  })
})

describe('StepsBar', () => {
  it('renders with default styling', () => {
    render(<StepsBar data-testid="bar" />)
    
    const bar = screen.getByTestId('bar')
    expect(bar).toHaveClass('bg-muted')
    expect(bar).toHaveClass('h-full')
    expect(bar).toHaveClass('w-[2px]')
  })

  it('applies custom className', () => {
    render(<StepsBar className="custom-bar" data-testid="bar" />)
    expect(screen.getByTestId('bar')).toHaveClass('custom-bar')
  })

  it('has aria-hidden attribute', () => {
    render(<StepsBar data-testid="bar" />)
    expect(screen.getByTestId('bar')).toHaveAttribute('aria-hidden', 'true')
  })
})

