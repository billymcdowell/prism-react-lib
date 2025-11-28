import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D3yAUaLZ.js";import{M as o,C as l}from"./blocks-CjZJvs0H.js";import{S as c}from"./select.stories-C2yoR2l4.js";import{S as i,G as d,D as h,a,F as x}from"./doc-components-CDTlatZN.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-B6Ga2ycG.js";import"./index-BdQq_4o_.js";import"./index-DXm186LG.js";import"./index-CO3hOlhW.js";import"./index-D2kPqp5j.js";import"./index-CffJVRRg.js";import"./index-DH8AKpU5.js";import"./index-B0n9j3DP.js";import"./index-ApAwEG_-.js";import"./index-YKc7VdWC.js";import"./index-ZaosRtZH.js";import"./index-B1okM1AP.js";import"./index-8ZzCNrKt.js";import"./index-DBv-CLuo.js";import"./index-CaKWyVBK.js";import"./index-BuX_BX6j.js";import"./index-CXbNDKGH.js";import"./index-Dp2eQppM.js";import"./utils-CDN07tui.js";import"./chevron-down--z3JOiU-.js";import"./createLucideIcon-Bs7DeJGf.js";import"./check-wSyrKndQ.js";import"./chevron-up-tG4uIoBK.js";import"./x-DmhvL5In.js";import"./triangle-alert-DbwTKsh-.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(i,{title:"Component Overview",description:"Displays a list of options for the user to pick from—triggered by a button."}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:"![Anatomy Diagram Placeholder: Annotated diagram showing: 1. Trigger, 2. Value, 3. Content, 4. Item, 5. Group, 6. Label]"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select (Root)"}),": State manager."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SelectTrigger"}),": The button displaying the value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SelectValue"}),": The selected text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SelectContent"}),": The dropdown list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SelectItem"}),": Selectable option."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SelectGroup"}),": Grouping wrapper."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SelectLabel"}),": Group header."]}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"interaction-patterns",children:"Interaction patterns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Click"}),": Opens the list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type"}),": Typing filters/highlights items."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow Keys"}),": Navigate items."]}),`
`]}),`
`,e.jsx(i,{title:"Usage Guidelines",description:"Best practices for when and how to use the Select component."}),`
`,e.jsxs(d,{children:[e.jsx(h,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Many Options"}),": Use when there are more than 5 options (space saving)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Forms"}),": Standard input for forms."]}),`
`]})}),e.jsx(a,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Few Options"}),": Use for < 3 options (use Radio Group or Toggle Group)."]}),`
`]})})]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.h3,{id:"screen-reader-support",children:"Screen reader support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Role"}),": ",e.jsx(n.code,{children:"combobox"})," or ",e.jsx(n.code,{children:"listbox"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Value"}),": Announces selected value."]}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Built using ",e.jsx(n.code,{children:"@radix-ui/react-select"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"code-reference",children:"Code reference"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component"}),": ",e.jsx(n.code,{children:"src/components/ui/select.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook"}),": ",e.jsx(n.code,{children:"src/stories/select.stories.tsx"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Version"}),": 1.0.0"]}),`
`]}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related Components"}),`
`,e.jsx(x,{children:e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Command"}),": For searchable lists (Select is usually not searchable by text input)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DropdownMenu"}),": For actions, not value selection."]}),`
`]})})]})}function z(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{z as default};
