import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CnhOTV6_.js";import{M as t,C as l}from"./blocks-CczNvRgN.js";import{S as d}from"./sidebar.stories-DNIwPY6X.js";import{S as r,G as c,D as a}from"./doc-components-lzNNJNHv.js";import"./iframe-CUYRbRBK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTsQcHOp.js";import"./index-jfXM7GBZ.js";import"./index-B1pm5X6x.js";import"./sidebar-ZRkeEKao.js";import"./index-Dlb3m4xI.js";import"./index-DhaaUe0c.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./use-mobile-B0Koy_GG.js";import"./button-Cdu7QBs_.js";import"./input-Bw95PIWX.js";import"./separator-D4sOmssu.js";import"./sheet-CRyrbGcj.js";import"./index-DYFBSIQT.js";import"./index-V9QEtJvU.js";import"./index-DRTMPWoK.js";import"./index-X-6BvtxF.js";import"./index-Cq1PSqlX.js";import"./index-ByQbsh2J.js";import"./index-CGJvH6hm.js";import"./index-BJm6Fbc6.js";import"./index-BCK_tgMS.js";import"./index-DbZ63798.js";import"./index-qvpiirN5.js";import"./x-CJx3OYa6.js";import"./createLucideIcon-PuqRuo2p.js";import"./skeleton-A7behTLO.js";import"./tooltip-CIfi0wwY.js";import"./index-CNZ9d_2W.js";import"./index-B8gnZY3S.js";import"./index-DuAiBOW0.js";import"./house-ESYDfhwV.js";import"./calendar-CG60-b_r.js";import"./search-DqSledJA.js";import"./settings-BNs_VRhh.js";import"./check-BXUBLRhi.js";import"./triangle-alert-C5EqevOS.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
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
