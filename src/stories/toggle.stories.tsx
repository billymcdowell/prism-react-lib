import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: (args) => (
    <Toggle variant="outline" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle italic" {...args}>
      <Bold className="mr-2 h-4 w-4" />
      Bold
    </Toggle>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Toggle size="sm" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Toggle size="lg" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

