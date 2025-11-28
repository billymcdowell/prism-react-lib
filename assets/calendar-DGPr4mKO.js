import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DLpO0ydC.js";import{M as d,C as l}from"./blocks-DeF1RSIf.js";import{S as o}from"./calendar.stories-Dylvsm-R.js";import{S as i,G as c,D as a,a as h,F as x}from"./doc-components-Bd--2quW.js";import"./iframe-BCbsaKOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJA8l-OC.js";import"./index-CSW7CTky.js";import"./index-BxURnYXG.js";import"./calendar-Do_sUS4J.js";import"./utils-CDN07tui.js";import"./button-CA3OaIpr.js";import"./index-CWe3nwjW.js";import"./index-Bw9XwwGv.js";import"./index-B_jtOnfb.js";import"./chevron-left-DFJAUXab.js";import"./createLucideIcon-aPwG8KT1.js";import"./chevron-right-WvpYEWsV.js";import"./chevron-down-C1cORfBf.js";import"./check-X4KXbUbV.js";import"./x-Bbu-DXGd.js";import"./triangle-alert-B64PylZu.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o}),`
`,e.jsx(n.h1,{id:"calendar",children:"Calendar"}),`
`,e.jsx(i,{title:"Component Overview",description:"A date field component that allows users to enter and edit date."}),`
`,e.jsx(n.p,{children:"A calendar component for selecting dates, supporting single date, date ranges, and multiple dates."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Month Navigation, 2. Month Label, 3. Weekdays Header, 4. Days Grid]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Calendar (Root)"}),": The wrapper element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation"}),": Previous/Next buttons to change months."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Month Label"}),": Displays the current month and year."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Weekdays"}),": Row showing day names (Mo, Tu, We, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Days"}),": Grid of interactive day buttons."]}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single Mode"}),": Select a single date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Range Mode"}),": Select a start and end date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple Mode"}),": Select multiple individual dates."]}),`
`]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": Standard day button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Selected"}),": High contrast background (",e.jsx(n.code,{children:"bg-primary"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Today"}),": Highlighted text or background (",e.jsx(n.code,{children:"bg-accent"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Outside"}),": Days belonging to the previous/next month (muted)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disabled"}),": Non-selectable dates (opacity reduced)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Selects a date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation"}),": Arrows navigate between months."]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The calendar is fixed width by default but can be styled to fit containers."}),`
`,e.jsx(n.li,{children:"For mobile, it's often better to use a native date picker or a modal."}),`
`]}),`
`,e.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Calendar component."}),`
`,e.jsxs(c,{children:[e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Input"}),": Use for selecting specific dates (scheduling, birthdays)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Range Picker"}),": Use for date ranges (booking, reports)."]}),`
`]})}),e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for entering known dates far in the past (like birth year) without year selection dropdowns (it's tedious to click back)."}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"keyboard-navigation",children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Keys"}),": Navigate between days."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enter/Space"}),": Select the focused date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PageUp/PageDown"}),": Navigate between months."]}),`
`]}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"grid"})," (Standard ARIA pattern for calendars)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Labels"}),": Days are labeled with their full date."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-specifications",children:"Design Specifications"}),`
`,e.jsx(n.h3,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Days"}),": ",e.jsx(n.code,{children:"text-sm"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Headers"}),": ",e.jsx(n.code,{children:"text-sm"}),", ",e.jsx(n.code,{children:"font-medium"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cell Size"}),": ",e.jsx(n.code,{children:"size-8"})," (2rem) or ",e.jsx(n.code,{children:"size-9"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gap"}),": ",e.jsx(n.code,{children:"gap-1"})," between cells."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"react-day-picker"})," (v8/v9)."]}),`
`,e.jsxs(n.li,{children:["Styled using ",e.jsx(n.code,{children:"buttonVariants"})," for navigation buttons."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/calendar.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/calendar.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Popover"}),": Often used to host the calendar (Date Picker)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input"}),": Used to display the selected date."]}),`
`]})})]})}function I(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{I as default};
