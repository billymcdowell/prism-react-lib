import type { Meta, StoryObj } from "@storybook/react"
import { CreativeWriterLayout } from "@/layouts/ai/CreativeWriterLayout"

const meta: Meta<typeof CreativeWriterLayout> = {
  title: "AI/Examples/Creative Writer Layout",
  component: CreativeWriterLayout,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof CreativeWriterLayout>

export const Default: Story = {
  render: () => (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50 dark:bg-zinc-900">
      <CreativeWriterLayout />
    </div>
  ),
}

