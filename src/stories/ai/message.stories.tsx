import type { Meta, StoryObj } from '@storybook/react';
import { Message, MessageAvatar, MessageContent, MessageActions, MessageAction } from '../../components/ai/message';
import { Copy, ThumbsUp } from 'lucide-react';

const meta: Meta<typeof Message> = {
  title: 'AI/Message',
  component: Message,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Message>;

export const UserMessage: Story = {
  render: (args) => (
    <Message {...args} className="flex-row-reverse">
        <MessageAvatar src="https://github.com/shadcn.png" alt="User" />
        <MessageContent className="bg-primary text-primary-foreground">
            Hello, how are you?
        </MessageContent>
    </Message>
  ),
};

export const AIMessage: Story = {
  render: (args) => (
    <Message {...args}>
        <MessageAvatar src="https://github.com/openai.png" alt="AI" fallback="AI" />
        <MessageContent markdown>
            I'm doing well, thank you! **How can I help you today?**
            
            Here is a list:
            - Item 1
            - Item 2
        </MessageContent>
    </Message>
  ),
};

export const WithActions: Story = {
  render: (args) => (
    <Message {...args}>
        <MessageAvatar src="https://github.com/openai.png" alt="AI" fallback="AI" />
        <div className="flex flex-col gap-2">
            <MessageContent>
                Here is the generated code.
            </MessageContent>
            <MessageActions>
                <MessageAction tooltip="Copy code">
                    <Copy className="w-4 h-4" />
                </MessageAction>
                <MessageAction tooltip="Helpful">
                    <ThumbsUp className="w-4 h-4" />
                </MessageAction>
            </MessageActions>
        </div>
    </Message>
  ),
};

