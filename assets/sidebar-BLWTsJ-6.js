import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CKMyecN8.js";import{M as t,C as l}from"./blocks-D7AWXfWX.js";import{S as d}from"./sidebar.stories-C7G3vXqP.js";import{S as r,G as c,D as a}from"./doc-components-zdRvZ5kB.js";import"./iframe-DuVnZ3IU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CbPSGrel.js";import"./index-Cb-cBY0a.js";import"./index-7F2DRami.js";import"./sidebar-CwTKETLj.js";import"./index-CZuJkbN3.js";import"./index-DD8fzp89.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./button-Bf87xu13.js";import"./input-Bw95PIWX.js";import"./separator-BXvb_f41.js";import"./sheet-C2Y1kJ8p.js";import"./index-CIVsanWY.js";import"./index-TLdrDiDa.js";import"./index-Bwn2t3Ne.js";import"./index-CKr2Hm9b.js";import"./index-u8hsYIti.js";import"./index-D8xgHouE.js";import"./index-DbvEBrZ4.js";import"./index-DbAc5SrR.js";import"./index-BeJSYhvd.js";import"./index-3zTtkrMW.js";import"./index-DP5xuUnf.js";import"./x-CZ9l3KRH.js";import"./createLucideIcon-R5PgKpUK.js";import"./skeleton-A7behTLO.js";import"./tooltip-CtZ4ELTl.js";import"./index-C4GO8fFR.js";import"./index-C5WeB4ef.js";import"./index-BfQJ32c5.js";import"./house-B-8rSR5d.js";import"./calendar-Cm_HhGci.js";import"./search-D6Zs4ZFN.js";import"./settings-BnCk_pLu.js";import"./check-FfX_Opy_.js";import"./triangle-alert-j0MXkBvO.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
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
`]})]})}function ee(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{ee as default};
