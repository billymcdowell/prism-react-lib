import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '@/components/ui/date-input';
import { useState } from 'react';

const meta: Meta<typeof DateInput> = {
  title: 'UI/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date>(new Date());
    return (
      <div className="flex flex-col gap-4 w-[300px]">
        <DateInput
          {...args}
          value={date}
          onChange={(newDate) => setDate(newDate)}
        />
        <div className="text-sm text-muted-foreground">
          Selected: {date.toLocaleDateString()}
        </div>
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: (args) => {
    // Fixed date: Jan 15, 2024
    const [date, setDate] = useState<Date>(new Date(2024, 0, 15));
    return (
      <div className="flex flex-col gap-4 w-[300px]">
        <DateInput
          {...args}
          value={date}
          onChange={(newDate) => setDate(newDate)}
        />
        <div className="text-sm text-muted-foreground">
          Selected: {date.toLocaleDateString()}
        </div>
      </div>
    );
  },
};

