// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import * as React from 'react'

expect.extend(matchers)

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

afterEach(() => {
  cleanup()
})

describe('NavigationMenu', () => {
  it('renders navigation menu', async () => {
    const user = userEvent.setup()
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link 1</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByText('Item One')).toBeInTheDocument()
    
    // Note: NavigationMenu trigger usually requires hover or click depending on device/implementation
    await user.click(screen.getByText('Item One'))
    
    expect(screen.getByText('Link 1')).toBeVisible()
  })
})

