import type { Meta, StoryObj } from '@storybook/react';
import LandingPagePricing from '@/layouts/LandingPagePricing';

const meta: Meta = {
  title: 'Examples/Landing Page Pricing',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const LandingPricingExample: Story = {
  render: () => (
    <LandingPagePricing />
  ),
};

