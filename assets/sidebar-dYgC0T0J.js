import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DOf6MG1l.js";import{M as t,C as l}from"./blocks-Csg9dg-x.js";import{S as d}from"./sidebar.stories-DZsmb7F4.js";import{S as r,G as c,D as a}from"./doc-components-ZP-78U32.js";import"./iframe-BRnshzNF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DMV8CCa4.js";import"./index-ASmZsYc4.js";import"./index-B5FoInUX.js";import"./sidebar-RMFi1Ypm.js";import"./index-C32uMLkD.js";import"./index-BDTCk58b.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./use-mobile-DVowZLZn.js";import"./button-brVUi92s.js";import"./input-Bw95PIWX.js";import"./separator-Bm-e1QLE.js";import"./sheet-DsKapvPx.js";import"./index-CyIC_Ke1.js";import"./index-DIJC5Xrb.js";import"./index-Co4v08xc.js";import"./index-CTm2Q6KN.js";import"./index-DqFPIY4g.js";import"./index-CAj3bD8N.js";import"./index-CDwFU9II.js";import"./index-CJoMgdLJ.js";import"./index-BR7tVvuF.js";import"./index-sdugDUW7.js";import"./index-D3FcFrBL.js";import"./x-BpE68iVF.js";import"./createLucideIcon-BffpPsEP.js";import"./skeleton-A7behTLO.js";import"./tooltip-ClPR1nC6.js";import"./index-DJ3UEczn.js";import"./index-CC7BnrQQ.js";import"./index-CWtCchEC.js";import"./house-CHuxSPZY.js";import"./calendar-B-L9Af7-.js";import"./search-BtU3Fp9U.js";import"./settings-B6ehiwCF.js";import"./check-Boj3h__y.js";import"./triangle-alert-DDdFKWu6.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
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
