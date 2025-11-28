import type { Meta, StoryObj } from "@storybook/react"
import { ResearchAssistantLayout } from "@/layouts/ai/ResearchAssistantLayout"

const meta: Meta<typeof ResearchAssistantLayout> = {
  title: "AI/Examples/Research Assistant Layout",
  component: ResearchAssistantLayout,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof ResearchAssistantLayout>

export const Default: Story = {
  render: () => (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50 dark:bg-zinc-900">
      <ResearchAssistantLayout />
    </div>
  ),
}

