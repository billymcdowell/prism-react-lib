import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

