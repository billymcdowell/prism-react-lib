import type { Meta, StoryObj } from '@storybook/react';
import { Reasoning, ReasoningTrigger, ReasoningContent } from '../../components/ai/reasoning';

const meta: Meta<typeof Reasoning> = {
  title: 'AI/Reasoning',
  component: Reasoning,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Reasoning>;

export const Default: Story = {
  render: (args) => (
    <Reasoning {...args}>
      <ReasoningTrigger>View Reasoning</ReasoningTrigger>
      <ReasoningContent>
        This is the reasoning behind the response. It explains the steps taken to arrive at the answer.
      </ReasoningContent>
    </Reasoning>
  ),
};

export const OpenByDefault: Story = {
  render: (args) => (
    <Reasoning {...args}>
      <ReasoningTrigger>Reasoning (Open)</ReasoningTrigger>
      <ReasoningContent>
        The reasoning is already visible because `open` prop is set to true.
      </ReasoningContent>
    </Reasoning>
  ),
  args: {
    open: true,
  },
};

export const Streaming: Story = {
  render: (args) => (
    <Reasoning {...args}>
      <ReasoningTrigger>Streaming Reasoning</ReasoningTrigger>
      <ReasoningContent>
        This reasoning block automatically opens because `isStreaming` is true.
      </ReasoningContent>
    </Reasoning>
  ),
  args: {
    isStreaming: true,
  },
};

export const WithMarkdown: Story = {
  render: (args) => (
    <Reasoning {...args}>
      <ReasoningTrigger>Markdown Reasoning</ReasoningTrigger>
      <ReasoningContent markdown>
        **Bold Step 1**
        
        - List item A
        - List item B
        
        `inline code`
      </ReasoningContent>
    </Reasoning>
  ),
};

