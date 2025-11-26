import type { Meta, StoryObj } from '@storybook/react';
import KanbanBoard from '../layouts/KanbanBoard';

const meta: Meta = {
  title: 'Examples/Kanban Board',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const KanbanExample: Story = {
  render: () => (
    <KanbanBoard />
  ),
};

