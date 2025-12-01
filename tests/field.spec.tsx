// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSet,
  FieldGroup,
  FieldLegend
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Field', () => {
  it('renders field structure correctly', () => {
    render(
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldGroup>
            <Field>
                <FieldLabel>Username</FieldLabel>
                <FieldContent>
                    <Input placeholder="username" />
                    <FieldDescription>Your public username.</FieldDescription>
                </FieldContent>
            </Field>
        </FieldGroup>
      </FieldSet>
    )

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
    expect(screen.getByText('Your public username.')).toBeInTheDocument()
  })
})

