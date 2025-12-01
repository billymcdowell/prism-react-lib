// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ButtonGroup', () => {
  it('renders horizontally by default', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    )
    const group = screen.getByRole('group')
    expect(group).toHaveAttribute('data-orientation', 'horizontal')
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })

  it('renders vertically', () => {
    render(
      <ButtonGroup orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
    const group = screen.getByRole('group')
    expect(group).toHaveAttribute('data-orientation', 'vertical')
  })

  it('renders with text content', () => {
     render(
        <ButtonGroup>
            <ButtonGroupText>Label</ButtonGroupText>
            <Button>Action</Button>
        </ButtonGroup>
     )
     expect(screen.getByText('Label')).toBeInTheDocument()
  })
})

