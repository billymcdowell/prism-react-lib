import type { Meta, StoryObj } from '@storybook/react';
import ChatLayout from '@/layouts/ChatLayout';

const meta: Meta = {
  title: 'Examples/Chat',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const ChatExample: Story = {
  render: () => (
    <ChatLayout />
  ),
};

