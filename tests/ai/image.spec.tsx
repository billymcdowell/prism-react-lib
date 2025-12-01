// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Image } from '@/components/ai/image'
import * as React from 'react'

expect.extend(matchers)

// Mock URL.createObjectURL and URL.revokeObjectURL
const mockCreateObjectURL = vi.fn(() => 'blob:mock-url')
const mockRevokeObjectURL = vi.fn()

beforeEach(() => {
  global.URL.createObjectURL = mockCreateObjectURL
  global.URL.revokeObjectURL = mockRevokeObjectURL
})

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('Image', () => {
  it('renders image with base64 source', () => {
    render(
      <Image 
        base64="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" 
        mediaType="image/png"
        alt="Test image"
      />
    )

    const img = screen.getByRole('img', { name: 'Test image' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('data:image/png;base64,'))
  })

  it('renders placeholder when no source is provided', () => {
    render(<Image alt="Placeholder" />)

    const placeholder = screen.getByRole('img', { name: 'Placeholder' })
    expect(placeholder).toBeInTheDocument()
    expect(placeholder.tagName).toBe('DIV')
  })

  it('renders image with uint8Array source', () => {
    const uint8Array = new Uint8Array([137, 80, 78, 71])
    render(
      <Image 
        uint8Array={uint8Array}
        mediaType="image/png"
        alt="Binary image"
      />
    )

    expect(mockCreateObjectURL).toHaveBeenCalled()
    const img = screen.getByRole('img', { name: 'Binary image' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'blob:mock-url')
  })

  it('applies custom className', () => {
    render(
      <Image 
        base64="test" 
        mediaType="image/png"
        alt="Styled image"
        className="custom-image"
      />
    )

    expect(screen.getByRole('img')).toHaveClass('custom-image')
  })

  it('uses default mediaType of image/png', () => {
    render(
      <Image 
        base64="test" 
        alt="Default type"
      />
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('image/png'))
  })

  it('prefers base64 over uint8Array when both provided', () => {
    const uint8Array = new Uint8Array([137, 80, 78, 71])
    render(
      <Image 
        base64="testBase64"
        uint8Array={uint8Array}
        mediaType="image/png"
        alt="Mixed sources"
      />
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('data:image/png;base64,'))
    // Note: createObjectURL might still be called due to useEffect, but base64 takes precedence
  })

  it('renders with image/jpeg mediaType', () => {
    render(
      <Image 
        base64="jpegBase64" 
        mediaType="image/jpeg"
        alt="JPEG image"
      />
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('data:image/jpeg;base64,'))
  })

  it('passes additional props to img element', () => {
    render(
      <Image 
        base64="test" 
        mediaType="image/png"
        alt="Extra props"
        width={200}
        height={100}
      />
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('width', '200')
    expect(img).toHaveAttribute('height', '100')
  })

  it('shows placeholder with pulse animation when no source', () => {
    render(<Image alt="Loading" className="test-class" />)

    const placeholder = screen.getByRole('img')
    expect(placeholder).toHaveClass('animate-pulse')
  })

  it('cleans up object URL on unmount', () => {
    const uint8Array = new Uint8Array([137, 80, 78, 71])
    const { unmount } = render(
      <Image 
        uint8Array={uint8Array}
        mediaType="image/png"
        alt="Cleanup test"
      />
    )

    unmount()
    expect(mockRevokeObjectURL).toHaveBeenCalledWith('blob:mock-url')
  })
})

