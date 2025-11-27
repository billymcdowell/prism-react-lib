import type { Meta, StoryObj } from '@storybook/react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'UI/InputOTP',
  component: InputOTP,
  argTypes: {
    maxLength: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
  },
  render: ({ render, ...args }: any) => (
    <InputOTP {...args} maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

