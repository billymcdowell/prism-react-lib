// @vitest-environment jsdom
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import { describe, it, expect, afterEach, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { Markdown } from '@/components/ai/markdown'
import * as React from 'react'

expect.extend(matchers)

// Mock shiki for code highlighting
vi.mock('shiki', () => ({
  codeToHtml: vi.fn().mockResolvedValue('<pre><code>highlighted code</code></pre>'),
}))

afterEach(() => {
  cleanup()
})

describe('Markdown', () => {
  it('renders plain text', () => {
    render(<Markdown>Hello World</Markdown>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<Markdown># Heading 1</Markdown>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1')
  })

  it('renders multiple heading levels', () => {
    render(
      <Markdown>{`# Heading 1
## Heading 2
### Heading 3`}</Markdown>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Heading 2')
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Heading 3')
  })

  it('renders bold text', () => {
    render(<Markdown>**Bold text**</Markdown>)
    expect(screen.getByText('Bold text').tagName).toBe('STRONG')
  })

  it('renders italic text', () => {
    render(<Markdown>*Italic text*</Markdown>)
    expect(screen.getByText('Italic text').tagName).toBe('EM')
  })

  it('renders links', () => {
    render(<Markdown>[Click here](https://example.com)</Markdown>)
    const link = screen.getByRole('link', { name: 'Click here' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders unordered lists', () => {
    render(
      <Markdown>{`- Item 1
- Item 2
- Item 3`}</Markdown>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('renders ordered lists', () => {
    render(
      <Markdown>{`1. First
2. Second
3. Third`}</Markdown>
    )
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
    expect(screen.getByText('Third')).toBeInTheDocument()
  })

  it('renders inline code', () => {
    render(<Markdown>Use `const` for constants</Markdown>)
    expect(screen.getByText('const')).toBeInTheDocument()
  })

  it('renders code blocks', async () => {
    render(
      <Markdown>{`\`\`\`javascript
const x = 1;
\`\`\``}</Markdown>
    )

    // Initially should show plain code
    await waitFor(() => {
      expect(screen.getByText('const x = 1;')).toBeInTheDocument()
    })
  })

  it('renders blockquotes', () => {
    render(<Markdown>{`> This is a quote`}</Markdown>)
    expect(screen.getByText('This is a quote')).toBeInTheDocument()
  })

  it('renders horizontal rules', () => {
    render(<Markdown>---</Markdown>)
    expect(document.querySelector('hr')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Markdown className="custom-markdown">Content</Markdown>)
    expect(document.querySelector('.custom-markdown')).toBeInTheDocument()
  })

  it('accepts custom id', () => {
    render(<Markdown id="custom-id">Content</Markdown>)
    // The id is used internally for block keys
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders GFM tables', () => {
    render(
      <Markdown>{`| Header 1 | Header 2 |
| --- | --- |
| Cell 1 | Cell 2 |`}</Markdown>
    )
    expect(screen.getByText('Header 1')).toBeInTheDocument()
    expect(screen.getByText('Cell 1')).toBeInTheDocument()
  })

  it('renders task lists (GFM)', () => {
    render(
      <Markdown>{`- [x] Completed
- [ ] Incomplete`}</Markdown>
    )
    expect(screen.getByText('Completed')).toBeInTheDocument()
    expect(screen.getByText('Incomplete')).toBeInTheDocument()
  })

  it('renders strikethrough (GFM)', () => {
    render(<Markdown>~~strikethrough~~</Markdown>)
    expect(screen.getByText('strikethrough').tagName).toBe('DEL')
  })

  it('handles empty content', () => {
    render(<Markdown>{''}</Markdown>)
    // Should render without crashing
    expect(document.body).toBeInTheDocument()
  })

  it('renders paragraphs', () => {
    render(
      <Markdown>{`First paragraph.

Second paragraph.`}</Markdown>
    )
    expect(screen.getByText('First paragraph.')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph.')).toBeInTheDocument()
  })

  it('renders images', () => {
    render(<Markdown>![Alt text](https://example.com/image.png)</Markdown>)
    const img = screen.getByRole('img', { name: 'Alt text' })
    expect(img).toHaveAttribute('src', 'https://example.com/image.png')
  })

  it('supports custom components', () => {
    const CustomParagraph = ({ children }: { children: React.ReactNode }) => (
      <p data-testid="custom-p">{children}</p>
    )
    
    render(
      <Markdown components={{ p: CustomParagraph }}>
        Custom paragraph
      </Markdown>
    )
    
    expect(screen.getByTestId('custom-p')).toHaveTextContent('Custom paragraph')
  })
})

