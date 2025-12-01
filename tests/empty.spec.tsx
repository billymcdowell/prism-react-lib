// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Empty, EmptyDescription, EmptyTitle, EmptyMedia } from '@/components/ui/empty'
import { Search } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Empty', () => {
  it('renders empty state content', () => {
    render(
      <Empty>
        <EmptyMedia>
            <Search />
        </EmptyMedia>
        <EmptyTitle>No data</EmptyTitle>
        <EmptyDescription>There is no data to display.</EmptyDescription>
      </Empty>
    )

    expect(screen.getByText('No data')).toBeInTheDocument()
    expect(screen.getByText('There is no data to display.')).toBeInTheDocument()
  })
})

