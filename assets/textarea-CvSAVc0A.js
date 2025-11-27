import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BDbAEUYJ.js";import{M as t,C as l}from"./blocks-CFYePi8c.js";import{T as d}from"./textarea.stories-Cqxa7MpO.js";import{S as o,G as c,D as h,a,F as x}from"./doc-components-DGx-PgBX.js";import"./iframe-Cr4TNNkV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7NW6yZ7.js";import"./index-BprP2A1h.js";import"./index-LUD4zOgc.js";import"./textarea-WFWn170-.js";import"./utils-CDN07tui.js";import"./label-PFrMQMc4.js";import"./index-CJtJS3vQ.js";import"./index-DCcgoJPk.js";import"./check-BvhHD2Z4.js";import"./createLucideIcon-DeyIM5kc.js";import"./x-DdvkKd7C.js";import"./triangle-alert-1uzDtnoG.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(o,{title:"Component Overview",description:"A form element that allows users to enter multiple lines of text."}),`
`,e.jsx(n.p,{children:"Textareas are used when the expected input exceeds a single line, such as comments, feedback forms, or messages."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Textarea"}),": The multi-line input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label (Optional)"}),": Text describing the expected input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Helper Text (Optional)"}),": Assistive text below the field."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": The normal interactive state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus"}),": The field is active and ready for input (highlighted border/ring)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": The field is non-interactive and dimmed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"}),": Visual indication (e.g., red border) that the input is invalid."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Placeholder"}),": Hint text shown when empty."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Focuses the field for typing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typing"}),": Enters text. Scrollbars appear if content exceeds the height."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resize"}),": Users can typically resize the height via the grip handle (if enabled)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(c,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for long-form text input (descriptions, bios, comments)."}),`
`,e.jsx(n.li,{children:"Provide a clear label."}),`
`,e.jsx(n.li,{children:"Use placeholder text to provide an example of the expected input format (not as a replacement for a label)."}),`
`]})}),e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use for single-line input (use ",e.jsx(n.code,{children:"Input"})," instead)."]}),`
`,e.jsx(n.li,{children:"Disable resizing if the content might grow significantly, unless layout constraints strictly forbid it."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Moves focus into and out of the textarea."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure the textarea has an associated ",e.jsx(n.code,{children:"label"})," (via ",e.jsx(n.code,{children:"htmlFor"}),"/",e.jsx(n.code,{children:"id"}),") or ",e.jsx(n.code,{children:"aria-label"}),"/",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font"}),": Inherits ",e.jsx(n.code,{children:"text-base"})," or ",e.jsx(n.code,{children:"text-sm"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Border"}),": ",e.jsx(n.code,{children:"border-input"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background"}),": ",e.jsx(n.code,{children:"bg-transparent"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Ring"}),": ",e.jsx(n.code,{children:"ring-ring"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Min Height"}),": ",e.jsx(n.code,{children:"min-h-[80px]"})," (default ",e.jsx(n.code,{children:"min-h-16"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Width"}),": 100% of container usually."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Standard HTML ",e.jsx(n.code,{children:"<textarea>"})," element styled with Tailwind CSS."]}),`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"field-sizing-content"})," utility where supported for auto-growing, or standard resizing."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/textarea.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/textarea.stories.tsx"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input"}),": For single-line text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form"}),": Wrapper for form validation and layout."]}),`
`]})})]})}function H(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{H as default};
