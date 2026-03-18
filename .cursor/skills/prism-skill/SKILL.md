---
name: prism-react-prototype
description: Build frontend UIs using React, TypeScript, and the prism-react-lib component library. Use this skill whenever the user asks to build a React UI, frontend prototype, dashboard, form, layout, or any interactive interface using prism, prism-react-lib, or in a TypeScript/React project that should use this library. Also trigger when the user wants to prototype any web interface with components like buttons, cards, tables, dialogs, sidebars, tabs, forms, or AI chat interfaces — even if they don't explicitly name the library. Ensures correct imports, setup, and high-quality aesthetic execution using prism-react-lib exclusively.
---

# Prism React Library Skill

Build high-quality React + TypeScript UIs using **only** `prism-react-lib`. Never use shadcn/ui, MUI, or any other component library — all UI comes from `prism-react-lib`.

## Setup

Install and import styles at the app root:

```bash
npm install prism-react-lib
```

```tsx
// In your root layout or main entry file — required
import 'prism-react-lib/styles.css';
```

All components import from `prism-react-lib`:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, cn } from 'prism-react-lib';
```

> There is no `/layouts` sub-export. All components come from `'prism-react-lib'` directly.

---

## Design Thinking (Before Coding)

Commit to a **bold aesthetic direction** before writing any code:

- **Tone**: Brutally minimal / maximalist / retro-futuristic / editorial / luxury / industrial / playful / art deco / brutalist. Choose one extreme and execute it precisely — no middle ground.
- **Color**: Override CSS variables in a `<style>` tag or global CSS. One dominant hue + sharp accent. Avoid default out-of-the-box look.
- **Typography**: Import Google Fonts via `@import`. Pair a distinctive display font with a refined body font. Never default to Inter, Arial, or system fonts.
- **Differentiation**: What one thing will someone remember about this UI?

Apply personality via `className` and CSS variable overrides — not by inventing custom components.

---

## Component Cheat Sheet

### Core Primitives
```tsx
<Button variant="default|destructive|outline|secondary|ghost|link" size="default|sm|lg|icon|icon-sm|icon-lg" />
<Badge variant="default|secondary|outline|destructive" />
<Separator orientation="horizontal|vertical" />
<Skeleton className="h-4 w-32" />
<Spinner />
<Kbd>⌘</Kbd>  // keyboard key; wrap multiple in <KbdGroup>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
    <CardAction><Button size="sm">Action</Button></CardAction>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

### Inputs & Forms
```tsx
<Input placeholder="..." />
<Textarea placeholder="..." />
<Label htmlFor="x">Label</Label>
<Checkbox id="x" checked={v} onCheckedChange={setV} />
<Switch checked={on} onCheckedChange={setOn} />
<Slider defaultValue={[50]} min={0} max={100} />
<Select value={v} onValueChange={setV}>
  <SelectTrigger size="default|sm"><SelectValue placeholder="Pick..." /></SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
  </SelectContent>
</Select>
```

### Feedback
```tsx
<Alert variant="default|destructive">
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>...</AlertDescription>
</Alert>
<Progress value={75} />
// Toast: add <Toaster /> to app root, call toast.success('Saved!') from 'sonner'
```

### Overlays
```tsx
// Dialog
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent showCloseButton={true}>
    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>
    <DialogFooter><Button>Confirm</Button></DialogFooter>
  </DialogContent>
</Dialog>

// Sheet (side panel)
<Sheet>
  <SheetTrigger asChild><Button>Open</Button></SheetTrigger>
  <SheetContent side="right|left|top|bottom">...</SheetContent>
</Sheet>

// Dropdown
<DropdownMenu>
  <DropdownMenuTrigger asChild><Button>Menu</Button></DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>Item</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// DropDrawer — renders as Dropdown on desktop, Drawer on mobile
<DropDrawer>
  <DropDrawerTrigger asChild><Button>Menu</Button></DropDrawerTrigger>
  <DropDrawerContent>
    <DropDrawerItem>Item</DropDrawerItem>
  </DropDrawerContent>
</DropDrawer>
```

### Navigation
```tsx
<Tabs defaultValue="a">
  <TabsList><TabsTrigger value="a">Tab A</TabsTrigger></TabsList>
  <TabsContent value="a">Content A</TabsContent>
</Tabs>

<Breadcrumb><BreadcrumbList>
  <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
</BreadcrumbList></Breadcrumb>
```

### Data Display
```tsx
<Table>
  <TableHeader><TableRow><TableHead>Col</TableHead></TableRow></TableHeader>
  <TableBody><TableRow><TableCell>Data</TableCell></TableRow></TableBody>
</Table>

<Avatar><AvatarImage src="..." alt="..." /><AvatarFallback>AB</AvatarFallback></Avatar>
<Accordion type="single" collapsible>
  <AccordionItem value="a"><AccordionTrigger>Q</AccordionTrigger><AccordionContent>A</AccordionContent></AccordionItem>
</Accordion>
```

