import type { Meta, StoryObj } from '@storybook/react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import { PackageOpen } from 'lucide-react';

const meta: Meta<typeof Empty> = {
  title: 'UI/Empty',
  component: Empty,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyMedia>
            <PackageOpen className="size-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No data available</EmptyTitle>
        <EmptyDescription>
            There is no data to display at the moment.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create New</Button>
      </EmptyContent>
    </Empty>
  ),
};

