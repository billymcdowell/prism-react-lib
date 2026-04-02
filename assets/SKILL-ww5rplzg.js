import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CkR7Pirb.js";import"./iframe-Thtzo6Ds.js";import"./preload-helper-PPVm8Dsz.js";function s(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"name-prism-react-productiondescription-build-production-ready-react-uis-with-prism-react-lib-covers-installation-theme-tokens-mapped-to-tailwind-utilities-no-arbitrary-colorsradiishadows-overlay-and-navigation-decisions-forms-data-display-aichat-components-accessibility-and-a-full-when-to-use-each-component-catalog-aligned-with-the-package-public-api-canonical-browsable-copy-lives-on-storybook--see-hosted-documentation-below",children:`name: prism-react-production
description: Build production-ready React UIs with prism-react-lib. Covers installation, theme tokens mapped to Tailwind utilities (no arbitrary colors/radii/shadows), overlay and navigation decisions, forms, data display, AI/chat components, accessibility, and a full “when to use each component” catalog aligned with the package public API. Canonical browsable copy lives on Storybook — see Hosted documentation below.`}),`
`,e.jsx(n.h1,{id:"prism-react-library--production-ui-skill",children:"Prism React Library — production UI skill"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hosted documentation (Storybook):"})," ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/?path=/docs/documentation-production-ui-skill--docs",rel:"nofollow",children:"Production UI skill (this page)"})," · ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/",rel:"nofollow",children:"Storybook home"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.strong,{children:"prism-react-lib"})," as the ",e.jsx(n.strong,{children:"only"})," component library for React + TypeScript apps. Do not mix in shadcn/ui, MUI, Chakra, or parallel primitives—compose layouts and custom pieces from prism exports and token-based ",e.jsx(n.code,{children:"className"})," utilities."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Public API"})," = everything re-exported from ",e.jsx(n.code,{children:"prism-react-lib"})," (",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/index.ts",rel:"nofollow",children:e.jsx(n.code,{children:"src/index.ts"})}),": ",e.jsx(n.code,{children:"./components/ui"})," + ",e.jsx(n.code,{children:"./components/ai"})," only). There is no ",e.jsx(n.code,{children:"/layouts"})," subpath."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Internal-only:"})," ",e.jsx(n.code,{children:"DropDrawer"})," exists in source (",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/components/ui/dropdrawer.tsx",rel:"nofollow",children:e.jsx(n.code,{children:"src/components/ui/dropdrawer.tsx"})}),") for Storybook but is ",e.jsx(n.strong,{children:"not"})," exported from ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/components/ui/index.ts",rel:"nofollow",children:e.jsx(n.code,{children:"src/components/ui/index.ts"})}),"; do not document or import it as part of the published package until it is added to the barrel."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsx(n.h3,{id:"install",children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install prism-react-lib
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Peer dependencies:"})," ",e.jsx(n.code,{children:"react"})," and ",e.jsx(n.code,{children:"react-dom"})," ",e.jsx(n.strong,{children:"^19.2.0"})," (see ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/package.json",rel:"nofollow",children:e.jsx(n.code,{children:"package.json"})}),")."]}),`
`,e.jsx(n.h3,{id:"global-styles",children:"Global styles"}),`
`,e.jsxs(n.p,{children:["Import design tokens and base styles once at the app root (layout, ",e.jsx(n.code,{children:"main.tsx"}),", or `App.tsx):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import 'prism-react-lib/styles.css';
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The library’s entry file also imports ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/styles.css",rel:"nofollow",children:e.jsx(n.code,{children:"src/styles.css"})})," for Storybook and local builds; still add the explicit ",e.jsx(n.code,{children:"styles.css"})," import in consuming apps so styling is guaranteed regardless of bundler tree-shaking."]}),`
`]}),`
`,e.jsx(n.h3,{id:"imports",children:"Imports"}),`
`,e.jsx(n.p,{children:"Single barrel—no subpaths:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  Button,
  Card,
  CardContent,
  cn,
} from 'prism-react-lib';
`})}),`
`,e.jsx(n.h3,{id:"theme-light-dark-high-contrast",children:"Theme: light, dark, high contrast"}),`
`,e.jsxs(n.p,{children:["Semantic colors come from CSS variables in ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/styles.css",rel:"nofollow",children:e.jsx(n.code,{children:"src/styles.css"})}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Light:"})," default ",e.jsx(n.code,{children:":root"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dark:"})," add ",e.jsx(n.code,{children:'className="dark"'})," on ",e.jsx(n.code,{children:"<html>"})," or a root wrapper (variables under ",e.jsx(n.code,{children:".dark { ... }"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"High contrast:"})," add ",e.jsx(n.code,{children:"high-contrast"})," class (variables under ",e.jsx(n.code,{children:".high-contrast { ... }"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"toasts-sonner",children:"Toasts (Sonner)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Render ",e.jsx(n.code,{children:"<Toaster />"})," once near the root (exported from ",e.jsx(n.code,{children:"prism-react-lib"}),")."]}),`
`,e.jsxs(n.li,{children:["Call ",e.jsx(n.code,{children:"toast.success(...)"}),", ",e.jsx(n.code,{children:"toast.error(...)"}),", etc. from ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"sonner"})})," (peer-style usage; same package the library depends on)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The library’s ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/components/ui/sonner.tsx",rel:"nofollow",children:e.jsx(n.code,{children:"Toaster"})})," uses ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"next-themes"})})," ",e.jsx(n.code,{children:"useTheme()"}),". Wrap the app with ",e.jsx(n.code,{children:"ThemeProvider"})," from ",e.jsx(n.code,{children:"next-themes"})," so toast chrome tracks light/dark reliably:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from 'next-themes';
import { Toaster } from 'prism-react-lib';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"token-first-tailwind-styling",children:"Token-first Tailwind styling"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/src/styles.css",rel:"nofollow",children:e.jsx(n.code,{children:"src/styles.css"})})," defines CSS variables and maps them under ",e.jsx(n.code,{children:"@theme inline { ... }"}),". That maps each token to ",e.jsx(n.strong,{children:"Tailwind v4"})," utilities. In consuming apps that use the same Tailwind + ",e.jsx(n.code,{children:'@import "prism-react-lib/styles.css"'})," (or a copied theme), ",e.jsx(n.strong,{children:"prefer these utilities"})," for anything that should respect branding and ",e.jsx(n.code,{children:".dark"})," / ",e.jsx(n.code,{children:".high-contrast"}),"."]}),`
`,e.jsx(n.h3,{id:"rules-production",children:"Rules (production)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do use"})," semantic utilities: ",e.jsx(n.code,{children:"bg-background"}),", ",e.jsx(n.code,{children:"text-foreground"}),", ",e.jsx(n.code,{children:"border-border"}),", ",e.jsx(n.code,{children:"ring-ring"}),", ",e.jsx(n.code,{children:"text-muted-foreground"}),", ",e.jsx(n.code,{children:"bg-card"}),", ",e.jsx(n.code,{children:"text-primary"}),", etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do use"})," theme radii: ",e.jsx(n.code,{children:"rounded-sm"}),", ",e.jsx(n.code,{children:"rounded-md"}),", ",e.jsx(n.code,{children:"rounded-lg"}),", ",e.jsx(n.code,{children:"rounded-xl"})," (from ",e.jsx(n.code,{children:"--radius-*"})," in ",e.jsx(n.code,{children:" @theme inline"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do use"})," theme shadows: ",e.jsx(n.code,{children:"shadow-2xs"}),", ",e.jsx(n.code,{children:"shadow-xs"}),", ",e.jsx(n.code,{children:"shadow-sm"}),", ",e.jsx(n.code,{children:"shadow"}),", ",e.jsx(n.code,{children:"shadow-md"}),", ",e.jsx(n.code,{children:"shadow-lg"}),", ",e.jsx(n.code,{children:"shadow-xl"}),", ",e.jsx(n.code,{children:"shadow-2xl"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do use"})," theme fonts: ",e.jsx(n.code,{children:"font-sans"}),", ",e.jsx(n.code,{children:"font-serif"}),", ",e.jsx(n.code,{children:"font-mono"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Opacity modifiers"})," on tokens are fine: ",e.jsx(n.code,{children:"bg-primary/90"}),", ",e.jsx(n.code,{children:"ring-ring/50"}),", ",e.jsx(n.code,{children:"text-muted-foreground/80"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do not use"})," arbitrary ",e.jsx(n.strong,{children:"colors"}),", ",e.jsx(n.strong,{children:"radii"}),", or ",e.jsx(n.strong,{children:"shadows"})," in app UI if avoidable: avoid ",e.jsx(n.code,{children:"bg-[#...]"}),", ",e.jsx(n.code,{children:"text-[rgb(...)]"}),", ",e.jsx(n.code,{children:"rounded-[13px]"}),", ",e.jsx(n.code,{children:"shadow-[0_2px_...]"}),", etc.—they bypass tokens and break theme switches."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Layout"})," (spacing and size): standard Tailwind spacing (",e.jsx(n.code,{children:"p-4"}),", ",e.jsx(n.code,{children:"gap-3"}),", ",e.jsx(n.code,{children:"max-w-lg"}),", ",e.jsx(n.code,{children:"min-h-svh"}),") is fine; the strict token rule applies to ",e.jsx(n.strong,{children:"semantic color, border, ring, radius, shadow, and font family"})," unless you intentionally need a one-off layout measurement."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Merge classes with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"cn"})})," from ",e.jsx(n.code,{children:"prism-react-lib"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { cn } from 'prism-react-lib';

<div className={cn('flex flex-col gap-4 p-6', className)} />
`})}),`
`,e.jsx(n.h3,{id:"color-tokens--classes",children:"Color tokens → classes"}),`
`,e.jsxs(n.p,{children:[`| Theme variable (concept) | Typical utilities |
|--------------------------|-------------------|
| `,e.jsx(n.code,{children:"--background"})," | ",e.jsx(n.code,{children:"bg-background"}),` |
| `,e.jsx(n.code,{children:"--foreground"})," | ",e.jsx(n.code,{children:"text-foreground"}),` |
| `,e.jsx(n.code,{children:"--card"})," / ",e.jsx(n.code,{children:"--card-foreground"})," | ",e.jsx(n.code,{children:"bg-card"}),", ",e.jsx(n.code,{children:"text-card-foreground"}),` |
| `,e.jsx(n.code,{children:"--popover"})," / ",e.jsx(n.code,{children:"--popover-foreground"})," | ",e.jsx(n.code,{children:"bg-popover"}),", ",e.jsx(n.code,{children:"text-popover-foreground"}),` |
| `,e.jsx(n.code,{children:"--primary"})," / ",e.jsx(n.code,{children:"--primary-foreground"})," | ",e.jsx(n.code,{children:"bg-primary"}),", ",e.jsx(n.code,{children:"text-primary-foreground"}),", ",e.jsx(n.code,{children:"text-primary"}),` (links/accent text) |
| `,e.jsx(n.code,{children:"--secondary"})," / ",e.jsx(n.code,{children:"--secondary-foreground"})," | ",e.jsx(n.code,{children:"bg-secondary"}),", ",e.jsx(n.code,{children:"text-secondary-foreground"}),` |
| `,e.jsx(n.code,{children:"--muted"})," / ",e.jsx(n.code,{children:"--muted-foreground"})," | ",e.jsx(n.code,{children:"bg-muted"}),", ",e.jsx(n.code,{children:"text-muted-foreground"}),` |
| `,e.jsx(n.code,{children:"--accent"})," / ",e.jsx(n.code,{children:"--accent-foreground"})," | ",e.jsx(n.code,{children:"bg-accent"}),", ",e.jsx(n.code,{children:"text-accent-foreground"}),` |
| `,e.jsx(n.code,{children:"--destructive"})," / ",e.jsx(n.code,{children:"--destructive-foreground"})," | ",e.jsx(n.code,{children:"bg-destructive"}),", ",e.jsx(n.code,{children:"text-destructive-foreground"}),", ",e.jsx(n.code,{children:"text-destructive"}),` |
| `,e.jsx(n.code,{children:"--border"})," | ",e.jsx(n.code,{children:"border-border"}),` |
| `,e.jsx(n.code,{children:"--input"})," | ",e.jsx(n.code,{children:"border-input"}),", ",e.jsx(n.code,{children:"bg-input"}),` (where used) |
| `,e.jsx(n.code,{children:"--ring"})," | ",e.jsx(n.code,{children:"ring-ring"}),", ",e.jsx(n.code,{children:"outline-ring/50"}),` (base layer uses outline) |
| `,e.jsx(n.code,{children:"--chart-1"})," … ",e.jsx(n.code,{children:"--chart-5"})," | ",e.jsx(n.code,{children:"fill-chart-1"}),", ",e.jsx(n.code,{children:"stroke-chart-1"}),", ",e.jsx(n.code,{children:"text-chart-2"}),`, etc. |
| `,e.jsx(n.code,{children:"--sidebar*"})," | ",e.jsx(n.code,{children:"bg-sidebar"}),", ",e.jsx(n.code,{children:"text-sidebar-foreground"}),", ",e.jsx(n.code,{children:"bg-sidebar-primary"}),", ",e.jsx(n.code,{children:"text-sidebar-primary-foreground"}),", ",e.jsx(n.code,{children:"bg-sidebar-accent"}),", ",e.jsx(n.code,{children:"border-sidebar-border"}),", ",e.jsx(n.code,{children:"ring-sidebar-ring"}),", … |"]}),`
`,e.jsxs(n.p,{children:["Charts: configure series colors in ",e.jsx(n.code,{children:"ChartConfig"})," with ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"hsl(var(--chart-N))"})})," or token-aligned values—see ",e.jsx(n.a,{href:"#chart--chartcontainer",children:"Chart"})," below."]}),`
`,e.jsx(n.h3,{id:"radius--classes",children:"Radius → classes"}),`
`,e.jsxs(n.p,{children:[`| Token | Utility |
|-------|---------|
| `,e.jsx(n.code,{children:"--radius-sm"})," | ",e.jsx(n.code,{children:"rounded-sm"}),` |
| `,e.jsx(n.code,{children:"--radius-md"})," | ",e.jsx(n.code,{children:"rounded-md"}),` |
| `,e.jsx(n.code,{children:"--radius-lg"})," | ",e.jsx(n.code,{children:"rounded-lg"}),` |
| `,e.jsx(n.code,{children:"--radius-xl"})," | ",e.jsx(n.code,{children:"rounded-xl"})," |"]}),`
`,e.jsx(n.h3,{id:"shadow--classes",children:"Shadow → classes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"shadow-2xs"}),", ",e.jsx(n.code,{children:"shadow-xs"}),", ",e.jsx(n.code,{children:"shadow-sm"}),", ",e.jsx(n.code,{children:"shadow"}),", ",e.jsx(n.code,{children:"shadow-md"}),", ",e.jsx(n.code,{children:"shadow-lg"}),", ",e.jsx(n.code,{children:"shadow-xl"}),", ",e.jsx(n.code,{children:"shadow-2xl"})," → CSS vars under ",e.jsx(n.code,{children:"--shadow-*"}),"."]}),`
`,e.jsx(n.h3,{id:"typography--classes",children:"Typography → classes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"font-sans"})," → ",e.jsx(n.code,{children:"--font-sans"})," (Nunito stack)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"font-serif"})," → ",e.jsx(n.code,{children:"--font-serif"})," (Merriweather stack)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"font-mono"})," → ",e.jsx(n.code,{children:"--font-mono"})," (Anonymous Pro stack)"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"when-to-use-which-pattern-high-level",children:"When to use which pattern (high level)"}),`
`,e.jsx(n.h3,{id:"overlays-and-floating-ui",children:"Overlays and floating UI"}),`
`,e.jsxs(n.p,{children:[`| Need | Component | Notes |
|------|-----------|--------|
| Focused task / form in a modal window | `,e.jsx(n.strong,{children:"Dialog"})," | General-purpose modal. Use ",e.jsx(n.strong,{children:"DialogHeader"})," / ",e.jsx(n.strong,{children:"DialogTitle"}),` for accessibility. |
| Destructive or irreversible confirmation | `,e.jsx(n.strong,{children:"AlertDialog"})," | Blocks interaction; primary/cancel pattern; prefer over ",e.jsx(n.code,{children:"Dialog"}),` for “are you sure?”. |
| Secondary panel (filters, details), often full-height | `,e.jsx(n.strong,{children:"Sheet"})," | Slides from edge; great with ",e.jsx(n.strong,{children:"Sidebar"}),` patterns on small screens. |
| Mobile-first bottom sheet or simple drawer | `,e.jsx(n.strong,{children:"Drawer"}),` | Vaul-based; use when sheet/modal feels heavy on mobile. |
| Compact picker attached to control (date, menu-like list) | `,e.jsx(n.strong,{children:"Popover"})," | Positions next to trigger; pair with ",e.jsx(n.strong,{children:"PopoverTrigger"})," / ",e.jsx(n.strong,{children:"PopoverContent"}),`. |
| Rich preview on hover (user card, summary) | `,e.jsx(n.strong,{children:"HoverCard"}),` | Delayed hover surface; not for critical actions. |
| Action menu from button/icon | `,e.jsx(n.strong,{children:"DropdownMenu"}),` | Most common command/menu pattern. |
| Right-click / long-press menu | `,e.jsx(n.strong,{children:"ContextMenu"}),` | Desktop context workflows. |
| Command palette / searchable list in modal | `,e.jsx(n.strong,{children:"Command"})," + ",e.jsx(n.strong,{children:"CommandDialog"})," | Spotlight-style UI; keyboard-first. |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Choosing:"})," prefer ",e.jsx(n.strong,{children:"AlertDialog"})," for irreversible actions; ",e.jsx(n.strong,{children:"Dialog"})," for general modals; ",e.jsx(n.strong,{children:"Sheet"})," for ancillary panels; ",e.jsx(n.strong,{children:"Popover"})," when the surface must anchor to a control; ",e.jsx(n.strong,{children:"DropdownMenu"})," for overflow actions; ",e.jsx(n.strong,{children:"CommandDialog"})," for global search or command UI."]}),`
`,e.jsx(n.h3,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(n.p,{children:[`| Need | Component |
|------|-----------|
| Same-page sections, settings tabs | `,e.jsx(n.strong,{children:"Tabs"}),` |
| Primary app routes in header (large surface) | `,e.jsx(n.strong,{children:"NavigationMenu"}),` |
| Desktop app-style top menus | `,e.jsx(n.strong,{children:"Menubar"}),` |
| Hierarchy trail (SEO + wayfinding) | `,e.jsx(n.strong,{children:"Breadcrumb"}),` |
| Many flat links + `,e.jsx(n.strong,{children:"Sidebar"})," layout | ",e.jsx(n.strong,{children:"Sidebar"})," primitives |"]}),`
`,e.jsx(n.h3,{id:"forms",children:"Forms"}),`
`,e.jsxs(n.p,{children:[`| Need | Component |
|------|-----------|
| Production forms with validation | `,e.jsx(n.strong,{children:"Form"}),", ",e.jsx(n.strong,{children:"FormField"}),", ",e.jsx(n.strong,{children:"FormItem"}),", ",e.jsx(n.strong,{children:"FormLabel"}),", ",e.jsx(n.strong,{children:"FormControl"}),", ",e.jsx(n.strong,{children:"FormMessage"})," + ",e.jsx(n.strong,{children:"react-hook-form"})," + ",e.jsx(n.strong,{children:"zod"}),` |
| Accessible field grouping / descriptions / errors | `,e.jsx(n.strong,{children:"Field"}),", ",e.jsx(n.strong,{children:"FieldLabel"}),", ",e.jsx(n.strong,{children:"FieldDescription"}),", ",e.jsx(n.strong,{children:"FieldError"}),", ",e.jsx(n.strong,{children:"FieldGroup"}),", ",e.jsx(n.strong,{children:"FieldSet"}),` |
| Single-line text | `,e.jsx(n.strong,{children:"Input"})," inside ",e.jsx(n.strong,{children:"Field"})," or ",e.jsx(n.strong,{children:"FormControl"}),` |
| Multi-line | `,e.jsx(n.strong,{children:"Textarea"}),` |
| Label only | `,e.jsx(n.strong,{children:"Label"}),` |
| Shadcn-style grouped input adornments | `,e.jsx(n.strong,{children:"InputGroup"}),` |
| OTP / 2FA | `,e.jsx(n.strong,{children:"InputOTP"}),` |
| Pick one of many (native select UX) | `,e.jsx(n.strong,{children:"Select"}),` |
| Boolean | `,e.jsx(n.strong,{children:"Checkbox"})," or ",e.jsx(n.strong,{children:"Switch"}),` |
| Mutually exclusive short list | `,e.jsx(n.strong,{children:"RadioGroup"}),` |
| Numeric range | `,e.jsx(n.strong,{children:"Slider"}),` |
| Date | `,e.jsx(n.strong,{children:"Calendar"})," (often inside ",e.jsx(n.strong,{children:"Popover"}),") |"]}),`
`,e.jsx(n.h3,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`| Need | Component |
|------|-----------|
| Inline status on the page | `,e.jsx(n.strong,{children:"Alert"}),` |
| Transient global notification | `,e.jsx(n.strong,{children:"Sonner"})," (",e.jsx(n.code,{children:"toast"}),") + ",e.jsx(n.strong,{children:"Toaster"}),` |
| Determinate progress | `,e.jsx(n.strong,{children:"Progress"}),` |
| Wait without known duration | `,e.jsx(n.strong,{children:"Spinner"}),` |
| Content placeholder while loading | `,e.jsx(n.strong,{children:"Skeleton"}),` |
| AI / assistant loading | `,e.jsx(n.strong,{children:"Loader"}),", ",e.jsx(n.strong,{children:"ThinkingBar"}),", ",e.jsx(n.strong,{children:"TextShimmer"}),", ",e.jsx(n.strong,{children:"ResponseStream"})," |"]}),`
`,e.jsx(n.h3,{id:"data-display",children:"Data display"}),`
`,e.jsxs(n.p,{children:[`| Need | Component |
|------|-----------|
| Tabular data | `,e.jsx(n.strong,{children:"Table"}),` |
| List rows with media + actions | `,e.jsx(n.strong,{children:"Item"})," / ",e.jsx(n.strong,{children:"ItemGroup"}),` |
| No data yet | `,e.jsx(n.strong,{children:"Empty"}),` |
| Expand/collapse FAQ-style | `,e.jsx(n.strong,{children:"Accordion"}),` |
| Single expand/collapse region | `,e.jsx(n.strong,{children:"Collapsible"}),` |
| Avatar | `,e.jsx(n.strong,{children:"Avatar"}),` |
| Split panels | `,e.jsx(n.strong,{children:"Resizable"}),` |
| Horizontal carousel | `,e.jsx(n.strong,{children:"Carousel"}),` |
| Charts | `,e.jsx(n.strong,{children:"ChartContainer"}),` + recharts primitives |
| Page through rows | `,e.jsx(n.strong,{children:"Pagination"})," |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ui-components--when-to-use-each",children:"UI components — when to use each"}),`
`,e.jsxs(n.p,{children:["Imports: ",e.jsx(n.code,{children:"import { … } from 'prism-react-lib'"}),"."]}),`
`,e.jsx(n.h3,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," FAQ, settings groups, nested disclosure where ",e.jsx(n.strong,{children:"one or many"})," panels may be open. Prefer over repeated ",e.jsx(n.strong,{children:"Collapsible"})," when you want keyboard + Radix accordion semantics."]}),`
`,e.jsx(n.h3,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Persistent ",e.jsx(n.strong,{children:"inline"})," feedback (errors, warnings, info) that belongs in page flow—not toast."]}),`
`,e.jsx(n.h3,{id:"alertdialog",children:"AlertDialog"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Confirm destructive actions, irreversible operations, or consent that must not be dismissible by accidental backdrop click in the same way as a casual modal."]}),`
`,e.jsx(n.h3,{id:"aspectratio",children:"AspectRatio"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Lock media (image, video) to a ratio inside responsive layouts."]}),`
`,e.jsx(n.h3,{id:"avatar--avatarimage--avatarfallback",children:"Avatar / AvatarImage / AvatarFallback"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," User/org identity in headers, tables, ",e.jsx(n.strong,{children:"Item"}),", messages."]}),`
`,e.jsx(n.h3,{id:"badge",children:"Badge"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Compact metadata (status, count, pill label). Use ",e.jsx(n.code,{children:"variant"})," for semantic emphasis—not for long text."]}),`
`,e.jsx(n.h3,{id:"breadcrumb--breadcrumblist--breadcrumbitem--breadcrumblink--breadcrumbpage--breadcrumbseparator",children:"Breadcrumb / BreadcrumbList / BreadcrumbItem / BreadcrumbLink / BreadcrumbPage / BreadcrumbSeparator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Hierarchical navigation trail on detail pages or nested settings."]}),`
`,e.jsx(n.h3,{id:"button--buttonvariants",children:"Button / buttonVariants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Primary actions, links styled as buttons (",e.jsx(n.code,{children:"asChild"}),"), icon buttons (",e.jsx(n.code,{children:'size="icon"'})," variants). Prefer library ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"variant"})})," over custom colors."]}),`
`,e.jsx(n.h3,{id:"buttongroup--buttongroupseparator--buttongrouptext",children:"ButtonGroup / ButtonGroupSeparator / ButtonGroupText"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Clamped ",e.jsx(n.strong,{children:"related"})," actions (toolbar), segmented control–like grouping with separators or “or” labels."]}),`
`,e.jsx(n.h3,{id:"calendar",children:"Calendar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Date picking; embed in ",e.jsx(n.strong,{children:"Popover"})," for a compact field pattern."]}),`
`,e.jsx(n.h3,{id:"card--cardheader--cardtitle--carddescription--cardaction--cardcontent--cardfooter",children:"Card / CardHeader / CardTitle / CardDescription / CardAction / CardContent / CardFooter"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Grouping related content (dashboard widgets, form sections, previews). Use ",e.jsx(n.strong,{children:"CardAction"})," for header corner actions."]}),`
`,e.jsx(n.h3,{id:"carousel--subcomponents",children:"Carousel (+ subcomponents)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Marketing tiles, image galleries, horizontal lists with snap/scroll—",e.jsx(n.strong,{children:"not"})," for data tables."]}),`
`,e.jsx(n.h3,{id:"chart--chartcontainer--charttooltip--charttooltipcontent--chartlegend--chartlegendcontent--chartstyle",children:"Chart / ChartContainer / ChartTooltip / ChartTooltipContent / ChartLegend / ChartLegendContent / ChartStyle"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Line, bar, area, or pie visualization with ",e.jsx(n.strong,{children:"Recharts"}),". Define ",e.jsx(n.code,{children:"ChartConfig"})," with colors referencing ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"hsl(var(--chart-N))"})})," so series respect light/dark. ",e.jsx(n.strong,{children:"ChartContainer"})," wraps ",e.jsx(n.strong,{children:"ResponsiveContainer"})," children."]}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Multi-select, boolean “accept terms”, nested lists."]}),`
`,e.jsx(n.h3,{id:"collapsible--collapsibletrigger--collapsiblecontent",children:"Collapsible / CollapsibleTrigger / CollapsibleContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Single disclosure region (advanced options). Use ",e.jsx(n.strong,{children:"Accordion"})," for a set of disclosures."]}),`
`,e.jsx(n.h3,{id:"command--commanddialog--commandinput--commandlist--commandempty--commandgroup--commanditem--commandshortcut--commandseparator",children:"Command / CommandDialog / CommandInput / CommandList / CommandEmpty / CommandGroup / CommandItem / CommandShortcut / CommandSeparator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Command palette (",e.jsx(n.code,{children:"CommandDialog"}),") or searchable lists inside dialogs/popovers."]}),`
`,e.jsx(n.h3,{id:"contextmenu--contextmenutrigger--contextmenucontent--menu-item-variants",children:"ContextMenu / ContextMenuTrigger / ContextMenuContent (+ menu item variants)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Right-click menus on specific widgets or rows."]}),`
`,e.jsx(n.h3,{id:"dialog--dialogtrigger--dialogcontent--dialogheader--dialogtitle--dialogdescription--dialogfooter--dialogclose",children:"Dialog / DialogTrigger / DialogContent / DialogHeader / DialogTitle / DialogDescription / DialogFooter / DialogClose"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Modal workflows that are ",e.jsx(n.strong,{children:"not"})," strictly confirm/cancel destructives (those → ",e.jsx(n.strong,{children:"AlertDialog"}),")."]}),`
`,e.jsx(n.h3,{id:"drawer--drawertrigger--drawercontent--drawerheader--drawerfooter--drawertitle--drawerdescription--drawerclose",children:"Drawer / DrawerTrigger / DrawerContent / DrawerHeader / DrawerFooter / DrawerTitle / DrawerDescription / DrawerClose"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Mobile sheets or lightweight slide-over content; pair with responsive patterns (e.g. ",e.jsx(n.strong,{children:"Dialog"})," on desktop, ",e.jsx(n.strong,{children:"Drawer"})," on narrow viewports if you split behavior in app code)."]}),`
`,e.jsx(n.h3,{id:"dropdownmenu--full-menu-component-set",children:"DropdownMenu (+ full menu component set)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Overflow actions, user menu, “⋯” menus. Prefer ",e.jsx(n.strong,{children:"DropDrawer"})," only after it becomes a public export; until then use ",e.jsx(n.strong,{children:"DropdownMenu"})," + responsive layout or ",e.jsx(n.strong,{children:"Drawer"})," + custom list."]}),`
`,e.jsx(n.h3,{id:"empty--emptyheader--emptymedia--emptytitle--emptydescription--emptycontent",children:"Empty / EmptyHeader / EmptyMedia / EmptyTitle / EmptyDescription / EmptyContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," First-run, no results, cleared lists—always pair with a clear ",e.jsx(n.strong,{children:"CTA"})," (",e.jsx(n.code,{children:"Button"}),")."]}),`
`,e.jsx(n.h3,{id:"field--fieldlabel--fieldtitle--fielddescription--fielderror--fieldgroup--fieldset--fieldlegend--fieldseparator--fieldcontent",children:"Field / FieldLabel / FieldTitle / FieldDescription / FieldError / FieldGroup / FieldSet / FieldLegend / FieldSeparator / FieldContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Accessible, composable field layout ",e.jsx(n.strong,{children:"outside"})," or ",e.jsx(n.strong,{children:"alongside"})," ",e.jsx(n.code,{children:"react-hook-form"}),"—especially with ",e.jsx(n.code,{children:'orientation="horizontal"'})," or ",e.jsx(n.code,{children:"responsive"})," for dense settings. ",e.jsx(n.strong,{children:"FieldError"})," aggregates error messages."]}),`
`,e.jsx(n.h3,{id:"form--formfield--formitem--formlabel--formcontrol--formdescription--formmessage--useformfield",children:"Form / FormField / FormItem / FormLabel / FormControl / FormDescription / FormMessage / useFormField"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Any validated form; wire ",e.jsx(n.strong,{children:"Controller"})," through ",e.jsx(n.strong,{children:"FormField"}),"; put input inside ",e.jsx(n.strong,{children:"FormControl"})," so ",e.jsx(n.code,{children:"aria-invalid"})," and ids propagate."]}),`
`,e.jsx(n.h3,{id:"hovercard--hovercardtrigger--hovercardcontent",children:"HoverCard / HoverCardTrigger / HoverCardContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Deferred rich previews (profile preview, summary tooltip with content)."]}),`
`,e.jsx(n.h3,{id:"input",children:"Input"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Single-line text, search, email—pair with ",e.jsx(n.strong,{children:"Label"})," or ",e.jsx(n.strong,{children:"FieldLabel"}),"."]}),`
`,e.jsx(n.h3,{id:"inputgroup--inputgroupaddon--inputgroupbutton--inputgrouptext--inputgroupinput--inputgrouptextarea",children:"InputGroup / InputGroupAddon / InputGroupButton / InputGroupText / InputGroupInput / InputGroupTextarea"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Prefix/suffix icons, units, or inline buttons adjacent to input."]}),`
`,e.jsx(n.h3,{id:"inputotp--inputotpgroup--inputotpslot--inputotpseparator",children:"InputOTP / InputOTPGroup / InputOTPSlot / InputOTPSeparator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Verification codes, MFA."]}),`
`,e.jsx(n.h3,{id:"item--itemgroup--itemmedia--itemcontent--itemtitle--itemdescription--itemactions--itemseparator",children:"Item / ItemGroup / ItemMedia / ItemContent / ItemTitle / ItemDescription / ItemActions / ItemSeparator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Notification lists, settings rows, pick lists with optional icon/avatar—lighter than full ",e.jsx(n.strong,{children:"Table"})," when rows are heterogeneous."]}),`
`,e.jsx(n.h3,{id:"kbd--kbdgroup",children:"Kbd / KbdGroup"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Document keyboard shortcuts in UI copy."]}),`
`,e.jsx(n.h3,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Single primitive label; use ",e.jsx(n.strong,{children:"FieldLabel"})," when using ",e.jsx(n.strong,{children:"Field"})," layout."]}),`
`,e.jsx(n.h3,{id:"menubar--subcomponents",children:"Menubar (+ subcomponents)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Dense, desktop-style application menus."]}),`
`,e.jsx(n.h3,{id:"navigationmenu--subcomponents",children:"NavigationMenu (+ subcomponents)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Top nav with mega-menu style sections."]}),`
`,e.jsx(n.h3,{id:"pagination--paginationcontent--paginationitem--paginationlink--paginationprevious--paginationnext--paginationellipsis",children:"Pagination / PaginationContent / PaginationItem / PaginationLink / PaginationPrevious / PaginationNext / PaginationEllipsis"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," List/table paging controls."]}),`
`,e.jsx(n.h3,{id:"popover--popovertrigger--popovercontent",children:"Popover / PopoverTrigger / PopoverContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Anchored floating content: date picker, simple forms, overflow that is not a full modal."]}),`
`,e.jsx(n.h3,{id:"progress",children:"Progress"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Known-duration tasks, upload progress."]}),`
`,e.jsx(n.h3,{id:"radiogroup--radiogroupitem",children:"RadioGroup / RadioGroupItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Small set of exclusive options (2–7); for many options use ",e.jsx(n.strong,{children:"Select"}),"."]}),`
`,e.jsx(n.h3,{id:"resizablepanelgroup--resizablepanel--resizablehandle",children:"ResizablePanelGroup / ResizablePanel / ResizableHandle"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," IDE-style split view, preview + editor."]}),`
`,e.jsx(n.h3,{id:"scrollarea--scrollbar",children:"ScrollArea / ScrollBar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Constrained height regions with styled overflow."]}),`
`,e.jsx(n.h3,{id:"select--selecttrigger--selectcontent--selectitem--selectvalue--selectgroup--selectlabel--selectseparator--selectscrollupbutton--selectscrolldownbutton",children:"Select / SelectTrigger / SelectContent / SelectItem / SelectValue / SelectGroup / SelectLabel / SelectSeparator / SelectScrollUpButton / SelectScrollDownButton"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Native-feel pickers; avoid for command-palette scale lists (",e.jsx(n.strong,{children:"Command"})," is better)."]}),`
`,e.jsx(n.h3,{id:"separator",children:"Separator"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Visual division between sections (horizontal or vertical)."]}),`
`,e.jsx(n.h3,{id:"sheet--sheettrigger--sheetcontent--sheetheader--sheettitle--sheetdescription--sheetfooter--sheetclose",children:"Sheet / SheetTrigger / SheetContent / SheetHeader / SheetTitle / SheetDescription / SheetFooter / SheetClose"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Side panel that may coexist with main content; mobile navigation drawer pattern."]}),`
`,e.jsx(n.h3,{id:"sidebarprovider--sidebar--sidebarheader--sidebarcontent--sidebarfooter--sidebarrail--sidebarinset--sidebartrigger--usesidebar--sidebargroup--sidebargrouplabel--sidebargroupcontent--sidebargroupaction--sidebarmenu--sidebarmenuitem--sidebarmenubutton--sidebarmenuaction--sidebarmenubadge--sidebarmenuskeleton--sidebarmenusub--sidebarmenusubitem--sidebarmenusubbutton--sidebarseparator--sidebarinput",children:"SidebarProvider / Sidebar / SidebarHeader / SidebarContent / SidebarFooter / SidebarRail / SidebarInset / SidebarTrigger / useSidebar / SidebarGroup / SidebarGroupLabel / SidebarGroupContent / SidebarGroupAction / SidebarMenu / SidebarMenuItem / SidebarMenuButton / SidebarMenuAction / SidebarMenuBadge / SidebarMenuSkeleton / SidebarMenuSub / SidebarMenuSubItem / SidebarMenuSubButton / SidebarSeparator / SidebarInput"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Application shell with persistent nav. ",e.jsx(n.strong,{children:"SidebarProvider"})," wraps layout; ",e.jsx(n.strong,{children:"SidebarInset"})," holds main content; ",e.jsx(n.strong,{children:"SidebarTrigger"})," toggles; use ",e.jsx(n.strong,{children:"SidebarMenu"})," + ",e.jsx(n.strong,{children:"SidebarMenuButton"})," with ",e.jsx(n.code,{children:"isActive"})," for route state."]}),`
`,e.jsx(n.h3,{id:"skeleton",children:"Skeleton"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Loading placeholders for ",e.jsx(n.strong,{children:"Card"}),", ",e.jsx(n.strong,{children:"Table"}),", ",e.jsx(n.strong,{children:"Item"})," rows."]}),`
`,e.jsx(n.h3,{id:"slider",children:"Slider"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Continuous values (volume, weighting) with drag affordance."]}),`
`,e.jsx(n.h3,{id:"toaster",children:"Toaster"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Once per app—enables Sonner toasts."]}),`
`,e.jsx(n.h3,{id:"spinner",children:"Spinner"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Inline loading indicator inside buttons or sections."]}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Binary setting with immediate effect (feature flags, dark mode toggles if not delegated to ",e.jsx(n.strong,{children:"ThemeProvider"}),")."]}),`
`,e.jsx(n.h3,{id:"table--tableheader--tablebody--tablefooter--tablerow--tablehead--tablecell--tablecaption",children:"Table / TableHeader / TableBody / TableFooter / TableRow / TableHead / TableCell / TableCaption"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Structured repeating rows, sortable data (add app logic), datasets needing column alignment."]}),`
`,e.jsx(n.h3,{id:"tabs--tabslist--tabstrigger--tabscontent",children:"Tabs / TabsList / TabsTrigger / TabsContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Peer views at the same URL (settings sections, dashboard views)."]}),`
`,e.jsx(n.h3,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Multi-line text, comments, descriptions."]}),`
`,e.jsx(n.h3,{id:"toggle--togglegroup--togglegroupitem",children:"Toggle / ToggleGroup / ToggleGroupItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Mutually exclusive or multi-select ",e.jsx(n.strong,{children:"icon"})," or compact controls (formatting toolbar pattern)."]}),`
`,e.jsx(n.h3,{id:"tooltip--tooltipprovider--tooltiptrigger--tooltipcontent",children:"Tooltip / TooltipProvider / TooltipTrigger / TooltipContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Clarify icon-only buttons or terse labels; wrap subtrees that need tooltips with ",e.jsx(n.strong,{children:"TooltipProvider"})," where appropriate."]}),`
`,e.jsx(n.h3,{id:"sonner-usage",children:"Sonner (usage)"}),`
`,e.jsxs(n.p,{children:["Import ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"toast"})})," from ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"sonner"})}),"; render ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Toaster"})})," from ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"prism-react-lib"})}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"ai-components--when-to-use-each",children:"AI components — when to use each"}),`
`,e.jsxs(n.p,{children:["Imports: ",e.jsx(n.code,{children:"import { … } from 'prism-react-lib'"}),"."]}),`
`,e.jsx(n.h3,{id:"chainofthought--chainofthoughtstep--chainofthoughtitem--chainofthoughttrigger--chainofthoughtcontent",children:"ChainOfThought / ChainOfThoughtStep / ChainOfThoughtItem / ChainOfThoughtTrigger / ChainOfThoughtContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Step-through reasoning UI (agent “steps” or plan) with collapsible/detail sections; compose with ",e.jsx(n.strong,{children:"ChainOfThoughtStep"})," and trigger/content pairs."]}),`
`,e.jsx(n.h3,{id:"chatcontainerroot--chatcontainercontent--chatcontainerscrollanchor",children:"ChatContainerRoot / ChatContainerContent / ChatContainerScrollAnchor"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Scrollable conversation region with stick-to-bottom behavior for streaming chat. Use ",e.jsx(n.strong,{children:"ChatContainerScrollAnchor"})," when you need an explicit scroll anchor for the stick-to-bottom hook."]}),`
`,e.jsx(n.h3,{id:"codeblock--codeblockgroup--codeblockcode",children:"CodeBlock / CodeBlockGroup / CodeBlockCode"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Syntax-highlighted snippets in assistant or docs UI; supports ",e.jsx(n.code,{children:"language"})," and Shiki ",e.jsx(n.code,{children:"theme"}),"."]}),`
`,e.jsx(n.h3,{id:"feedbackbar",children:"FeedbackBar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Inline AI feedback or rating strip tied to a message or turn."]}),`
`,e.jsx(n.h3,{id:"fileupload--fileuploadtrigger--fileuploadcontent",children:"FileUpload / FileUploadTrigger / FileUploadContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Drag-drop or trigger upload UX inside AI workflows (attachments)."]}),`
`,e.jsxs(n.h3,{id:"image-ai-image-component",children:["Image (AI ",e.jsx(n.code,{children:"Image"})," component)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Rendering model-generated or user images inside chat or tool result cards—use token-safe framing via ",e.jsx(n.code,{children:"className"}),". If this clashes with ",e.jsx(n.code,{children:"next/image"})," or other ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Image"})})," imports, alias: ",e.jsx(n.code,{children:"import { Image as AiImage } from 'prism-react-lib'"}),"."]}),`
`,e.jsx(n.h3,{id:"jsxpreview",children:"JSXPreview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Live or sandbox preview of JSX output from tools (use cautiously in production—validate trust boundaries). Import as ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"JSXPreview"})})," from ",e.jsx(n.code,{children:"prism-react-lib"}),"."]}),`
`,e.jsx(n.h3,{id:"loader",children:"Loader"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Branded AI loading states (multiple visual variants); prefer over ",e.jsx(n.strong,{children:"Spinner"})," for chat-specific personality."]}),`
`,e.jsx(n.h3,{id:"markdown",children:"Markdown"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Rendering assistant markdown (GFM, breaks); prefer inside ",e.jsx(n.strong,{children:"MessageContent"})," or tool surfaces instead of ",e.jsx(n.code,{children:"dangerouslySetInnerHTML"}),"."]}),`
`,e.jsx(n.h3,{id:"message--messageavatar--messagecontent--messageactions--messageaction",children:"Message / MessageAvatar / MessageContent / MessageActions / MessageAction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Chat bubbles with optional avatar, markdown content, and per-message actions (copy, regenerate)."]}),`
`,e.jsx(n.h3,{id:"promptinput--promptinputtextarea--promptinputactions--promptinputaction",children:"PromptInput / PromptInputTextarea / PromptInputActions / PromptInputAction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Chat composer with loading state, submit handling, and accessory actions."]}),`
`,e.jsx(n.h3,{id:"promptsuggestion",children:"PromptSuggestion"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Chip or suggestion row to prefill prompts."]}),`
`,e.jsx(n.h3,{id:"reasoning--reasoningtrigger--reasoningcontent",children:"Reasoning / ReasoningTrigger / ReasoningContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Collapsible “thinking” or model reasoning separate from final answer; supports streaming indicator."]}),`
`,e.jsx(n.h3,{id:"responsestream--usetextstream",children:"ResponseStream / useTextStream"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Token streaming display for plain text responses with animation modes (",e.jsx(n.code,{children:"typewriter"})," | ",e.jsx(n.code,{children:"fade"}),"). Use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"useTextStream"})})," when you need the same streaming behavior outside the component."]}),`
`,e.jsx(n.h3,{id:"scrollbutton",children:"ScrollButton"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Floating control to scroll chat to latest in long threads."]}),`
`,e.jsx(n.h3,{id:"source--sourcetrigger--sourcecontent",children:"Source / SourceTrigger / SourceContent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Citations / source previews under an assistant answer; ",e.jsx(n.strong,{children:"SourceTrigger"})," + ",e.jsx(n.strong,{children:"SourceContent"})," pair with hover-card-style detail."]}),`
`,e.jsx(n.h3,{id:"steps--stepsitem--stepstrigger--stepscontent--stepsbar",children:"Steps / StepsItem / StepsTrigger / StepsContent / StepsBar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Linear multi-step agent or onboarding flows inside AI UI; ",e.jsx(n.strong,{children:"StepsBar"})," provides the vertical rail between items."]}),`
`,e.jsx(n.h3,{id:"systemmessage",children:"SystemMessage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Distinct styling for system notices inside a thread (moderation, tool errors, session events)."]}),`
`,e.jsx(n.h3,{id:"textshimmer",children:"TextShimmer"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Subtle animated emphasis on “processing” copy."]}),`
`,e.jsx(n.h3,{id:"thinkingbar",children:"ThinkingBar"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Sticky or inline bar showing model still working, optional stop/expand actions."]}),`
`,e.jsx(n.h3,{id:"tool",children:"Tool"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When:"})," Collapsible UI for a tool call (input/output/error states) aligned with AI SDK / tool-call shapes."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"minimal-form-pattern-react-hook-form--zod",children:"Minimal form pattern (react-hook-form + zod)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { zodResolver } from '@hookform/resolvers/zod';
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
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"production-checklist",children:"Production checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["[ ] ",e.jsx(n.code,{children:"import 'prism-react-lib/styles.css'"})," at app root"]}),`
`,e.jsxs(n.li,{children:["[ ] All UI from ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"prism-react-lib"})})," only (no duplicate primitive libraries)"]}),`
`,e.jsxs(n.li,{children:["[ ] Semantic ",e.jsx(n.strong,{children:"token"})," utilities for color/border/ring/radius/shadow/font—no arbitrary hex/rgb shadow/radius in core UI"]}),`
`,e.jsx(n.li,{children:"[ ] Dark/high-contrast tested if you expose those modes"}),`
`,e.jsxs(n.li,{children:["[ ] ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"Toaster"})})," mounted; ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ThemeProvider"})})," if using themed toasts"]}),`
`,e.jsxs(n.li,{children:["[ ] Loading: ",e.jsx(n.strong,{children:"Skeleton"})," / ",e.jsx(n.strong,{children:"Spinner"}),"; empty: ",e.jsx(n.strong,{children:"Empty"}),"; errors: ",e.jsx(n.strong,{children:"Alert"}),", ",e.jsx(n.strong,{children:"FieldError"}),", or ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"toast"})})]}),`
`,e.jsxs(n.li,{children:["[ ] Focus visible: rely on components’ ",e.jsx(n.code,{children:"ring-ring"})," / ",e.jsx(n.code,{children:"focus-visible"})," patterns; don’t strip outlines without replacement"]}),`
`,e.jsxs(n.li,{children:["[ ] Overlays: ",e.jsx(n.strong,{children:"DialogTitle"})," / ",e.jsx(n.strong,{children:"AlertDialogTitle"})," present where required for a11y"]}),`
`,e.jsxs(n.li,{children:["[ ] Forms: ",e.jsx(n.strong,{children:"FormMessage"})," or ",e.jsx(n.strong,{children:"FieldError"})," surfaces validation errors"]}),`
`,e.jsxs(n.li,{children:["[ ] TypeScript: no implicit ",e.jsx(n.code,{children:"any"})," on public handlers and props"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"storybook",children:"Storybook"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Published:"})," component stories and this guide are hosted at ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/",rel:"nofollow",children:"Storybook (GitHub Pages)"}),". Open the ",e.jsx(n.strong,{children:"Documentation → Production UI skill"})," doc or deep-link: ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/?path=/docs/documentation-production-ui-skill--docs",rel:"nofollow",children:"same content as this file"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Local:"})," clone the repo, then run ",e.jsx(n.code,{children:"npm run storybook"}),". Source for stories: ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/tree/master/src/stories",rel:"nofollow",children:e.jsx(n.code,{children:"src/stories/"})}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"raw-docs-for-llms-static-docs-mirror",children:["Raw docs for LLMs (static ",e.jsx(n.code,{children:"/docs/"})," mirror)"]}),`
`,e.jsxs(n.p,{children:["Storybook serves ",e.jsx(n.code,{children:"src/stories/docs/"})," at ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"/docs/*"})})," via ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/.storybook/main.ts",rel:"nofollow",children:e.jsx(n.code,{children:"staticDirs"})})," (",e.jsx(n.code,{children:'{ from: "../src/stories/docs", to: "/docs" }'}),"). After each ",e.jsx(n.code,{children:"npm run build-storybook"}),", ",e.jsx(n.a,{href:"https://github.com/billymcdowell/prism-react-lib/blob/master/scripts/copy-docs-for-llm.mjs",rel:"nofollow",children:e.jsx(n.code,{children:"scripts/copy-docs-for-llm.mjs"})})," adds ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"CHANGELOG.md"})}),", ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"index.json"})}),", and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"README.md"})})," under ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"/docs/"})})," (changelog lives at repo root, not in that folder)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Manifest:"})," ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/docs/index.json",rel:"nofollow",children:"https://billymcdowell.github.io/prism-react-lib/docs/index.json"})," — lists every file and full URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pattern:"})," ",e.jsx(n.code,{children:"https://billymcdowell.github.io/prism-react-lib/docs/<filename>.mdx"})," (e.g. ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/docs/button.mdx",rel:"nofollow",children:"button.mdx"}),", ",e.jsx(n.a,{href:"https://billymcdowell.github.io/prism-react-lib/docs/SKILL.md",rel:"nofollow",children:"SKILL.md"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom base URL"})," when building: ",e.jsx(n.code,{children:"STORYBOOK_PUBLIC_URL=https://your.host/your-base npm run build-storybook"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typescript-tips",children:"TypeScript tips"}),`
`,e.jsxs(n.p,{children:["Prefer explicit props interfaces for feature components; use ",e.jsx(n.code,{children:"React.ComponentProps<typeof Button>"})," when extending primitives. Derive form values from ",e.jsx(n.code,{children:"z.infer<typeof schema>"}),"."]})]})}function c(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
