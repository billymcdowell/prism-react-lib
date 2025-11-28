import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { PromptInput, PromptInputTextarea, PromptInputActions } from "@/components/ai/prompt-input"
import { FileUpload, FileUploadTrigger, FileUploadContent } from "@/components/ai/file-upload"
import { PromptSuggestion } from "@/components/ai/prompt-suggestion"
import {
  CircularLoader, ClassicLoader, PulseLoader,
  DotsLoader, TypingLoader, WaveLoader, BarsLoader,
  TerminalLoader, TextShimmerLoader
} from "@/components/ai/loader"
import { ThinkingBar } from "@/components/ai/thinking-bar"
import { TextShimmer } from "@/components/ai/text-shimmer"
import { SystemMessage } from "@/components/ai/system-message"
import { Message, MessageAvatar, MessageContent } from "@/components/ai/message"
import { Markdown } from "@/components/ai/markdown"
import { CodeBlock, CodeBlockCode } from "@/components/ai/code-block"
import { JSXPreview } from "@/components/ai/jsx-preview"
import { ResponseStream } from "@/components/ai/response-stream"
import { Steps, StepsTrigger, StepsContent } from "@/components/ai/steps"
import { Reasoning } from "@/components/ai/reasoning"
import { ChainOfThought, ChainOfThoughtStep, ChainOfThoughtTrigger, ChainOfThoughtContent } from "@/components/ai/chain-of-thought"
import { Tool } from "@/components/ai/tool"
import { Source, SourceTrigger, SourceContent } from "@/components/ai/source"
import { FeedbackBar } from "@/components/ai/feedback-bar"
import { ScrollButton } from "@/components/ai/scroll-button"
import { ChatContainerContent, ChatContainerRoot } from "@/components/ai/chat-container"
import { StickToBottom } from "use-stick-to-bottom"
import { Paperclip, ArrowUp } from "lucide-react"


