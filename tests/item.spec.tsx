// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemMedia
} from '@/components/ui/item'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Item', () => {
  it('renders item structure', () => {
    render(
      <Item>
        <ItemMedia>Img</ItemMedia>
        <ItemContent>
            <ItemTitle>Title</ItemTitle>
            <ItemDescription>Description</ItemDescription>
        </ItemContent>
      </Item>
    )

    expect(screen.getByText('Img')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })
})

