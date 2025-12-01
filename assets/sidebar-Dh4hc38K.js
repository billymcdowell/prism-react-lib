import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-SUpP3S5P.js";import{M as t,C as l}from"./blocks-BUn2KzqZ.js";import{S as d}from"./sidebar.stories-e0hPqFUu.js";import{S as r,G as c,D as a}from"./doc-components-BTUt_h-4.js";import"./iframe-B1FMP7ev.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnSrwqD0.js";import"./index-DhgqUPOW.js";import"./index-DAm3NtUz.js";import"./sidebar-C1afZ0b4.js";import"./index-BKmhc7-k.js";import"./index-BVIuXOjC.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./use-mobile-C03FjdVU.js";import"./button-DfDABheV.js";import"./input-Bw95PIWX.js";import"./separator-BjmXBgYf.js";import"./sheet-CGcg7fdf.js";import"./index-d1IkRxZ6.js";import"./index-C0czC1vr.js";import"./index-CAlTrB-E.js";import"./index-CC0hhZNt.js";import"./index-DDesiWCi.js";import"./index-CrucKXqn.js";import"./index-f1PYV6tB.js";import"./index-RXXxGRGC.js";import"./index-CZbWgxv_.js";import"./index-CeX9_B3n.js";import"./index-nyo8kubt.js";import"./x-DCvKugl4.js";import"./createLucideIcon-Cx6i2raP.js";import"./skeleton-A7behTLO.js";import"./tooltip-b2pU036b.js";import"./index-CGQsZOqb.js";import"./index-CUqZIJRk.js";import"./index-Ccp5iciU.js";import"./house-vt-VBY3j.js";import"./calendar-B6FcBY-B.js";import"./search-imJvWr95.js";import"./settings-B5az3HIU.js";import"./check-B8i_dWsd.js";import"./triangle-alert-DiBmSTA3.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(i.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx(r,{title:"Component Overview",description:"A composable, themeable sidebar component."}),`
`,e.jsx(i.p,{children:"A comprehensive sidebar solution for application layouts."}),`
`,e.jsx(i.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(i.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Provider, 2. Sidebar, 3. Header, 4. Content, 5. Footer, 6. Rail, 7. Trigger]"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"SidebarProvider"}),": Context provider for state (expanded/collapsed)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Sidebar (Root)"}),": The sidebar container."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"SidebarHeader"}),": Top section (Logo, search)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"SidebarContent"}),": Scrollable middle section (Menu)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"SidebarFooter"}),": Bottom section (User profile)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"SidebarRail"}),": Hoverable rail for resizing/expanding."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"SidebarTrigger"}),": Toggle button."]}),`
`]}),`
`,e.jsx(i.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(i.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Collapse"}),": Can collapse to icon-only mode."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Mobile"}),": Turns into a Sheet (slide-in) on mobile."]}),`
`]}),`
`,e.jsx(r,{title:"Usage Guidelines",description:"Best practices for when and how to use the Sidebar component."}),`
`,e.jsx(c,{children:e.jsx(a,{children:e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"App Shell"}),": Use as the primary navigation for complex apps."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Groups"}),": Group related links."]}),`
`]})})}),`
`,e.jsx(i.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(i.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Uses CSS variables for width management."}),`
`,e.jsxs(i.li,{children:["Cookie-based state persistence (",e.jsx(i.code,{children:"sidebar_state"}),") to prevent hydration mismatch."]}),`
`,e.jsxs(i.li,{children:["Composed of many sub-components (",e.jsx(i.code,{children:"SidebarMenu"}),", ",e.jsx(i.code,{children:"SidebarGroup"}),", etc.)."]}),`
`]}),`
`,e.jsx(i.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Component"}),": ",e.jsx(i.code,{children:"src/components/ui/sidebar.tsx"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Storybook"}),": ",e.jsx(i.code,{children:"src/stories/sidebar.stories.tsx"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Version"}),": 1.0.0"]}),`
`]})]})}function ie(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{ie as default};
