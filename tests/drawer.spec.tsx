// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, beforeAll, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import * as React from 'react'

expect.extend(matchers)

// Mock PointerEvent and matchMedia for Vaul
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
        public height: number;
        public isPrimary: boolean;
        public pointerId: number;
        public pointerType: string;
        public pressure: number;
        public tangentialPressure: number;
        public tiltX: number;
        public tiltY: number;
        public twist: number;
        public width: number;

        constructor(type: string, params: PointerEventInit = {}) {
        super(type, params);
        this.pointerId = params.pointerId || 0;
        this.width = params.width || 0;
        this.height = params.height || 0;
        this.pressure = params.pressure || 0;
        this.tangentialPressure = params.tangentialPressure || 0;
        this.tiltX = params.tiltX || 0;
        this.tiltY = params.tiltY || 0;
        this.twist = params.twist || 0;
        this.pointerType = params.pointerType || "";
        this.isPrimary = params.isPrimary || false;
      }
    }
    window.PointerEvent = PointerEvent as any;
  }
})

afterEach(() => {
  cleanup()
})

describe('Drawer', () => {
  it('renders drawer content when triggered', async () => {
    const user = userEvent.setup()
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Description</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button>Submit</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )

    expect(screen.queryByText('Drawer Title')).not.toBeInTheDocument()

    await user.click(screen.getByText('Open Drawer'))

    // Vaul puts content in a portal
    expect(screen.getByText('Drawer Title')).toBeVisible()
    expect(screen.getByText('Drawer Description')).toBeVisible()
  })
})

