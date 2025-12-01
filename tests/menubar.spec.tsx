// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Menubar', () => {
  it('renders menubar and opens menu', async () => {
    const user = userEvent.setup()
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )

    expect(screen.getByText('File')).toBeInTheDocument()
    expect(screen.queryByText('New Tab')).not.toBeInTheDocument()

    await user.click(screen.getByText('File'))

    expect(screen.getByText('New Tab')).toBeVisible()
  })
})

