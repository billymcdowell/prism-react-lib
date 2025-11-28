import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D3yAUaLZ.js";import{M as o,C as c}from"./blocks-CjZJvs0H.js";import{S as d}from"./aspect-ratio.stories-zTSnw4el.js";import{S as s,G as l,D as h,a,F as x}from"./doc-components-CDTlatZN.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-B6Ga2ycG.js";import"./index-BNY7203a.js";import"./index-CO3hOlhW.js";import"./utils-CDN07tui.js";import"./check-wSyrKndQ.js";import"./createLucideIcon-Bs7DeJGf.js";import"./x-DmhvL5In.js";import"./triangle-alert-DbwTKsh-.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(n.h1,{id:"aspect-ratio",children:"Aspect Ratio"}),`
`,e.jsx(s,{title:"Component Overview",description:"Displays content within a desired ratio."}),`
`,e.jsx(n.p,{children:"The Aspect Ratio component is used to embed images, videos, or other content while maintaining a specific width-to-height ratio. This prevents layout shifts (CLS) during page loads."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Wrapper (Ratio Container), 2. Content (Image/Video)]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AspectRatio (Root)"}),": The wrapper element that enforces the aspect ratio."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content"}),": The child element (usually an ",e.jsx(n.code,{children:"img"}),", ",e.jsx(n.code,{children:"video"}),", or ",e.jsx(n.code,{children:"iframe"}),") that fills the container."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:["The Aspect Ratio supports customization via the ",e.jsx(n.code,{children:"ratio"})," prop:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ratio"}),": Accepts a number representing the width/height ratio (e.g., ",e.jsx(n.code,{children:"16 / 9"}),", ",e.jsx(n.code,{children:"4 / 3"}),", ",e.jsx(n.code,{children:"1 / 1"}),").",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"16 / 9"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component maintains the specified aspect ratio regardless of the container's width."}),`
`,e.jsxs(n.li,{children:["The content within typically uses ",e.jsx(n.code,{children:"object-cover"})," to fill the space without distortion, cropping if necessary."]}),`
`]}),`
`,e.jsx(s,{title:"Usage Guidelines",description:"Best practices for when and how to use the Aspect Ratio component."}),`
`,e.jsxs(l,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Media"}),": Use for images, videos, and maps to reserve space before loading."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cards"}),": Use in card layouts to ensure uniform image sizes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grids"}),": Use to maintain consistency in grid layouts."]}),`
`]})}),e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for content with unpredictable text amounts, as fixed ratios might cut off text."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": Generic ",e.jsx(n.code,{children:"div"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Images"}),": Ensure wrapped images have appropriate ",e.jsx(n.code,{children:"alt"})," text."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Width"}),": 100% of parent container."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Height"}),": Calculated based on the ",e.jsx(n.code,{children:"ratio"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-aspect-ratio"}),"."]}),`
`,e.jsxs(n.li,{children:['Uses the "padding-bottom hack" or modern CSS ',e.jsx(n.code,{children:"aspect-ratio"})," property under the hood (Radix implementation handles this)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/aspect-ratio.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/aspect-ratio.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card"}),": Often uses AspectRatio for header images."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avatar"}),": Uses aspect ratio logic for ensuring circular or square shapes."]}),`
`]})})]})}function U(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{U as default};
