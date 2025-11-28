import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CTm85PZN.js";import{M as o,C as l}from"./blocks-CPGrI-5A.js";import{S as c}from"./context-menu.stories-B2LY5030.js";import{S as s,G as d,D as h,a as x,F as a}from"./doc-components-BfcrjwDN.js";import"./iframe-5VSXgaGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIZoGkhL.js";import"./index-ezsSW86d.js";import"./index-CIWWWtkK.js";import"./index-NI9Ql3bK.js";import"./index-CZ2Vfvrl.js";import"./index-BLVQJD9n.js";import"./index-6HIl-O-P.js";import"./index-DyzTdCYH.js";import"./index-Cn7NyaUk.js";import"./index-CREXWKfe.js";import"./index-Kgb3Uswv.js";import"./index-C-4_Fe2c.js";import"./index-BOV_DlIl.js";import"./index-C9nCdb5S.js";import"./index-BKEJRegv.js";import"./index-CNSW7TUu.js";import"./index-B3t2youv.js";import"./index-DuOSvMUT.js";import"./index-HGdIECh5.js";import"./index-Dh-gvdrz.js";import"./utils-CDN07tui.js";import"./chevron-right-C7oL6UO3.js";import"./createLucideIcon-CBNv5Nc_.js";import"./check-foGC6GUT.js";import"./circle-DoxTKUWy.js";import"./x-C_AkMVZt.js";import"./triangle-alert-CxI1iM2o.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
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
