import type { Meta, StoryObj } from "@storybook/react"
import { ChatLayout } from "@/layouts/ai/ChatLayout"

const meta: Meta<typeof ChatLayout> = {
  title: "AI/Examples/Chat Layout",
  component: ChatLayout,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof ChatLayout>

export const Default: Story = {
  render: () => (
        <ChatLayout />
  ),
}

