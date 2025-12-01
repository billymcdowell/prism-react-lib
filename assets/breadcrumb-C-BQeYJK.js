import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-C-1GgXnp.js";import{M as l,C as o}from"./blocks-BfyWkZoJ.js";import{S as d}from"./breadcrumb.stories-Dz98BvB_.js";import{S as r,G as c,D as a,a as h,F as x}from"./doc-components-CdHghlqS.js";import"./iframe-Duy2BnNL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNDXaxkE.js";import"./index-p2IZywWK.js";import"./index-DBYoJzCo.js";import"./breadcrumb-BMFfXEjO.js";import"./index-Bgfk8m88.js";import"./index-fiM-0oeH.js";import"./utils-CDN07tui.js";import"./chevron-right-C_18ztdO.js";import"./createLucideIcon-ZT_-Fol2.js";import"./ellipsis-CeKroTPi.js";import"./check-F74a_CHl.js";import"./x-B0dXeo9L.js";import"./triangle-alert-DaRgiZ2J.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(n.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(r,{title:"Component Overview",description:"Displays the path to the current resource using a hierarchy of links."}),`
`,e.jsx(n.p,{children:"Breadcrumbs indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Breadcrumb (Root), 2. List, 3. Item, 4. Link, 5. Page, 6. Separator, 7. Ellipsis]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Breadcrumb (Root)"}),": The navigation wrapper (",e.jsx(n.code,{children:"nav"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BreadcrumbList"}),": The ordered list container (",e.jsx(n.code,{children:"ol"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BreadcrumbItem"}),": A single item (",e.jsx(n.code,{children:"li"}),") in the breadcrumb trail."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BreadcrumbLink"}),": An interactive link (",e.jsx(n.code,{children:"a"}),") to a parent page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BreadcrumbPage"}),": The current page indicator (",e.jsx(n.code,{children:"span"}),"), typically non-interactive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BreadcrumbSeparator"}),": Visual separator between items (Chevron or Slash)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BreadcrumbEllipsis"}),": Visual indicator for hidden items in long paths."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": Standard layout with chevron separators."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Separator"}),": Can use different icons (Slash, Arrow)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown"}),": Can contain a dropdown menu for collapsed items."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": Link color is muted/foreground."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover"}),": Links darken or underline on hover."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Current"}),": The last item represents the current page and is usually styled differently (bold, non-interactive)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Navigates to the parent page."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Collapse"}),": On mobile or deep hierarchies, intermediate items can be collapsed into an ellipsis or dropdown."]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Items should wrap or collapse on smaller screens."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BreadcrumbEllipsis"})," is often used to hide middle items."]}),`
`]}),`
`,e.jsx(r,{title:"Usage Guidelines",description:"Best practices for when and how to use the Breadcrumb component."}),`
`,e.jsxs(c,{children:[e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deep Hierarchies"}),": Use when the website structure is more than two levels deep."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary Navigation"}),": Use as a secondary navigation aid, not as a replacement for the primary menu."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Location"}),": Place at the top left of the content area."]}),`
`]})}),e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for single-level websites."}),`
`,e.jsx(n.li,{children:"Make the current page a link (it should be static text)."}),`
`,e.jsx(n.li,{children:"Use extremely long text labels (truncate if necessary)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"navigation"})," (Root)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"}),": ",e.jsx(n.code,{children:'aria-label="breadcrumb"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Current Item"}),": ",e.jsx(n.code,{children:'aria-current="page"'})," on the last item (",e.jsx(n.code,{children:"BreadcrumbPage"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Separator"}),": ",e.jsx(n.code,{children:'aria-hidden="true"'})," to avoid noise."]}),`
`]}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Focuses on the links in order."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": ",e.jsx(n.code,{children:"text-sm"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color"}),": ",e.jsx(n.code,{children:"text-muted-foreground"})," for links, ",e.jsx(n.code,{children:"text-foreground"})," for current page."]}),`
`]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gap"}),": ",e.jsx(n.code,{children:"gap-1.5"})," to ",e.jsx(n.code,{children:"gap-2.5"})," depending on screen size."]}),`
`]}),`
`,e.jsx(r,{title:"Content Guidelines",description:"Writing effective content for breadcrumbs."}),`
`,e.jsx(n.h3,{id:"writing-style",children:"Writing style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Short Labels"}),": Use short, descriptive labels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Match Title"}),": Labels should match the page title they link to."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using standard HTML ordered lists (",e.jsx(n.code,{children:"ol"}),", ",e.jsx(n.code,{children:"li"}),")."]}),`
`,e.jsx(n.li,{children:"Slots based architecture for flexibility."}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/breadcrumb.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/breadcrumb.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sidebar"}),": Primary navigation structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Menubar"}),": Top-level navigation."]}),`
`]})})]})}function I(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{I as default};
