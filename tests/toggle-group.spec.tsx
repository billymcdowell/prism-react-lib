// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ToggleGroup', () => {
  it('renders toggle group', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    )

    expect(screen.getByRole('group')).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('allows single selection', async () => {
    const user = userEvent.setup()
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )

    await user.click(screen.getByText('A'))
    expect(screen.getByText('A')).toHaveAttribute('data-state', 'on')
    expect(screen.getByText('B')).toHaveAttribute('data-state', 'off')

    await user.click(screen.getByText('B'))
    expect(screen.getByText('A')).toHaveAttribute('data-state', 'off')
    expect(screen.getByText('B')).toHaveAttribute('data-state', 'on')
  })

  it('allows multiple selection', async () => {
    const user = userEvent.setup()
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    )

    await user.click(screen.getByText('A'))
    await user.click(screen.getByText('C'))

    expect(screen.getByText('A')).toHaveAttribute('data-state', 'on')
    expect(screen.getByText('B')).toHaveAttribute('data-state', 'off')
    expect(screen.getByText('C')).toHaveAttribute('data-state', 'on')
  })

  it('respects defaultValue for single selection', () => {
    render(
      <ToggleGroup type="single" defaultValue="b">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )

    expect(screen.getByText('A')).toHaveAttribute('data-state', 'off')
    expect(screen.getByText('B')).toHaveAttribute('data-state', 'on')
  })

  it('respects defaultValue for multiple selection', () => {
    render(
      <ToggleGroup type="multiple" defaultValue={['a', 'c']}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    )

    expect(screen.getByText('A')).toHaveAttribute('data-state', 'on')
    expect(screen.getByText('B')).toHaveAttribute('data-state', 'off')
    expect(screen.getByText('C')).toHaveAttribute('data-state', 'on')
  })

  it('calls onValueChange for single selection', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    
    render(
      <ToggleGroup type="single" onValueChange={handleValueChange}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )

    await user.click(screen.getByText('A'))
    expect(handleValueChange).toHaveBeenCalledWith('a')
  })

  it('calls onValueChange for multiple selection', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    
    render(
      <ToggleGroup type="multiple" onValueChange={handleValueChange}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )

    await user.click(screen.getByText('A'))
    expect(handleValueChange).toHaveBeenCalledWith(['a'])

    await user.click(screen.getByText('B'))
    expect(handleValueChange).toHaveBeenCalledWith(['a', 'b'])
  })

  it('supports disabled group', () => {
    render(
      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )

    expect(screen.getByText('A')).toBeDisabled()
    expect(screen.getByText('B')).toBeDisabled()
  })

  it('supports disabled individual item', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b" disabled>B</ToggleGroupItem>
      </ToggleGroup>
    )

    expect(screen.getByText('A')).not.toBeDisabled()
    expect(screen.getByText('B')).toBeDisabled()
  })

  it('applies variant styles', () => {
    render(
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    )

    const group = document.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute('data-variant', 'outline')
  })

  it('has correct data-slot attributes', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    )

    expect(document.querySelector('[data-slot="toggle-group"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="toggle-group-item"]')).toBeInTheDocument()
  })
})

