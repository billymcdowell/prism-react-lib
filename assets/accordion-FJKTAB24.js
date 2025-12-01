import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Bup9wcVw.js";import{M as d,C as h}from"./blocks-H_I3Ja9a.js";import{S as a}from"./accordion.stories-D0r8JteT.js";import{S as s,G as r,D as o,a as t,C as x,F as j}from"./doc-components-D4qBp5nH.js";import"./iframe-D2adQVxF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFjqNmvz.js";import"./index-CNzI4M2U.js";import"./index-C7zuli91.js";import"./accordion-Bwt-SrL7.js";import"./index-B1Tud__i.js";import"./index-DrHllg8M.js";import"./index-CumDR6qi.js";import"./index-Bbu06GV2.js";import"./index-CEo0ouqn.js";import"./index-Bau_IoDf.js";import"./index-u9g7-6ek.js";import"./index-Jir0-7SB.js";import"./index-CLeoL7dB.js";import"./index-C5Ivn7aF.js";import"./utils-CDN07tui.js";import"./chevron-down-BjETIi2S.js";import"./createLucideIcon-Bwevr7EZ.js";import"./check-BxXoY-m7.js";import"./x-D-uj3tzR.js";import"./triangle-alert-Dyhna1wI.js";function c(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(s,{title:"Component Overview",description:"The Accordion is a vertically stacked set of interactive headings that each reveal a section of content."}),`
`,e.jsx(n.p,{children:"It is primarily used to organize and group content, allowing users to toggle the visibility of sections to reduce visual clutter and focus on specific information."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Accordion (Root Container), 2. AccordionItem (Section Container), 3. AccordionTrigger (Header/Button), 4. Chevron Icon, 5. AccordionContent (Panel)]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accordion (Root)"}),": The wrapper element that manages the state of the items (single or multiple open)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AccordionItem"}),": A single collapsible section containing a header and content. Handles the bottom border styling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AccordionTrigger"}),": The interactive header that toggles the state of the associated item. Contains the section title and the chevron icon."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AccordionContent"}),": The collapsible panel that holds the content. It animates its height when opening/closing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ChevronDownIcon"}),": Visual indicator of state (rotates 180 degrees when open)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:["The Accordion supports functional variants based on the ",e.jsx(n.code,{children:"type"})," prop:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single (Default)"}),": Only one item can be open at a time. Opening another item closes the currently open one.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'type="single"'})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"collapsible"}),": (Optional) Allows the user to close the currently open item."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple"}),": Multiple items can be open simultaneously.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'type="multiple"'})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"![Variant Comparison Placeholder: Side-by-side comparison of Single vs Multiple mode interaction]"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default (Closed)"}),": The content is hidden, chevron points down."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover"}),": The trigger text is underlined to indicate interactivity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus"}),": The trigger receives a focus ring (",e.jsx(n.code,{children:"ring-ring/50"}),") and border change when navigated to via keyboard."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Open (Active)"}),": The content is visible, chevron points up (rotated 180deg)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": Reduced opacity (50%) and pointer events are disabled."]}),`
`]}),`
`,e.jsx(n.p,{children:"![States Grid Placeholder: Grid showing Default, Hover, Focus, Open, and Disabled states]"}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click/Tap"}),": Tapping the ",e.jsx(n.code,{children:"AccordionTrigger"})," toggles the visibility of the ",e.jsx(n.code,{children:"AccordionContent"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hover"}),": Hovering over the trigger applies a text underline style but does not trigger the expansion (unless customized)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The Accordion expands to fill 100% of the width of its container."}),`
`,e.jsxs(n.li,{children:["Content within ",e.jsx(n.code,{children:"AccordionContent"})," should be responsive and adapt to the available width."]}),`
`]}),`
`,e.jsx(n.h3,{id:"animationtransitions",children:"Animation/Transitions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expand"}),": The content expands with ",e.jsx(n.code,{children:"animate-accordion-down"})," (slide down and fade in)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Collapse"}),": The content collapses with ",e.jsx(n.code,{children:"animate-accordion-up"})," (slide up and fade out)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),": The chevron icon rotates 180 degrees with a smooth transition (",e.jsx(n.code,{children:"transition-all"}),")."]}),`
`]}),`
`,e.jsx(s,{title:"Usage Guidelines",description:"Best practices for when and how to use the Accordion component."}),`
`,e.jsxs(r,{children:[e.jsx(o,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FAQs"}),": Grouping questions and answers where users only need to see one answer at a time."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Complex Forms"}),": Breaking down long forms into manageable sections (e.g., shipping address, payment method)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation"}),": Displaying nested menu items in a sidebar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Progressive Disclosure"}),": Hiding secondary details that are not immediately necessary for the user's main task."]}),`
`]})}),e.jsx(t,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for simple lists of items that do not require hiding content."}),`
`,e.jsx(n.li,{children:"Hide content that is critical and must be visible at all times without interaction."}),`
`,e.jsx(n.li,{children:"Use when comparing content across multiple sections simultaneously is the primary user task."}),`
`]})})]}),`
`,e.jsx(x,{title:"Comparison Note",variant:"info",children:e.jsxs(n.p,{children:["If comparing content across multiple sections simultaneously is the primary user task, consider using ",e.jsx(n.code,{children:'type="multiple"'}),", but even then, a side-by-side layout might be better."]})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Moves focus to the next interactive element (the ",e.jsx(n.code,{children:"AccordionTrigger"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Space"})," or ",e.jsx(n.strong,{children:"Enter"}),": Toggles the collapsed/expanded state of the focused item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Down"}),": Moves focus to the next accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Up"}),": Moves focus to the previous accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Home"}),": Moves focus to the first accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"End"}),": Moves focus to the last accordion header."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Roles"}),": The trigger has ",e.jsx(n.code,{children:'role="button"'})," and is wrapped in a heading (e.g., ",e.jsx(n.code,{children:"h3"}),") via ",e.jsx(n.code,{children:"AccordionPrimitive.Header"}),". The content has ",e.jsx(n.code,{children:'role="region"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ARIA States"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'aria-expanded="true/false"'})," on the trigger indicates state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," on the trigger points to the ID of the content region."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-disabled"})," is set if the item is disabled."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"wcag-compliance",children:"WCAG compliance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"2.1 AA"}),": Meets contrast ratios for text and icons (using standard ",e.jsx(n.code,{children:"foreground"})," and ",e.jsx(n.code,{children:"muted-foreground"})," colors)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Visible"}),": Clearly visible focus styles (",e.jsx(n.code,{children:"ring-ring"}),") for keyboard users."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Touch Targets"}),": The trigger padding (",e.jsx(n.code,{children:"py-4"}),") ensures a large enough touch target (at least 44x44px equivalent)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsx(n.p,{children:"![Spacing Diagram Placeholder: Diagram showing padding py-4 on trigger, pb-4 on content, and gap-4 between text and icon]"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Trigger Padding"}),": Vertical ",e.jsx(n.code,{children:"1rem"})," (16px) (",e.jsx(n.code,{children:"py-4"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content Padding"}),": Bottom ",e.jsx(n.code,{children:"1rem"})," (16px) (",e.jsx(n.code,{children:"pb-4"}),"), Top ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Gap"}),": ",e.jsx(n.code,{children:"1rem"})," (16px) (",e.jsx(n.code,{children:"gap-4"}),") between text and chevron."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Border"}),": 1px solid bottom border on ",e.jsx(n.code,{children:"AccordionItem"})," (except last item)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Family"}),": Inherited (Sans-serif)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Size"}),": ",e.jsx(n.code,{children:"text-sm"})," (0.875rem / 14px)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Font Weight"}),": ",e.jsx(n.code,{children:"font-medium"})," (500)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Line Height"}),": ",e.jsx(n.code,{children:"1.25rem"})," (20px)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text Alignment"}),": Left aligned (",e.jsx(n.code,{children:"text-left"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsx(n.p,{children:"![Color Swatches Placeholder: Swatches for Border, Background, Foreground, Muted Foreground, and Ring]"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Background"}),": Transparent (inherits container)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text"}),": ",e.jsx(n.code,{children:"var(--foreground)"})," (oklch(0.15 0.03 280))."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Border"}),": ",e.jsx(n.code,{children:"var(--border)"})," (oklch(0.92 0.01 280))."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus Ring"}),": ",e.jsx(n.code,{children:"var(--ring)"})," (oklch(0.55 0.2 290)) at 50% opacity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),": Current text color (inherits)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Width"}),": 100% of parent container."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Height"}),": Dynamic based on content."]}),`
`]}),`
`,e.jsx(s,{title:"Content Guidelines",description:"Writing effective content for accordions."}),`
`,e.jsx(n.h3,{id:"writing-style",children:"Writing style"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Headings"}),': Be concise and descriptive. Use sentence case (e.g., "Is it accessible?"). Avoid long questions that wrap to multiple lines if possible.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content"}),": Keep answers brief and direct. If the answer is very long, consider linking to a full page."]}),`
`]}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples"}),`
`,e.jsxs(r,{children:[e.jsx(o,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Use for a "Frequently Asked Questions" section.'}),`
`,e.jsx(n.li,{children:"Use to hide advanced settings options."}),`
`]})}),e.jsx(t,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for primary navigation where all options should be visible."}),`
`,e.jsx(n.li,{children:"Nest accordions inside accordions (can cause cognitive load issues)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-accordion"})," for robust accessibility and state management."]}),`
`,e.jsxs(n.li,{children:["Requires ",e.jsx(n.code,{children:"tailwindcss"})," and ",e.jsx(n.code,{children:"tw-animate-css"})," for styling and animations."]}),`
`,e.jsxs(n.li,{children:["Dependencies: ",e.jsx(n.code,{children:"lucide-react"})," for the chevron icon."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/accordion.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/accordion.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(j,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Collapsible"}),": For simpler, single-element expand/collapse interactions without the grouped list behavior."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sheet"}),": For larger amounts of content that slide in from the side."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ScrollArea"}),": For displaying long content within a fixed height container."]}),`
`]})}),`
`,e.jsx(n.h2,{id:"design-tokens-referenced",children:"Design Tokens Referenced"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color tokens"}),": ",e.jsx(n.code,{children:"--border"}),", ",e.jsx(n.code,{children:"--ring"}),", ",e.jsx(n.code,{children:"--foreground"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spacing tokens"}),": ",e.jsx(n.code,{children:"p-4"})," (1rem)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typography tokens"}),": ",e.jsx(n.code,{children:"text-sm"}),", ",e.jsx(n.code,{children:"font-medium"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Animation"}),": ",e.jsx(n.code,{children:"animate-accordion-up"}),", ",e.jsx(n.code,{children:"animate-accordion-down"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(n.p,{children:`| Version | Date       | Changes         |
| :------ | :--------- | :-------------- |
| 1.0.0   | 2023-10-27 | Initial release |`}),`
`,e.jsx(n.h2,{id:"additional-resources",children:"Additional Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.radix-ui.com/primitives/docs/components/accordion",rel:"nofollow",children:"Radix UI Accordion Documentation"})}),`
`]})]})}function z(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{z as default};
