// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Accordion', () => {
  const AccordionDemo = (props: React.ComponentProps<typeof Accordion>) => (
    <Accordion type="single" collapsible {...props}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )

  it('renders all triggers', () => {
    render(<AccordionDemo />)
    expect(screen.getByText('Is it accessible?')).toBeInTheDocument()
    expect(screen.getByText('Is it styled?')).toBeInTheDocument()
  })

  it('shows content when item is expanded', async () => {
    const user = userEvent.setup()
    render(<AccordionDemo />)

    // Content should be hidden initially
    // Note: Radix UI Accordion usually keeps content in DOM but with hidden attribute or data-state closed
    const content = screen.queryByText('Yes. It adheres to the WAI-ARIA design pattern.')
    // If it's not in the DOM at all, toBeVisible will fail if we use queryByText. 
    // If it is in the DOM but hidden, toBeVisible works.
    // Radix UI default behavior: unmounts content when closed unless forceMount is true.
    if (content) {
        expect(content).not.toBeVisible()
    } else {
        expect(content).toBeNull()
    }

    // Click trigger
    await user.click(screen.getByText('Is it accessible?'))

    // Content should be visible
    await waitFor(() => {
        expect(screen.getByText('Yes. It adheres to the WAI-ARIA design pattern.')).toBeVisible()
    })
  })

  it('hides content when item is collapsed', async () => {
    const user = userEvent.setup()
    render(<AccordionDemo defaultValue="item-1" />)

    // Content should be visible initially
    expect(screen.getByText('Yes. It adheres to the WAI-ARIA design pattern.')).toBeVisible()

    // Click trigger to collapse
    await user.click(screen.getByText('Is it accessible?'))

    // Content should be hidden
    await waitFor(() => {
        const content = screen.queryByText('Yes. It adheres to the WAI-ARIA design pattern.')
        if (content) {
            expect(content).not.toBeVisible()
        } else {
            expect(content).toBeNull()
        }
    })
  })
  
  it('manages single open item state correctly', async () => {
      const user = userEvent.setup()
      render(<AccordionDemo type="single" collapsible />)

      // Open first item
      await user.click(screen.getByText('Is it accessible?'))
      expect(screen.getByText('Yes. It adheres to the WAI-ARIA design pattern.')).toBeVisible()
      
      // Check second item is closed
      const content2 = screen.queryByText('Yes. It comes with default styles that matches the other components\' aesthetic.')
      if (content2) expect(content2).not.toBeVisible()
      else expect(content2).toBeNull()

      // Open second item
      await user.click(screen.getByText('Is it styled?'))
      
      // First item should close, second should open
      await waitFor(() => {
           const content1 = screen.queryByText('Yes. It adheres to the WAI-ARIA design pattern.')
           if (content1) expect(content1).not.toBeVisible()
           else expect(content1).toBeNull()

           expect(screen.getByText('Yes. It comes with default styles that matches the other components\' aesthetic.')).toBeVisible()
      })
  })
})

