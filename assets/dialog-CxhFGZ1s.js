import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-D096Tp-O.js";import{M as t,C as l}from"./blocks-RFLAQTCC.js";import{S as d}from"./dialog.stories-BkAMhUAz.js";import{S as r,G as c,D as a,a as h,F as x}from"./doc-components-D3HqA8QK.js";import"./iframe-BDUDYbt-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWeqmfpJ.js";import"./index-CzeNkFbL.js";import"./index-BdAMbY9z.js";import"./dialog-fTrQIQmw.js";import"./index-qH0F-cho.js";import"./index-I4hVW7Uw.js";import"./index-BDLlK4Il.js";import"./index-D5G3eVTs.js";import"./index-B87yfHiP.js";import"./index-EbZNEzNk.js";import"./index-vxywQjzl.js";import"./index-ujXNkSb0.js";import"./index-wMb2LlYv.js";import"./index-BopYqmby.js";import"./index-pImBLRDA.js";import"./index-dX__b2gj.js";import"./utils-CDN07tui.js";import"./x-DQfMO2VP.js";import"./createLucideIcon-qJKAratn.js";import"./button-CzXZL4Rf.js";import"./index-B9P-x0vy.js";import"./index-B_jtOnfb.js";import"./input-Bw95PIWX.js";import"./label-HUQgifVK.js";import"./check-Cu_PNP9o.js";import"./triangle-alert-Dr4XsvYY.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(i.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsx(r,{title:"Component Overview",description:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}),`
`,n.jsx(i.p,{children:"Often called a Modal."}),`
`,n.jsx(i.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(i.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Overlay, 2. Content, 3. Close Button, 4. Header, 5. Footer]"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Dialog (Root)"}),": State manager."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogTrigger"}),": Button to open."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogOverlay"}),": Dimmed background."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogContent"}),": The modal container."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogHeader/Footer"}),": Layout helpers for title and actions."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"DialogClose"}),": Close button (X)."]}),`
`]}),`
`,n.jsx(i.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(i.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Focus Trap"}),": Focus is trapped within the dialog while open."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Scroll Lock"}),": Background scrolling is disabled."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Dismiss"}),": Esc key or clicking overlay closes the dialog."]}),`
`]}),`
`,n.jsx(r,{title:"Usage Guidelines",description:"Best practices for when and how to use the Dialog component."}),`
`,n.jsxs(c,{children:[n.jsx(a,{children:n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Focused Tasks"}),": Use for forms, confirmations, or critical information requiring attention."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Simplicity"}),": Keep dialog content simple."]}),`
`]})}),n.jsx(h,{children:n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Nested Dialogs"}),": Avoid nesting dialogs (use a step-by-step wizard or a new page)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Full Pages"}),": Don't put an entire page's worth of content in a dialog (use a Sheet/Drawer)."]}),`
`]})})]}),`
`,n.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(i.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Role"}),": ",n.jsx(i.code,{children:"dialog"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Label"}),": ",n.jsx(i.code,{children:"aria-labelledby"})," points to ",n.jsx(i.code,{children:"DialogTitle"}),". ",n.jsx(i.code,{children:"aria-describedby"})," points to ",n.jsx(i.code,{children:"DialogDescription"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(i.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Built using ",n.jsx(i.code,{children:"@radix-ui/react-dialog"}),"."]}),`
`]}),`
`,n.jsx(i.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Component"}),": ",n.jsx(i.code,{children:"src/components/ui/dialog.tsx"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Storybook"}),": ",n.jsx(i.code,{children:"src/stories/dialog.stories.tsx"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(i.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(x,{children:n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Sheet"}),": For side-anchored modals."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"AlertDialog"}),": For critical interruptions."]}),`
`]})})]})}function K(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{K as default};
