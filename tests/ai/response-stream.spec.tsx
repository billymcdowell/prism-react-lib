// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ResponseStream, useTextStream } from '@/components/ai/response-stream'
import * as React from 'react'
import { renderHook } from '@testing-library/react'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('ResponseStream', () => {
  it('renders container element', () => {
    render(<ResponseStream textStream="Hello World" />)
    // The container should exist
    expect(document.querySelector('div')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <ResponseStream 
        textStream="Test" 
        className="custom-stream" 
      />
    )
    
    expect(document.querySelector('.custom-stream')).toBeInTheDocument()
  })

  it('renders as custom element type', () => {
    render(
      <ResponseStream 
        textStream="Paragraph text" 
        as="p"
      />
    )
    
    expect(document.querySelector('p')).toBeInTheDocument()
  })

  it('renders as span element', () => {
    render(
      <ResponseStream 
        textStream="Span text" 
        as="span"
      />
    )
    
    expect(document.querySelector('span')).toBeInTheDocument()
  })

  it('accepts speed prop', () => {
    render(<ResponseStream textStream="Fast" speed={100} />)
    expect(document.querySelector('div')).toBeInTheDocument()
  })

  it('accepts mode prop', () => {
    render(<ResponseStream textStream="Mode test" mode="fade" />)
    expect(document.querySelector('div')).toBeInTheDocument()
  })

  it('accepts onComplete callback', () => {
    const handleComplete = vi.fn()
    render(
      <ResponseStream 
        textStream="Test" 
        onComplete={handleComplete}
      />
    )
    expect(document.querySelector('div')).toBeInTheDocument()
  })
})

describe('useTextStream hook', () => {
  it('returns displayedText', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(result.current.displayedText).toBeDefined()
  })

  it('returns isComplete state', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.isComplete).toBe('boolean')
  })

  it('provides reset function', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.reset).toBe('function')
  })

  it('provides pause function', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.pause).toBe('function')
  })

  it('provides resume function', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.resume).toBe('function')
  })

  it('provides startStreaming function', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.startStreaming).toBe('function')
  })

  it('provides getFadeDuration function', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.getFadeDuration).toBe('function')
  })

  it('provides getSegmentDelay function', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(typeof result.current.getSegmentDelay).toBe('function')
  })

  it('returns segments array', () => {
    const { result } = renderHook(() => 
      useTextStream({ textStream: 'Hello' })
    )
    
    expect(Array.isArray(result.current.segments)).toBe(true)
  })
})

