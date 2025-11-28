import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D3yAUaLZ.js";import{M as r,C as o}from"./blocks-CjZJvs0H.js";import{T as l}from"./tabs.stories-9_UxxY4-.js";import{S as c,G as a,D as d,a as h,F as x}from"./doc-components-CDTlatZN.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-B6Ga2ycG.js";import"./tabs-BhEIOAmy.js";import"./index-DXm186LG.js";import"./index-CO3hOlhW.js";import"./index-CffJVRRg.js";import"./index-HW-TOwGT.js";import"./index-D2kPqp5j.js";import"./index-ZaosRtZH.js";import"./index-B1okM1AP.js";import"./index-ApAwEG_-.js";import"./index-BuX_BX6j.js";import"./index-DH8AKpU5.js";import"./index-C8ABDzS5.js";import"./utils-CDN07tui.js";import"./card-C3N4QfhV.js";import"./button-VZmRfN8J.js";import"./index-BNY7203a.js";import"./index-B_jtOnfb.js";import"./input-Bw95PIWX.js";import"./label-BhOhgKLU.js";import"./check-wSyrKndQ.js";import"./createLucideIcon-Bs7DeJGf.js";import"./x-DmhvL5In.js";import"./triangle-alert-DbwTKsh-.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(c,{title:"Component Overview",description:"A set of layered sections of content—known as tab panels—that are displayed one at a time."}),`
`,e.jsx(n.p,{children:"Tabs allow users to organize and navigate between multiple panels of related content within the same view, saving space and reducing clutter."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tabs (Root)"}),": The top-level container that manages state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TabsList"}),": The container for the tab triggers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TabsTrigger"}),": The interactive element (button) that activates a specific content panel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TabsContent"}),": The content panel associated with a trigger."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inactive"}),": The tab is visible but not selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active"}),": The tab is selected, and its associated content is visible. The active tab usually has a distinct background color or underline."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus"}),": The tab receives a focus ring when navigated to via keyboard."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": The tab cannot be activated."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Clicking a tab trigger activates it and displays the corresponding content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Moves focus into the tab list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Keys"}),": Navigate between tabs within the list (automatic activation or manual depending on configuration, usually manual/enter in web)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TabsList"}),": Typically horizontally scrolling or wrapping on smaller screens if there are many tabs, or stacked vertically. In this implementation, it's a flex container that fits its content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TabsContent"}),": Expands to fill the available width."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(a,{children:[e.jsx(d,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use when users need to switch between views within the same context."}),`
`,e.jsx(n.li,{children:"Use for organizing related content into distinct sections (e.g., Account, Password, Notifications)."}),`
`,e.jsx(n.li,{children:"Keep tab labels short and descriptive (1-2 words)."}),`
`]})}),e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use tabs for sequential steps (use a Stepper or Wizard instead)."}),`
`,e.jsx(n.li,{children:"Use tabs for comparing content (content should be visible side-by-side)."}),`
`,e.jsx(n.li,{children:"Overload a single view with too many tabs (consider a navigation menu or sidebar)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Moves focus into the tab list and then to the active tab panel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Right/Left"}),": Moves focus between tabs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Home/End"}),": Moves focus to the first/last tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space/Enter"}),": Activates the focused tab (if not automatically activated)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Roles"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="tablist"'})," wrapper."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="tab"'})," for triggers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'role="tabpanel"'})," for content areas."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA Attributes"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-selected="true"'})," on the active tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," links the tab to its panel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," links the panel to its tab."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Labels"}),": ",e.jsx(n.code,{children:"text-sm"}),", ",e.jsx(n.code,{children:"font-medium"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background"}),": ",e.jsx(n.code,{children:"bg-muted"})," for the list, ",e.jsx(n.code,{children:"bg-background"})," for the active tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text"}),": ",e.jsx(n.code,{children:"text-muted-foreground"})," for inactive, ",e.jsx(n.code,{children:"text-foreground"})," for active."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active State"}),": Shadow and color change to indicate elevation/selection."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-tabs"}),"."]}),`
`,e.jsx(n.li,{children:"Supports controlled and uncontrolled modes."}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/tabs.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/tabs.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dependencies"}),": ",e.jsx(n.code,{children:"@radix-ui/react-tabs"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accordion"}),": For collapsing multiple sections vertically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NavigationMenu"}),": For site-wide navigation."]}),`
`]})})]})}function P(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{P as default};
