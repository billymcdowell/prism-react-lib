// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('AlertDialog', () => {
  it('opens and closes correctly', async () => {
    const user = userEvent.setup()
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    expect(screen.queryByText('Are you absolutely sure?')).not.toBeInTheDocument()

    await user.click(screen.getByText('Open'))

    expect(screen.getByText('Are you absolutely sure?')).toBeInTheDocument()
    expect(screen.getByRole('alertdialog')).toBeInTheDocument()

    await user.click(screen.getByText('Cancel'))

    await waitFor(() => {
      expect(screen.queryByText('Are you absolutely sure?')).not.toBeInTheDocument()
    })
  })
})

