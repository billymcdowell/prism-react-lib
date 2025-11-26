import React, { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail
} from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Folder,
    FileText,
    Image as ImageIcon,
    MoreHorizontal,
    Search,
    Grid,
    List,
    Download,
    Trash2,
    Star,
    Clock,
    Cloud,
    HardDrive,
    Plus
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function FileManager() {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">My Files</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Design Assets</BreadcrumbPage>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
             <div className="flex items-center gap-2">
                 <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search files..."
                        className="w-[200px] lg:w-[300px] pl-8 bg-background"
                    />
                </div>
                 <div className="flex items-center border rounded-md bg-background">
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`h-8 w-8 rounded-none rounded-l-md ${viewMode === 'grid' ? 'bg-muted' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                         <Grid className="h-4 w-4" />
                     </Button>
                     <Separator orientation="vertical" className="h-4" />
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`h-8 w-8 rounded-none rounded-r-md ${viewMode === 'list' ? 'bg-muted' : ''}`}
                        onClick={() => setViewMode('list')}
                    >
                         <List className="h-4 w-4" />
                     </Button>
                 </div>
                 <Button>
                     <Plus className="mr-2 h-4 w-4" />
                     Upload
                 </Button>
             </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
            {/* View Content */}
            {viewMode === "grid" ? (
                <div>
                    <h2 className="text-lg font-semibold mb-4">Folders</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                         {["Documents", "Images", "Work", "Personal"].map((folder) => (
                             <div key={folder} className="group relative flex flex-col items-center justify-center rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-accent/50 cursor-pointer">
                                 <Folder className="h-12 w-12 text-yellow-500 mb-2 fill-yellow-500/20" />
                                 <span className="font-medium text-sm">{folder}</span>
                                 <span className="text-xs text-muted-foreground">12 items</span>
                                 <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                     <MoreHorizontal className="h-4 w-4" />
                                 </Button>
                             </div>
                         ))}
                    </div>

                    <h2 className="text-lg font-semibold mb-4">Files</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                         {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                             <div key={i} className="group relative flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent/50 cursor-pointer">
                                 <div className="h-24 w-full bg-muted/50 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                                     {i % 2 === 0 ? (
                                         <ImageIcon className="h-8 w-8 text-muted-foreground" />
                                     ) : (
                                         <FileText className="h-8 w-8 text-muted-foreground" />
                                     )}
                                 </div>
                                 <div className="w-full text-center">
                                     <p className="font-medium text-sm truncate w-full">Project_Brief_v{i}.pdf</p>
                                     <p className="text-xs text-muted-foreground">2.4 MB • Just now</p>
                                 </div>
                                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm">
                                     <MoreHorizontal className="h-4 w-4" />
                                 </Button>
                             </div>
                         ))}
                    </div>
                </div>
            ) : (
                <div className="rounded-md border">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">Name</TableHead>
                                <TableHead>Date Modified</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { name: "Documents", type: "Folder", size: "-", date: "Today, 10:00 AM", icon: Folder, color: "text-yellow-500" },
                                { name: "Images", type: "Folder", size: "-", date: "Yesterday, 2:30 PM", icon: Folder, color: "text-yellow-500" },
                                { name: "Project_Proposal.docx", type: "Word Document", size: "2.4 MB", date: "Oct 24, 2023", icon: FileText, color: "text-blue-500" },
                                { name: "Design_Mockup.png", type: "PNG Image", size: "4.1 MB", date: "Oct 22, 2023", icon: ImageIcon, color: "text-purple-500" },
                                { name: "Budget_Sheet.xlsx", type: "Excel Spreadsheet", size: "1.2 MB", date: "Oct 20, 2023", icon: FileText, color: "text-green-500" },
                            ].map((file, i) => (
                                <TableRow key={i} className="group">
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-2">
                                            <file.icon className={`h-4 w-4 ${file.color}`} />
                                            {file.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>{file.date}</TableCell>
                                    <TableCell>{file.type}</TableCell>
                                    <TableCell>{file.size}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Download
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2 h-14">
             <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cloud className="size-4" />
            </div>
            <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">CloudDrive</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupContent>
                 <Button className="w-full justify-start gap-2 mb-4 shadow-none" size="lg">
                    <Plus className="h-4 w-4" />
                    <span className="group-data-[collapsible=icon]:hidden">New</span>
                </Button>
            </SidebarGroupContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "My Files", url: "#", icon: HardDrive, active: true },
                { title: "Recent", url: "#", icon: Clock },
                { title: "Starred", url: "#", icon: Star },
                { title: "Trash", url: "#", icon: Trash2 },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.active} tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
            <SidebarGroupLabel>Storage</SidebarGroupLabel>
            <SidebarGroupContent>
                <div className="px-2 py-2 group-data-[collapsible=icon]:hidden">
                    <div className="flex items-center justify-between text-xs mb-2">
                        <span>7.5 GB used</span>
                        <span>15 GB total</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[50%]" />
                    </div>
                    <Button variant="link" size="sm" className="px-0 h-auto mt-2 text-xs">
                        Upgrade Storage
                    </Button>
                </div>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

