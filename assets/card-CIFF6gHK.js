import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Ad8qJPJ4.js";import{M as o,C as d}from"./blocks-DTlw6ceM.js";import{S as l}from"./card.stories-bzNvv4fN.js";import{S as r,G as c,D as a,a as h,F as x}from"./doc-components-KjZohVj8.js";import"./iframe-DCkxxG1M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtPqNasm.js";import"./index-WKj01Sjb.js";import"./index-BEdv_tt5.js";import"./card-C3N4QfhV.js";import"./utils-CDN07tui.js";import"./button-24IbpKd0.js";import"./index-CC6UOoUx.js";import"./index-1RQFIDbb.js";import"./index-B_jtOnfb.js";import"./input-Bw95PIWX.js";import"./label-BBsqXW3q.js";import"./check-CKaAtdKA.js";import"./createLucideIcon-EM5MBisu.js";import"./x-PGRCWagm.js";import"./triangle-alert-5Zscxv3S.js";function s(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l}),`
`,n.jsx(e.h1,{id:"card",children:"Card"}),`
`,n.jsx(r,{title:"Component Overview",description:"Displays a card with header, content, and footer."}),`
`,n.jsx(e.p,{children:"Cards contain content and actions about a single subject. They serve as an entry point to more detailed information."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Card, 2. Header, 3. Title, 4. Description, 5. Content, 6. Footer]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card (Root)"}),": The main container with background, border, and shadow."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardHeader"}),": Top section containing title and description."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardTitle"}),": The primary heading."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardDescription"}),": Secondary text explaining the card's purpose."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardContent"}),": The main body area for text, forms, or other components."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardFooter"}),": Bottom section for actions (buttons)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"Cards are generally a single variant but are highly composable."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": White/Background color with a thin border and shadow."]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Static"}),": Cards are usually static containers."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Interactive"}),": Can be made interactive (hover effects) if wrapped in a link or button, though usually the actions ",n.jsx(e.em,{children:"inside"})," are interactive."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Actions"}),": Primary actions usually live in the ",n.jsx(e.code,{children:"CardFooter"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigation"}),": Clicking the card itself can navigate to details (if the whole card is a link)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fluid Width"}),": Cards typically fill their container or have a max-width."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Stacking"}),": On mobile, cards usually stack vertically."]}),`
`]}),`
`,n.jsx(r,{title:"Usage Guidelines",description:"Best practices for when and how to use the Card component."}),`
`,n.jsxs(c,{children:[n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Grouping"}),": Use to group related information (e.g., a user profile, a product)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dashboards"}),": Use for widgets and summary data."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lists"}),": Use for collections of items (grid of cards)."]}),`
`]})}),n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Nest cards deeply inside other cards."}),`
`,n.jsx(e.li,{children:"Use for inline content (use a simple div or separator)."}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": generic ",n.jsx(e.code,{children:"div"})," by default. If it's a standalone article, consider ",n.jsx(e.code,{children:'role="article"'}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Headings"}),": Ensure ",n.jsx(e.code,{children:"CardTitle"})," uses an appropriate heading level (h3, h4, etc.) relative to the page structure."]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Title"}),": ",n.jsx(e.code,{children:"font-semibold"}),", ",n.jsx(e.code,{children:"leading-none"}),", ",n.jsx(e.code,{children:"tracking-tight"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description"}),": ",n.jsx(e.code,{children:"text-sm"}),", ",n.jsx(e.code,{children:"text-muted-foreground"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Padding"}),": ",n.jsx(e.code,{children:"p-6"})," (1.5rem) is standard."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Gap"}),": ",n.jsx(e.code,{children:"gap-6"})," between flex children in the root."]}),`
`]}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Background"}),": ",n.jsx(e.code,{children:"bg-card"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text"}),": ",n.jsx(e.code,{children:"text-card-foreground"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Border"}),": ",n.jsx(e.code,{children:"border-border"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using standard HTML ",n.jsx(e.code,{children:"div"})," elements."]}),`
`,n.jsx(e.li,{children:"Composed of multiple sub-components for layout flexibility."}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/card.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/card.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(x,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dialog"}),": For modal content similar to a card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"HoverCard"}),": For lightweight popover cards."]}),`
`]})})]})}function U(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{U as default};
