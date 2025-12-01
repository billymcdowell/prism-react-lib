// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('HoverCard', () => {
  it('shows content on hover', async () => {
    const user = userEvent.setup()
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          The React Framework - created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    )

    expect(screen.queryByText('The React Framework - created and maintained by @vercel.')).not.toBeInTheDocument()

    await user.hover(screen.getByText('Hover me'))

    // HoverCard has a default delay, we might need to wait
    await waitFor(() => {
        expect(screen.getByText('The React Framework - created and maintained by @vercel.')).toBeVisible()
    })
  })
})

