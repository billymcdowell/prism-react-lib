import type { Meta, StoryObj } from '@storybook/react';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: (args) => (
    <Kbd {...args}>⌘ K</Kbd>
  ),
};

export const Group: Story = {
  render: (args) => (
    <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

