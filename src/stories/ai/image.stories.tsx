import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../../components/ai/image';

const meta: Meta<typeof Image> = {
  title: 'AI/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

export const FromBase64: Story = {
  args: {
    base64: base64Image,
    alt: "Placeholder Image",
    className: "w-32 h-32 bg-muted", 
  },
};

export const Loading: Story = {
  args: {
    alt: "Loading Image",
    className: "w-64 h-48",
  },
};

