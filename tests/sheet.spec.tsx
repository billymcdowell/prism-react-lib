// @vitest-environment jsdom
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Sheet', () => {
  it('opens sheet on trigger click', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
          <div>Sheet content</div>
        </SheetContent>
      </Sheet>
    )

    expect(screen.queryByText('Sheet Title')).not.toBeInTheDocument()

    await user.click(screen.getByText('Open Sheet'))

    expect(screen.getByText('Sheet Title')).toBeVisible()
    expect(screen.getByText('Sheet description')).toBeVisible()
    expect(screen.getByText('Sheet content')).toBeVisible()
  })

  it('closes sheet on close button click', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText('Open Sheet'))
    expect(screen.getByText('Sheet Title')).toBeVisible()

    // Find close button by sr-only text
    await user.click(screen.getByRole('button', { name: /close/i }))

    await waitFor(() => {
      expect(screen.queryByText('Sheet Title')).not.toBeInTheDocument()
    })
  })

  it('renders with right side', async () => {
    const user = userEvent.setup()
    
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>This is a right-side sheet</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText('Open Sheet'))
    expect(screen.getByText('Right Sheet')).toBeVisible()
  })

  it('renders with header and footer', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Header Title</SheetTitle>
          </SheetHeader>
          <div>Content</div>
          <SheetFooter>
            <button>Footer Button</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText('Open Sheet'))

    expect(screen.getByText('Header Title')).toBeVisible()
    expect(screen.getByText('Footer Button')).toBeVisible()
  })

  it('renders with controlled open state', async () => {
    render(
      <Sheet open={true}>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Controlled Sheet</SheetTitle>
        </SheetContent>
      </Sheet>
    )

    expect(screen.getByText('Controlled Sheet')).toBeVisible()
  })

  it('renders SheetClose component', async () => {
    const user = userEvent.setup()
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet with Close</SheetTitle>
          </SheetHeader>
          <SheetClose asChild>
            <button>Close Sheet</button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    )

    await user.click(screen.getByText('Open Sheet'))
    expect(screen.getByText('Sheet with Close')).toBeVisible()

    await user.click(screen.getByText('Close Sheet'))

    await waitFor(() => {
      expect(screen.queryByText('Sheet with Close')).not.toBeInTheDocument()
    })
  })
})

