"use client"

import { FeedbackBar } from "@/components/ai/feedback-bar"
import { PromptSuggestion } from "@/components/ai/prompt-suggestion"
import { ResponseStream } from "@/components/ai/response-stream"
import { TextShimmer } from "@/components/ai/text-shimmer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bot, PenTool, RefreshCw, Sparkles } from "lucide-react"
import { useState } from "react"

const SUGGESTIONS = [
  "Write a blog post about AI UI design",
  "Draft a professional email to a client",
  "Create a poem about coding",
  "Summarize the benefits of React Server Components",
]

export function CreativeWriterLayout() {
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [output, setOutput] = useState<string | null>(null)

  const handleGenerate = (prompt: string = input) => {
    if (!prompt.trim()) return
    
    setInput(prompt)
    setIsGenerating(true)
    setOutput(null)

    // Simulate stream start
    setTimeout(() => {
      setIsGenerating(false)
      setOutput(
        "In the evolving landscape of user interface design, Artificial Intelligence has emerged as a transformative force. It's not just about automating tasks; it's about creating interfaces that understand, anticipate, and adapt to human needs. \n\nThe synergy between AI and UI design is paving the way for hyper-personalized experiences. Imagine a dashboard that reconfigures itself based on your daily workflow, or a creative tool that offers suggestions before you even realize you're stuck. This is the promise of AI-driven design: a future where technology feels less like a tool and more like a collaborative partner."
      )
    }, 1500)
  }

  return (
    <div className="grid h-full min-h-[600px] grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Sidebar / Controls */}
      <div className="space-y-6 lg:col-span-1">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Creative Studio</h2>
          <p className="text-muted-foreground">
            Your AI-powered writing partner.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Prompt</label>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe what you want to write..."
              className="min-h-[150px] resize-none"
            />
          </div>
          
          <Button 
            className="w-full" 
            onClick={() => handleGenerate()}
            disabled={!input.trim() || isGenerating}
          >
            {isGenerating ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <PenTool className="mr-2 h-4 w-4" />
                Start Writing
              </>
            )}
          </Button>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase text-muted-foreground">
            Suggestions
          </label>
          <div className="flex flex-col gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <PromptSuggestion
                key={suggestion}
                onClick={() => handleGenerate(suggestion)}
                className="w-full justify-start text-left"
              >
                {suggestion}
              </PromptSuggestion>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
        <div className="mb-4 flex items-center justify-between border-b pb-4">
           <div className="flex items-center gap-2">
             <Bot className="h-5 w-5 text-primary" />
             <span className="font-semibold">Draft Output</span>
           </div>
           {output && (
             <Button variant="ghost" size="sm" onClick={() => handleGenerate()}>
               <RefreshCw className="mr-2 h-4 w-4" />
               Regenerate
             </Button>
           )}
        </div>

        <div className="flex-1">
          {isGenerating ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-muted-foreground">
               <TextShimmer className="text-xl font-medium">
                 Crafting your content...
               </TextShimmer>
               <p className="text-sm">Analyzing context and tone</p>
            </div>
          ) : output ? (
            <div className="prose prose-zinc dark:prose-invert max-w-none">
               <ResponseStream 
                 textStream={output} 
                 speed={40} 
                 className="whitespace-pre-wrap leading-relaxed"
               />
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-muted-foreground/50">
              <PenTool className="mb-4 h-12 w-12" />
              <p>Ready to create. Enter a prompt to begin.</p>
            </div>
          )}
        </div>

        {output && !isGenerating && (
          <div className="mt-6">
             <FeedbackBar
               title="How was this draft?"
               onHelpful={() => alert("Thanks for the feedback!")}
               onNotHelpful={() => alert("We'll try to improve.")}
             />
          </div>
        )}
      </div>
    </div>
  )
}

