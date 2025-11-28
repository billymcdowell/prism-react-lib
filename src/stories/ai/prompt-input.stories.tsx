import type { Meta, StoryObj } from '@storybook/react';
import { PromptInput, PromptInputTextarea, PromptInputActions, PromptInputAction } from '../../components/ai/prompt-input';
import { Paperclip, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof PromptInput> = {
  title: 'AI/PromptInput',
  component: PromptInput,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof PromptInput>;

export const Default: Story = {
  render: (args) => (
    <PromptInput {...args} className="w-[400px]">
        <PromptInputTextarea placeholder="Ask something..." />
    </PromptInput>
  ),
};

export const WithActions: Story = {
  render: (args) => (
    <PromptInput {...args} className="w-[400px]">
        <PromptInputTextarea placeholder="Ask something..." />
        <PromptInputActions className="justify-between mt-2">
            <PromptInputAction tooltip="Attach file">
                <Button variant="ghost" size="icon">
                    <Paperclip className="w-4 h-4" />
                </Button>
            </PromptInputAction>
             <PromptInputAction tooltip="Send">
                <Button size="icon">
                    <ArrowUp className="w-4 h-4" />
                </Button>
            </PromptInputAction>
        </PromptInputActions>
    </PromptInput>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <PromptInput {...args} className="w-[400px]" isLoading>
        <PromptInputTextarea placeholder="Processing..." />
         <PromptInputActions className="justify-end mt-2">
             <Button size="icon" disabled>
                <ArrowUp className="w-4 h-4" />
            </Button>
        </PromptInputActions>
    </PromptInput>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <PromptInput {...args} className="w-[400px]" disabled>
        <PromptInputTextarea placeholder="Input disabled" />
    </PromptInput>
  ),
};

