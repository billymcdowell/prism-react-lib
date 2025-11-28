import type { Meta, StoryObj } from '@storybook/react';
import { ThinkingBar } from '../../components/ai/thinking-bar';

const meta: Meta<typeof ThinkingBar> = {
  title: 'AI/ThinkingBar',
  component: ThinkingBar,
  tags: ['autodocs'],
  args: {
    onStop: undefined,
    onClick: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof ThinkingBar>;

export const Default: Story = {
  args: {},
};

export const CustomText: Story = {
  args: {
    text: 'Generating response...',
  },
};

export const WithClickHandler: Story = {
  args: {
    text: 'Click me for details',
  },
};

export const WithStopButton: Story = {
  args: {
    stopLabel: 'Answer now',
  },
};

export const CustomStopLabel: Story = {
  args: {
    stopLabel: 'Stop generating',
  },
};

