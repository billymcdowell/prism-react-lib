import { useState } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Search,
    Plus,
    MoreVertical,
    Phone,
    Video,
    Paperclip,
    Smile,
    Send,
    Mic,
    Image as ImageIcon,
    File,
    Settings as SettingsLucide
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Message = {
    id: number;
    content: string;
    sender: "me" | "other";
    timestamp: string;
}

type Contact = {
    id: number;
    name: string;
    avatar: string;
    status: "online" | "offline" | "away";
    lastMessage: string;
    unread: number;
}

const contacts: Contact[] = [
    { id: 1, name: "Alice Freeman", avatar: "/avatars/01.png", status: "online", lastMessage: "Hey, are we still on for lunch?", unread: 2 },
    { id: 2, name: "Bob Smith", avatar: "/avatars/02.png", status: "offline", lastMessage: "The project files are updated.", unread: 0 },
    { id: 3, name: "Charlie Brown", avatar: "/avatars/03.png", status: "away", lastMessage: "Can you check the latest commit?", unread: 1 },
    { id: 4, name: "Diana Prince", avatar: "/avatars/04.png", status: "online", lastMessage: "Thanks!", unread: 0 },
]

const initialMessages: Message[] = [
    { id: 1, content: "Hi Alice, how are you doing?", sender: "me", timestamp: "10:30 AM" },
    { id: 2, content: "I'm doing great! Just finished the design mockups.", sender: "other", timestamp: "10:32 AM" },
    { id: 3, content: "That's awesome! Can I see them?", sender: "me", timestamp: "10:33 AM" },
    { id: 4, content: "Sure, sending them over now.", sender: "other", timestamp: "10:33 AM" },
]

export default function ChatLayout() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
        setMessages([...messages, {
            id: messages.length + 1,
            content: newMessage,
            sender: "me",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
        setNewMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 flex flex-col border-r bg-muted/10">
        <div className="p-4 border-b h-16 flex items-center justify-between">
            <div className="font-bold text-lg flex items-center gap-2">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    <MessageSquareIcon className="h-5 w-5" />
                </div>
                ChatApp
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                         <Button variant="ghost" size="icon">
                            <Plus className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>New Chat</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        <div className="p-4">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search chats..." className="pl-8 bg-background" />
            </div>
        </div>
        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-1 p-2">
                {contacts.map((contact) => (
                    <button
                        key={contact.id}
                        onClick={() => setSelectedContact(contact)}
                        className={`flex items-center gap-3 rounded-lg p-3 text-left transition-all hover:bg-accent ${selectedContact.id === contact.id ? "bg-accent" : ""}`}
                    >
                         <div className="relative">
                            <Avatar>
                                <AvatarImage src={contact.avatar} />
                                <AvatarFallback>{contact.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                                contact.status === "online" ? "bg-green-500" : 
                                contact.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                            }`} />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">{contact.name}</span>
                                <span className="text-xs text-muted-foreground">10:30 AM</span>
                            </div>
                            <p className="truncate text-xs text-muted-foreground">{contact.lastMessage}</p>
                        </div>
                        {contact.unread > 0 && (
                            <Badge className="h-5 w-5 rounded-full px-0 flex items-center justify-center">
                                {contact.unread}
                            </Badge>
                        )}
                    </button>
                ))}
            </div>
        </ScrollArea>
         <div className="p-4 border-t mt-auto">
            <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-sm font-medium">My Account</span>
                    <span className="text-xs text-muted-foreground">Online</span>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                    <SettingsLucide className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col">
        <div className="flex h-16 items-center justify-between border-b px-6">
            <div className="flex items-center gap-3">
                 <Avatar>
                    <AvatarImage src={selectedContact.avatar} />
                    <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="font-semibold">{selectedContact.name}</h2>
                    <p className="text-xs text-green-600 flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-green-600 inline-block" />
                        Online
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                </Button>
            </div>
        </div>

        <ScrollArea className="flex-1 p-6">
            <div className="flex flex-col gap-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                        <div className={`flex max-w-[70%] flex-col gap-1 ${message.sender === "me" ? "items-end" : "items-start"}`}>
                            <div
                                className={`rounded-2xl px-4 py-2 ${
                                    message.sender === "me"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted"
                                }`}
                            >
                                <p className="text-sm">{message.content}</p>
                            </div>
                            <span className="text-[10px] text-muted-foreground">{message.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>

        <div className="p-4 border-t">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Paperclip className="h-5 w-5" />
                </Button>
                 <div className="flex-1 relative">
                    <Input 
                        placeholder="Type a message..." 
                        className="pr-10" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSendMessage()
                        }}
                    />
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-0 top-0 h-full w-10 text-muted-foreground hover:bg-transparent"
                    >
                         <Smile className="h-5 w-5" />
                    </Button>
                </div>
                {newMessage ? (
                    <Button size="icon" onClick={handleSendMessage}>
                        <Send className="h-5 w-5" />
                    </Button>
                ) : (
                    <Button variant="ghost" size="icon">
                        <Mic className="h-5 w-5" />
                    </Button>
                )}
            </div>
        </div>
      </div>

       {/* Right Details Sidebar (Optional - hidden on small screens) */}
       <div className="hidden w-72 border-l bg-muted/10 lg:flex flex-col">
            <div className="p-6 flex flex-col items-center border-b">
                 <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={selectedContact.avatar} />
                    <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg">{selectedContact.name}</h3>
                <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
            <div className="p-4">
                <h4 className="font-semibold text-sm mb-3 uppercase text-muted-foreground">Shared Media</h4>
                <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square rounded-md bg-muted flex items-center justify-center">
                             <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </div>
             <div className="p-4">
                <h4 className="font-semibold text-sm mb-3 uppercase text-muted-foreground">Files</h4>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent cursor-pointer">
                        <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                            <File className="h-4 w-4" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate">Project_Brief.pdf</p>
                            <p className="text-xs text-muted-foreground">2.4 MB</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent cursor-pointer">
                        <div className="h-8 w-8 bg-green-100 text-green-600 rounded flex items-center justify-center">
                            <File className="h-4 w-4" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate">Assets.zip</p>
                            <p className="text-xs text-muted-foreground">14 MB</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

function MessageSquareIcon({className}: {className?: string}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    )
}
