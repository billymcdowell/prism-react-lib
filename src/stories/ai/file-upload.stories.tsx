import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, FileUploadTrigger, FileUploadContent } from '../../components/ai/file-upload';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const meta: Meta<typeof FileUpload> = {
  title: 'AI/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: (args) => (
    <FileUpload {...args}>
        <FileUploadTrigger asChild>
            <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
            </Button>
        </FileUploadTrigger>
        <FileUploadContent>
            <div className="p-8 bg-background rounded-lg shadow-lg text-center">
                <p className="text-lg font-medium">Drop files here</p>
            </div>
        </FileUploadContent>
    </FileUpload>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <FileUpload {...args} disabled>
        <FileUploadTrigger asChild>
             <Button variant="outline" disabled>
                <Upload className="w-4 h-4 mr-2" />
                Upload Files (Disabled)
            </Button>
        </FileUploadTrigger>
    </FileUpload>
  ),
};

