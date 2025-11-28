import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DLpO0ydC.js";import{M as o,C as l}from"./blocks-DeF1RSIf.js";import{S as c}from"./chart.stories-DOQrF-G2.js";import{S as i,G as d,D as a,a as h}from"./doc-components-Bd--2quW.js";import"./iframe-BCbsaKOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJA8l-OC.js";import"./index-CSW7CTky.js";import"./index-BxURnYXG.js";import"./utils-CDN07tui.js";import"./check-X4KXbUbV.js";import"./createLucideIcon-aPwG8KT1.js";import"./x-Bbu-DXGd.js";import"./triangle-alert-B64PylZu.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"chart",children:"Chart"}),`
`,n.jsx(i,{title:"Component Overview",description:"Beautiful charts built with Recharts."}),`
`,n.jsx(e.p,{children:"A collection of chart components for data visualization, styled to match the design system."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Container, 2. Grid, 3. Axis, 4. Tooltip, 5. Legend, 6. Data Series]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ChartContainer"}),": Handles sizing, themes, and responsiveness."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ChartTooltip"}),": Custom tooltip rendering."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ChartLegend"}),": Custom legend rendering."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Recharts Components"}),": ",n.jsx(e.code,{children:"BarChart"}),", ",n.jsx(e.code,{children:"LineChart"}),", ",n.jsx(e.code,{children:"PieChart"}),", etc."]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"Supports all standard Recharts types:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bar"}),": Comparison across categories."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Line"}),": Trends over time."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pie/Donut"}),": Part-to-whole relationships."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Area"}),": Volume trends."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Radar"}),": Multi-variable comparison."]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Loading"}),": Skeleton state (manual implementation required)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Empty"}),": No data state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hover"}),": Interacting with data points shows tooltips."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hover"}),": Reveals detailed data in a tooltip."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Legend Click"}),": Can filter series (depending on implementation)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ResponsiveContainer"}),": Charts automatically resize to fit their container width."]}),`
`]}),`
`,n.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use Charts."}),`
`,n.jsxs(d,{children:[n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Simplicity"}),": Keep charts simple and easy to read."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Color"}),": Use consistent colors for categories across charts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tooltips"}),": Provide precise values on hover."]}),`
`]})}),n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Overload a single chart with too many series."}),`
`,n.jsx(e.li,{children:"Use 3D effects (harder to read)."}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alt Text"}),": Charts should have a description or title."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Data Table"}),": Complex charts should provide a tabular data alternative for screen readers."]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theme Aware"}),": Uses CSS variables (",n.jsx(e.code,{children:"--color-1"}),", etc.) mapped to design tokens, supporting Dark Mode automatically."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using ",n.jsx(e.code,{children:"recharts"}),"."]}),`
`,n.jsxs(e.li,{children:["Configuration object (",n.jsx(e.code,{children:"ChartConfig"}),") maps data keys to labels and colors."]}),`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.code,{children:"dangerouslySetInnerHTML"})," for dynamic style injection of theme colors."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/chart.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/chart.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]})]})}function M(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{M as default};
