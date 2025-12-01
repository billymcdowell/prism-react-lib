// @vitest-environment jsdom
import { render, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach, beforeAll } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { ChartContainer, type ChartConfig } from '@/components/ui/chart'
import { Bar, BarChart } from 'recharts'
import * as React from 'react'

expect.extend(matchers)

// Mock ResizeObserver for Recharts
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

describe('Chart', () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  it('renders chart container', () => {
    const { container } = render(
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
    
    // Recharts renders an SVG/Div structure. We check for the container class or basic existence.
    // Note: Recharts is often hard to test in JSDOM fully without mocks, but container should render.
    expect(container.querySelector('[data-slot="chart"]')).toBeInTheDocument()
  })
})

