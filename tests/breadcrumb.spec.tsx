// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Breadcrumb', () => {
  it('renders breadcrumb correctly', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )

    expect(screen.getByRole('navigation', { name: 'breadcrumb' })).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3) // 3 items (separators have role="presentation")
    expect(screen.getByText('Home')).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByText('Breadcrumb')).toHaveAttribute('aria-current', 'page')
  })
})

