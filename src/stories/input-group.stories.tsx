import type { Meta, StoryObj } from '@storybook/react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';
import { Search, User } from 'lucide-react';

const meta: Meta<typeof InputGroup> = {
  title: 'UI/InputGroup',
  component: InputGroup,
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <InputGroup {...args}>
        <InputGroupAddon>
          <User className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" />
      </InputGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <InputGroup {...args}>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <InputGroup {...args}>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
  ),
};

