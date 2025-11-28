import type { Meta, StoryObj } from '@storybook/react';
import { ChatContainerRoot, ChatContainerContent } from '../../components/ai/chat-container';

const meta: Meta<typeof ChatContainerRoot> = {
  title: 'AI/ChatContainer',
  component: ChatContainerRoot,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '300px', border: '1px solid #ccc' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChatContainerRoot>;

export const Default: Story = {
  render: (args) => (
    <ChatContainerRoot {...args} className="h-full p-4">
      <ChatContainerContent className="gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`p-3 rounded-lg max-w-[80%] ${i % 2 === 0 ? 'bg-muted self-start' : 'bg-primary text-primary-foreground self-end'}`}>
            Message {i + 1}
          </div>
        ))}
      </ChatContainerContent>
    </ChatContainerRoot>
  ),
};