### Sidebar System
```tsx
<SidebarProvider>
  <Sidebar side="left" variant="sidebar" collapsible="icon">
    <SidebarHeader>...</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Section</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive tooltip="Label">Item</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>...</SidebarFooter>
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <header className="flex items-center gap-2 p-4"><SidebarTrigger /></header>
    <main className="p-4">{/* content */}</main>
  </SidebarInset>
</SidebarProvider>
```

### Item & Empty State (Compound)
```tsx
<ItemGroup>
  <Item variant="default|outline|muted" size="default|sm">
    <ItemMedia variant="icon|image">🎨</ItemMedia>
    <ItemContent>
      <ItemTitle>Title</ItemTitle>
      <ItemDescription>Subtitle</ItemDescription>
    </ItemContent>
    <ItemActions><Button size="icon-sm" variant="ghost">⋯</Button></ItemActions>
  </Item>
</ItemGroup>

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">📭</EmptyMedia>
    <EmptyTitle>Nothing here yet</EmptyTitle>
    <EmptyDescription>Get started by creating something.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent><Button>Create</Button></EmptyContent>
</Empty>
```

### AI Components
```tsx
// Chat container with auto-scroll-to-bottom
<ChatContainerRoot className="h-[500px]">
  <ChatContainerContent className="p-4 gap-4">
    <Message>
      <MessageAvatar src="..." alt="AI" fallback="AI" />
      <div>
        <MessageContent markdown={true}>{"**Hello** world"}</MessageContent>
        <MessageActions>
          <MessageAction tooltip="Copy"><Button size="icon-sm" variant="ghost">📋</Button></MessageAction>
        </MessageActions>
      </div>
    </Message>
  </ChatContainerContent>
</ChatContainerRoot>

// Prompt input with actions
<PromptInput isLoading={false} value={text} onValueChange={setText} onSubmit={handleSubmit}>
  <PromptInputTextarea placeholder="Ask anything..." />
  <PromptInputActions>
    <PromptInputAction tooltip="Send">
      <Button size="icon-sm"><SendIcon /></Button>
    </PromptInputAction>
  </PromptInputActions>
</PromptInput>

// Streaming text response
<ResponseStream textStream={text} mode="typewriter|fade" speed={20} onComplete={cb} />

// Animated shimmer text
<TextShimmer duration={3}>Processing your request...</TextShimmer>

// AI loading indicators (13 variants)
<Loader variant="circular|dots|typing|wave|bars|terminal|text-shimmer" size="sm|md|lg" text="Thinking" />

// Thinking/reasoning bar
<ThinkingBar text="Thinking" onStop={handleStop} stopLabel="Answer now" onClick={handleExpand} />

// Syntax-highlighted code block
<CodeBlock>
  <CodeBlockGroup>
    <span>filename.tsx</span>
    <Button size="icon-sm" variant="ghost">Copy</Button>
  </CodeBlockGroup>
  <CodeBlockCode code={codeString} language="tsx" theme="github-light" />
</CodeBlock>

// Markdown renderer (memoized, with code block support)
<Markdown className="prose">{markdownString}</Markdown>
```

---

## Theming with CSS Variables

```css
:root {
  --primary: oklch(0.55 0.22 260);
  --primary-foreground: oklch(1 0 0);
  --background: oklch(0.08 0.01 260);
  --foreground: oklch(0.95 0.01 260);
  --card: oklch(0.12 0.01 260);
  --accent: oklch(0.3 0.05 260);
  --muted: oklch(0.18 0.01 260);
  --muted-foreground: oklch(0.6 0.01 260);
  --border: oklch(0.25 0.01 260);
  --radius: 0.375rem;
}
```

Dark mode via `.dark` class on `<html>`. Use `cn()` from `prism-react-lib` for class merging.

---

## TypeScript Patterns

```tsx
interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  onEdit: () => void;
}

const [isOpen, setIsOpen] = useState<boolean>(false);
const [items, setItems] = useState<Item[]>([]);
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... };
```

---

## Quality Checklist

- [ ] `import 'prism-react-lib/styles.css'` at app root
- [ ] All components imported from `'prism-react-lib'` only
- [ ] No implicit `any` in TypeScript
- [ ] Aesthetic direction chosen and applied consistently via CSS variables
- [ ] Loading/empty states handled (`<Spinner>`, `<Skeleton>`, `<Empty>`)
- [ ] Interactive states (hover, focus, disabled) work
- [ ] Layout is responsive where appropriate

---

For the complete API with all props, variants, and usage patterns, see [references/components.md](references/components.md).
