import type { Meta, StoryObj } from '@storybook/react';
import { PromptSuggestion } from '../../components/ai/prompt-suggestion';

const meta: Meta<typeof PromptSuggestion> = {
  title: 'AI/PromptSuggestion',
  component: PromptSuggestion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PromptSuggestion>;

export const Default: Story = {
  args: {
    children: 'Tell me a joke',
  },
};

export const Highlighted: Story = {
  args: {
    children: 'Write a story about a robot',
    highlight: 'robot',
  },
};

export const HighlightedStart: Story = {
  args: {
    children: 'Explain quantum physics',
    highlight: 'Explain',
  },
};

export const CustomVariant: Story = {
  args: {
    children: 'Regenerate response',
    variant: 'secondary',
  },
};

