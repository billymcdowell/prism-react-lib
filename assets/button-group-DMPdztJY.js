import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaShpNzX.js";import{M as o,C as l}from"./blocks-DH9jNNYT.js";import{S as d}from"./button-group.stories-BM99Q_Cs.js";import{S as i,G as c,D as h,a,F as x}from"./doc-components-Dv5LnL7z.js";import"./iframe-Dq4ciZ2I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DGUMDhSO.js";import"./index-DdOO1h1t.js";import"./index-BKlOxVV6.js";import"./index-D8vooum3.js";import"./index-CD1UeKg1.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./separator-D9lYGYnp.js";import"./button-CavLb_jb.js";import"./chevron-down-Bfmo6KJs.js";import"./createLucideIcon-CSI_CYi5.js";import"./check-Dz9S9Ddc.js";import"./x-BJRm0kJX.js";import"./triangle-alert-BgeG7d1t.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:d}),`
`,n.jsx(e.h1,{id:"button-group",children:"Button Group"}),`
`,n.jsx(i,{title:"Component Overview",description:"Groups multiple buttons together."}),`
`,n.jsx(e.p,{children:"Allows multiple buttons to be combined into a single visual unit. This is useful for toolbars, toggle buttons, or related actions."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Group Container, 2. Buttons, 3. Separators]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ButtonGroup"}),": The container element that handles the rounded corners and grouping logic."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Buttons"}),": Standard Button components inside the group."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ButtonGroupSeparator"}),": A vertical divider between buttons to visually separate them."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ButtonGroupText"}),": Text label integrated into the group (e.g., a prefix)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Horizontal"}),": Buttons are arranged side-by-side (Default).",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:'orientation="horizontal"'})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vertical"}),": Buttons are stacked vertically.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:'orientation="vertical"'})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus"}),": Focus states are managed so that the focus ring appears correctly above adjacent buttons (",n.jsx(e.code,{children:"z-10"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hover"}),": Standard button hover effects apply."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Single Selection"}),": Can be used for toggle groups (radio behavior)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiple Selection"}),": Can be used for multi-select toggles (checkbox behavior)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Action Group"}),': Simply groups related actions (e.g., "Save" and "Save as...").']}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button groups typically wrap or scroll if they exceed the container width, or switch to vertical on mobile if designed to do so."}),`
`]}),`
`,n.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Button Group component."}),`
`,n.jsxs(c,{children:[n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toolbars"}),": Use for editor toolbars (Bold, Italic, Underline)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Related Actions"}),": Group actions that affect the same object."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"View Switchers"}),": Use for switching between views (List vs. Grid)."]}),`
`]})}),n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Group unrelated actions."}),`
`,n.jsx(e.li,{children:"Mix different button sizes within the same group."}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": ",n.jsx(e.code,{children:"group"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label"}),": ",n.jsx(e.code,{children:"aria-label"})," should be provided to the group to describe its purpose."]}),`
`]}),`
`,n.jsx(e.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tab"}),": Moves focus between buttons (unless it's a roving tabindex toolbar)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Borders"}),": Internal borders are merged or handled to prevent double borders."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Radius"}),": Only the outer corners of the first and last buttons are rounded."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses CSS combinators (",n.jsx(e.code,{children:"first-child"}),", ",n.jsx(e.code,{children:"last-child"}),") to handle border radius manipulation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"z-index"})," manipulation is critical for focus rings to show up correctly."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/button-group.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/button-group.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(x,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": The individual items."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ToggleGroup"}),": A specialized version for selection states (Radix Primitive)."]}),`
`]})})]})}function U(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{U as default};
