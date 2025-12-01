// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Table', () => {
  it('renders table', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders complete table structure', () => {
    render(
      <Table>
        <TableCaption>A list of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>jane@example.com</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )

    expect(screen.getByText('A list of users')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders table header', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    )

    expect(screen.getByText('Header 1')).toBeInTheDocument()
    expect(screen.getByText('Header 2')).toBeInTheDocument()
    expect(screen.getAllByRole('columnheader')).toHaveLength(2)
  })

  it('renders table body with rows', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Row 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByText('Row 1')).toBeInTheDocument()
    expect(screen.getByText('Row 2')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(2)
  })

  it('applies custom className to table', () => {
    render(
      <Table className="custom-table">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByRole('table')).toHaveClass('custom-table')
  })

  it('has correct data-slot attributes', () => {
    render(
      <Table>
        <TableCaption>Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Head</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )

    expect(document.querySelector('[data-slot="table"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-header"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-body"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-footer"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-head"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-row"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-cell"]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot="table-caption"]')).toBeInTheDocument()
  })

  it('renders table container for overflow', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    const container = document.querySelector('[data-slot="table-container"]')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('overflow-x-auto')
  })
})

