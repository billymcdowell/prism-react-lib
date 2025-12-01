import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as e,b as i,c as r,d as t}from"./chain-of-thought-wN3Q_E9G.js";import{B as s}from"./brain-D0W1YLBf.js";import{S as g}from"./search-Bc-tpAi-.js";import"./collapsible-BIRy3dfn.js";import"./index-Ct21sEjz.js";import"./iframe-Duy2BnNL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7vzY3Ns.js";import"./index-DNDXaxkE.js";import"./index-p2IZywWK.js";import"./index-fiM-0oeH.js";import"./index-DjUR2ipe.js";import"./index-CPCP3Tpo.js";import"./index-BaN3TgAG.js";import"./index-BGulSCFB.js";import"./index-BlJcpxs9.js";import"./utils-CDN07tui.js";import"./chevron-down-DyUmx3Ed.js";import"./createLucideIcon-ZT_-Fol2.js";import"./circle-BNRXoW2d.js";const b={title:"AI/ChainOfThought",component:a,tags:["autodocs"]},h={render:o=>n.jsxs(a,{...o,children:[n.jsxs(e,{defaultOpen:!0,children:[n.jsx(i,{leftIcon:n.jsx(s,{className:"w-4 h-4"}),children:"Analyzing Request"}),n.jsxs(r,{children:[n.jsx(t,{children:"Parsing user input..."}),n.jsx(t,{children:"Identifying key constraints..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{leftIcon:n.jsx(g,{className:"w-4 h-4"}),children:"Searching Knowledge Base"}),n.jsxs(r,{children:[n.jsx(t,{children:"Querying database..."}),n.jsx(t,{children:"Filtering results..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{children:"Synthesizing Answer"}),n.jsx(r,{children:n.jsx(t,{children:"Drafting response..."})})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
