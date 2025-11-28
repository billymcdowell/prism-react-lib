import type { Meta, StoryObj } from '@storybook/react';
import FileManager from '@/layouts/FileManager';

const meta: Meta = {
  title: 'Examples/File Manager',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const FileManagerExample: Story = {
  render: () => (
    <FileManager />
  ),
};

