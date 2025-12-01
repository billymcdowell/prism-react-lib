import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Ad8qJPJ4.js";import{M as t,C as c}from"./blocks-DTlw6ceM.js";import{S as d}from"./button.stories-z1LMHkvS.js";import{S as i,G as l,D as h,a,F as x}from"./doc-components-KjZohVj8.js";import"./iframe-DCkxxG1M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtPqNasm.js";import"./index-WKj01Sjb.js";import"./index-BEdv_tt5.js";import"./button-24IbpKd0.js";import"./index-CC6UOoUx.js";import"./index-1RQFIDbb.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./check-CKaAtdKA.js";import"./createLucideIcon-EM5MBisu.js";import"./x-PGRCWagm.js";import"./triangle-alert-5Zscxv3S.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(i,{title:"Component Overview",description:"Displays a button or a component that looks like a button."}),`
`,n.jsx(e.p,{children:"Buttons allow users to take actions, and make choices, with a single tap. They are one of the most fundamental UI elements."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Container, 2. Label, 3. Icon (Optional)]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button (Root)"}),": The click target with background, border, and shadow."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label"}),": The text describing the action."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon (Optional)"}),": A leading or trailing icon to clarify the action."]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"The Button component provides several variants for different contexts:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": Primary action. Solid background color (",n.jsx(e.code,{children:"bg-primary"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Destructive"}),": Dangerous action (e.g., Delete). Red background (",n.jsx(e.code,{children:"bg-destructive"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Outline"}),": Secondary action with a border. Transparent background (",n.jsx(e.code,{children:"bg-background"}),", ",n.jsx(e.code,{children:"border"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Secondary"}),": Muted background (",n.jsx(e.code,{children:"bg-secondary"}),"). Used for secondary actions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ghost"}),": Transparent background, used in toolbars or for subtle actions (",n.jsx(e.code,{children:"hover:bg-accent"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Link"}),": Looks like a link but behaves like a button (",n.jsx(e.code,{children:"text-primary"}),", ",n.jsx(e.code,{children:"underline"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": Standard size (",n.jsx(e.code,{children:"h-10"}),", ",n.jsx(e.code,{children:"px-4"}),", ",n.jsx(e.code,{children:"py-2"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"sm"}),": Small (",n.jsx(e.code,{children:"h-9"}),", ",n.jsx(e.code,{children:"rounded-md"}),", ",n.jsx(e.code,{children:"px-3"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"lg"}),": Large (",n.jsx(e.code,{children:"h-11"}),", ",n.jsx(e.code,{children:"rounded-md"}),", ",n.jsx(e.code,{children:"px-8"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"icon"}),": Square aspect ratio for icon-only buttons (",n.jsx(e.code,{children:"h-10"}),", ",n.jsx(e.code,{children:"w-10"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": Normal state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hover"}),": Visual feedback when the cursor is over the button (opacity change or background darken)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus"}),": Focus ring appears for keyboard navigation (",n.jsx(e.code,{children:"ring-2"}),", ",n.jsx(e.code,{children:"ring-offset-2"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Active/Pressed"}),": Visual feedback when clicked."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Disabled"}),": Reduced opacity (",n.jsx(e.code,{children:"opacity-50"}),"), pointer events disabled."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Click"}),": Triggers the ",n.jsx(e.code,{children:"onClick"})," handler."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard"}),": ",n.jsx(e.code,{children:"Enter"})," or ",n.jsx(e.code,{children:"Space"})," triggers the action when focused."]}),`
`]}),`
`,n.jsx(e.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Buttons generally maintain their size but can be set to ",n.jsx(e.code,{children:"w-full"})," to span the container width on mobile."]}),`
`]}),`
`,n.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Button component."}),`
`,n.jsxs(l,{children:[n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Action Verbs"}),': Use clear, action-oriented text (e.g., "Save", "Delete").']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hierarchy"}),": Use variants to establish visual hierarchy (primary vs. secondary actions)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"One Primary"}),": Generally, use only one primary button per view or section."]}),`
`]})}),n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use too many primary buttons on one page (dilutes importance)."}),`
`,n.jsx(e.li,{children:"Use buttons for navigation (use Link or standard anchor tags, though Button can style a Link)."}),`
`,n.jsx(e.li,{children:'Use generic labels like "Click Here".'}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tab"}),": Moves focus to the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Enter/Space"}),": Activates the button."]}),`
`]}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": ",n.jsx(e.code,{children:"button"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label"}),": If using an icon-only button, ensure an ",n.jsx(e.code,{children:"aria-label"})," or ",n.jsx(e.code,{children:"sr-only"})," text is provided."]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Font"}),": ",n.jsx(e.code,{children:"text-sm"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Weight"}),": ",n.jsx(e.code,{children:"font-medium"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Color"}),": Varies by variant (",n.jsx(e.code,{children:"text-primary-foreground"}),", ",n.jsx(e.code,{children:"text-secondary-foreground"}),", etc.)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Padding"}),": ",n.jsx(e.code,{children:"px-4"}),", ",n.jsx(e.code,{children:"py-2"})," (Default)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Radius"}),": ",n.jsx(e.code,{children:"rounded-md"})," (Standard radius token)."]}),`
`]}),`
`,n.jsx(i,{title:"Content Guidelines",description:"Writing effective content for buttons."}),`
`,n.jsx(e.h3,{id:"writing-style",children:"Writing style"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Start with a verb"}),': "Create Account", "View Details".']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Be specific"}),': "Delete Project" is better than "Delete".']}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using standard ",n.jsx(e.code,{children:"<button>"})," element or ",n.jsx(e.code,{children:"Slot"})," for polymorphism (rendering as ",n.jsx(e.code,{children:"a"})," tag)."]}),`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.code,{children:"class-variance-authority"})," (cva)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/button.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/button.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(x,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ButtonGroup"}),": For grouping related buttons."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge"}),": For status indicators (not interactive)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DropdownMenu"}),": For a button that triggers a menu."]}),`
`]})})]})}function M(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{M as default};
