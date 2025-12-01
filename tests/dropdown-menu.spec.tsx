// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('DropdownMenu', () => {
  it('opens on click', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    expect(screen.queryByText('My Account')).not.toBeInTheDocument()

    await user.click(screen.getByText('Open'))

    expect(screen.getByText('My Account')).toBeVisible()
    expect(screen.getByText('Profile')).toBeVisible()
  })
})

