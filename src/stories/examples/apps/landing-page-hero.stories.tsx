import type { Meta, StoryObj } from '@storybook/react';
import LandingPageHero from '@/layouts/LandingPageHero';

const meta: Meta = {
  title: 'Examples/Landing Page Hero',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const LandingHeroExample: Story = {
  render: () => (
    <LandingPageHero />
  ),
};

