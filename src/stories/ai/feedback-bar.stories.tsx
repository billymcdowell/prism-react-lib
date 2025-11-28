import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackBar } from '../../components/ai/feedback-bar';
import { Sparkles } from 'lucide-react';

const meta: Meta<typeof FeedbackBar> = {
  title: 'AI/FeedbackBar',
  component: FeedbackBar,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackBar>;

export const Default: Story = {
  args: {
    title: 'Was this response helpful?',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Rate this generation',
    icon: <Sparkles className="w-4 h-4 text-yellow-500" />,
  },
};

