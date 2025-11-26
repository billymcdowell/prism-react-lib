import { useState } from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    Plus,
    MoreHorizontal,
    MessageSquare,
    Paperclip
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Task = {
    id: string;
    title: string;
    priority: "Low" | "Medium" | "High";
    comments: number;
    attachments: number;
    assignees: string[];
}

type Column = {
    id: string;
    title: string;
    tasks: Task[];
}

const initialColumns: Column[] = [
    {
        id: "todo",
        title: "To Do",
        tasks: [
            { id: "1", title: "Design new landing page", priority: "High", comments: 3, attachments: 2, assignees: ["A", "B"] },
            { id: "2", title: "Competitor analysis", priority: "Medium", comments: 1, attachments: 0, assignees: ["C"] },
        ]
    },
    {
        id: "in-progress",
        title: "In Progress",
        tasks: [
            { id: "3", title: "Implement authentication flow", priority: "High", comments: 5, attachments: 1, assignees: ["D", "E"] },
        ]
    },
    {
        id: "review",
        title: "Review",
        tasks: [
            { id: "4", title: "Fix navigation bug", priority: "Low", comments: 0, attachments: 0, assignees: ["F"] },
            { id: "5", title: "Update documentation", priority: "Medium", comments: 2, attachments: 1, assignees: ["G"] },
        ]
    },
    {
        id: "done",
        title: "Done",
        tasks: [
            { id: "6", title: "Set up CI/CD pipeline", priority: "High", comments: 8, attachments: 4, assignees: ["H"] },
        ]
    }
]

export default function KanbanBoard() {
    const [columns] = useState<Column[]>(initialColumns)

    return (
        <div className="flex h-screen flex-col bg-muted/10">
            <header className="flex h-16 items-center justify-between border-b bg-background px-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Product Roadmap</h1>
                    <div className="flex items-center gap-2 bg-muted p-1 rounded-md">
                        <Button variant="ghost" size="sm" className="h-7 rounded-sm bg-background shadow-sm">Board</Button>
                        <Button variant="ghost" size="sm" className="h-7 rounded-sm">List</Button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                     <div className="flex -space-x-2">
                        {["A", "B", "C", "D"].map((initial, i) => (
                            <Avatar key={i} className="h-8 w-8 border-2 border-background">
                                <AvatarFallback>{initial}</AvatarFallback>
                            </Avatar>
                        ))}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                            +4
                        </div>
                    </div>
                    <Separator orientation="vertical" className="h-6" />
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Task
                    </Button>
                </div>
            </header>

            <ScrollArea className="flex-1">
                <div className="flex h-full gap-6 p-6">
                    {columns.map((column) => (
                        <div key={column.id} className="flex h-full w-80 flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold">{column.title}</h3>
                                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-muted px-1.5 text-xs font-medium">
                                        {column.tasks.length}
                                    </span>
                                </div>
                                <div className="flex gap-1">
                                     <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                {column.tasks.map((task) => (
                                    <Card key={task.id} className="cursor-grab active:cursor-grabbing">
                                        <CardContent className="p-4">
                                            <div className="mb-3 flex items-start justify-between">
                                                <Badge variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"}>
                                                    {task.priority}
                                                </Badge>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-6 w-6 -mr-2 -mt-2 text-muted-foreground">
                                                            <MoreHorizontal className="h-3 w-3" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                            <h4 className="mb-3 font-semibold leading-tight">{task.title}</h4>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-muted-foreground">
                                                    {task.comments > 0 && (
                                                        <div className="flex items-center gap-1 text-xs">
                                                            <MessageSquare className="h-3 w-3" />
                                                            {task.comments}
                                                        </div>
                                                    )}
                                                    {task.attachments > 0 && (
                                                        <div className="flex items-center gap-1 text-xs">
                                                            <Paperclip className="h-3 w-3" />
                                                            {task.attachments}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex -space-x-2">
                                                    {task.assignees.map((assignee, i) => (
                                                         <Avatar key={i} className="h-6 w-6 border-2 border-background">
                                                            <AvatarFallback className="text-[10px]">{assignee}</AvatarFallback>
                                                        </Avatar>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Task
                                </Button>
                            </div>
                        </div>
                    ))}
                     <div className="w-80 shrink-0">
                        <Button variant="ghost" className="w-full h-12 border border-dashed border-muted-foreground/25 hover:border-muted-foreground/50">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Column
                        </Button>
                     </div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

