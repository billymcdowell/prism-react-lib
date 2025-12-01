// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Card', () => {
  it('renders card components correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    )

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Description')).toBeInTheDocument()
    expect(screen.getByText('Card Content')).toBeInTheDocument()
    expect(screen.getByText('Card Footer')).toBeInTheDocument()
  })
})

