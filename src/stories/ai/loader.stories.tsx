import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../../components/ai/loader';

const meta: Meta<typeof Loader> = {
  title: 'AI/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'circular', 'classic', 'pulse', 'pulse-dot', 'dots', 'typing',
        'wave', 'bars', 'terminal', 'text-blink', 'text-shimmer', 'loading-dots'
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Circular: Story = { args: { variant: 'circular' } };
export const Classic: Story = { args: { variant: 'classic' } };
export const Pulse: Story = { args: { variant: 'pulse' } };
export const PulseDot: Story = { args: { variant: 'pulse-dot' } };
export const Dots: Story = { args: { variant: 'dots' } };
export const Typing: Story = { args: { variant: 'typing' } };
export const Wave: Story = { args: { variant: 'wave' } };
export const Bars: Story = { args: { variant: 'bars' } };
export const Terminal: Story = { args: { variant: 'terminal' } };
export const TextBlink: Story = { args: { variant: 'text-blink', text: 'Thinking' } };
export const TextShimmer: Story = { args: { variant: 'text-shimmer', text: 'Generating' } };
export const LoadingDots: Story = { args: { variant: 'loading-dots', text: 'Processing' } };

export const LargeSize: Story = {
    args: {
        variant: 'circular',
        size: 'lg',
    }
}

export const SmallSize: Story = {
    args: {
        variant: 'circular',
        size: 'sm',
    }
}

