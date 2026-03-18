# prism-react-lib — Full Component API Reference

## Table of Contents
1. [Core / Primitives](#core--primitives)
2. [Inputs](#inputs)
3. [Feedback](#feedback)
4. [Overlay / Modals](#overlay--modals)
5. [Navigation](#navigation)
6. [Data Display](#data-display)
7. [Layout Primitives](#layout-primitives)
8. [Compound Components](#compound-components)
9. [Sidebar System](#sidebar-system)
10. [Chart](#chart)
11. [Utilities](#utilities)

---

## Core / Primitives

### Button
```tsx
import { Button, buttonVariants } from 'prism-react-lib';

<Button
  variant="default" // "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size="default"    // "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
  asChild={false}   // boolean — renders child element instead of <button>
  disabled
  onClick={handler}
>
  Click me
</Button>
```

### ButtonGroup
```tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from 'prism-react-lib';

<ButtonGroup orientation="horizontal"> // "horizontal" | "vertical"
  <Button>A</Button>
  <ButtonGroupSeparator />
  <Button>B</Button>
  <ButtonGroupText>or</ButtonGroupText>
  <Button>C</Button>
</ButtonGroup>
```

### Badge
```tsx
import { Badge } from 'prism-react-lib';

<Badge variant="default"> // "default" | "secondary" | "outline" | "destructive"
  Label
</Badge>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from 'prism-react-lib';

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle text</CardDescription>
    <CardAction>
      <Button size="sm" variant="outline">Edit</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    Main content here
  </CardContent>
  <CardFooter>
    <Button>Submit</Button>
  </CardFooter>
</Card>
```

### Separator
```tsx
import { Separator } from 'prism-react-lib';
<Separator orientation="horizontal" /> // "horizontal" | "vertical"
```

### Skeleton
```tsx
import { Skeleton } from 'prism-react-lib';
<Skeleton className="h-4 w-[250px]" />
```

### Spinner
```tsx
import { Spinner } from 'prism-react-lib';
<Spinner className="size-6" />
```

### Kbd / KbdGroup
```tsx
import { Kbd, KbdGroup } from 'prism-react-lib';
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

---

## Inputs

### Input
```tsx
import { Input } from 'prism-react-lib';
<Input type="text" placeholder="Enter value..." className="..." />
```

### Textarea
```tsx
import { Textarea } from 'prism-react-lib';
<Textarea placeholder="Type here..." rows={4} />
```

### Label
```tsx
import { Label } from 'prism-react-lib';
<Label htmlFor="input-id">Field label</Label>
```

### Checkbox
```tsx
import { Checkbox } from 'prism-react-lib';
<Checkbox id="terms" checked={checked} onCheckedChange={setChecked} />
```

### RadioGroup
```tsx
import { RadioGroup, RadioGroupItem } from 'prism-react-lib';
<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="a" />
    <Label htmlFor="a">Option A</Label>
  </div>
</RadioGroup>
```

### Switch
```tsx
import { Switch } from 'prism-react-lib';
<Switch checked={on} onCheckedChange={setOn} />
```

### Slider
```tsx
import { Slider } from 'prism-react-lib';
<Slider defaultValue={[50]} min={0} max={100} step={1} onValueChange={vals => ...} />
```

### Select
```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from 'prism-react-lib';

<Select value={val} onValueChange={setVal}>
  <SelectTrigger size="default"> // "default" | "sm"
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Group</SelectLabel>
      <SelectItem value="a">Option A</SelectItem>
      <SelectItem value="b">Option B</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectItem value="c">Option C</SelectItem>
  </SelectContent>
</Select>
```

### InputGroup (input with addons/buttons)
```tsx
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput, InputGroupButton, InputGroupTextarea } from 'prism-react-lib';

<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="0.00" type="number" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="sm">Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### AutoComplete
```tsx
import { AutoComplete, type Option } from 'prism-react-lib';

const options: Option[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

<AutoComplete
  options={options}
  placeholder="Search..."
  emptyMessage="No results."
  value={selected}
  onValueChange={setSelected}
  isLoading={false}
  disabled={false}
/>
```

### Field (Form field layout)
```tsx
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldSet, FieldLegend, FieldContent, FieldTitle, FieldSeparator } from 'prism-react-lib';

<FieldSet>
  <FieldLegend variant="legend">Billing Info</FieldLegend>
  <FieldGroup>
    <Field orientation="vertical"> // "vertical" | "horizontal" | "responsive"
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <FieldContent>
        <Input id="name" />
        <FieldDescription>Your full legal name.</FieldDescription>
        <FieldError errors={[{ message: 'Required' }]} />
      </FieldContent>
    </Field>
  </FieldGroup>
</FieldSet>
```

### Form (react-hook-form integration)
```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from 'prism-react-lib';
import { useForm } from 'react-hook-form';

const form = useForm<{ email: string }>();

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="you@example.com" {...field} />
          </FormControl>
          <FormDescription>We'll never share your email.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

### Calendar
```tsx
import { Calendar } from 'prism-react-lib';
<Calendar mode="single" selected={date} onSelect={setDate} />
```

### DateInput & DateRangePicker
```tsx
import { DateInput, DateRangePicker } from 'prism-react-lib';
<DateInput value={date} onChange={setDate} />
<DateRangePicker value={range} onChange={setRange} />
```

### InputOTP
```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from 'prism-react-lib';
<InputOTP maxLength={6} value={otp} onChange={setOtp}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

---

## Feedback

### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from 'prism-react-lib';
<Alert variant="default"> // "default" | "destructive"
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Something happened.</AlertDescription>
</Alert>
```

### Progress
```tsx
import { Progress } from 'prism-react-lib';
<Progress value={75} className="w-full" />
```

### Tooltip
```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from 'prism-react-lib';
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button>Hover me</Button></TooltipTrigger>
    <TooltipContent>This is a tooltip</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Sonner (Toast)
```tsx
import { Toaster } from 'prism-react-lib';
import { toast } from 'sonner';

// In app root:
<Toaster />

// To trigger:
toast.success('Saved!');
toast.error('Something went wrong');
toast('Neutral message');
```

---

## Overlay / Modals

### Dialog
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from 'prism-react-lib';

<Dialog>
  <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
  <DialogContent showCloseButton={true}>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>Are you sure?</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### AlertDialog
```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from 'prism-react-lib';

<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Sheet (Side panel)
```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from 'prism-react-lib';

<Sheet>
  <SheetTrigger asChild><Button>Open Panel</Button></SheetTrigger>
  <SheetContent side="right"> // "top" | "right" | "bottom" | "left"
    <SheetHeader>
      <SheetTitle>Panel Title</SheetTitle>
      <SheetDescription>Subtitle</SheetDescription>
    </SheetHeader>
    Content here
    <SheetFooter>
      <SheetClose asChild><Button>Close</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Drawer
```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from 'prism-react-lib';
// Same structure as Sheet — slides up from bottom by default
```

### Popover
```tsx
import { Popover, PopoverTrigger, PopoverContent } from 'prism-react-lib';
<Popover>
  <PopoverTrigger asChild><Button>Options</Button></PopoverTrigger>
  <PopoverContent align="start">Content here</PopoverContent>
</Popover>
```

### HoverCard
```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from 'prism-react-lib';
<HoverCard>
  <HoverCardTrigger asChild><Button variant="link">@username</Button></HoverCardTrigger>
  <HoverCardContent>Profile preview</HoverCardContent>
</HoverCard>
```

### DropdownMenu
```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from 'prism-react-lib';

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button>Actions</Button></DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### ContextMenu
```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from 'prism-react-lib';
<ContextMenu>
  <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Command (Command Palette)
```tsx
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from 'prism-react-lib';

<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem>New File <CommandShortcut>⌘N</CommandShortcut></CommandItem>
      <CommandItem>Open <CommandShortcut>⌘O</CommandShortcut></CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Preferences</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## Navigation

### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'prism-react-lib';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
</Tabs>
```

### Breadcrumb
```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from 'prism-react-lib';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/products">Products</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Item Name</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination
```tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from 'prism-react-lib';

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

### NavigationMenu
```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from 'prism-react-lib';
// Full horizontal nav with dropdowns — Radix NavigationMenu API
```

### Menubar
```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarShortcut } from 'prism-react-lib';
// Desktop-style menubar (File / Edit / View etc.)
```

---

## Data Display

### Table
```tsx
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from 'prism-react-lib';

<Table>
  <TableCaption>Recent transactions</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>$250</TableCell>
      <TableCell className="text-right"><Badge>Paid</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Avatar
```tsx
import { Avatar, AvatarImage, AvatarFallback } from 'prism-react-lib';
<Avatar className="size-10">
  <AvatarImage src="https://..." alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Accordion
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'prism-react-lib';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content here</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Carousel
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from 'prism-react-lib';

<Carousel>
  <CarouselContent>
    <CarouselItem><Card><CardContent>Slide 1</CardContent></Card></CarouselItem>
    <CarouselItem><Card><CardContent>Slide 2</CardContent></Card></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### ScrollArea
```tsx
import { ScrollArea, ScrollBar } from 'prism-react-lib';
<ScrollArea className="h-72 w-48">
  {/* Long content */}
  <ScrollBar orientation="vertical" />
</ScrollArea>
```

---

## Layout Primitives

### AspectRatio
```tsx
import { AspectRatio } from 'prism-react-lib';
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="object-cover w-full h-full" />
</AspectRatio>
```

### Resizable
```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from 'prism-react-lib';

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30}>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Right</ResizablePanel>
</ResizablePanelGroup>
```

### Collapsible
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'prism-react-lib';

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild><Button variant="ghost">Toggle</Button></CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>
```

---

## Compound Components

### Item (List rows)
```tsx
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup, ItemSeparator, ItemHeader, ItemFooter } from 'prism-react-lib';

<ItemGroup>
  <Item variant="default" size="default"> // variant: "default"|"outline"|"muted"; size: "default"|"sm"
    <ItemMedia variant="icon">🎨</ItemMedia> // variant: "default"|"icon"|"image"
    <ItemContent>
      <ItemTitle>Item Title</ItemTitle>
      <ItemDescription>Supporting description text</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="icon-sm" variant="ghost">⋯</Button>
    </ItemActions>
  </Item>
  <ItemSeparator />
  <Item>...</Item>
</ItemGroup>
```

### Empty State
```tsx
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from 'prism-react-lib';

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">📭</EmptyMedia> // variant: "default"|"icon"
    <EmptyTitle>Nothing here yet</EmptyTitle>
    <EmptyDescription>Get started by creating your first item.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Create Item</Button>
  </EmptyContent>
</Empty>
```

### Toggle / ToggleGroup
```tsx
import { Toggle } from 'prism-react-lib';
import { ToggleGroup, ToggleGroupItem } from 'prism-react-lib';

<Toggle variant="default" pressed={bold} onPressedChange={setBold}>B</Toggle>

<ToggleGroup type="single" value={view} onValueChange={setView}>
  <ToggleGroupItem value="list">List</ToggleGroupItem>
  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
</ToggleGroup>
```

---

## Sidebar System

The sidebar is a complex system. Always wrap with `SidebarProvider`.

```tsx
import {
  SidebarProvider, Sidebar, SidebarTrigger, SidebarRail, SidebarInset,
  SidebarHeader, SidebarFooter, SidebarContent, SidebarSeparator, SidebarInput,
  SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction,
  SidebarMenuBadge, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubItem,
  SidebarMenuSubButton, useSidebar
} from 'prism-react-lib';

function AppLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar
        side="left"           // "left" | "right"
        variant="sidebar"     // "sidebar" | "floating" | "inset"
        collapsible="icon"    // "offcanvas" | "icon" | "none"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="grid flex-1 text-left text-sm">
                  <span className="font-semibold">Acme Inc</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Dashboard">
                  Dashboard
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  Settings
                </SidebarMenuButton>
                <SidebarMenuAction showOnHover>+</SidebarMenuAction>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Avatar className="size-6"><AvatarFallback>U</AvatarFallback></Avatar>
                User Name
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex items-center gap-2 p-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          Page Title
        </header>
        <main className="p-4">
          {/* Page content */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
```

### useSidebar hook
```tsx
const { state, open, setOpen, isMobile, toggleSidebar } = useSidebar();
// state: "expanded" | "collapsed"
```

---

## Chart

Uses Recharts under the hood with a typed config system.

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from 'prism-react-lib';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const chartConfig = {
  revenue: { label: 'Revenue', color: 'hsl(var(--chart-1))' },
};

<ChartContainer config={chartConfig} className="h-[300px]">
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="revenue" fill="var(--color-revenue)" />
  </BarChart>
</ChartContainer>
```

---

## Utilities

### cn (class merge utility)
```tsx
import { cn } from 'prism-react-lib';
<div className={cn('base-class', condition && 'conditional-class', className)} />
```

### useMobile hook
```tsx
import { useMobile } from 'prism-react-lib'; // or via useSidebar context
const isMobile = useMobile(); // returns boolean
```

---

## AI Components

All AI components import from `'prism-react-lib'` — same as UI components.

### ChatContainerRoot / ChatContainerContent / ChatContainerScrollAnchor
Auto-scrolling chat container that sticks to bottom as new messages arrive.

```tsx
import { ChatContainerRoot, ChatContainerContent, ChatContainerScrollAnchor } from 'prism-react-lib';

<ChatContainerRoot className="h-[500px] flex-col">
  <ChatContainerContent className="p-4 gap-6">
    {messages.map(m => <Message key={m.id}>...</Message>)}
    <ChatContainerScrollAnchor />
  </ChatContainerContent>
</ChatContainerRoot>
```

### Message / MessageAvatar / MessageContent / MessageActions / MessageAction
Composable chat message with avatar, content, and action bar.

```tsx
import { Message, MessageAvatar, MessageContent, MessageActions, MessageAction } from 'prism-react-lib';

<Message className="flex gap-3">
  <MessageAvatar
    src="/avatar.png"
    alt="AI Assistant"
    fallback="AI"
    delayMs={500}       // optional AvatarFallback delay
  />
  <div className="flex flex-col gap-1">
    <MessageContent
      markdown={true}   // true = render as Markdown; false = plain div
      className="..."
    >
      {"**Hello!** How can I help?"}
    </MessageContent>
    <MessageActions>
      <MessageAction tooltip="Copy" side="top">
        <Button size="icon-sm" variant="ghost"><CopyIcon /></Button>
      </MessageAction>
      <MessageAction tooltip="Regenerate">
        <Button size="icon-sm" variant="ghost"><RefreshIcon /></Button>
      </MessageAction>
    </MessageActions>
  </div>
</Message>
```

### PromptInput / PromptInputTextarea / PromptInputActions / PromptInputAction
Composable text input for AI prompts with auto-resize and action buttons.

```tsx
import { PromptInput, PromptInputTextarea, PromptInputActions, PromptInputAction } from 'prism-react-lib';

<PromptInput
  isLoading={false}     // boolean — disables input and shows loading state
  value={text}
  onValueChange={setText}
  maxHeight={240}       // number or CSS string, default 240px
  onSubmit={handleSubmit}
  disabled={false}
>
  <PromptInputTextarea
    placeholder="Ask anything..."
    disableAutosize={false}   // set true to disable auto-height
  />
  <PromptInputActions className="justify-end">
    <PromptInputAction tooltip="Attach file" side="top">
      <Button size="icon-sm" variant="ghost"><PaperclipIcon /></Button>
    </PromptInputAction>
    <PromptInputAction tooltip="Send">
      <Button size="icon-sm" disabled={!text}><SendIcon /></Button>
    </PromptInputAction>
  </PromptInputActions>
</PromptInput>
```

### ResponseStream / useTextStream
Animates text appearing character-by-character (typewriter) or word-by-word (fade). Accepts a string or `AsyncIterable<string>`.

```tsx
import { ResponseStream, useTextStream } from 'prism-react-lib';

<ResponseStream
  textStream={streamOrString}   // string | AsyncIterable<string>
  mode="typewriter"             // "typewriter" | "fade"
  speed={20}                    // 1–100 (1=slowest, 100=fastest)
  as="p"                        // element to render (default "div")
  onComplete={() => setDone(true)}
/>

// Hook for custom rendering:
const { displayedText, isComplete, reset } = useTextStream({
  textStream: text,
  mode: 'typewriter',
  speed: 30,
  onComplete: () => setDone(true),
});
```

### TextShimmer
Animated shimmer effect on text, useful for "thinking" or loading states.

```tsx
import { TextShimmer } from 'prism-react-lib';

<TextShimmer
  as="span"         // any HTML element
  duration={4}      // animation duration in seconds
  spread={20}       // shimmer width 5–45
  className="text-sm font-medium"
>
  Processing your request...
</TextShimmer>
```

### ThinkingBar
Shows an animated "Thinking" label (using TextShimmer) with optional stop/expand controls.

```tsx
import { ThinkingBar } from 'prism-react-lib';

<ThinkingBar
  text="Thinking"           // default "Thinking"
  onStop={handleStop}       // shows "Answer now" button when provided
  stopLabel="Answer now"    // default "Answer now"
  onClick={handleExpand}    // makes text a clickable button with chevron
/>
```

### Loader
13 animated loading indicator variants, all sized sm/md/lg.

```tsx
import { Loader } from 'prism-react-lib';

<Loader
  variant="circular"        // "circular" | "classic" | "pulse" | "pulse-dot" |
                            // "dots" | "typing" | "wave" | "bars" | "terminal" |
                            // "text-blink" | "text-shimmer" | "loading-dots"
  size="md"                 // "sm" | "md" | "lg"
  text="Thinking"           // used by text-blink, text-shimmer, loading-dots variants
/>

// Or import individual loader components:
import { CircularLoader, DotsLoader, TypingLoader, WaveLoader, BarsLoader,
         TerminalLoader, TextShimmerLoader, TextBlinkLoader, TextDotsLoader,
         PulseLoader, PulseDotLoader, ClassicLoader } from 'prism-react-lib';
```

### ScrollButton
Scroll-to-bottom button that auto-shows/hides when the chat is not at bottom. Must be used inside `<ChatContainerRoot>`.

```tsx
import { ScrollButton } from 'prism-react-lib';

// Inside ChatContainerRoot context:
<ScrollButton
  variant="outline"   // Button variant
  size="sm"           // Button size
  className="absolute bottom-4 right-4"
/>
```

### CodeBlock / CodeBlockCode / CodeBlockGroup
Syntax-highlighted code block using Shiki.

```tsx
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from 'prism-react-lib';

<CodeBlock>
  <CodeBlockGroup className="px-4 py-2 border-b">
    <span className="text-sm text-muted-foreground">App.tsx</span>
    <Button size="icon-sm" variant="ghost" onClick={handleCopy}>
      <CopyIcon />
    </Button>
  </CodeBlockGroup>
  <CodeBlockCode
    code={codeString}
    language="tsx"          // any Shiki-supported language
    theme="github-light"    // any Shiki theme
  />
</CodeBlock>
```

### Markdown
Memoized Markdown renderer with GFM, line breaks, and built-in code block syntax highlighting.

```tsx
import { Markdown } from 'prism-react-lib';
import type { Components } from 'react-markdown';

<Markdown
  className="prose dark:prose-invert"
  components={customComponents}  // optional Partial<Components> override
>
  {markdownString}
</Markdown>
```

### Source / SourceTrigger / SourceContent
Inline citation with hover card preview — for AI responses that cite web sources.

```tsx
import { Source, SourceTrigger, SourceContent } from 'prism-react-lib';

<Source href="https://example.com/article">
  <SourceTrigger
    label={1}                 // number or string label; defaults to domain name
    showFavicon={true}        // shows site favicon
  />
  <SourceContent
    title="Article Title"
    description="Brief description of the source content."
  />
</Source>
```

### FeedbackBar
Thumbs up/down feedback widget for AI responses.

```tsx
import { FeedbackBar } from 'prism-react-lib';

<FeedbackBar
  title="Was this response helpful?"
  icon={<SparklesIcon className="size-4" />}
  onHelpful={() => submitFeedback('helpful')}
  onNotHelpful={() => submitFeedback('not-helpful')}
  onClose={() => setShowFeedback(false)}
/>
```

### PromptSuggestion
Pill-style or list-style suggestion buttons for AI prompt interfaces.

```tsx
import { PromptSuggestion } from 'prism-react-lib';

// Pill style (no highlight prop)
<PromptSuggestion onClick={() => setPrompt('How does X work?')}>
  How does X work?
</PromptSuggestion>

// List style with search highlight
<PromptSuggestion
  highlight={searchQuery}     // highlights matching substring in the text
  onClick={() => setPrompt('Explain neural networks')}
>
  Explain neural networks
</PromptSuggestion>
```

### FileUpload / FileUploadTrigger / FileUploadContent
Drag-and-drop file upload with portal overlay. Listens to window drag events globally.

```tsx
import { FileUpload, FileUploadTrigger, FileUploadContent } from 'prism-react-lib';

<FileUpload
  onFilesAdded={(files) => setFiles(prev => [...prev, ...files])}
  multiple={true}
  accept="image/*,application/pdf"
  disabled={false}
>
  <FileUploadTrigger asChild>
    <Button variant="outline"><PaperclipIcon /> Attach files</Button>
  </FileUploadTrigger>
  <FileUploadContent>
    {/* Portal overlay shown while dragging */}
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-lg font-medium">Drop files here</p>
    </div>
  </FileUploadContent>
</FileUpload>
```

### ChainOfThought / ChainOfThoughtStep / ChainOfThoughtTrigger / ChainOfThoughtContent / ChainOfThoughtItem
Collapsible chain-of-thought reasoning steps display.

```tsx
import { ChainOfThought, ChainOfThoughtStep, ChainOfThoughtTrigger, ChainOfThoughtContent, ChainOfThoughtItem } from 'prism-react-lib';

<ChainOfThought>
  <ChainOfThoughtStep defaultOpen={true}>
    <ChainOfThoughtTrigger leftIcon={<BrainIcon className="size-4" />}>
      Analyzing the problem
    </ChainOfThoughtTrigger>
    <ChainOfThoughtContent>
      <ChainOfThoughtItem>Breaking down the question...</ChainOfThoughtItem>
      <ChainOfThoughtItem>Identifying key variables...</ChainOfThoughtItem>
    </ChainOfThoughtContent>
  </ChainOfThoughtStep>
  <ChainOfThoughtStep>
    <ChainOfThoughtTrigger>Drawing conclusions</ChainOfThoughtTrigger>
    <ChainOfThoughtContent>
      <ChainOfThoughtItem>Therefore, the answer is...</ChainOfThoughtItem>
    </ChainOfThoughtContent>
  </ChainOfThoughtStep>
</ChainOfThought>
```

### Tool
Collapsible display for AI tool calls — shows type, state, input, and output.

```tsx
import { Tool } from 'prism-react-lib';
import type { ToolPart } from 'prism-react-lib';

const toolPart: ToolPart = {
  type: 'search_web',
  state: 'output-available',  // "input-streaming" | "input-available" | "output-available" | "output-error"
  input: { query: 'React hooks' },
  output: { results: [...] },
  toolCallId: 'call_abc123',
};

<Tool toolPart={toolPart} defaultOpen={false} />
```

---

## Complete Chat UI Example

```tsx
import {
  ChatContainerRoot, ChatContainerContent, ChatContainerScrollAnchor,
  ScrollButton, Message, MessageAvatar, MessageContent, MessageActions,
  MessageAction, PromptInput, PromptInputTextarea, PromptInputActions,
  PromptInputAction, ResponseStream, Loader, FeedbackBar, PromptSuggestion,
  Button
} from 'prism-react-lib';
import { SendIcon } from 'lucide-react';

function ChatUI() {
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <ChatContainerRoot className="flex-1 relative">
        <ChatContainerContent className="p-4 gap-6 max-w-3xl mx-auto w-full">
          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2">
              <PromptSuggestion onClick={() => setInput('Explain React hooks')}>
                Explain React hooks
              </PromptSuggestion>
            </div>
          )}
          {messages.map((msg, i) => (
            <Message key={i}>
              {msg.role === 'assistant' && (
                <MessageAvatar src="/ai.png" alt="AI" fallback="AI" />
              )}
              <MessageContent markdown={msg.role === 'assistant'}>
                {msg.content}
              </MessageContent>
            </Message>
          ))}
          {isStreaming && <Loader variant="typing" size="sm" />}
          <ChatContainerScrollAnchor />
        </ChatContainerContent>
        <div className="absolute bottom-4 right-4">
          <ScrollButton />
        </div>
      </ChatContainerRoot>

      <div className="border-t p-4 max-w-3xl mx-auto w-full">
        <PromptInput
          value={input}
          onValueChange={setInput}
          isLoading={isStreaming}
          onSubmit={handleSubmit}
        >
          <PromptInputTextarea placeholder="Message..." />
          <PromptInputActions className="justify-end">
            <PromptInputAction tooltip="Send">
              <Button size="icon-sm" disabled={!input}><SendIcon /></Button>
            </PromptInputAction>
          </PromptInputActions>
        </PromptInput>
      </div>
    </div>
  );
}
```

---

## CSS Variable Reference

Override in your global CSS:

```css
:root {
  --background: oklch(...);
  --foreground: oklch(...);
  --card: oklch(...);
  --card-foreground: oklch(...);
  --popover: oklch(...);
  --popover-foreground: oklch(...);
  --primary: oklch(...);
  --primary-foreground: oklch(...);
  --secondary: oklch(...);
  --secondary-foreground: oklch(...);
  --muted: oklch(...);
  --muted-foreground: oklch(...);
  --accent: oklch(...);
  --accent-foreground: oklch(...);
  --destructive: oklch(...);
  --border: oklch(...);
  --input: oklch(...);
  --ring: oklch(...);
  --radius: 0.5rem;
  --chart-1: oklch(...);
  --chart-2: oklch(...);
  --chart-3: oklch(...);
  --chart-4: oklch(...);
  --chart-5: oklch(...);
}
```
