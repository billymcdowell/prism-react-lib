import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CkR7Pirb.js";import{M as t,C as l}from"./blocks-oLwmg5Dm.js";import{S as c}from"./form.stories-DwGqdVNc.js";import{S as i,G as d,D as h}from"./doc-components-BPjvmEYr.js";import"./iframe-Thtzo6Ds.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3Lrb7mV.js";import"./index-B8EgESzF.js";import"./index-DXnFh1uM.js";import"./button-DY-ie4Zi.js";import"./index-DFpA7F9i.js";import"./index-BwAqgtw_.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./label-JREK2Sza.js";import"./input-Bw95PIWX.js";import"./sonner-DI3vdFDx.js";import"./loader-circle-BZnoMWPu.js";import"./createLucideIcon-DOlxeYcD.js";import"./triangle-alert-DSHmMYU2.js";import"./check-UnNSCTgL.js";import"./x-DpwFsUdw.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(e.h1,{id:"form",children:"Form"}),`
`,n.jsx(i,{title:"Component Overview",description:"Building forms with React Hook Form and Zod."}),`
`,n.jsxs(e.p,{children:["A wrapper around ",n.jsx(e.code,{children:"react-hook-form"})," to provide a type-safe, accessible form building experience with consistent styling."]}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Form (Root)"}),": Context provider."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FormField"}),": Controller for a single field."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FormItem"}),": Wrapper for parts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FormLabel"}),": Label."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FormControl"}),": Slot for the input."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FormDescription"}),": Helper text."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FormMessage"}),": Error text."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Validation"}),": Validates on submit or blur (configurable)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Submission"}),": Handles data collection."]}),`
`]}),`
`,n.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Form component."}),`
`,n.jsx(d,{children:n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Complex Forms"}),": Use for any form with validation requirements."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Schemas"}),": Define schemas with Zod for type safety."]}),`
`]})})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA"}),": Automatically links label to input (",n.jsx(e.code,{children:"for/id"}),") and description/error to input (",n.jsx(e.code,{children:"aria-describedby"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Invalid"}),": Sets ",n.jsx(e.code,{children:"aria-invalid"})," on error."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using ",n.jsx(e.code,{children:"react-hook-form"})," and ",n.jsx(e.code,{children:"zod"}),"."]}),`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.code,{children:"Slot"})," to pass props to child inputs."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/form.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/form.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]})]})}function G(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{G as default};
