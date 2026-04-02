import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CkR7Pirb.js";import{M as r,C as l}from"./blocks-oLwmg5Dm.js";import{S as c}from"./collapsible.stories-C1VIE3qf.js";import{S as s,G as d,D as h,F as a}from"./doc-components-BPjvmEYr.js";import"./iframe-Thtzo6Ds.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3Lrb7mV.js";import"./index-B8EgESzF.js";import"./index-DXnFh1uM.js";import"./collapsible-DTwBNPhx.js";import"./index-D0hFrhiu.js";import"./index-Pz5rUp9x.js";import"./index-BwAqgtw_.js";import"./index-CE7dyx6e.js";import"./index-9qHsznmX.js";import"./index-BmGYDCLg.js";import"./index-CchPzlss.js";import"./index-ByqlzOxe.js";import"./button-DY-ie4Zi.js";import"./index-DFpA7F9i.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./createLucideIcon-DOlxeYcD.js";import"./check-UnNSCTgL.js";import"./x-DpwFsUdw.js";import"./triangle-alert-DSHmMYU2.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:c}),`
`,n.jsx(e.h1,{id:"collapsible",children:"Collapsible"}),`
`,n.jsx(s,{title:"Component Overview",description:"An interactive component which expands/collapses a panel."}),`
`,n.jsx(e.p,{children:"Used to hide complex or secondary content while keeping it accessible."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Root, 2. Trigger, 3. Content]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Collapsible (Root)"}),": State manager."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CollapsibleTrigger"}),": The button that toggles the state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CollapsibleContent"}),": The panel that expands/collapses."]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Open"}),": Content is visible."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Closed"}),": Content is hidden (height: 0)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Click"}),": Toggles the open/closed state."]}),`
`]}),`
`,n.jsx(e.h3,{id:"animation",children:"Animation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Typically animates the ",n.jsx(e.code,{children:"height"})," or ",n.jsx(e.code,{children:"grid-template-rows"})," from 0 to auto."]}),`
`]}),`
`,n.jsx(s,{title:"Usage Guidelines",description:"Best practices for when and how to use the Collapsible component."}),`
`,n.jsx(d,{children:n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Details"}),": Use to hide details that are not critical for the main task."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clean Layouts"}),": Use to keep layouts clean by hiding advanced options."]}),`
`]})})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Trigger"}),": ",n.jsx(e.code,{children:"aria-expanded"})," indicates state. ",n.jsx(e.code,{children:"aria-controls"})," points to content."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content"}),": ",n.jsx(e.code,{children:"region"})," role (optional but good for large sections)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using ",n.jsx(e.code,{children:"@radix-ui/react-collapsible"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/collapsible.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/collapsible.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accordion"}),": A set of connected collapsibles."]}),`
`]})})]})}function _(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{_ as default};
