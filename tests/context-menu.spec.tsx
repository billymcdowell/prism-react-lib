// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ContextMenu', () => {
  it('opens on right click', async () => {
    const user = userEvent.setup()
    render(
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click here')
    
    expect(screen.queryByText('Back')).not.toBeInTheDocument()
    
    await user.pointer({ keys: '[MouseRight]', target: trigger })
    
    expect(screen.getByText('Back')).toBeVisible()
    expect(screen.getByText('Forward')).toBeVisible()
  })
})

