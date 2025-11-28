import type { Meta, StoryObj } from '@storybook/react';
import { Steps, StepsItem, StepsTrigger, StepsContent } from '../../components/ai/steps';
import { Calculator } from 'lucide-react';

const meta: Meta<typeof Steps> = {
  title: 'AI/Steps',
  component: Steps,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  render: (args) => (
    <Steps {...args}>
      <StepsTrigger>
        <StepsItem>Thinking Process</StepsItem>
      </StepsTrigger>
      <StepsContent>
        <StepsItem>Analyzing input...</StepsItem>
        <StepsItem>Searching knowledge base...</StepsItem>
        <StepsItem>Formulating response...</StepsItem>
      </StepsContent>
    </Steps>
  ),
  args: {
    defaultOpen: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Steps {...args}>
      <StepsTrigger leftIcon={<Calculator className="w-4 h-4" />}>
        <StepsItem>Calculations</StepsItem>
      </StepsTrigger>
      <StepsContent>
        <StepsItem>2 + 2 = 4</StepsItem>
        <StepsItem>4 * 4 = 16</StepsItem>
      </StepsContent>
    </Steps>
  ),
  args: {
    defaultOpen: true,
  },
};

export const ClosedByDefault: Story = {
  render: (args) => (
    <Steps {...args}>
      <StepsTrigger>
        <StepsItem>Hidden Steps</StepsItem>
      </StepsTrigger>
      <StepsContent>
        <StepsItem>You found me!</StepsItem>
      </StepsContent>
    </Steps>
  ),
  args: {
    defaultOpen: false,
  },
};

