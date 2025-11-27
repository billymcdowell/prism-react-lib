import type { Meta, StoryObj } from '@storybook/react';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const meta: Meta<typeof Field> = {
  title: 'UI/Field',
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: (args) => (
    <Field className="w-[350px]" {...args}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" placeholder="hello@example.com" />
        <FieldDescription>
          We will never share your email with anyone else.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <Field className="w-[350px]" {...args}>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <FieldContent>
        <Input id="username" placeholder="shadcn" />
        <FieldError errors={[{ message: 'Username is already taken.' }]} />
      </FieldContent>
    </Field>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <FieldSet className="w-[400px]">
      <FieldTitle>Notifications</FieldTitle>
      <FieldGroup>
        <Field orientation="horizontal" {...args}>
          <FieldContent>
            <FieldLabel>Emails</FieldLabel>
            <FieldDescription>
              Receive emails about your account activity.
            </FieldDescription>
          </FieldContent>
          <Switch />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

