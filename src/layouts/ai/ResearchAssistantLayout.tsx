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
import { ResponseStream } from "@/components/ai/response-stream"
import { Source, SourceContent, SourceTrigger } from "@/components/ai/source"
import { Steps, StepsContent, StepsItem, StepsTrigger } from "@/components/ai/steps"
import { Tool } from "@/components/ai/tool"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Check, Globe, Search } from "lucide-react"
import { useState } from "react"

type StepStatus = "idle" | "streaming" | "complete"

export function ResearchAssistantLayout() {
  const [input, setInput] = useState("")
  const [isResearching, setIsResearching] = useState(false)
  const [result, setResult] = useState<any>(null)
  
  // Process State
  const [step1Status, setStep1Status] = useState<StepStatus>("idle")
  const [step2Status, setStep2Status] = useState<StepStatus>("idle")
  const [step3Status, setStep3Status] = useState<StepStatus>("idle")
  
  // UI State
  const [openSteps, setOpenSteps] = useState<Record<number, boolean>>({})
  
  // Sequential Streaming State
  const [step1Line, setStep1Line] = useState(0)
  const [step2Line, setStep2Line] = useState(0)
  
  const setStepOpen = (step: number, isOpen: boolean) => {
    setOpenSteps(prev => ({ ...prev, [step]: isOpen }))
  }

  const handleResearch = async () => {
    if (!input.trim()) return
    setIsResearching(true)
    setResult(null)
    
    // Reset states
    setStep1Status("idle")
    setStep2Status("idle")
    setStep3Status("idle")
    setStep1Line(0)
    setStep2Line(0)
    setOpenSteps({ 1: true })

    // Step 1: Search
    setStep1Status("streaming")
    await new Promise(resolve => setTimeout(resolve, 4000)) // Wait for streaming to finish
    setStep1Status("complete")
    
    // Transition to Step 2
    setOpenSteps({ 1: false, 2: true })
    setStep2Status("streaming")
    await new Promise(resolve => setTimeout(resolve, 5000))
    setStep2Status("complete")
    
    // Transition to Step 3
    setOpenSteps({ 1: false, 2: false, 3: true })
    setStep3Status("streaming")
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStep3Status("complete")
    
    // Finish
    setOpenSteps({ 1: false, 2: false, 3: false })
    setResult({
      topic: input,
      summary: "Based on the analysis, the topic involves multiple complex factors including historical data, market trends, and expert opinions. The synthesis reveals a strong correlation between early adoption and long-term success.",
    })
    setIsResearching(false)
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
              {/* Step 1 */}
              <ChainOfThoughtStep 
                open={openSteps[1]} 
                onOpenChange={(open) => setStepOpen(1, open)}
              >
                <ChainOfThoughtTrigger leftIcon={<Globe className="h-4 w-4" />}>
                  Searching Knowledge Base
                </ChainOfThoughtTrigger>
                <ChainOfThoughtContent>
                  {step1Status === "complete" ? (
                    <>
                       <ChainOfThoughtItem>
                        <div className="flex items-center gap-2 mb-2">
                          <span>Found relevant sources:</span>
                          <div className="flex gap-2">
                            <Source href="https://en.wikipedia.org/wiki/Artificial_intelligence">
                              <SourceTrigger label="Wikipedia" />
                              <SourceContent title="Artificial Intelligence" description="Wikipedia article about AI." />
                            </Source>
                            <Source href="https://arxiv.org/">
                              <SourceTrigger label="ArXiv" />
                              <SourceContent title="ArXiv" description="Open access research papers." />
                            </Source>
                          </div>
                        </div>
                      </ChainOfThoughtItem>
                      <ChainOfThoughtItem>Querying index for keywords...</ChainOfThoughtItem>
                      <ChainOfThoughtItem>Found 15 relevant documents.</ChainOfThoughtItem>
                    </>
                  ) : (
                    <>
                      <ChainOfThoughtItem>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center">
                            <ResponseStream 
                              textStream="Found relevant sources:" 
                              onComplete={() => setStep1Line(prev => Math.max(prev, 1))}
                            />
                          </span>
                          {step1Line >= 1 && (
                            <div className="flex gap-2 animate-in fade-in zoom-in duration-500">
                              <Source href="https://en.wikipedia.org/wiki/Artificial_intelligence">
                                <SourceTrigger label="Wikipedia" />
                                <SourceContent title="Artificial Intelligence" description="Wikipedia article about AI." />
                              </Source>
                              <Source href="https://arxiv.org/">
                                <SourceTrigger label="ArXiv" />
                                <SourceContent title="ArXiv" description="Open access research papers." />
                              </Source>
                            </div>
                          )}
                        </div>
                      </ChainOfThoughtItem>
                      {step1Line >= 1 && (
                        <ChainOfThoughtItem>
                          <ResponseStream 
                            textStream="Querying index for keywords..." 
                            onComplete={() => setStep1Line(prev => Math.max(prev, 2))}
                          />
                        </ChainOfThoughtItem>
                      )}
                      {step1Line >= 2 && (
                        <ChainOfThoughtItem>
                          <ResponseStream 
                            textStream="Found 15 relevant documents." 
                          />
                        </ChainOfThoughtItem>
                      )}
                    </>
                  )}
                </ChainOfThoughtContent>
              </ChainOfThoughtStep>
              
              {/* Step 2 */}
              <ChainOfThoughtStep 
                open={openSteps[2]} 
                onOpenChange={(open) => setStepOpen(2, open)}
              >
                <ChainOfThoughtTrigger leftIcon={<Brain className="h-4 w-4" />}>
                  Synthesizing Information
                </ChainOfThoughtTrigger>
                <ChainOfThoughtContent>
                  {step2Status === "complete" ? (
                    <>
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
                    </>
                  ) : (
                    <>
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
                      {/* We can start streaming text after the tool "appears" or immediately */}
                      <ChainOfThoughtItem>
                        <ResponseStream 
                          textStream="Cross-referencing sources..." 
                          onComplete={() => setStep2Line(prev => Math.max(prev, 1))}
                        />
                      </ChainOfThoughtItem>
                      {step2Line >= 1 && (
                        <ChainOfThoughtItem>
                          <ResponseStream 
                            textStream="Identifying key contradictions..." 
                          />
                        </ChainOfThoughtItem>
                      )}
                    </>
                  )}
                </ChainOfThoughtContent>
              </ChainOfThoughtStep>

              {/* Step 3 */}
              <ChainOfThoughtStep 
                isLast 
                open={openSteps[3]} 
                onOpenChange={(open) => setStepOpen(3, open)}
              >
                <ChainOfThoughtTrigger leftIcon={<Check className="h-4 w-4" />}>
                  Finalizing Report
                </ChainOfThoughtTrigger>
                <ChainOfThoughtContent>
                  {step3Status === "complete" ? (
                     <ChainOfThoughtItem>Formatting output...</ChainOfThoughtItem>
                  ) : (
                    <ChainOfThoughtItem>
                      <ResponseStream textStream="Formatting output..." />
                    </ChainOfThoughtItem>
                  )}
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
                <ResponseStream textStream={result.summary} className="leading-relaxed" />
             </Card>
          )}
        </div>
      )}
    </div>
  )
}
