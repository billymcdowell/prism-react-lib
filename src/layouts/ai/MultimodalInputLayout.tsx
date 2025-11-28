"use client"

import {
  FileUpload,
  FileUploadContent,
  FileUploadTrigger,
} from "@/components/ai/file-upload"
import { Image } from "@/components/ai/image"
import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ai/prompt-input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageIcon, Paperclip, Send, UploadCloud } from "lucide-react"
import { useState } from "react"

export function MultimodalInputLayout() {
  const [input, setInput] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles])
  }

  const handleSubmit = () => {
    if (!input.trim() && files.length === 0) return

    setIsProcessing(true)
    setGeneratedImage(null)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      // Mock a generated image (using a placeholder for demo)
      setGeneratedImage(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      )
    }, 2000)
  }

  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Multimodal Playground</h1>
        <p className="text-muted-foreground">
          Upload images or files and ask questions about them.
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl flex-1 flex flex-col gap-6">
        {/* Output Area */}
        <Card className="flex-1 min-h-[300px] p-6 flex flex-col items-center justify-center bg-muted/30 border-dashed">
          {isProcessing ? (
             <div className="text-center space-y-4">
               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
               <p className="text-muted-foreground">Analyzing inputs...</p>
             </div>
          ) : generatedImage ? (
            <div className="space-y-4 text-center w-full">
               <div className="relative aspect-video w-full max-w-md mx-auto overflow-hidden rounded-lg border bg-background">
                 {/* We're using the AI Image component here, mocking a base64 response */}
                 <Image 
                   base64={generatedImage} 
                   alt="Generated result" 
                   className="object-cover w-full h-full"
                 />
               </div>
               <p className="text-sm text-muted-foreground">
                 Analysis complete based on {files.length} file(s).
               </p>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <UploadCloud className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Results will appear here</p>
            </div>
          )}
        </Card>

        {/* Input Area */}
        <div className="relative">
          <FileUpload onFilesAdded={handleFilesAdded}>
             <FileUploadContent className="flex items-center justify-center text-2xl font-bold text-primary">
                Drop files to analyze
             </FileUploadContent>
             
             <div className="space-y-4">
               {files.length > 0 && (
                 <div className="flex gap-2 overflow-x-auto py-2">
                   {files.map((file, i) => (
                     <div key={i} className="flex items-center gap-2 text-xs bg-muted px-2 py-1 rounded-md border whitespace-nowrap">
                       <Paperclip className="h-3 w-3" />
                       {file.name}
                       <button 
                         onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                         className="ml-1 hover:text-destructive"
                       >
                         ×
                       </button>
                     </div>
                   ))}
                 </div>
               )}

               <PromptInput
                 value={input}
                 onValueChange={setInput}
                 onSubmit={handleSubmit}
                 isLoading={isProcessing}
               >
                 <PromptInputTextarea placeholder="Ask about the image or files..." />
                 <PromptInputActions className="justify-between pt-2 border-t mt-2">
                   <FileUploadTrigger asChild>
                     <Button variant="ghost" size="sm" className="text-muted-foreground">
                       <ImageIcon className="mr-2 h-4 w-4" />
                       Add Media
                     </Button>
                   </FileUploadTrigger>
                   
                   <Button
                     size="sm"
                     onClick={handleSubmit}
                     disabled={(!input.trim() && files.length === 0) || isProcessing}
                   >
                     <Send className="mr-2 h-4 w-4" />
                     Process
                   </Button>
                 </PromptInputActions>
               </PromptInput>
             </div>
          </FileUpload>
        </div>
      </div>
    </div>
  )
}

