import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DPn82Wm-.js";import{M as r,C as o}from"./blocks-DGlPW4hB.js";import{T as l}from"./toggle.stories-BB3rQaog.js";import{S as c,G as d,D as h,a,F as x}from"./doc-components-Bmws0ud5.js";import"./iframe-CK9smaC8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtDr-iC0.js";import"./index-BYaq2IUm.js";import"./index-CO5aXBl3.js";import"./toggle-D1LpiaQx.js";import"./createLucideIcon-DNvLzEEK.js";import"./index-eCitGQw-.js";import"./index-1dWsAVPB.js";import"./index-iN9rKbtt.js";import"./index-DkXQWpI3.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./check-DD8zL34B.js";import"./x-isKCxN0k.js";import"./triangle-alert-CnrEBPEP.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsx(c,{title:"Component Overview",description:"A two-state button that can be either on or off."}),`
`,e.jsx(n.p,{children:'A toggle allows users to switch between two states, such as "on/off" or "active/inactive". It is similar to a checkbox but styled as a button.'}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toggle"}),": The clickable button element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon/Label"}),': Content indicating the function (e.g., "B" for bold, or a star icon).']}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variant"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"default"}),": Ghost style, background appears on hover/active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"outline"}),": Bordered style."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"lg"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Off"}),": Default styling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"On (Pressed)"}),": Distinct background color (",e.jsx(n.code,{children:"bg-accent"}),") to show activation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": Reduced opacity, non-interactive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover"}),": Slight background change to indicate interactivity."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(d,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Use for applying state or preferences (e.g., "Like", "Bookmark", "Bold text").'}),`
`,e.jsx(n.li,{children:"Use icons for common actions where the meaning is clear."}),`
`]})}),e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use for immediate actions that don't have a persistent state (use ",e.jsx(n.code,{children:"Button"})," instead)."]}),`
`,e.jsx(n.li,{children:'Use text labels that change based on state (e.g., "Turn On" -> "Turn Off"). The button state itself should indicate the status.'}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space/Enter"}),": Toggles the state."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"button"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State"}),": ",e.jsx(n.code,{children:'aria-pressed="true"'})," when active, ",e.jsx(n.code,{children:'aria-pressed="false"'})," when inactive."]}),`
`,e.jsxs(n.li,{children:["Ensure ",e.jsx(n.code,{children:"aria-label"})," is provided if the toggle only contains an icon."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active Background"}),": ",e.jsx(n.code,{children:"bg-accent"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active Text"}),": ",e.jsx(n.code,{children:"text-accent-foreground"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-toggle"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/toggle.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/toggle.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dependencies"}),": ",e.jsx(n.code,{children:"@radix-ui/react-toggle"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ToggleGroup"}),": For managing multiple toggles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button"}),": For stateless actions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Switch"}),": For explicit on/off settings (usually in a list)."]}),`
`]})})]})}function U(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{U as default};
