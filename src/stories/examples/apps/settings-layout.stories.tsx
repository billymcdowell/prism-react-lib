import type { Meta, StoryObj } from '@storybook/react';
import SettingsLayout from '@/layouts/SettingsLayout';

const meta: Meta = {
  title: 'Examples/Settings',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const SettingsExample: Story = {
  render: () => (
    <SettingsLayout />
  ),
};

