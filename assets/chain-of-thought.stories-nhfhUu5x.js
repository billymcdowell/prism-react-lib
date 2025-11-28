import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as e,b as i,c as r,d as t}from"./chain-of-thought-DuLyMOCY.js";import{B as s}from"./brain-Dohbam1C.js";import{S as g}from"./search-B2cHDele.js";import"./collapsible-DH1xmazt.js";import"./index-wbrQ4X3w.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXm186LG.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-CO3hOlhW.js";import"./index-CffJVRRg.js";import"./index-BuX_BX6j.js";import"./index-B1okM1AP.js";import"./index-C8ABDzS5.js";import"./index-ZaosRtZH.js";import"./utils-CDN07tui.js";import"./chevron-down--z3JOiU-.js";import"./createLucideIcon-Bs7DeJGf.js";import"./circle-B30H3Jrb.js";const b={title:"AI/ChainOfThought",component:a,tags:["autodocs"]},h={render:o=>n.jsxs(a,{...o,children:[n.jsxs(e,{defaultOpen:!0,children:[n.jsx(i,{leftIcon:n.jsx(s,{className:"w-4 h-4"}),children:"Analyzing Request"}),n.jsxs(r,{children:[n.jsx(t,{children:"Parsing user input..."}),n.jsx(t,{children:"Identifying key constraints..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{leftIcon:n.jsx(g,{className:"w-4 h-4"}),children:"Searching Knowledge Base"}),n.jsxs(r,{children:[n.jsx(t,{children:"Querying database..."}),n.jsx(t,{children:"Filtering results..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{children:"Synthesizing Answer"}),n.jsx(r,{children:n.jsx(t,{children:"Drafting response..."})})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ChainOfThought {...args}>
      <ChainOfThoughtStep defaultOpen>
        <ChainOfThoughtTrigger leftIcon={<Brain className="w-4 h-4" />}>
          Analyzing Request
        </ChainOfThoughtTrigger>
        <ChainOfThoughtContent>
            <ChainOfThoughtItem>Parsing user input...</ChainOfThoughtItem>
            <ChainOfThoughtItem>Identifying key constraints...</ChainOfThoughtItem>
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>
      
      <ChainOfThoughtStep>
         <ChainOfThoughtTrigger leftIcon={<Search className="w-4 h-4" />}>
          Searching Knowledge Base
        </ChainOfThoughtTrigger>
        <ChainOfThoughtContent>
            <ChainOfThoughtItem>Querying database...</ChainOfThoughtItem>
            <ChainOfThoughtItem>Filtering results...</ChainOfThoughtItem>
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>

      <ChainOfThoughtStep>
         <ChainOfThoughtTrigger>
          Synthesizing Answer
        </ChainOfThoughtTrigger>
        <ChainOfThoughtContent>
            <ChainOfThoughtItem>Drafting response...</ChainOfThoughtItem>
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>
    </ChainOfThought>
}`,...h.parameters?.docs?.source}}};const R=["Default"];export{h as Default,R as __namedExportsOrder,b as default};
