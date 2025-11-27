import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D096Tp-O.js";import{M as o,C as l}from"./blocks-RFLAQTCC.js";import{S as c}from"./context-menu.stories-Br3P92-v.js";import{S as s,G as d,D as h,a as x,F as a}from"./doc-components-D3HqA8QK.js";import"./iframe-BDUDYbt-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWeqmfpJ.js";import"./index-CzeNkFbL.js";import"./index-BdAMbY9z.js";import"./index-I4hVW7Uw.js";import"./index-BDLlK4Il.js";import"./index-D5G3eVTs.js";import"./index-e2iyl5zn.js";import"./index-BUDlVqGY.js";import"./index-C5_6Tz06.js";import"./index-ujXNkSb0.js";import"./index-wMb2LlYv.js";import"./index-BopYqmby.js";import"./index-B87yfHiP.js";import"./index-EbZNEzNk.js";import"./index-CvC-oVlk.js";import"./index-BU6WxM46.js";import"./index-pImBLRDA.js";import"./index-dX__b2gj.js";import"./index-CgLrFCLY.js";import"./index-vxywQjzl.js";import"./utils-CDN07tui.js";import"./chevron-right-DB94n5Is.js";import"./createLucideIcon-qJKAratn.js";import"./check-Cu_PNP9o.js";import"./circle-DccHrpaQ.js";import"./x-DQfMO2VP.js";import"./triangle-alert-Dr4XsvYY.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"context-menu",children:"Context Menu"}),`
`,n.jsx(s,{title:"Component Overview",description:"Displays a menu to the user — such as a set of actions or functions — triggered by a right-click."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Trigger Area, 2. Content (Menu), 3. Items, 4. Submenus]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ContextMenu (Root)"}),": The wrapping component."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ContextMenuTrigger"}),": The area that listens for the right-click."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ContextMenuContent"}),": The popup menu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ContextMenuItem"}),": Individual actions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ContextMenuSub"}),": Nested submenus."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Right-Click"}),": Opens the menu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Click Outside"}),": Closes the menu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Esc"}),": Closes the menu."]}),`
`]}),`
`,n.jsx(s,{title:"Usage Guidelines",description:"Best practices for when and how to use the Context Menu component."}),`
`,n.jsxs(d,{children:[n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Advanced Actions"}),": Use for power user features or shortcuts."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"File Managers"}),": Use for file operations (Rename, Delete)."]}),`
`]})}),n.jsx(x,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary Navigation"}),": Rely solely on context menus for critical actions (not discoverable on mobile)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Complex Forms"}),": Put complex inputs inside a context menu."]}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": ",n.jsx(e.code,{children:"menu"})," or ",n.jsx(e.code,{children:"menubar"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Trigger"}),": Not typically announced as a context menu trigger, so ensure actions are available elsewhere."]}),`
`]}),`
`,n.jsx(e.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Shift + F10"}),": Standard shortcut to open context menu (if supported/implemented)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Arrows"}),": Navigate the menu items."]}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using ",n.jsx(e.code,{children:"@radix-ui/react-context-menu"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/context-menu.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/context-menu.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DropdownMenu"}),": Similar visually but triggered by a left click."]}),`
`]})})]})}function z(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{z as default};
