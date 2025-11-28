import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from '../../components/ai/code-block';

const meta: Meta<typeof CodeBlock> = {
  title: 'AI/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const tsCode = `import React from 'react';

export function HelloWorld() {
  return <div>Hello World</div>;
}`;

const pyCode = `def hello_world():
    print("Hello World")`;

export const TypeScript: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockCode code={tsCode} language="typescript" />
    </CodeBlock>
  ),
};

export const Python: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockCode code={pyCode} language="python" />
    </CodeBlock>
  ),
};

export const WithGroup: Story = {
  render: (args) => (
    <CodeBlock {...args}>
      <CodeBlockGroup className="border-b p-2 bg-muted/50">
        <span className="text-xs text-muted-foreground">example.ts</span>
      </CodeBlockGroup>
      <CodeBlockCode code={tsCode} language="typescript" />
    </CodeBlock>
  ),
};

