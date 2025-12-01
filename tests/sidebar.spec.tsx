// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import * as React from 'react'

expect.extend(matchers)

// Mock useIsMobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: () => false,
}))

afterEach(() => {
  cleanup()
})

describe('Sidebar', () => {
  it('renders sidebar with provider', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Item 1</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )

    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('renders sidebar header and footer', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Header Content</SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>Content</SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>Footer Content</SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    )

    expect(screen.getByText('Header Content')).toBeInTheDocument()
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('renders sidebar trigger button', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarTrigger />
      </SidebarProvider>
    )

    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toBeInTheDocument()
  })

  it('toggles sidebar on trigger click', async () => {
    const user = userEvent.setup()
    render(
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarTrigger />
      </SidebarProvider>
    )

    const sidebar = document.querySelector('[data-slot="sidebar"]')
    expect(sidebar).toHaveAttribute('data-state', 'expanded')

    await user.click(screen.getByRole('button', { name: /toggle sidebar/i }))

    expect(sidebar).toHaveAttribute('data-state', 'collapsed')
  })

  it('renders menu button with active state', () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Active Item</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )

    const button = screen.getByText('Active Item')
    expect(button).toHaveAttribute('data-active', 'true')
  })

  it('respects defaultOpen prop', () => {
    render(
      <SidebarProvider defaultOpen={false}>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )

    const sidebar = document.querySelector('[data-slot="sidebar"]')
    expect(sidebar).toHaveAttribute('data-state', 'collapsed')
  })

  it('handles keyboard shortcut', async () => {
    render(
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )

    const sidebar = document.querySelector('[data-slot="sidebar"]')
    expect(sidebar).toHaveAttribute('data-state', 'expanded')

    // Simulate Ctrl+B keyboard shortcut
    fireEvent.keyDown(window, { key: 'b', ctrlKey: true })

    expect(sidebar).toHaveAttribute('data-state', 'collapsed')
  })

  it('renders with collapsible none variant', () => {
    render(
      <SidebarProvider>
        <Sidebar collapsible="none">
          <SidebarContent>Non-collapsible Content</SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )

    expect(screen.getByText('Non-collapsible Content')).toBeInTheDocument()
  })
})

