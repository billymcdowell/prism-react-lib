import type { Meta, StoryObj } from '@storybook/react';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemActions,
} from '@/components/ui/item';
import { Button } from '@/components/ui/button';
import { ChevronRight, LayoutGrid } from 'lucide-react';

const meta: Meta<typeof Item> = {
  title: 'UI/Item',
  component: Item,
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: (args) => (
    <Item className="w-[400px]" {...args}>
      <ItemMedia>
        <LayoutGrid className="h-5 w-5 text-muted-foreground" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Appearance</ItemTitle>
        <ItemDescription>
          Customize the look and feel of the application.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <Item className="w-[400px]" {...args}>
      <ItemMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Unsplash"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Project Cover</ItemTitle>
        <ItemDescription>
          The cover image for your project.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
};

