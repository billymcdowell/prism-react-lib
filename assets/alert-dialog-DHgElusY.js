import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Bup9wcVw.js";import{M as o,C as l}from"./blocks-H_I3Ja9a.js";import{S as c}from"./alert-dialog.stories-BqbvaXpa.js";import{S as s,G as d,D as a,a as h,F as x}from"./doc-components-D4qBp5nH.js";import"./iframe-D2adQVxF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFjqNmvz.js";import"./index-CNzI4M2U.js";import"./index-C7zuli91.js";import"./index-B1Tud__i.js";import"./index-CumDR6qi.js";import"./index-dQplrDM4.js";import"./index-Bbu06GV2.js";import"./index-CLeoL7dB.js";import"./index-Bau_IoDf.js";import"./index-CEo0ouqn.js";import"./index-DBeuZUkV.js";import"./index-DGvVCBRP.js";import"./index-DNzyyUUe.js";import"./index-B_dwc0v8.js";import"./index-Jir0-7SB.js";import"./utils-CDN07tui.js";import"./button-Du1quxP-.js";import"./index-IVvN-40v.js";import"./index-B_jtOnfb.js";import"./check-BxXoY-m7.js";import"./createLucideIcon-Bwevr7EZ.js";import"./x-D-uj3tzR.js";import"./triangle-alert-Dyhna1wI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"alert-dialog",children:"Alert Dialog"}),`
`,n.jsx(s,{title:"Component Overview",description:"A modal dialog that interrupts the user with important content and expects a response."}),`
`,n.jsx(e.p,{children:"It is used to alert the user to a situation that requires acknowledgement, or to ask the user to confirm a specific action, especially one that is destructive or irreversible."}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Overlay, 2. Content, 3. Header (Title/Description), 4. Footer (Cancel/Action)]"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialog (Root)"}),": The wrapper element that manages the open state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogTrigger"}),": The element that opens the dialog."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogContent"}),": The component that contains the dialog content and overlay."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogHeader"}),": Header section containing title and description."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogTitle"}),": The title of the dialog."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogDescription"}),": The description or warning text."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogFooter"}),": Footer section containing action buttons."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogCancel"}),": The button to cancel the action and close the dialog."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertDialogAction"}),": The button to confirm the action."]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"The Alert Dialog is typically a single variant component, but its content and actions can be customized."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Default"}),": Standard confirmation dialog with Cancel and Continue options."]}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Closed"}),": Hidden from view."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Open"}),": Overlay covers the screen, dialog is centered."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus"}),": Focus is trapped within the dialog."]}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Click/Tap"}),": Clicking the trigger opens the dialog. Clicking action or cancel buttons closes it."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Overlay Click"}),": Clicking the overlay generally does not close an Alert Dialog (unlike a standard Dialog) to force a choice, but this can be configured."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Escape Key"}),": Pressing Escape closes the dialog."]}),`
`]}),`
`,n.jsx(e.h3,{id:"animationtransitions",children:"Animation/Transitions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Open"}),": Fade in overlay, zoom/fade in content."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Close"}),": Fade out overlay, zoom/fade out content."]}),`
`]}),`
`,n.jsx(s,{title:"Usage Guidelines",description:"Best practices for when and how to use the Alert Dialog component."}),`
`,n.jsxs(d,{children:[n.jsx(a,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Destructive Actions"}),": Use for confirming deletions or irreversible changes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Important Warnings"}),": Use when you need to interrupt the user's flow for a critical decision."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Short Content"}),": Keep titles and descriptions concise."]}),`
`]})}),n.jsx(h,{children:n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use for routine information or non-critical confirmations."}),`
`,n.jsx(e.li,{children:"Use for complex forms or data entry (use a standard Dialog instead)."}),`
`,n.jsx(e.li,{children:"Overuse, as it interrupts the user experience."}),`
`]})})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tab"}),": Cycles focus through interactive elements within the dialog."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Escape"}),": Closes the dialog."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Enter"}),": Triggers the focused action."]}),`
`]}),`
`,n.jsx(e.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Role"}),": ",n.jsx(e.code,{children:"alertdialog"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA"}),": ",n.jsx(e.code,{children:"aria-labelledby"})," and ",n.jsx(e.code,{children:"aria-describedby"})," are automatically handled to link the title and description to the dialog."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus Management"}),": Focus is automatically trapped within the dialog when open and returned to the trigger when closed."]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Title"}),": ",n.jsx(e.code,{children:"text-lg"}),", ",n.jsx(e.code,{children:"font-semibold"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description"}),": ",n.jsx(e.code,{children:"text-sm"}),", ",n.jsx(e.code,{children:"text-muted-foreground"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Padding"}),": Standard padding tokens (e.g., ",n.jsx(e.code,{children:"p-6"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Gap"}),": ",n.jsx(e.code,{children:"gap-4"})," between elements."]}),`
`]}),`
`,n.jsx(s,{title:"Content Guidelines",description:"Writing effective content for alert dialogs."}),`
`,n.jsx(e.h3,{id:"writing-style",children:"Writing style"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Title"}),': Ask a clear question or state the action (e.g., "Delete Account?").']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Description"}),': Explain the consequences clearly (e.g., "This action cannot be undone.").']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Buttons"}),': Use clear action verbs (e.g., "Delete", "Cancel").']}),`
`]}),`
`,n.jsx(e.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,n.jsx(e.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Built using ",n.jsx(e.code,{children:"@radix-ui/react-alert-dialog"}),"."]}),`
`,n.jsxs(e.li,{children:["Requires ",n.jsx(e.code,{children:"tailwindcss"})," and ",n.jsx(e.code,{children:"tw-animate-css"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"code-reference",children:"Code reference"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component"}),": ",n.jsx(e.code,{children:"src/components/ui/alert-dialog.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook"}),": ",n.jsx(e.code,{children:"src/stories/alert-dialog.stories.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,n.jsx(e.h2,{id:"related-components",children:"Related Components"}),`
`,n.jsx(x,{children:n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dialog"}),": For non-alert modal interactions (forms, details)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toast"}),": For non-interruptive notifications."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alert"}),": For inline warnings or information."]}),`
`]})})]})}function W(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{W as default};
