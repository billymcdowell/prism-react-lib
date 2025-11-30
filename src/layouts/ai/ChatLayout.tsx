"use client"

import {
  ChatContainerContent,
  ChatContainerRoot
} from "@/components/ai/chat-container"
import { Loader } from "@/components/ai/loader"
import { Message, MessageAvatar, MessageContent } from "@/components/ai/message"
import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ai/prompt-input"
import { ResponseStream } from "@/components/ai/response-stream"
import { ScrollButton } from "@/components/ai/scroll-button"
import { SystemMessage } from "@/components/ai/system-message"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { useState } from "react"

const INITIAL_MESSAGES = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! How can I help you today?",
  },
]

export function ChatLayout() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate response
    setTimeout(() => {
      const aiMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: "I am a simulated AI response. I can help you with various tasks.",
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex h-[600px] w-full flex-col rounded-lg border shadow-sm">
      <div className="flex items-center border-b px-4 py-3">
        <h2 className="text-lg font-semibold">AI Chat Assistant</h2>
      </div>

      <ChatContainerRoot className="flex-1 p-4">
        <ChatContainerContent className="space-y-4">
          <SystemMessage>
            This is a simulated chat environment. Messages are not persisted.
          </SystemMessage>
          
          {messages.map((message) => (
            <Message
              key={message.id}
              className={message.role === "user" ? "flex-row-reverse" : ""}
            >
              <MessageAvatar
                src={
                  message.role === "user"
                    ? "https://github.com/shadcn.png"
                    : "https://github.com/openai.png"
                }
                alt={message.role}
                fallback={message.role === "user" ? "US" : "AI"}
              />
              <MessageContent
                className={
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }
              >
                {message.role === "assistant" ? (
                  <ResponseStream textStream={message.content} />
                ) : (
                  message.content
                )}
              </MessageContent>
            </Message>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-muted-foreground pl-12">
              <Loader variant="typing" size="sm" />
            </div>
          )}
        </ChatContainerContent>
        <div className="absolute bottom-20 right-8">
            <ScrollButton />
        </div>
      </ChatContainerRoot>

      <div className="p-4 border-t">
        <PromptInput
          value={input}
          onValueChange={setInput}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          className="bg-background"
        >
          <PromptInputTextarea placeholder="Type a message..." />
          <PromptInputActions className="justify-end pt-2">
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!input.trim() || isLoading}
            >
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </PromptInputActions>
        </PromptInput>
      </div>
    </div>
  )
}

