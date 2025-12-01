// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import * as React from 'react'

expect.extend(matchers)

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

afterEach(() => {
  cleanup()
})

describe('InputOTP', () => {
  it('renders OTP slots', () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
      </InputOTP>
    )

    // OTP Input usually renders an invisible input and visual slots
    // We can check for the slots text content or just existence of visual elements
    // Radix/OTP renders inputs.
    const input = screen.getByRole('textbox') // The hidden input
    expect(input).toBeInTheDocument()
  })
})

