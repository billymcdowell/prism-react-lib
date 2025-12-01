// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Tabs', () => {
  it('renders tabs', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(2)
  })

  it('shows default tab content', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    const content1 = screen.getByText('Content 1')
    expect(content1.closest('[data-state]')).toHaveAttribute('data-state', 'active')
    
    const content2 = screen.queryByText('Content 2')
    if (content2) {
      expect(content2.closest('[data-state]')).toHaveAttribute('data-state', 'inactive')
    }
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    // Initially tab 1 is selected
    expect(screen.getByText('Tab 1')).toHaveAttribute('data-state', 'active')
    expect(screen.getByText('Tab 2')).toHaveAttribute('data-state', 'inactive')

    await user.click(screen.getByText('Tab 2'))

    // After clicking, tab 2 should be selected
    expect(screen.getByText('Tab 1')).toHaveAttribute('data-state', 'inactive')
    expect(screen.getByText('Tab 2')).toHaveAttribute('data-state', 'active')
    
    // Content 2 should now be visible
    const content2Container = screen.getByText('Content 2').closest('[data-state]')
    expect(content2Container).toHaveAttribute('data-state', 'active')
  })

  it('marks active tab correctly', async () => {
    const user = userEvent.setup()
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')

    expect(tab1).toHaveAttribute('data-state', 'active')
    expect(tab2).toHaveAttribute('data-state', 'inactive')

    await user.click(tab2)

    expect(tab1).toHaveAttribute('data-state', 'inactive')
    expect(tab2).toHaveAttribute('data-state', 'active')
  })

  it('calls onValueChange callback', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    
    render(
      <Tabs defaultValue="tab1" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    await user.click(screen.getByText('Tab 2'))
    expect(handleValueChange).toHaveBeenCalledWith('tab2')
  })

  it('supports disabled tabs', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    
    render(
      <Tabs defaultValue="tab1" onValueChange={handleValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )

    const disabledTab = screen.getByText('Tab 2')
    expect(disabledTab).toBeDisabled()

    await user.click(disabledTab)
    expect(handleValueChange).not.toHaveBeenCalled()
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </Tabs>
    )

    const tab1 = screen.getByText('Tab 1')
    tab1.focus()

    await user.keyboard('{ArrowRight}')
    expect(screen.getByText('Tab 2')).toHaveFocus()
  })

  it('has correct data-slot attributes', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
      </Tabs>
    )

    expect(document.querySelector('[data-slot="tabs"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="tabs-list"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="tabs-trigger"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="tabs-content"]')).toBeInTheDocument()
  })
})

