import type { Meta, StoryObj } from '@storybook/react';
import SocialFeed from '../layouts/SocialFeed';

const meta: Meta = {
  title: 'Examples/Social Feed',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const SocialFeedExample: Story = {
  render: () => (
    <SocialFeed />
  ),
};

