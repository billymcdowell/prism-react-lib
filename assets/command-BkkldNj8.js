import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-WxY4RtXn.js";import{M as t,C as l}from"./blocks-ZXWmuc4s.js";import{S as c}from"./command.stories-D6zEb0Eq.js";import{S as r,G as d,D as a,F as h}from"./doc-components-u3ZontLi.js";import"./iframe-CzIjHCkM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dv-B9L0L.js";import"./index-BSDLliFe.js";import"./index-GyKuygwm.js";import"./command-DGmk2bNb.js";import"./index-DFY0I9Jc.js";import"./index-CKBRRWT1.js";import"./index-D_QQW2kf.js";import"./index-CZaYSkPR.js";import"./index-C9uoKnKI.js";import"./index-B9ISfK40.js";import"./index-BggxqMqP.js";import"./index-DiHu5XcI.js";import"./index-HviMIcE2.js";import"./index-DCbDwA4w.js";import"./index-HxwPMSK8.js";import"./index-MUIKTGbn.js";import"./utils-CDN07tui.js";import"./dialog-Df4fS7B7.js";import"./x-C_XgfFC0.js";import"./createLucideIcon-D2Wp4eEU.js";import"./search-BJ0bRzY-.js";import"./calendar-Cjw0pd1A.js";import"./user-Bi2EiUP7.js";import"./settings-Ch1jb6rx.js";import"./mail-BSOqqC-p.js";import"./check-Bv9cvDps.js";import"./triangle-alert-1KayWKV6.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
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
`]})})]})}function W(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{W as default};
