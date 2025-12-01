// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  DropDrawer,
  DropDrawerContent,
  DropDrawerItem,
  DropDrawerTrigger,
} from '@/components/ui/dropdrawer'
import * as React from 'react'

expect.extend(matchers)

// Need Vaul pointer event mock for Drawer fallback in mobile (even if testing desktop logic usually)
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })

  if (!window.PointerEvent) {
    class PointerEvent extends MouseEvent {
      constructor(type: string, params: PointerEventInit = {}) {
        super(type, params);
      }
    }
    window.PointerEvent = PointerEvent as any;
  }
})

afterEach(() => {
  cleanup()
})

describe('DropDrawer', () => {
  // Test desktop behavior primarily as useIsMobile defaults to false in most test envs without mock
  it('renders dropdown menu on desktop', async () => {
    const user = userEvent.setup()
    render(
      <DropDrawer>
        <DropDrawerTrigger>Open Menu</DropDrawerTrigger>
        <DropDrawerContent>
          <DropDrawerItem>Item 1</DropDrawerItem>
          <DropDrawerItem>Item 2</DropDrawerItem>
        </DropDrawerContent>
      </DropDrawer>
    )

    await user.click(screen.getByText('Open Menu'))
    
    expect(screen.getByText('Item 1')).toBeVisible()
    expect(screen.getByText('Item 2')).toBeVisible()
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })
})

