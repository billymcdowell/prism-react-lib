// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-react'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Alert', () => {
  it('renders default alert', () => {
    render(
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    )
    expect(screen.getByText('Heads up!')).toBeInTheDocument()
    expect(screen.getByText('You can add components to your app using the cli.')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders destructive alert', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    )
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('text-destructive')
    // expect(alert).toHaveClass('border-destructive/50') 
  })
})

