import type { Meta, StoryObj } from '@storybook/react';
import { Tool } from '../../components/ai/tool';

const meta: Meta<typeof Tool> = {
  title: 'AI/Tool',
  component: Tool,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tool>;

export const InputStreaming: Story = {
  args: {
    toolPart: {
      type: 'calculator',
      state: 'input-streaming',
      toolCallId: 'call_123',
    },
    defaultOpen: true,
  },
};

export const InputAvailable: Story = {
  args: {
    toolPart: {
      type: 'weather_api',
      state: 'input-available',
      input: { city: 'San Francisco', unit: 'celsius' },
      toolCallId: 'call_456',
    },
    defaultOpen: true,
  },
};

export const OutputAvailable: Story = {
  args: {
    toolPart: {
      type: 'search',
      state: 'output-available',
      input: { query: 'React hooks' },
      output: { results: ['Result 1', 'Result 2'] },
      toolCallId: 'call_789',
    },
    defaultOpen: true,
  },
};

export const OutputError: Story = {
  args: {
    toolPart: {
      type: 'database',
      state: 'output-error',
      input: { query: 'SELECT * FROM users' },
      errorText: 'Connection timeout',
      toolCallId: 'call_000',
    },
    defaultOpen: true,
  },
};

