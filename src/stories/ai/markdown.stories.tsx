import type { Meta, StoryObj } from '@storybook/react';
import { Markdown } from '../../components/ai/markdown';

const meta: Meta<typeof Markdown> = {
  title: 'AI/Markdown',
  component: Markdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Markdown>;

const markdownContent = `
# Heading 1
## Heading 2

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello Code Block');
\`\`\`

And some \`inline code\`.
`;

export const Default: Story = {
  args: {
    children: markdownContent,
  },
};

export const WithCodeBlock: Story = {
  args: {
    children: '```typescript\nconst x: number = 10;\n```',
  },
};

