import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CkR7Pirb.js";import{M as o,C as l}from"./blocks-oLwmg5Dm.js";import{S as t}from"./checkbox.stories-CZ19yvuZ.js";import{S as s,G as d,D as h,a,F as x}from"./doc-components-BPjvmEYr.js";import"./iframe-Thtzo6Ds.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3Lrb7mV.js";import"./index-B8EgESzF.js";import"./index-DXnFh1uM.js";import"./checkbox-C3n35UlX.js";import"./index-BwAqgtw_.js";import"./index-CE7dyx6e.js";import"./index-Pz5rUp9x.js";import"./index-9qHsznmX.js";import"./index-BmGYDCLg.js";import"./index-Dy9cyvdn.js";import"./index-Bw-5J5FZ.js";import"./index-CchPzlss.js";import"./utils-CDN07tui.js";import"./check-UnNSCTgL.js";import"./createLucideIcon-DOlxeYcD.js";import"./label-JREK2Sza.js";import"./index-DFpA7F9i.js";import"./x-DpwFsUdw.js";import"./triangle-alert-DSHmMYU2.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(s,{title:"Component Overview",description:"A control that allows the user to toggle between checked and not checked."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Root (Box), 2. Indicator (Check Icon), 3. Label]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkbox (Root)"}),": The clickable square box."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indicator"}),": The check icon that appears when selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"}),": Text associated with the checkbox (external but related)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unchecked"}),": Empty box."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checked"}),": Filled box with check icon."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Indeterminate"}),": (Optional) Dash icon, used for nested lists."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": Reduced opacity, non-interactive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus"}),": Focus ring appears for keyboard navigation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Toggles state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space"}),": Toggles state when focused."]}),`
`]}),`
`,e.jsx(s,{title:"Usage Guidelines",description:"Best practices for when and how to use the Checkbox component."}),`
`,e.jsxs(d,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Binary Choices"}),": Use for on/off settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Selection"}),": Use for selecting multiple items from a list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Labeling"}),": Always use with a label for click target size and accessibility."]}),`
`]})}),e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for single selection from a list (use Radio Group)."}),`
`,e.jsx(n.li,{children:"Trigger immediate changes (unless it's a toggle/switch scenario, but Switch is preferred there)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"checkbox"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State"}),": ",e.jsx(n.code,{children:"aria-checked"}),' ("true", "false", "mixed").']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Labeling"}),": Must be associated with a label via ",e.jsx(n.code,{children:"id"})," and ",e.jsx(n.code,{children:"for"})," (or wrapped)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Focuses the checkbox."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space"}),": Toggles selection."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": ",e.jsx(n.code,{children:"size-4"})," (1rem)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Radius"}),": ",e.jsx(n.code,{children:"rounded-[4px]"})," (Small radius)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checked"}),": ",e.jsx(n.code,{children:"bg-primary"})," / ",e.jsx(n.code,{children:"text-primary-foreground"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Border"}),": ",e.jsx(n.code,{children:"border-primary"})," (checked) or ",e.jsx(n.code,{children:"border-input"})," (unchecked)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-checkbox"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/checkbox.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/checkbox.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Switch"}),": For instant activation/deactivation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RadioGroup"}),": For single selection."]}),`
`]})})]})}function E(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{E as default};
