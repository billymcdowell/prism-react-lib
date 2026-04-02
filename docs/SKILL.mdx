---
name: prism-react-production
description: Build production-ready React UIs with prism-react-lib. Covers installation, theme tokens mapped to Tailwind utilities (no arbitrary colors/radii/shadows), overlay and navigation decisions, forms, data display, AI/chat components, accessibility, and a full “when to use each component” catalog aligned with the package public API. Canonical browsable copy lives on Storybook — see Hosted documentation below.
---

# Prism React Library — production UI skill

> **Hosted documentation (Storybook):** [Production UI skill (this page)](https://billymcdowell.github.io/prism-react-lib/?path=/docs/documentation-production-ui-skill--docs) · [Storybook home](https://billymcdowell.github.io/prism-react-lib/)

Use **prism-react-lib** as the **only** component library for React + TypeScript apps. Do not mix in shadcn/ui, MUI, Chakra, or parallel primitives—compose layouts and custom pieces from prism exports and token-based `className` utilities.

**Public API** = everything re-exported from `prism-react-lib` ([`src/index.ts`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/index.ts): `./components/ui` + `./components/ai` only). There is no `/layouts` subpath.

**Internal-only:** `DropDrawer` exists in source ([`src/components/ui/dropdrawer.tsx`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/components/ui/dropdrawer.tsx)) for Storybook but is **not** exported from [`src/components/ui/index.ts`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/components/ui/index.ts); do not document or import it as part of the published package until it is added to the barrel.

---

## Setup

### Install

```bash
npm install prism-react-lib
```

**Peer dependencies:** `react` and `react-dom` **^19.2.0** (see [`package.json`](https://github.com/billymcdowell/prism-react-lib/blob/master/package.json)).

### Global styles

Import design tokens and base styles once at the app root (layout, `main.tsx`, or `App.tsx):

```tsx
import 'prism-react-lib/styles.css';
```

> The library’s entry file also imports [`src/styles.css`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/styles.css) for Storybook and local builds; still add the explicit `styles.css` import in consuming apps so styling is guaranteed regardless of bundler tree-shaking.

### Imports

Single barrel—no subpaths:

```tsx
import {
  Button,
  Card,
  CardContent,
  cn,
} from 'prism-react-lib';
```

### Theme: light, dark, high contrast

Semantic colors come from CSS variables in [`src/styles.css`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/styles.css):

- **Light:** default `:root`.
- **Dark:** add `className="dark"` on `<html>` or a root wrapper (variables under `.dark { ... }`).
- **High contrast:** add `high-contrast` class (variables under `.high-contrast { ... }`).

### Toasts (Sonner)

1. Render `<Toaster />` once near the root (exported from `prism-react-lib`).
2. Call `toast.success(...)`, `toast.error(...)`, etc. from **`sonner`** (peer-style usage; same package the library depends on).

The library’s [`Toaster`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/components/ui/sonner.tsx) uses **`next-themes`** `useTheme()`. Wrap the app with `ThemeProvider` from `next-themes` so toast chrome tracks light/dark reliably:

```tsx
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'prism-react-lib';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
```

---

## Token-first Tailwind styling

[`src/styles.css`](https://github.com/billymcdowell/prism-react-lib/blob/master/src/styles.css) defines CSS variables and maps them under `@theme inline { ... }`. That maps each token to **Tailwind v4** utilities. In consuming apps that use the same Tailwind + `@import "prism-react-lib/styles.css"` (or a copied theme), **prefer these utilities** for anything that should respect branding and `.dark` / `.high-contrast`.

### Rules (production)

1. **Do use** semantic utilities: `bg-background`, `text-foreground`, `border-border`, `ring-ring`, `text-muted-foreground`, `bg-card`, `text-primary`, etc.
2. **Do use** theme radii: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` (from `--radius-*` in ` @theme inline`).
3. **Do use** theme shadows: `shadow-2xs`, `shadow-xs`, `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`.
4. **Do use** theme fonts: `font-sans`, `font-serif`, `font-mono`.
5. **Opacity modifiers** on tokens are fine: `bg-primary/90`, `ring-ring/50`, `text-muted-foreground/80`.
6. **Do not use** arbitrary **colors**, **radii**, or **shadows** in app UI if avoidable: avoid `bg-[#...]`, `text-[rgb(...)]`, `rounded-[13px]`, `shadow-[0_2px_...]`, etc.—they bypass tokens and break theme switches.
7. **Layout** (spacing and size): standard Tailwind spacing (`p-4`, `gap-3`, `max-w-lg`, `min-h-svh`) is fine; the strict token rule applies to **semantic color, border, ring, radius, shadow, and font family** unless you intentionally need a one-off layout measurement.

Merge classes with **`cn`** from `prism-react-lib`:

```tsx
import { cn } from 'prism-react-lib';

<div className={cn('flex flex-col gap-4 p-6', className)} />
```

### Color tokens → classes

| Theme variable (concept) | Typical utilities |
|--------------------------|-------------------|
| `--background` | `bg-background` |
| `--foreground` | `text-foreground` |
| `--card` / `--card-foreground` | `bg-card`, `text-card-foreground` |
| `--popover` / `--popover-foreground` | `bg-popover`, `text-popover-foreground` |
| `--primary` / `--primary-foreground` | `bg-primary`, `text-primary-foreground`, `text-primary` (links/accent text) |
| `--secondary` / `--secondary-foreground` | `bg-secondary`, `text-secondary-foreground` |
| `--muted` / `--muted-foreground` | `bg-muted`, `text-muted-foreground` |
| `--accent` / `--accent-foreground` | `bg-accent`, `text-accent-foreground` |
| `--destructive` / `--destructive-foreground` | `bg-destructive`, `text-destructive-foreground`, `text-destructive` |
| `--border` | `border-border` |
| `--input` | `border-input`, `bg-input` (where used) |
| `--ring` | `ring-ring`, `outline-ring/50` (base layer uses outline) |
| `--chart-1` … `--chart-5` | `fill-chart-1`, `stroke-chart-1`, `text-chart-2`, etc. |
| `--sidebar*` | `bg-sidebar`, `text-sidebar-foreground`, `bg-sidebar-primary`, `text-sidebar-primary-foreground`, `bg-sidebar-accent`, `border-sidebar-border`, `ring-sidebar-ring`, … |

Charts: configure series colors in `ChartConfig` with **`hsl(var(--chart-N))`** or token-aligned values—see [Chart](#chart--chartcontainer) below.

### Radius → classes

| Token | Utility |
|-------|---------|
| `--radius-sm` | `rounded-sm` |
| `--radius-md` | `rounded-md` |
| `--radius-lg` | `rounded-lg` |
| `--radius-xl` | `rounded-xl` |

### Shadow → classes

`shadow-2xs`, `shadow-xs`, `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl` → CSS vars under `--shadow-*`.

### Typography → classes

- `font-sans` → `--font-sans` (Nunito stack)
- `font-serif` → `--font-serif` (Merriweather stack)
- `font-mono` → `--font-mono` (Anonymous Pro stack)

---

## When to use which pattern (high level)

### Overlays and floating UI

| Need | Component | Notes |
|------|-----------|--------|
| Focused task / form in a modal window | **Dialog** | General-purpose modal. Use **DialogHeader** / **DialogTitle** for accessibility. |
| Destructive or irreversible confirmation | **AlertDialog** | Blocks interaction; primary/cancel pattern; prefer over `Dialog` for “are you sure?”. |
| Secondary panel (filters, details), often full-height | **Sheet** | Slides from edge; great with **Sidebar** patterns on small screens. |
| Mobile-first bottom sheet or simple drawer | **Drawer** | Vaul-based; use when sheet/modal feels heavy on mobile. |
| Compact picker attached to control (date, menu-like list) | **Popover** | Positions next to trigger; pair with **PopoverTrigger** / **PopoverContent**. |
| Rich preview on hover (user card, summary) | **HoverCard** | Delayed hover surface; not for critical actions. |
| Action menu from button/icon | **DropdownMenu** | Most common command/menu pattern. |
| Right-click / long-press menu | **ContextMenu** | Desktop context workflows. |
| Command palette / searchable list in modal | **Command** + **CommandDialog** | Spotlight-style UI; keyboard-first. |

**Choosing:** prefer **AlertDialog** for irreversible actions; **Dialog** for general modals; **Sheet** for ancillary panels; **Popover** when the surface must anchor to a control; **DropdownMenu** for overflow actions; **CommandDialog** for global search or command UI.

### Navigation

| Need | Component |
|------|-----------|
| Same-page sections, settings tabs | **Tabs** |
| Primary app routes in header (large surface) | **NavigationMenu** |
| Desktop app-style top menus | **Menubar** |
| Hierarchy trail (SEO + wayfinding) | **Breadcrumb** |
| Many flat links + **Sidebar** layout | **Sidebar** primitives |

### Forms

| Need | Component |
|------|-----------|
| Production forms with validation | **Form**, **FormField**, **FormItem**, **FormLabel**, **FormControl**, **FormMessage** + **react-hook-form** + **zod** |
| Accessible field grouping / descriptions / errors | **Field**, **FieldLabel**, **FieldDescription**, **FieldError**, **FieldGroup**, **FieldSet** |
| Single-line text | **Input** inside **Field** or **FormControl** |
| Multi-line | **Textarea** |
| Label only | **Label** |
| Shadcn-style grouped input adornments | **InputGroup** |
| OTP / 2FA | **InputOTP** |
| Pick one of many (native select UX) | **Select** |
| Boolean | **Checkbox** or **Switch** |
| Mutually exclusive short list | **RadioGroup** |
| Numeric range | **Slider** |
| Date | **Calendar** (often inside **Popover**) |

### Feedback

| Need | Component |
|------|-----------|
| Inline status on the page | **Alert** |
| Transient global notification | **Sonner** (`toast`) + **Toaster** |
| Determinate progress | **Progress** |
| Wait without known duration | **Spinner** |
| Content placeholder while loading | **Skeleton** |
| AI / assistant loading | **Loader**, **ThinkingBar**, **TextShimmer**, **ResponseStream** |

### Data display

| Need | Component |
|------|-----------|
| Tabular data | **Table** |
| List rows with media + actions | **Item** / **ItemGroup** |
| No data yet | **Empty** |
| Expand/collapse FAQ-style | **Accordion** |
| Single expand/collapse region | **Collapsible** |
| Avatar | **Avatar** |
| Split panels | **Resizable** |
| Horizontal carousel | **Carousel** |
| Charts | **ChartContainer** + recharts primitives |
| Page through rows | **Pagination** |

---

## UI components — when to use each

Imports: `import { … } from 'prism-react-lib'`.

### Accordion

**When:** FAQ, settings groups, nested disclosure where **one or many** panels may be open. Prefer over repeated **Collapsible** when you want keyboard + Radix accordion semantics.

### Alert

**When:** Persistent **inline** feedback (errors, warnings, info) that belongs in page flow—not toast.

### AlertDialog

**When:** Confirm destructive actions, irreversible operations, or consent that must not be dismissible by accidental backdrop click in the same way as a casual modal.

### AspectRatio

**When:** Lock media (image, video) to a ratio inside responsive layouts.

### Avatar / AvatarImage / AvatarFallback

**When:** User/org identity in headers, tables, **Item**, messages.

### Badge

**When:** Compact metadata (status, count, pill label). Use `variant` for semantic emphasis—not for long text.

### Breadcrumb / BreadcrumbList / BreadcrumbItem / BreadcrumbLink / BreadcrumbPage / BreadcrumbSeparator

**When:** Hierarchical navigation trail on detail pages or nested settings.

### Button / buttonVariants

**When:** Primary actions, links styled as buttons (`asChild`), icon buttons (`size="icon"` variants). Prefer library **`variant`** over custom colors.

### ButtonGroup / ButtonGroupSeparator / ButtonGroupText

**When:** Clamped **related** actions (toolbar), segmented control–like grouping with separators or “or” labels.

### Calendar

**When:** Date picking; embed in **Popover** for a compact field pattern.

### Card / CardHeader / CardTitle / CardDescription / CardAction / CardContent / CardFooter

**When:** Grouping related content (dashboard widgets, form sections, previews). Use **CardAction** for header corner actions.

### Carousel (+ subcomponents)

**When:** Marketing tiles, image galleries, horizontal lists with snap/scroll—**not** for data tables.

### Chart / ChartContainer / ChartTooltip / ChartTooltipContent / ChartLegend / ChartLegendContent / ChartStyle

**When:** Line, bar, area, or pie visualization with **Recharts**. Define `ChartConfig` with colors referencing **`hsl(var(--chart-N))`** so series respect light/dark. **ChartContainer** wraps **ResponsiveContainer** children.

### Checkbox

**When:** Multi-select, boolean “accept terms”, nested lists.

### Collapsible / CollapsibleTrigger / CollapsibleContent

**When:** Single disclosure region (advanced options). Use **Accordion** for a set of disclosures.

### Command / CommandDialog / CommandInput / CommandList / CommandEmpty / CommandGroup / CommandItem / CommandShortcut / CommandSeparator

**When:** Command palette (`CommandDialog`) or searchable lists inside dialogs/popovers.

### ContextMenu / ContextMenuTrigger / ContextMenuContent (+ menu item variants)

**When:** Right-click menus on specific widgets or rows.

### Dialog / DialogTrigger / DialogContent / DialogHeader / DialogTitle / DialogDescription / DialogFooter / DialogClose

**When:** Modal workflows that are **not** strictly confirm/cancel destructives (those → **AlertDialog**).

### Drawer / DrawerTrigger / DrawerContent / DrawerHeader / DrawerFooter / DrawerTitle / DrawerDescription / DrawerClose

**When:** Mobile sheets or lightweight slide-over content; pair with responsive patterns (e.g. **Dialog** on desktop, **Drawer** on narrow viewports if you split behavior in app code).

### DropdownMenu (+ full menu component set)

**When:** Overflow actions, user menu, “⋯” menus. Prefer **DropDrawer** only after it becomes a public export; until then use **DropdownMenu** + responsive layout or **Drawer** + custom list.

### Empty / EmptyHeader / EmptyMedia / EmptyTitle / EmptyDescription / EmptyContent

**When:** First-run, no results, cleared lists—always pair with a clear **CTA** (`Button`).

### Field / FieldLabel / FieldTitle / FieldDescription / FieldError / FieldGroup / FieldSet / FieldLegend / FieldSeparator / FieldContent

**When:** Accessible, composable field layout **outside** or **alongside** `react-hook-form`—especially with `orientation="horizontal"` or `responsive` for dense settings. **FieldError** aggregates error messages.

### Form / FormField / FormItem / FormLabel / FormControl / FormDescription / FormMessage / useFormField

**When:** Any validated form; wire **Controller** through **FormField**; put input inside **FormControl** so `aria-invalid` and ids propagate.

### HoverCard / HoverCardTrigger / HoverCardContent

**When:** Deferred rich previews (profile preview, summary tooltip with content).

### Input

**When:** Single-line text, search, email—pair with **Label** or **FieldLabel**.

### InputGroup / InputGroupAddon / InputGroupButton / InputGroupText / InputGroupInput / InputGroupTextarea

**When:** Prefix/suffix icons, units, or inline buttons adjacent to input.

### InputOTP / InputOTPGroup / InputOTPSlot / InputOTPSeparator

**When:** Verification codes, MFA.

### Item / ItemGroup / ItemMedia / ItemContent / ItemTitle / ItemDescription / ItemActions / ItemSeparator

**When:** Notification lists, settings rows, pick lists with optional icon/avatar—lighter than full **Table** when rows are heterogeneous.

### Kbd / KbdGroup

**When:** Document keyboard shortcuts in UI copy.

### Label

**When:** Single primitive label; use **FieldLabel** when using **Field** layout.

### Menubar (+ subcomponents)

**When:** Dense, desktop-style application menus.

### NavigationMenu (+ subcomponents)

**When:** Top nav with mega-menu style sections.

### Pagination / PaginationContent / PaginationItem / PaginationLink / PaginationPrevious / PaginationNext / PaginationEllipsis

**When:** List/table paging controls.

### Popover / PopoverTrigger / PopoverContent

**When:** Anchored floating content: date picker, simple forms, overflow that is not a full modal.

### Progress

**When:** Known-duration tasks, upload progress.

### RadioGroup / RadioGroupItem

**When:** Small set of exclusive options (2–7); for many options use **Select**.

### ResizablePanelGroup / ResizablePanel / ResizableHandle

**When:** IDE-style split view, preview + editor.

### ScrollArea / ScrollBar

**When:** Constrained height regions with styled overflow.

### Select / SelectTrigger / SelectContent / SelectItem / SelectValue / SelectGroup / SelectLabel / SelectSeparator / SelectScrollUpButton / SelectScrollDownButton

**When:** Native-feel pickers; avoid for command-palette scale lists (**Command** is better).

### Separator

**When:** Visual division between sections (horizontal or vertical).

### Sheet / SheetTrigger / SheetContent / SheetHeader / SheetTitle / SheetDescription / SheetFooter / SheetClose

**When:** Side panel that may coexist with main content; mobile navigation drawer pattern.

### SidebarProvider / Sidebar / SidebarHeader / SidebarContent / SidebarFooter / SidebarRail / SidebarInset / SidebarTrigger / useSidebar / SidebarGroup / SidebarGroupLabel / SidebarGroupContent / SidebarGroupAction / SidebarMenu / SidebarMenuItem / SidebarMenuButton / SidebarMenuAction / SidebarMenuBadge / SidebarMenuSkeleton / SidebarMenuSub / SidebarMenuSubItem / SidebarMenuSubButton / SidebarSeparator / SidebarInput

**When:** Application shell with persistent nav. **SidebarProvider** wraps layout; **SidebarInset** holds main content; **SidebarTrigger** toggles; use **SidebarMenu** + **SidebarMenuButton** with `isActive` for route state.

### Skeleton

**When:** Loading placeholders for **Card**, **Table**, **Item** rows.

### Slider

**When:** Continuous values (volume, weighting) with drag affordance.

### Toaster

**When:** Once per app—enables Sonner toasts.

### Spinner

**When:** Inline loading indicator inside buttons or sections.

### Switch

**When:** Binary setting with immediate effect (feature flags, dark mode toggles if not delegated to **ThemeProvider**).

### Table / TableHeader / TableBody / TableFooter / TableRow / TableHead / TableCell / TableCaption

**When:** Structured repeating rows, sortable data (add app logic), datasets needing column alignment.

### Tabs / TabsList / TabsTrigger / TabsContent

**When:** Peer views at the same URL (settings sections, dashboard views).

### Textarea

**When:** Multi-line text, comments, descriptions.

### Toggle / ToggleGroup / ToggleGroupItem

**When:** Mutually exclusive or multi-select **icon** or compact controls (formatting toolbar pattern).

### Tooltip / TooltipProvider / TooltipTrigger / TooltipContent

**When:** Clarify icon-only buttons or terse labels; wrap subtrees that need tooltips with **TooltipProvider** where appropriate.

### Sonner (usage)

Import **`toast`** from **`sonner`**; render **`Toaster`** from **`prism-react-lib`**.

---

## AI components — when to use each

Imports: `import { … } from 'prism-react-lib'`.

### ChainOfThought / ChainOfThoughtStep / ChainOfThoughtItem / ChainOfThoughtTrigger / ChainOfThoughtContent

**When:** Step-through reasoning UI (agent “steps” or plan) with collapsible/detail sections; compose with **ChainOfThoughtStep** and trigger/content pairs.

### ChatContainerRoot / ChatContainerContent / ChatContainerScrollAnchor

**When:** Scrollable conversation region with stick-to-bottom behavior for streaming chat. Use **ChatContainerScrollAnchor** when you need an explicit scroll anchor for the stick-to-bottom hook.

### CodeBlock / CodeBlockGroup / CodeBlockCode

**When:** Syntax-highlighted snippets in assistant or docs UI; supports `language` and Shiki `theme`.

### FeedbackBar

**When:** Inline AI feedback or rating strip tied to a message or turn.

### FileUpload / FileUploadTrigger / FileUploadContent

**When:** Drag-drop or trigger upload UX inside AI workflows (attachments).

### Image (AI `Image` component)

**When:** Rendering model-generated or user images inside chat or tool result cards—use token-safe framing via `className`. If this clashes with `next/image` or other **`Image`** imports, alias: `import { Image as AiImage } from 'prism-react-lib'`.

### JSXPreview

**When:** Live or sandbox preview of JSX output from tools (use cautiously in production—validate trust boundaries). Import as **`JSXPreview`** from `prism-react-lib`.

### Loader

**When:** Branded AI loading states (multiple visual variants); prefer over **Spinner** for chat-specific personality.

### Markdown

**When:** Rendering assistant markdown (GFM, breaks); prefer inside **MessageContent** or tool surfaces instead of `dangerouslySetInnerHTML`.

### Message / MessageAvatar / MessageContent / MessageActions / MessageAction

**When:** Chat bubbles with optional avatar, markdown content, and per-message actions (copy, regenerate).

### PromptInput / PromptInputTextarea / PromptInputActions / PromptInputAction

**When:** Chat composer with loading state, submit handling, and accessory actions.

### PromptSuggestion

**When:** Chip or suggestion row to prefill prompts.

### Reasoning / ReasoningTrigger / ReasoningContent

**When:** Collapsible “thinking” or model reasoning separate from final answer; supports streaming indicator.

### ResponseStream / useTextStream

**When:** Token streaming display for plain text responses with animation modes (`typewriter` | `fade`). Use **`useTextStream`** when you need the same streaming behavior outside the component.

### ScrollButton

**When:** Floating control to scroll chat to latest in long threads.

### Source / SourceTrigger / SourceContent

**When:** Citations / source previews under an assistant answer; **SourceTrigger** + **SourceContent** pair with hover-card-style detail.

### Steps / StepsItem / StepsTrigger / StepsContent / StepsBar

**When:** Linear multi-step agent or onboarding flows inside AI UI; **StepsBar** provides the vertical rail between items.

### SystemMessage

**When:** Distinct styling for system notices inside a thread (moderation, tool errors, session events).

### TextShimmer

**When:** Subtle animated emphasis on “processing” copy.

### ThinkingBar

**When:** Sticky or inline bar showing model still working, optional stop/expand actions.

### Tool

**When:** Collapsible UI for a tool call (input/output/error states) aligned with AI SDK / tool-call shapes.

---

## Minimal form pattern (react-hook-form + zod)

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from 'prism-react-lib';

const schema = z.object({
  email: z.string().email(),
});

export function ExampleForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => console.log(values))}
        className="flex max-w-sm flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-background"
                  placeholder="you@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

---

## Production checklist

- [ ] `import 'prism-react-lib/styles.css'` at app root
- [ ] All UI from **`prism-react-lib`** only (no duplicate primitive libraries)
- [ ] Semantic **token** utilities for color/border/ring/radius/shadow/font—no arbitrary hex/rgb shadow/radius in core UI
- [ ] Dark/high-contrast tested if you expose those modes
- [ ] **`Toaster`** mounted; **`ThemeProvider`** if using themed toasts
- [ ] Loading: **Skeleton** / **Spinner**; empty: **Empty**; errors: **Alert**, **FieldError**, or **`toast`**
- [ ] Focus visible: rely on components’ `ring-ring` / `focus-visible` patterns; don’t strip outlines without replacement
- [ ] Overlays: **DialogTitle** / **AlertDialogTitle** present where required for a11y
- [ ] Forms: **FormMessage** or **FieldError** surfaces validation errors
- [ ] TypeScript: no implicit `any` on public handlers and props

---

## Storybook

- **Published:** component stories and this guide are hosted at [Storybook (GitHub Pages)](https://billymcdowell.github.io/prism-react-lib/). Open the **Documentation → Production UI skill** doc or deep-link: [same content as this file](https://billymcdowell.github.io/prism-react-lib/?path=/docs/documentation-production-ui-skill--docs).
- **Local:** clone the repo, then run `npm run storybook`. Source for stories: [`src/stories/`](https://github.com/billymcdowell/prism-react-lib/tree/master/src/stories).

### Raw docs for LLMs (static `/docs/` mirror)

Storybook serves `src/stories/docs/` at **`/docs/*`** via [`staticDirs`](https://github.com/billymcdowell/prism-react-lib/blob/master/.storybook/main.ts) (`{ from: "../src/stories/docs", to: "/docs" }`). After each `npm run build-storybook`, [`scripts/copy-docs-for-llm.mjs`](https://github.com/billymcdowell/prism-react-lib/blob/master/scripts/copy-docs-for-llm.mjs) adds **`CHANGELOG.md`**, **`index.json`**, and **`README.md`** under **`/docs/`** (changelog lives at repo root, not in that folder).

- **Manifest:** [https://billymcdowell.github.io/prism-react-lib/docs/index.json](https://billymcdowell.github.io/prism-react-lib/docs/index.json) — lists every file and full URL.
- **Pattern:** `https://billymcdowell.github.io/prism-react-lib/docs/<filename>.mdx` (e.g. [button.mdx](https://billymcdowell.github.io/prism-react-lib/docs/button.mdx), [SKILL.md](https://billymcdowell.github.io/prism-react-lib/docs/SKILL.md)).
- **Custom base URL** when building: `STORYBOOK_PUBLIC_URL=https://your.host/your-base npm run build-storybook`.

---

## TypeScript tips

Prefer explicit props interfaces for feature components; use `React.ComponentProps<typeof Button>` when extending primitives. Derive form values from `z.infer<typeof schema>`.
