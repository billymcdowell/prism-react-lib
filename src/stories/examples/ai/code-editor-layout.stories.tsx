import type { Meta, StoryObj } from "@storybook/react"
import { CodeEditorLayout } from "@/layouts/ai/CodeEditorLayout"

const meta: Meta<typeof CodeEditorLayout> = {
  title: "AI/Examples/Code Editor Layout",
  component: CodeEditorLayout,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof CodeEditorLayout>

export const Default: Story = {
  render: () => (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50 dark:bg-zinc-900">
      <CodeEditorLayout />
    </div>
  ),
}

