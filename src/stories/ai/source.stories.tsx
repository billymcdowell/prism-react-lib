import type { Meta, StoryObj } from '@storybook/react';
import { Source, SourceTrigger, SourceContent } from '../../components/ai/source';

const meta: Meta<typeof Source> = {
  title: 'AI/Source',
  component: Source,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Source>;

export const Default: Story = {
  args: {
    href: 'https://example.com',
    children: (
      <>
        <SourceTrigger />
        <SourceContent title="Example Domain" description="This domain is for use in illustrative examples in documents." />
      </>
    ),
  },
};

export const WithFavicon: Story = {
  args: {
    href: 'https://google.com',
    children: (
      <>
        <SourceTrigger showFavicon />
        <SourceContent title="Google" description="Search the world's information, including webpages, images, videos and more." />
      </>
    ),
  },
};

export const CustomLabel: Story = {
  args: {
    href: 'https://github.com',
    children: (
      <>
        <SourceTrigger label="GitHub" showFavicon />
        <SourceContent title="GitHub" description="GitHub is where over 100 million developers shape the future of software, together." />
      </>
    ),
  },
};

