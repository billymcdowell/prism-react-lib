"use client"

import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
} from "@/components/ai/chain-of-thought"
import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ai/prompt-input"
import { Source, SourceContent, SourceTrigger } from "@/components/ai/source"
import { Steps, StepsContent, StepsItem, StepsTrigger } from "@/components/ai/steps"
import { Tool } from "@/components/ai/tool"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Check, Globe, Search } from "lucide-react"
import { useState } from "react"

export function ResearchAssistantLayout() {
  const [input, setInput] = useState("")
  const [isResearching, setIsResearching] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleResearch = () => {
    if (!input.trim()) return
    setIsResearching(true)
    setResult(null)

    setTimeout(() => {
      setResult({
        topic: input,
        summary: "Based on the analysis, the topic involves multiple complex factors...",
      })
      setIsResearching(false)
    }, 3000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Deep Research Agent</h1>
        <p className="text-muted-foreground mt-2">
          Ask complex questions and watch the agent break them down.
        </p>
      </div>

      <div className="relative">
        <PromptInput
          value={input}
          onValueChange={setInput}
          onSubmit={handleResearch}
          isLoading={isResearching}
          className="shadow-lg"
        >
          <PromptInputTextarea placeholder="Research a topic..." />
          <PromptInputActions className="justify-between pt-2">
            <div className="text-xs text-muted-foreground">
              Powered by advanced reasoning models
            </div>
            <Button
              size="sm"
              onClick={handleResearch}
              disabled={!input.trim() || isResearching}
            >
              <Search className="mr-2 h-4 w-4" />
              Research
            </Button>
          </PromptInputActions>
        </PromptInput>
      </div>

      {(isResearching || result) && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Reasoning Process
            </h3>
            
            <ChainOfThought className="mb-6">
              <ChainOfThoughtStep>
                <ChainOfThoughtTrigger leftIcon={<Globe className="h-4 w-4" />}>
                  Searching Knowledge Base
                </ChainOfThoughtTrigger>
                <ChainOfThoughtContent>
                  <ChainOfThoughtItem>
                    <div className="flex items-center gap-2 mb-2">
                      <span>Found relevant sources:</span>
                      <Source href="https://en.wikipedia.org/wiki/Artificial_intelligence">
                         <SourceTrigger label="Wikipedia" />
                         <SourceContent title="Artificial Intelligence" description="Wikipedia article about AI." />
                      </Source>
                      <Source href="https://arxiv.org/">
                         <SourceTrigger label="ArXiv" />
                         <SourceContent title="ArXiv" description="Open access research papers." />
                      </Source>
                    </div>
                  </ChainOfThoughtItem>
                  <ChainOfThoughtItem>Querying index for keywords...</ChainOfThoughtItem>
                  <ChainOfThoughtItem>Found 15 relevant documents.</ChainOfThoughtItem>
                </ChainOfThoughtContent>
              </ChainOfThoughtStep>
              
              <ChainOfThoughtStep>
                <ChainOfThoughtTrigger leftIcon={<Brain className="h-4 w-4" />}>
                  Synthesizing Information
                </ChainOfThoughtTrigger>
                <ChainOfThoughtContent>
                  <Tool 
                    toolPart={{
                      type: "analyze_data",
                      state: "output-available",
                      input: { query: input, depth: "deep" },
                      output: { status: "complete", confidence: 0.95 },
                      toolCallId: "call_123"
                    }}
                    className="mb-4"
                  />
                  <ChainOfThoughtItem>Cross-referencing sources...</ChainOfThoughtItem>
                  <ChainOfThoughtItem>Identifying key contradictions...</ChainOfThoughtItem>
                </ChainOfThoughtContent>
              </ChainOfThoughtStep>

              <ChainOfThoughtStep isLast>
                <ChainOfThoughtTrigger leftIcon={<Check className="h-4 w-4" />}>
                  Finalizing Report
                </ChainOfThoughtTrigger>
                <ChainOfThoughtContent>
                  <ChainOfThoughtItem>Formatting output...</ChainOfThoughtItem>
                </ChainOfThoughtContent>
              </ChainOfThoughtStep>
            </ChainOfThought>

            <div className="border-t pt-6">
               <h3 className="mb-4 text-lg font-semibold">Execution Plan</h3>
               <Steps>
                 <StepsItem>
                   <StepsTrigger>Step 1: Initial Data Collection</StepsTrigger>
                   <StepsContent>
                     <p className="text-sm text-muted-foreground">
                       Gathered data from primary sources and verified timestamps.
                     </p>
                   </StepsContent>
                 </StepsItem>
                 <StepsItem>
                   <StepsTrigger>Step 2: Analysis</StepsTrigger>
                   <StepsContent>
                     <p className="text-sm text-muted-foreground">
                       Applied statistical models to identify trends.
                     </p>
                   </StepsContent>
                 </StepsItem>
               </Steps>
            </div>
          </Card>
          
          {result && (
             <Card className="p-6 bg-primary/5 border-primary/20">
                <h2 className="text-xl font-bold mb-2">Research Results: {result.topic}</h2>
                <p className="leading-relaxed">{result.summary}</p>
             </Card>
          )}
        </div>
      )}
    </div>
  )
}
