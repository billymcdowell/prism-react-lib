import type { Meta, StoryObj } from '@storybook/react';
import StickerSheetLayout from '@/layouts/StickerSheetLayout';

const meta: Meta = {
  title: 'Examples/Sticker Sheet',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const StickerSheetExample: Story = {
  render: () => (
    <StickerSheetLayout />
  ),
};

