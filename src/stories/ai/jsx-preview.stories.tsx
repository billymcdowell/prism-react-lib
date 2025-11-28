import type { Meta, StoryObj } from '@storybook/react';
import { JSXPreview } from '../../components/ai/jsx-preview';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof JSXPreview> = {
  title: 'AI/JSXPreview',
  component: JSXPreview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof JSXPreview>;

const components = { Button };

export const Default: Story = {
  args: {
    jsx: '<div className="p-4 bg-blue-100 rounded">Hello <strong>World</strong></div>',
  },
};

export const WithComponents: Story = {
  args: {
    jsx: '<Button variant="destructive">Click Me</Button>',
    components: components,
  },
};

export const Streaming: Story = {
  args: {
    jsx: '<div className="p-4"><span',
    isStreaming: true,
  },
};

