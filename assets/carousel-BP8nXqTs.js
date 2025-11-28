import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-aKePkADw.js";import{M as l,C as t}from"./blocks-CxzVIFWv.js";import{S as c}from"./carousel.stories-D8h5uj8I.js";import{S as i,G as d,D as h,a,F as x}from"./doc-components-Cx8bIQyt.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtYTIzzJ.js";import"./index-Dkk1Xfhs.js";import"./index-J6LJBlCe.js";import"./utils-CDN07tui.js";import"./button-BeD1xW-_.js";import"./index-Oq5s9i1g.js";import"./index-QGY4RfnD.js";import"./index-B_jtOnfb.js";import"./createLucideIcon-Da8e7NOt.js";import"./arrow-right-867OmYPi.js";import"./card-C3N4QfhV.js";import"./check-DB4cmgqP.js";import"./x-BK-DgL2b.js";import"./triangle-alert-jzMBHgup.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsx(i,{title:"Component Overview",description:"A carousel with motion and swipe built using Embla."}),`
`,e.jsx(n.p,{children:"A slideshow component for cycling through elements like images or cards."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Carousel (Root), 2. Content, 3. Item, 4. Previous, 5. Next]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carousel (Root)"}),": The wrapper that provides context."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CarouselContent"}),": The container moving the slides."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CarouselItem"}),": The individual slide container."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CarouselPrevious"}),": Button to go back."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CarouselNext"}),": Button to go forward."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Horizontal"}),": Slides move left/right (Default)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vertical"}),": Slides move up/down (",e.jsx(n.code,{children:'orientation="vertical"'}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Active"}),": The current slide is visible."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled Buttons"}),": Navigation buttons are disabled at the start/end of the list (unless looping)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Swipe"}),": Supports touch swipe on mobile."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keyboard"}),": Arrow keys navigate slides when focused."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Buttons navigate slides."]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basis"}),": ",e.jsx(n.code,{children:"CarouselItem"})," width is controlled via ",e.jsx(n.code,{children:"basis-full"})," (1 item), ",e.jsx(n.code,{children:"basis-1/2"})," (2 items), etc., usually responsive (e.g., ",e.jsx(n.code,{children:"md:basis-1/3"}),")."]}),`
`]}),`
`,e.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Carousel component."}),`
`,e.jsxs(d,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Galleries"}),": Use for image galleries."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Featured Content"}),": Use for hero sections with multiple highlights."]}),`
`]})}),e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Auto-play without user control (accessibility issue)."}),`
`,e.jsx(n.li,{children:"Hide critical content solely inside a carousel (users might miss it)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Keys"}),": Left/Right (or Up/Down) to navigate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"region"})," with ",e.jsx(n.code,{children:'aria-roledescription="carousel"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Items"}),": ",e.jsx(n.code,{children:'role="group"'})," with ",e.jsx(n.code,{children:'aria-roledescription="slide"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Buttons"}),': Labeled "Previous slide" and "Next slide" via ',e.jsx(n.code,{children:"sr-only"})," text."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"embla-carousel-react"}),"."]}),`
`,e.jsx(n.li,{children:"Highly performant and touch-friendly."}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/carousel.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/carousel.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ScrollArea"}),": For continuous scrolling content."]}),`
`]})})]})}function T(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{T as default};
