import type { Meta, StoryObj } from '@storybook/react';
import { SystemMessage } from '../../components/ai/system-message';
import { Terminal } from 'lucide-react';

const meta: Meta<typeof SystemMessage> = {
  title: 'AI/SystemMessage',
  component: SystemMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SystemMessage>;

export const Action: Story = {
  args: {
    children: 'This is a system action message.',
    variant: 'action',
  },
};

export const Error: Story = {
  args: {
    children: 'An error occurred while processing.',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'This action might be risky.',
    variant: 'warning',
  },
};

export const ActionFilled: Story = {
  args: {
    children: 'Filled action message.',
    variant: 'action',
    fill: true,
  },
};

export const ErrorFilled: Story = {
  args: {
    children: 'Filled error message.',
    variant: 'error',
    fill: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    children: 'Custom icon message.',
    icon: <Terminal className="w-4 h-4" />,
  },
};

export const HiddenIcon: Story = {
  args: {
    children: 'Message with hidden icon.',
    isIconHidden: true,
  },
};

export const WithCTA: Story = {
  args: {
    children: 'Operation completed successfully.',
    cta: {
      label: 'View Logs',
    },
  },
};

