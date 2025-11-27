import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-D096Tp-O.js";import{M as t,C as l}from"./blocks-RFLAQTCC.js";import{S as c}from"./command.stories-CQVeZLip.js";import{S as r,G as d,D as a,F as h}from"./doc-components-D3HqA8QK.js";import"./iframe-BDUDYbt-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWeqmfpJ.js";import"./index-CzeNkFbL.js";import"./index-BdAMbY9z.js";import"./index-qH0F-cho.js";import"./index-I4hVW7Uw.js";import"./index-BDLlK4Il.js";import"./index-D5G3eVTs.js";import"./index-B87yfHiP.js";import"./index-EbZNEzNk.js";import"./index-vxywQjzl.js";import"./index-ujXNkSb0.js";import"./index-wMb2LlYv.js";import"./index-BopYqmby.js";import"./index-pImBLRDA.js";import"./index-dX__b2gj.js";import"./utils-CDN07tui.js";import"./dialog-fTrQIQmw.js";import"./x-DQfMO2VP.js";import"./createLucideIcon-qJKAratn.js";import"./search-CtRwN-eA.js";import"./calendar-6whGLCzW.js";import"./user-CKuNeOZu.js";import"./settings-DkpTjQ-P.js";import"./mail-Co-0tClm.js";import"./check-Cu_PNP9o.js";import"./triangle-alert-Dr4XsvYY.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(e.h1,{id:"command",children:"Command"}),`
`,n.jsx(r,{title:"Component Overview",description:"Fast, composable, unstyled command menu for React."}),`
`,n.jsx(e.p,{children:"A command palette or combobox component, often used for global search or command execution (Cmd+K)."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Dialog/Wrapper, 2. Input, 3. List, 4. Group, 5. Item, 6. Shortcut]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Command (Root)"}),": The container."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CommandInput"}),": The search field."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CommandList"}),": Scrollable list of results."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CommandGroup"}),": Grouping for items."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CommandItem"}),": Selectable result."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CommandShortcut"}),": Keyboard shortcut hint (e.g., ⌘K)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Filtering"}),": As the user types, the list filters automatically based on ",n.jsx(e.code,{children:"value"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Selection"}),": Enter or Click selects an item."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigation"}),": Up/Down arrows navigate the list."]}),`
`]}),`
`,n.jsx(r,{title:"Usage Guidelines",description:"Best practices for when and how to use the Command component."}),`
`,n.jsx(d,{children:n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Global Search"}),': Use for "Spotlight"-style search.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Combobox"}),": Use for selecting from a large list of options in a form."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard First"}),": Design for keyboard users primarily."]}),`
`]})})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": ",n.jsx(e.code,{children:"combobox"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA"}),": Automatically manages ",n.jsx(e.code,{children:"aria-expanded"}),", ",n.jsx(e.code,{children:"aria-controls"}),", ",n.jsx(e.code,{children:"aria-activedescendant"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using ",n.jsx(e.code,{children:"cmdk"})," (by pacocoursey)."]}),`
`,n.jsxs(e.li,{children:["Can be used inside a ",n.jsx(e.code,{children:"Dialog"})," (",n.jsx(e.code,{children:"CommandDialog"}),") for modal behavior."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/command.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/command.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dialog"}),": The modal wrapper often used with Command."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Popover"}),": Used for combobox-style implementations."]}),`
`]})})]})}function V(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{V as default};
