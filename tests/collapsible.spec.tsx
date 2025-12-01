// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Collapsible', () => {
  it('toggles content visibility', async () => {
    const user = userEvent.setup()
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="content">Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    // Initially content is hidden (Radix Collapsible default is closed)
    // Radix Collapsible often has the content with hidden attribute or not in dom?
    // By default it is usually open=false.
    
    const trigger = screen.getByText('Toggle')
    await user.click(trigger)
    
    expect(screen.getByText('Content')).toBeVisible()
    
    await user.click(trigger)
    
    // Should close
    expect(trigger).toHaveAttribute('data-state', 'closed')
    // Content should be removed from DOM or hidden
    const content = screen.queryByText('Content')
    if (content) {
      expect(content).not.toBeVisible()
    } else {
      expect(content).toBeNull()
    }
  })
})

