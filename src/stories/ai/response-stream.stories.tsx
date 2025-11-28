import type { Meta, StoryObj } from '@storybook/react';
import { ResponseStream } from '../../components/ai/response-stream';

const meta: Meta<typeof ResponseStream> = {
  title: 'AI/ResponseStream',
  component: ResponseStream,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResponseStream>;

const longText = `This is a long text that will be streamed. 
It simulates how an LLM might respond token by token. 
We can use this to show a typewriter effect or a fade-in effect for words.`;

export const Typewriter: Story = {
  args: {
    textStream: longText,
    mode: 'typewriter',
    speed: 20,
  },
};

export const Fade: Story = {
  args: {
    textStream: longText,
    mode: 'fade',
    speed: 20,
  },
};

export const SlowSpeed: Story = {
  args: {
    textStream: 'Slowly typing...',
    speed: 5,
  },
};

export const FastSpeed: Story = {
  args: {
    textStream: 'Fast typing...',
    speed: 80,
  },
};

export const AsParagraph: Story = {
  args: {
    textStream: 'This is rendered as a paragraph tag.',
    as: 'p',
    className: 'text-lg text-blue-600',
  },
};

