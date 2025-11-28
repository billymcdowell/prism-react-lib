import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-aKePkADw.js";import{M as l,C as d}from"./blocks-CxzVIFWv.js";import{S as o}from"./badge.stories-CoxfCSZR.js";import{S as i,G as c,D as a,a as h,F as x}from"./doc-components-Cx8bIQyt.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtYTIzzJ.js";import"./index-Dkk1Xfhs.js";import"./index-J6LJBlCe.js";import"./badge-DbdNVmvu.js";import"./index-Oq5s9i1g.js";import"./index-QGY4RfnD.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./check-DB4cmgqP.js";import"./createLucideIcon-Da8e7NOt.js";import"./x-BK-DgL2b.js";import"./triangle-alert-jzMBHgup.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(i,{title:"Component Overview",description:"Displays a badge or a component that looks like a badge."}),`
`,e.jsx(n.p,{children:"Badges are small status descriptors for UI elements. They are typically used to communicate a status, a count, or a category."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Container (Badge), 2. Label (Text)]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Badge (Root)"}),": The container element styling the background and border."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"}),": The text content."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:"The Badge comes in several styles to communicate different statuses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": Primary background color. Used for the main status or high-priority items.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'variant="default"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"}),": Muted background color. Used for neutral or low-priority items.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'variant="secondary"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Destructive"}),": Red background. Used for errors, critical warnings, or removal.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'variant="destructive"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outline"}),": Bordered transparent background. Used for subtle indicators.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'variant="outline"'})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": The standard readable state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover"}),": Badges have a subtle hover effect (opacity change or background darken) if they are interactive or to add depth."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static"}),": Badges are primarily informational and static."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"}),": Can be used as a link if wrapped in an anchor tag (using ",e.jsx(n.code,{children:"asChild"})," if supported, or just wrapping)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Wrapping"}),": Text should not wrap; badges should expand horizontally."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": Badges generally remain the same size across breakpoints."]}),`
`]}),`
`,e.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Badge component."}),`
`,e.jsxs(c,{children:[e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Status"}),': Use to indicate status (e.g., "New", "Pending", "Paid").']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Counts"}),": Use to display counts (e.g., number of new messages)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tags"}),": Use for categories or tags."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Short Text"}),": Keep text short (1-2 words)."]}),`
`]})}),e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for interactive elements (use Button instead)."}),`
`,e.jsx(n.li,{children:"Use for long sentences (keep text short)."}),`
`,e.jsx(n.li,{children:"Overuse in a single view (can cause visual clutter)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": Standard ",e.jsx(n.code,{children:"span"})," or ",e.jsx(n.code,{children:"div"})," unless interactive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Labeling"}),": Ensure the badge text is descriptive. If the badge is a status indicator, consider if additional context is needed for screen readers."]}),`
`]}),`
`,e.jsx(n.h3,{id:"wcag-compliance",children:"WCAG compliance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast"}),": All variants meet AA contrast ratios.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"text-primary-foreground"})," on ",e.jsx(n.code,{children:"bg-primary"}),"."]}),`
`,e.jsxs(n.li,{children:["Destructive: ",e.jsx(n.code,{children:"text-destructive-foreground"})," on ",e.jsx(n.code,{children:"bg-destructive"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": ",e.jsx(n.code,{children:"text-xs"})," (0.75rem)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Weight"}),": ",e.jsx(n.code,{children:"font-semibold"})," (600)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Case"}),": Often Sentence case or Title Case, depending on usage."]}),`
`]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Padding"}),": ",e.jsx(n.code,{children:"px-2.5"})," (horizontal), ",e.jsx(n.code,{children:"py-0.5"})," (vertical)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Border Radius"}),": ",e.jsx(n.code,{children:"rounded-full"})," (Pill shape)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": ",e.jsx(n.code,{children:"bg-primary"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"}),": ",e.jsx(n.code,{children:"bg-secondary"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Destructive"}),": ",e.jsx(n.code,{children:"bg-destructive"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outline"}),": ",e.jsx(n.code,{children:"border-input"})," (or current border color)."]}),`
`]}),`
`,e.jsx(i,{title:"Content Guidelines",description:"Writing effective content for badges."}),`
`,e.jsx(n.h3,{id:"writing-style",children:"Writing style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Concise"}),": Use single words where possible."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistent"}),": Use consistent terminology for statuses."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Built using standard HTML elements."}),`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.code,{children:"class-variance-authority"})," (cva) for variant management."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/badge.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/badge.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button"}),": For interactive elements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"}),": For form field labels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tooltip"}),": To explain a badge's meaning if unclear."]}),`
`]})})]})}function M(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{M as default};
