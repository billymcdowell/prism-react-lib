// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Dialog', () => {
  it('opens and closes dialog', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button>Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument()

    await user.click(screen.getByText('Open Dialog'))

    expect(screen.getByText('Are you sure?')).toBeVisible()
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Close by pressing Escape (default Radix behavior) or finding close button
    // We'll test close button since it's rendered by DialogContent
    await user.click(screen.getByRole('button', { name: /close/i }))
    
    await waitFor(() => {
      expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument()
    })
  })
})

