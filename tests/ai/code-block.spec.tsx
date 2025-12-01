// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from '@/components/ai/code-block'
import * as React from 'react'

expect.extend(matchers)

// Mock shiki
vi.mock('shiki', () => ({
  codeToHtml: vi.fn().mockResolvedValue('<pre><code class="highlighted">const x = 1;</code></pre>'),
}))

afterEach(() => {
  cleanup()
})

describe('CodeBlock', () => {
  it('renders CodeBlock container', () => {
    render(
      <CodeBlock data-testid="code-block">
        <div>Code content</div>
      </CodeBlock>
    )

    expect(screen.getByTestId('code-block')).toBeInTheDocument()
  })

  it('applies custom className to CodeBlock', () => {
    render(
      <CodeBlock className="custom-code-block" data-testid="code-block">
        <div>Content</div>
      </CodeBlock>
    )

    expect(screen.getByTestId('code-block')).toHaveClass('custom-code-block')
  })

  it('renders CodeBlock with default styling classes', () => {
    render(
      <CodeBlock data-testid="code-block">
        <div>Content</div>
      </CodeBlock>
    )

    const codeBlock = screen.getByTestId('code-block')
    expect(codeBlock).toHaveClass('rounded-xl')
    expect(codeBlock).toHaveClass('border')
  })
})

describe('CodeBlockCode', () => {
  it('renders plain code as fallback initially', () => {
    render(<CodeBlockCode code="const x = 1;" />)

    expect(screen.getByText('const x = 1;')).toBeInTheDocument()
  })

  it('renders highlighted code after shiki processes it', async () => {
    render(<CodeBlockCode code="const x = 1;" />)

    await waitFor(() => {
      expect(document.querySelector('.highlighted')).toBeInTheDocument()
    })
  })

  it('handles empty code', () => {
    render(<CodeBlockCode code="" data-testid="code" />)

    expect(screen.getByTestId('code')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<CodeBlockCode code="test" className="custom-code" data-testid="code" />)

    expect(screen.getByTestId('code')).toHaveClass('custom-code')
  })

  it('accepts language prop', async () => {
    const { codeToHtml } = await import('shiki')
    render(<CodeBlockCode code="print('hello')" language="python" />)

    await waitFor(() => {
      expect(codeToHtml).toHaveBeenCalledWith(
        "print('hello')",
        expect.objectContaining({ lang: 'python' })
      )
    })
  })

  it('accepts theme prop', async () => {
    const { codeToHtml } = await import('shiki')
    render(<CodeBlockCode code="const x = 1;" theme="github-dark" />)

    await waitFor(() => {
      expect(codeToHtml).toHaveBeenCalledWith(
        'const x = 1;',
        expect.objectContaining({ theme: 'github-dark' })
      )
    })
  })

  it('uses tsx as default language', async () => {
    const { codeToHtml } = await import('shiki')
    render(<CodeBlockCode code="const x: number = 1;" />)

    await waitFor(() => {
      expect(codeToHtml).toHaveBeenCalledWith(
        'const x: number = 1;',
        expect.objectContaining({ lang: 'tsx' })
      )
    })
  })
})

describe('CodeBlockGroup', () => {
  it('renders children', () => {
    render(
      <CodeBlockGroup>
        <span>File name</span>
        <button>Copy</button>
      </CodeBlockGroup>
    )

    expect(screen.getByText('File name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <CodeBlockGroup className="custom-group" data-testid="group">
        <span>Content</span>
      </CodeBlockGroup>
    )

    expect(screen.getByTestId('group')).toHaveClass('custom-group')
  })

  it('has flex layout styling', () => {
    render(
      <CodeBlockGroup data-testid="group">
        <span>Content</span>
      </CodeBlockGroup>
    )

    expect(screen.getByTestId('group')).toHaveClass('flex')
    expect(screen.getByTestId('group')).toHaveClass('items-center')
    expect(screen.getByTestId('group')).toHaveClass('justify-between')
  })
})

describe('CodeBlock Integration', () => {
  it('renders complete code block with header and code', async () => {
    render(
      <CodeBlock>
        <CodeBlockGroup>
          <span>example.tsx</span>
          <button>Copy</button>
        </CodeBlockGroup>
        <CodeBlockCode code="const greeting = 'Hello';" language="typescript" />
      </CodeBlock>
    )

    expect(screen.getByText('example.tsx')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
    
    // Initially shows plain code
    expect(screen.getByText("const greeting = 'Hello';")).toBeInTheDocument()
  })
})

