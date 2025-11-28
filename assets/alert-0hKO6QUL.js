import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaShpNzX.js";import{M as l,C as o}from"./blocks-DH9jNNYT.js";import{S as c}from"./alert.stories-DfhBaZQd.js";import{S as i,G as d,D as a,a as h,F as x}from"./doc-components-Dv5LnL7z.js";import"./iframe-Dq4ciZ2I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DGUMDhSO.js";import"./index-DdOO1h1t.js";import"./index-BKlOxVV6.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./createLucideIcon-CSI_CYi5.js";import"./check-Dz9S9Ddc.js";import"./x-BJRm0kJX.js";import"./triangle-alert-BgeG7d1t.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(e.h1,{id:"alert",children:"Alert"}),`
`,n.jsx(i,{title:"Component Overview",description:"Displays a callout for user attention."}),`
`,n.jsx(e.p,{children:"The Alert component is used to display important messages, warnings, or errors to the user. It typically appears at the top of a page or section."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(o,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Container, 2. Icon, 3. Title, 4. Description]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alert (Root)"}),": The container element with border and background colors."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon"}),": An optional icon to visually indicate the type of alert (e.g., Info, Warning, Error)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertTitle"}),": The bold heading of the alert."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDescription"}),": The main text content of the alert."]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsxs(e.p,{children:["The Alert supports functional variants based on the ",n.jsx(e.code,{children:"variant"})," prop:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": Used for informational or neutral messages.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'variant="default"'})," (background: background, text: foreground)"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Destructive"}),": Used for errors or critical warnings.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'variant="destructive"'})," (border: destructive/50, text: destructive)"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Static"}),": Alerts are generally static and do not have interactive states like hover or focus, unless they contain links."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Alerts are typically read-only."}),`
`,n.jsx(e.li,{children:"If an alert contains a link, standard link interaction patterns apply."}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The Alert expands to fill 100% of the width of its container."}),`
`,n.jsx(e.li,{children:"Text wraps to accommodate smaller screens."}),`
`]}),`
`,n.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Alert component."}),`
`,n.jsxs(d,{children:[n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"System Status"}),": Use to communicate successful updates, errors, or system maintenance."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Validation"}),": Use for form validation summaries."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Contextual Info"}),": Use to provide context for a specific section."]}),`
`]})}),n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use for permanent content that is part of the page structure."}),`
`,n.jsx(e.li,{children:'Overuse, as too many alerts can cause "alert fatigue".'}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": ",n.jsx(e.code,{children:"alert"}),". This triggers an immediate announcement by screen readers."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA"}),": The title can be linked as a label if necessary, but the role implies the content is important."]}),`
`]}),`
`,n.jsx(e.h3,{id:"wcag-compliance",children:"WCAG compliance"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Contrast"}),": Ensures text has sufficient contrast against the background color (especially for the destructive variant)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Title"}),": ",n.jsx(e.code,{children:"font-medium"}),", ",n.jsx(e.code,{children:"leading-none"}),", ",n.jsx(e.code,{children:"tracking-tight"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description"}),": ",n.jsx(e.code,{children:"text-sm"}),", ",n.jsx(e.code,{children:"[&_p]:leading-relaxed"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Padding"}),": ",n.jsx(e.code,{children:"p-4"})," (1rem)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon Gap"}),": Icon is positioned absolutely or via flex gap."]}),`
`]}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": ",n.jsx(e.code,{children:"bg-background"}),", ",n.jsx(e.code,{children:"text-foreground"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Destructive"}),": ",n.jsx(e.code,{children:"border-destructive/50"}),", ",n.jsx(e.code,{children:"text-destructive"}),", ",n.jsx(e.code,{children:"dark:border-destructive"}),"."]}),`
`]}),`
`,n.jsx(i,{title:"Content Guidelines",description:"Writing effective content for alerts."}),`
`,n.jsx(e.h3,{id:"writing-style",children:"Writing style"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Headings"}),': Short and punchy (e.g., "Error", "Success", "Note").']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content"}),": Clear and actionable. Explain what happened and what the user should do next."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Built using standard HTML elements with Tailwind CSS."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"class-variance-authority"})," (cva) used for variant styling."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/alert.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/alert.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(x,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toast"}),": For temporary notifications that appear and disappear."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialog"}),": For critical interruptions requiring user action."]}),`
`]})})]})}function I(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{I as default};
