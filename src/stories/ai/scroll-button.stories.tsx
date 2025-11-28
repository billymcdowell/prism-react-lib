import type { Meta, StoryObj } from '@storybook/react';
import { ScrollButton } from '../../components/ai/scroll-button';
import { StickToBottom } from 'use-stick-to-bottom';

const meta: Meta<typeof ScrollButton> = {
  title: 'AI/ScrollButton',
  component: ScrollButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '200px', width: '100%', overflow: 'hidden', border: '1px solid #ccc', position: 'relative' }}>
        <StickToBottom className="h-full w-full overflow-auto p-4">
          <StickToBottom.Content>
            <div style={{ height: '150px' }}>
                Scroll down to see content...
            </div>
             <div style={{ height: '400px', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
                Content...
            </div>
          </StickToBottom.Content>
          <div style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 10 }}>
            <Story />
          </div>
        </StickToBottom>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Default: Story = {
  args: {},
};

