import type { Meta, StoryObj } from "@storybook/react"
import { MultimodalInputLayout } from "@/layouts/ai/MultimodalInputLayout"

const meta: Meta<typeof MultimodalInputLayout> = {
  title: "AI/Examples/Multimodal Input Layout",
  component: MultimodalInputLayout,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof MultimodalInputLayout>

export const Default: Story = {
  render: () => (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl h-[800px] border rounded-xl bg-background shadow-sm overflow-hidden">
        <MultimodalInputLayout />
      </div>
    </div>
  ),
}