export default function StickerSheetLayout() {
  return (
    <StickToBottom>
      <div className="min-h-screen bg-background p-10">
        <div className="max-w-6xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold mb-6">UI Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Buttons */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Interactive triggers for actions.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 items-center">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </CardContent>
              </Card>

              {/* 2. Inputs */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Inputs</CardTitle>
                  <CardDescription>Fields for user text entry.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="text">Text</Label>
                    <Input type="text" id="text" placeholder="Disabled input" disabled />
                  </div>
                </CardContent>
              </Card>

              {/* 3. Badges */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status indicators and labels.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </CardContent>
              </Card>

              {/* 4. Avatars */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Avatars</CardTitle>
                  <CardDescription>User profile images.</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>

              {/* 5. Switch */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Switch</CardTitle>
                  <CardDescription>Toggle controls.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" defaultChecked />
                    <Label htmlFor="notifications">Notifications</Label>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Slider */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Slider</CardTitle>
                  <CardDescription>Range selection input.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Slider defaultValue={[33]} max={100} step={1} />
                  <Slider defaultValue={[50, 75]} max={100} step={1} />
                </CardContent>
              </Card>

              {/* 7. Tabs */}
              <Card className="flex flex-col md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                  <CardDescription>Segmented content views.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <p className="text-sm text-muted-foreground py-4">
                        Make changes to your account here. Click save when you're done.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                      </div>
                    </TabsContent>
                    <TabsContent value="password">
                      <p className="text-sm text-muted-foreground py-4">
                        Change your password here. After saving, you'll be logged out.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* 8. Card (Meta) */}
              <Card className="flex flex-col md:col-span-2 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Card</CardTitle>
                  <CardDescription>Container for grouped content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border p-4 bg-muted/20">
                    <h3 className="font-medium mb-2">This is a card within a card</h3>
                    <p className="text-sm text-muted-foreground">Cards are used to group related content and actions. They are one of the most versatile components in the library.</p>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm">Action</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">AI Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* AI Inputs */}
              <Card className="flex flex-col md:col-span-2">
                <CardHeader>
                  <CardTitle>AI Input & Suggestions</CardTitle>
                  <CardDescription>Components for user interaction with AI.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Prompt Input</Label>
                    <PromptInput>
                      <PromptInputTextarea placeholder="Ask AI something..." />
                      <PromptInputActions>
                        <Button size="icon" variant="ghost">
                          <Paperclip className="size-4" />
                        </Button>
                        <Button size="icon">
                          <ArrowUp className="size-4" />
                        </Button>
                      </PromptInputActions>
                    </PromptInput>
                  </div>
                  <div className="space-y-2">
                    <Label>File Upload</Label>
                    <FileUpload onFilesAdded={() => {}}>
                      <FileUploadTrigger asChild>
                        <Button variant="secondary">
                          <Paperclip className="mr-2 size-4" />
                          Upload Files
                        </Button>
                      </FileUploadTrigger>
                      <FileUploadContent />
                    </FileUpload>
                  </div>
                  <div className="space-y-2">
                    <Label>Prompt Suggestions</Label>
                    <div className="flex flex-wrap gap-2">
                      <PromptSuggestion>Explain quantum computing</PromptSuggestion>
                      <PromptSuggestion>Write a poem about AI</PromptSuggestion>
                      <PromptSuggestion>Debug this code</PromptSuggestion>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loaders */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Loaders</CardTitle>
                  <CardDescription>Various loading states for AI.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4 items-center justify-center">
                  <CircularLoader />
                  <ClassicLoader />
                  <PulseLoader />
                  <DotsLoader />
                  <TypingLoader />
                  <WaveLoader />
                  <BarsLoader />
                  <TerminalLoader />
                  <TextShimmerLoader text="Generating..." />
                </CardContent>
              </Card>

              {/* Thinking & Status */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Status & Feedback</CardTitle>
                  <CardDescription>Indicators for AI thought process.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ThinkingBar />
                  <div className="p-4 border rounded-md bg-muted/10">
                    <TextShimmer>AI is thinking...</TextShimmer>
                  </div>
                  <FeedbackBar />
                  <ScrollButton />
                </CardContent>
              </Card>

              {/* System Messages */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>System Messages</CardTitle>
                  <CardDescription>Alerts and system notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <SystemMessage>Session started</SystemMessage>
                  <SystemMessage variant="warning">Token limit approaching</SystemMessage>
                  <SystemMessage variant="error">Connection lost</SystemMessage>
                </CardContent>
              </Card>

              {/* Chat Messages */}
              <Card className="flex flex-col md:col-span-2">
                <CardHeader>
                  <CardTitle>Messages & Stream</CardTitle>
                  <CardDescription>Chat bubbles and streaming text.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">

                  <ChatContainerRoot>
                    <ChatContainerContent>
                      <Message className="justify-end">
                         <MessageContent className="bg-primary text-primary-foreground">Hello AI!</MessageContent>
                         <MessageAvatar src="https://github.com/shadcn.png" alt="User" />
                      </Message>
                      <Message>
                        <MessageAvatar src="https://github.com/vercel.png" alt="AI" />
                        <MessageContent>Hello! How can I help you today?</MessageContent>
                      </Message>
                      <div className="p-4 border rounded-md">
                        <Label className="mb-2 block text-muted-foreground">Response Stream</Label>
                        <ResponseStream textStream="This text is being streamed..." />
                      </div>
                    </ChatContainerContent>
                  </ChatContainerRoot>

                </CardContent>
              </Card>

              {/* Content Display */}
              <Card className="flex flex-col md:col-span-2">
                <CardHeader>
                  <CardTitle>Content Display</CardTitle>
                  <CardDescription>Markdown, Code, and Previews.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Markdown>**Bold text** and *italic text* with [link](#).</Markdown>
                  <CodeBlock>
                    <CodeBlockCode code="console.log('Hello World');" language="javascript" />
                  </CodeBlock>
                  <JSXPreview jsx="<Button>Click me</Button>" components={{ Button }} />
                </CardContent>
              </Card>

              {/* Reasoning & Chain of Thought */}
              <Card className="flex flex-col md:col-span-2">
                <CardHeader>
                  <CardTitle>Reasoning & Steps</CardTitle>
                  <CardDescription>Displaying AI logic and progress.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Reasoning>
                    Analyzing the user request...
                    Checking available tools...
                  </Reasoning>

                  <ChainOfThought>
                    <ChainOfThoughtStep>
                      <ChainOfThoughtTrigger>Parsing input</ChainOfThoughtTrigger>
                      <ChainOfThoughtContent>Input parsed successfully.</ChainOfThoughtContent>
                    </ChainOfThoughtStep>
                    <ChainOfThoughtStep isLast={true}>
                      <ChainOfThoughtTrigger>Generating response</ChainOfThoughtTrigger>
                      <ChainOfThoughtContent>Working on it...</ChainOfThoughtContent>
                    </ChainOfThoughtStep>
                  </ChainOfThought>

                  <div className="space-y-2">
                    <Steps>
                      <StepsTrigger>Step 1: Initialization</StepsTrigger>
                      <StepsContent>System initialized.</StepsContent>
                    </Steps>
                    <Steps>
                      <StepsTrigger>Step 2: Processing</StepsTrigger>
                      <StepsContent>Processing data...</StepsContent>
                    </Steps>
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Sources */}
              <Card className="flex flex-col md:col-span-2">
                <CardHeader>
                  <CardTitle>Tools & Sources</CardTitle>
                  <CardDescription>External tools and citations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Tool
                    toolPart={{
                      type: "calculator",
                      state: "output-available",
                      input: { expression: "2 + 2" },
                      output: { result: 4 }
                    }}
                  />

                  <div className="flex flex-wrap gap-2">
                    <Source href="https://google.com">
                      <SourceTrigger label="Google" />
                      <SourceContent title="Google" description="Search Results" />
                    </Source>
                    <Source href="https://wikipedia.org">
                      <SourceTrigger label="Wikipedia" />
                    </Source>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </StickToBottom>
  )
}
