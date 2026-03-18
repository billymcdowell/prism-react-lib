import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-WxY4RtXn.js";import{M as t,C as l}from"./blocks-ZXWmuc4s.js";import{S as d}from"./sidebar.stories-CD3z2ezN.js";import{S as r,G as c,D as a}from"./doc-components-u3ZontLi.js";import"./iframe-CzIjHCkM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dv-B9L0L.js";import"./index-BSDLliFe.js";import"./index-GyKuygwm.js";import"./sidebar-D_5iBHA2.js";import"./index-Bm9DY6Hk.js";import"./index-D_QQW2kf.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./use-mobile-DQfCF1RS.js";import"./button-CUbMXTi2.js";import"./input-Bw95PIWX.js";import"./separator-CCvnxU_O.js";import"./sheet-D_Od3-sn.js";import"./index-DFY0I9Jc.js";import"./index-CKBRRWT1.js";import"./index-CZaYSkPR.js";import"./index-C9uoKnKI.js";import"./index-B9ISfK40.js";import"./index-BggxqMqP.js";import"./index-DiHu5XcI.js";import"./index-HviMIcE2.js";import"./index-DCbDwA4w.js";import"./index-HxwPMSK8.js";import"./index-MUIKTGbn.js";import"./x-C_XgfFC0.js";import"./createLucideIcon-D2Wp4eEU.js";import"./skeleton-A7behTLO.js";import"./tooltip-kB0ZB9Un.js";import"./index-DD4fDXxF.js";import"./index-D31tkxfm.js";import"./index-RpykjlcG.js";import"./house-qHUv70Jf.js";import"./calendar-Cjw0pd1A.js";import"./search-BJ0bRzY-.js";import"./settings-Ch1jb6rx.js";import"./check-Bv9cvDps.js";import"./triangle-alert-1KayWKV6.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
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
