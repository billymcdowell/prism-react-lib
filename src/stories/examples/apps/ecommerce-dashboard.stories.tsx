import type { Meta, StoryObj } from '@storybook/react';
import EcommerceDashboard from '@/layouts/EcommerceDashboard';

const meta: Meta = {
  title: 'Examples/Ecommerce Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const EcommerceExample: Story = {
  render: () => (
    <EcommerceDashboard />
  ),
};

