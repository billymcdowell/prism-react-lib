// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Avatar', () => {
  it('renders fallback when image fails or is missing', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders avatar structure', () => {
    // In jsdom, images don't load automatically, so fallback might show or just image structure.
    // We verify that the image tag is present in the DOM even if not "loaded".
    // Radix Avatar renders the Image primitive.
    render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
    // Radix Avatar.Image renders an img tag.
    // However, it handles loading state. If it's not loaded, it might be hidden or not rendered?
    // Radix: "The image is not rendered until it has loaded."
    // So in JSDOM it won't render.
    // We expect Fallback to be visible then.
    expect(screen.getByText('CN')).toBeInTheDocument()
  })
})
