import type { Meta, StoryObj } from '@storybook/react';
import AnalyticsDashboard from '@/layouts/AnalyticsDashboard';

const meta: Meta = {
  title: 'Examples/Analytics Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const AnalyticsExample: Story = {
  render: () => (
    <AnalyticsDashboard />
  ),
};

