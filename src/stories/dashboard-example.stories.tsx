import type { Meta, StoryObj } from '@storybook/react';
import DashboardLayout from '../layouts/DashboardLayout';

const meta: Meta = {
  title: 'Examples/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;


export const DashboardExample: Story = {
  render: () => (
    <DashboardLayout />
  ),
};

