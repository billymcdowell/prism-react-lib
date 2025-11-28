import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-aKePkADw.js";import{M as o,C as t}from"./blocks-CxzVIFWv.js";import{T as l}from"./toggle-group.stories-C_KTZ5WO.js";import{S as c,G as d,D as h,a as x,F as a}from"./doc-components-Cx8bIQyt.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtYTIzzJ.js";import"./index-Dkk1Xfhs.js";import"./index-J6LJBlCe.js";import"./index-DUG4PCWj.js";import"./index-Bh4cr8XZ.js";import"./index-QGY4RfnD.js";import"./index-CJPqsL_I.js";import"./index-CV0uXhsb.js";import"./index-D3SCzLKk.js";import"./index-DuSBl0US.js";import"./index-BIznl4Bz.js";import"./index-ETErxzm6.js";import"./index-CUH_1VNM.js";import"./toggle-C2G9uWug.js";import"./createLucideIcon-Da8e7NOt.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./check-DB4cmgqP.js";import"./x-BK-DgL2b.js";import"./triangle-alert-jzMBHgup.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(n.h1,{id:"toggle-group",children:"Toggle Group"}),`
`,e.jsx(c,{title:"Component Overview",description:"A set of two-state buttons that can be toggled on or off."}),`
`,e.jsx(n.p,{children:"Toggle Groups are used to group related options where users can select one or multiple items. They share a common container and styling."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ToggleGroup (Root)"}),": Container for the items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ToggleGroupItem"}),": Individual toggle button."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"single"}),": Only one item can be selected at a time (like radio buttons)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"multiple"}),": Multiple items can be selected (like checkboxes)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variant"}),": ",e.jsx(n.code,{children:"default"})," (transparent/ghost), ",e.jsx(n.code,{children:"outline"})," (bordered)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"lg"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Off"}),": Default state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"On"}),": Active state (different background/color)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": Non-interactive."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(d,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for switching between different views or modes (e.g., List vs. Grid view)."}),`
`,e.jsx(n.li,{children:"Use for text formatting options (Bold, Italic, Underline)."}),`
`,e.jsx(n.li,{children:"Use for filtering lists."}),`
`]})}),e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for primary navigation."}),`
`,e.jsx(n.li,{children:"Use when the options are not closely related."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Keys"}),": Navigate between items in the group."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space/Enter"}),": Toggles the selection state of the focused item."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Roles"}),": ",e.jsx(n.code,{children:'role="group"'})," or ",e.jsx(n.code,{children:'role="radiogroup"'})," (for single selection)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State"}),": ",e.jsx(n.code,{children:"aria-pressed"})," or ",e.jsx(n.code,{children:"aria-checked"})," indicates selection."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-toggle-group"}),"."]}),`
`,e.jsxs(n.li,{children:["Shares styles with the ",e.jsx(n.code,{children:"Toggle"})," component."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/toggle-group.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/toggle-group.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dependencies"}),": ",e.jsx(n.code,{children:"@radix-ui/react-toggle-group"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toggle"}),": Single toggle button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RadioGroup"}),": For single selection from a list (form context)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tabs"}),": For switching views."]}),`
`]})})]})}function E(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{E as default};
