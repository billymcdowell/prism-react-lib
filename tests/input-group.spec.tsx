// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Search } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('InputGroup', () => {
  it('renders input group components', () => {
    render(
      <InputGroup>
        <InputGroupAddon>
            <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
            <InputGroupText>Cmd+K</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    )

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByText('Cmd+K')).toBeInTheDocument()
  })
})

