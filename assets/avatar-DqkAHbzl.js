import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-D096Tp-O.js";import{M as t,C as a}from"./blocks-RFLAQTCC.js";import{S as o}from"./avatar.stories-D_jKzKU_.js";import{S as i,G as d,D as c,a as h,F as x}from"./doc-components-D3HqA8QK.js";import"./iframe-BDUDYbt-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWeqmfpJ.js";import"./index-CzeNkFbL.js";import"./index-BdAMbY9z.js";import"./avatar-DUVAsQ-P.js";import"./index-wMb2LlYv.js";import"./index-EbZNEzNk.js";import"./index-B9P-x0vy.js";import"./index-BDLlK4Il.js";import"./utils-CDN07tui.js";import"./check-Cu_PNP9o.js";import"./createLucideIcon-qJKAratn.js";import"./x-DQfMO2VP.js";import"./triangle-alert-Dr4XsvYY.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsx(i,{title:"Component Overview",description:"An image element with a fallback for representing the user."}),`
`,e.jsx(n.p,{children:"The Avatar component is used to represent a user or entity. It displays a profile picture or a fallback (initials) when the image is unavailable."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Avatar (Root), 2. AvatarImage, 3. AvatarFallback]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avatar (Root)"}),": The wrapper element that handles sizing, clipping, and shape (circular)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AvatarImage"}),": The image element that renders the source URL. Handles loading error states."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AvatarFallback"}),": The content displayed when the image fails to load or is not provided (usually initials or an icon)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:"The Avatar component is typically used in a single variant, but can be sized via utility classes."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": Circular, ",e.jsx(n.code,{children:"size-8"})," (2rem/32px)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sizes"}),": Controlled via Tailwind classes (e.g., ",e.jsx(n.code,{children:"size-10"}),", ",e.jsx(n.code,{children:"size-12"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loading"}),": The image is loading. Fallback is hidden or shown depending on implementation preference (Radix handles this)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loaded"}),": Image is successfully loaded and visible."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"}),": Image failed to load. Fallback is shown."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Static"}),": Usually non-interactive, but can be wrapped in a button or link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover"}),": No default hover state unless wrapped."]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fixed size by default."}),`
`,e.jsxs(n.li,{children:["Can be made responsive using Tailwind responsive prefixes (e.g., ",e.jsx(n.code,{children:"size-8 md:size-10"}),")."]}),`
`]}),`
`,e.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Avatar component."}),`
`,e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User Profiles"}),": Use to represent users in profiles, comments, or lists."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback"}),": Always provide a fallback for when the image fails to load."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initials"}),": Use 1-2 initials for the fallback text."]}),`
`]})}),e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use for generic images that are not related to an identity (use ",e.jsx(n.code,{children:"img"})," or ",e.jsx(n.code,{children:"AspectRatio"}),")."]}),`
`,e.jsx(n.li,{children:"Use widely varying aspect ratios for the source image (should be square)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"img"})," (on the AvatarImage)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alt Text"}),": The ",e.jsx(n.code,{children:"alt"})," prop on ",e.jsx(n.code,{children:"AvatarImage"})," is crucial. It describes the image to screen readers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback"}),": If the image fails, the fallback content is exposed."]}),`
`]}),`
`,e.jsx(n.h3,{id:"wcag-compliance",children:"WCAG compliance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Contrast"}),": Ensure fallback text has sufficient contrast against the fallback background (",e.jsx(n.code,{children:"bg-muted"})," / ",e.jsx(n.code,{children:"text-foreground"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback Text"}),": Inherits font settings, typically centered and uppercase."]}),`
`]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": Default ",e.jsx(n.code,{children:"size-8"})," (2rem)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shape"}),": ",e.jsx(n.code,{children:"rounded-full"})," (Circle)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback Background"}),": ",e.jsx(n.code,{children:"bg-muted"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback Text"}),": ",e.jsx(n.code,{children:"text-muted-foreground"})," (implied by muted background usually, or explicitly set)."]}),`
`]}),`
`,e.jsx(i,{title:"Content Guidelines",description:"Writing effective content for avatars."}),`
`,e.jsx(n.h3,{id:"writing-style",children:"Writing style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Initials"}),': Use the first letter of the first and last name (e.g., "Jane Doe" -> "JD").']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alt Text"}),`: Use the user's name (e.g., "Jane Doe").`]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-avatar"}),"."]}),`
`,e.jsxs(n.li,{children:["Handles image loading states automatically with ",e.jsx(n.code,{children:"onLoadingStatusChange"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/avatar.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/avatar.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tooltip"}),": Often used to show the full user name on hover."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DropdownMenu"}),": Often triggered by clicking the avatar (User Menu)."]}),`
`]})})]})}function R(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{R as default};
