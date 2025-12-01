// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  Loader,
  CircularLoader,
  ClassicLoader,
  PulseLoader,
  PulseDotLoader,
  DotsLoader,
  TypingLoader,
  WaveLoader,
  BarsLoader,
  TerminalLoader,
  TextBlinkLoader,
  TextShimmerLoader,
  TextDotsLoader,
} from '@/components/ai/loader'
import * as React from 'react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('Loader Component', () => {
  it('renders circular variant by default', () => {
    render(<Loader />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders circular variant explicitly', () => {
    render(<Loader variant="circular" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders classic variant', () => {
    render(<Loader variant="classic" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders pulse variant', () => {
    render(<Loader variant="pulse" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders pulse-dot variant', () => {
    render(<Loader variant="pulse-dot" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders dots variant', () => {
    render(<Loader variant="dots" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders typing variant', () => {
    render(<Loader variant="typing" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders wave variant', () => {
    render(<Loader variant="wave" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders bars variant', () => {
    render(<Loader variant="bars" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders terminal variant', () => {
    render(<Loader variant="terminal" />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('renders text-blink variant with custom text', () => {
    render(<Loader variant="text-blink" text="Processing" />)
    expect(screen.getByText('Processing')).toBeInTheDocument()
  })

  it('renders text-shimmer variant with custom text', () => {
    render(<Loader variant="text-shimmer" text="Loading data" />)
    expect(screen.getByText('Loading data')).toBeInTheDocument()
  })

  it('renders loading-dots variant with custom text', () => {
    render(<Loader variant="loading-dots" text="Please wait" />)
    expect(screen.getByText('Please wait')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Loader className="custom-loader" />)
    expect(document.querySelector('.custom-loader')).toBeInTheDocument()
  })
})

describe('Individual Loader Components', () => {
  describe('CircularLoader', () => {
    it('renders with default size', () => {
      render(<CircularLoader />)
      expect(screen.getByText('Loading')).toBeInTheDocument()
    })

    it('renders with sm size', () => {
      render(<CircularLoader size="sm" />)
      expect(document.querySelector('.size-4')).toBeInTheDocument()
    })

    it('renders with lg size', () => {
      render(<CircularLoader size="lg" />)
      expect(document.querySelector('.size-6')).toBeInTheDocument()
    })
  })

  describe('ClassicLoader', () => {
    it('renders with 12 bars', () => {
      const { container } = render(<ClassicLoader />)
      // ClassicLoader has 12 animated bars
      expect(container.querySelectorAll('.animate-\\[spinner-fade_1\\.2s_linear_infinite\\]').length).toBe(12)
    })
  })

  describe('PulseLoader', () => {
    it('renders with pulse animation', () => {
      render(<PulseLoader />)
      expect(document.querySelector('.animate-\\[thin-pulse_1\\.5s_ease-in-out_infinite\\]')).toBeInTheDocument()
    })
  })

  describe('PulseDotLoader', () => {
    it('renders with pulse-dot animation', () => {
      render(<PulseDotLoader />)
      expect(document.querySelector('.animate-\\[pulse-dot_1\\.2s_ease-in-out_infinite\\]')).toBeInTheDocument()
    })
  })

  describe('DotsLoader', () => {
    it('renders 3 dots', () => {
      const { container } = render(<DotsLoader />)
      expect(container.querySelectorAll('.animate-\\[bounce-dots_1\\.4s_ease-in-out_infinite\\]').length).toBe(3)
    })
  })

  describe('TypingLoader', () => {
    it('renders 3 typing dots', () => {
      const { container } = render(<TypingLoader />)
      expect(container.querySelectorAll('.animate-\\[typing_1s_infinite\\]').length).toBe(3)
    })
  })

  describe('WaveLoader', () => {
    it('renders 5 wave bars', () => {
      const { container } = render(<WaveLoader />)
      expect(container.querySelectorAll('.animate-\\[wave_1s_ease-in-out_infinite\\]').length).toBe(5)
    })
  })

  describe('BarsLoader', () => {
    it('renders 3 bars', () => {
      const { container } = render(<BarsLoader />)
      expect(container.querySelectorAll('.animate-\\[wave-bars_1\\.2s_ease-in-out_infinite\\]').length).toBe(3)
    })
  })

  describe('TerminalLoader', () => {
    it('renders terminal cursor', () => {
      render(<TerminalLoader />)
      expect(screen.getByText('>')).toBeInTheDocument()
    })

    it('renders with blink animation', () => {
      render(<TerminalLoader />)
      expect(document.querySelector('.animate-\\[blink_1s_step-end_infinite\\]')).toBeInTheDocument()
    })
  })

  describe('TextBlinkLoader', () => {
    it('renders default text', () => {
      render(<TextBlinkLoader />)
      expect(screen.getByText('Thinking')).toBeInTheDocument()
    })

    it('renders custom text', () => {
      render(<TextBlinkLoader text="Custom Text" />)
      expect(screen.getByText('Custom Text')).toBeInTheDocument()
    })
  })

  describe('TextShimmerLoader', () => {
    it('renders default text', () => {
      render(<TextShimmerLoader />)
      expect(screen.getByText('Thinking')).toBeInTheDocument()
    })

    it('renders custom text', () => {
      render(<TextShimmerLoader text="Shimmer Text" />)
      expect(screen.getByText('Shimmer Text')).toBeInTheDocument()
    })
  })

  describe('TextDotsLoader', () => {
    it('renders default text', () => {
      render(<TextDotsLoader />)
      expect(screen.getByText('Thinking')).toBeInTheDocument()
    })

    it('renders custom text', () => {
      render(<TextDotsLoader text="Loading" />)
      expect(screen.getByText('Loading')).toBeInTheDocument()
    })

    it('renders 3 animated dots', () => {
      const { container } = render(<TextDotsLoader />)
      expect(container.querySelectorAll('.animate-\\[loading-dots_1\\.4s_infinite_0\\.2s\\]').length).toBe(1)
      expect(container.querySelectorAll('.animate-\\[loading-dots_1\\.4s_infinite_0\\.4s\\]').length).toBe(1)
      expect(container.querySelectorAll('.animate-\\[loading-dots_1\\.4s_infinite_0\\.6s\\]').length).toBe(1)
    })
  })
})

describe('Loader Sizes', () => {
  it.each(['sm', 'md', 'lg'] as const)('renders %s size correctly', (size) => {
    render(<Loader size={size} />)
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})

