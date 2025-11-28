import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-D3yAUaLZ.js";import{M as o,C as t}from"./blocks-CjZJvs0H.js";import{T as l}from"./tooltip.stories-WAmoF8jZ.js";import{S as c,G as d,D as h,a,F as x}from"./doc-components-CDTlatZN.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-B6Ga2ycG.js";import"./tooltip-DisIHmo6.js";import"./index-DXm186LG.js";import"./index-CO3hOlhW.js";import"./index-CffJVRRg.js";import"./index-B0n9j3DP.js";import"./index-ApAwEG_-.js";import"./index-ZaosRtZH.js";import"./index-B1okM1AP.js";import"./index-8ZzCNrKt.js";import"./index-DBv-CLuo.js";import"./index-CaKWyVBK.js";import"./index-C8ABDzS5.js";import"./index-BuX_BX6j.js";import"./index-Dp2eQppM.js";import"./utils-CDN07tui.js";import"./button-VZmRfN8J.js";import"./index-BNY7203a.js";import"./index-B_jtOnfb.js";import"./check-wSyrKndQ.js";import"./createLucideIcon-Bs7DeJGf.js";import"./x-DmhvL5In.js";import"./triangle-alert-DbwTKsh-.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(i.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(c,{title:"Component Overview",description:"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}),`
`,e.jsx(i.p,{children:"Tooltips provide contextual help or extra information without cluttering the UI. They appear on hover or focus and disappear when the cursor moves away or focus is lost."}),`
`,e.jsx(i.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(t,{}),`
`,e.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"TooltipProvider"}),": Wraps the application or specific section to manage tooltip delays."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Tooltip (Root)"}),": The container for a specific tooltip instance."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"TooltipTrigger"}),": The element that triggers the tooltip (e.g., a button or icon)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"TooltipContent"}),": The popup containing the helper text."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Arrow"}),": A visual indicator pointing to the trigger."]}),`
`]}),`
`,e.jsx(i.h2,{id:"states",children:"States"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Closed"}),": Invisible."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Open"}),": Visible, usually positioned next to the trigger (top, bottom, left, right)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(i.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Hover"}),": The tooltip appears after a short delay (",e.jsx(i.code,{children:"delayDuration"}),") when hovering over the trigger."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Focus"}),": The tooltip appears immediately when the trigger receives keyboard focus."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Dismiss"}),": Disappears when the mouse leaves the trigger or focus moves away. Esc key also dismisses it."]}),`
`]}),`
`,e.jsx(i.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(d,{children:[e.jsx(h,{children:e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use for explaining icon-only buttons."}),`
`,e.jsx(i.li,{children:"Use for providing additional context for truncated text."}),`
`,e.jsx(i.li,{children:"Keep text short and concise."}),`
`]})}),e.jsx(a,{children:e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use for critical information that users must see to complete a task."}),`
`,e.jsxs(i.li,{children:["Put interactive elements (links, buttons) inside a tooltip (use ",e.jsx(i.code,{children:"Popover"})," or ",e.jsx(i.code,{children:"HoverCard"})," instead)."]}),`
`,e.jsx(i.li,{children:"Repeat the text that is already visible on the trigger."}),`
`]})})]}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(i.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Tab"}),": Focuses the trigger, showing the tooltip."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Escape"}),": Dismisses the tooltip."]}),`
`]}),`
`,e.jsx(i.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Role"}),": ",e.jsx(i.code,{children:'role="tooltip"'}),"."]}),`
`,e.jsxs(i.li,{children:["The trigger is automatically associated with the content via ",e.jsx(i.code,{children:"aria-describedby"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(i.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Background"}),": ",e.jsx(i.code,{children:"bg-primary"})," or ",e.jsx(i.code,{children:"bg-foreground"})," (usually inverted contrast)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Text"}),": ",e.jsx(i.code,{children:"text-primary-foreground"})," or ",e.jsx(i.code,{children:"text-background"}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Size"}),": ",e.jsx(i.code,{children:"text-xs"})," or ",e.jsx(i.code,{children:"text-sm"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(i.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Built using ",e.jsx(i.code,{children:"@radix-ui/react-tooltip"}),"."]}),`
`,e.jsxs(i.li,{children:["Requires ",e.jsx(i.code,{children:"TooltipProvider"})," to function correctly."]}),`
`]}),`
`,e.jsx(i.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Component"}),": ",e.jsx(i.code,{children:"src/components/ui/tooltip.tsx"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Storybook"}),": ",e.jsx(i.code,{children:"src/stories/tooltip.stories.tsx"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Dependencies"}),": ",e.jsx(i.code,{children:"@radix-ui/react-tooltip"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Popover"}),": For richer content with interactive elements."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"HoverCard"}),": For previewing content (like a user profile) on hover."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Toast"}),": For notifications."]}),`
`]})})]})}function z(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{z as default};
