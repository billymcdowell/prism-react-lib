import type { Meta, StoryObj } from '@storybook/react';
import { TextShimmer } from '../../components/ai/text-shimmer';

const meta: Meta<typeof TextShimmer> = {
  title: 'AI/TextShimmer',
  component: TextShimmer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextShimmer>;

export const Default: Story = {
  args: {
    children: 'Shimmering Text',
  },
};

export const CustomDuration: Story = {
  args: {
    children: 'Fast Shimmer',
    duration: 1,
  },
};

export const CustomSpread: Story = {
  args: {
    children: 'Wide Spread Shimmer',
    spread: 40,
  },
};

export const AsHeading: Story = {
  args: {
    as: 'h1',
    className: 'text-2xl font-bold',
    children: 'Shimmering Heading',
  },
};

