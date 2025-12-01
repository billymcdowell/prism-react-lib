// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Resizable', () => {
  it('renders resizable panel group', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )

    expect(screen.getByText('Panel 1')).toBeInTheDocument()
    expect(screen.getByText('Panel 2')).toBeInTheDocument()
  })

  it('renders panels with correct data-slot attributes', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )

    const panelGroup = document.querySelector('[data-slot="resizable-panel-group"]')
    const panels = document.querySelectorAll('[data-slot="resizable-panel"]')
    const handle = document.querySelector('[data-slot="resizable-handle"]')

    expect(panelGroup).toBeInTheDocument()
    expect(panels).toHaveLength(2)
    expect(handle).toBeInTheDocument()
  })

  it('renders with handle visible grip', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )

    // The grip icon should be rendered when withHandle is true
    const handle = document.querySelector('[data-slot="resizable-handle"]')
    expect(handle?.querySelector('div')).toBeInTheDocument()
  })

  it('renders vertical direction', () => {
    render(
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )

    const panelGroup = document.querySelector('[data-slot="resizable-panel-group"]')
    expect(panelGroup).toHaveAttribute('data-panel-group-direction', 'vertical')
  })

  it('applies custom className to panel group', () => {
    render(
      <ResizablePanelGroup direction="horizontal" className="custom-group">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )

    const panelGroup = document.querySelector('[data-slot="resizable-panel-group"]')
    expect(panelGroup).toHaveClass('custom-group')
  })

  it('renders with default sizes', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30}>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    )

    expect(screen.getByText('Panel 1')).toBeInTheDocument()
    expect(screen.getByText('Panel 2')).toBeInTheDocument()
  })
})

