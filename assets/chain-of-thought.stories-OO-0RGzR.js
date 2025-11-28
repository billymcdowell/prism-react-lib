import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as e,b as i,B as s,c as r,d as t}from"./chain-of-thought-BBs3wPWP.js";import{S as g}from"./search-CYKFtVqq.js";import"./createLucideIcon-Da8e7NOt.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";import"./collapsible-eDtdQSmO.js";import"./index-Cl8-WlNq.js";import"./index-Bh4cr8XZ.js";import"./index-DtYTIzzJ.js";import"./index-Dkk1Xfhs.js";import"./index-QGY4RfnD.js";import"./index-DUG4PCWj.js";import"./index-ETErxzm6.js";import"./index-DuSBl0US.js";import"./index-bowKCPUO.js";import"./index-D3SCzLKk.js";import"./utils-CDN07tui.js";import"./chevron-down-C4UuOHog.js";import"./circle-B6dEw-qJ.js";const N={title:"AI/ChainOfThought",component:a,tags:["autodocs"]},h={render:o=>n.jsxs(a,{...o,children:[n.jsxs(e,{defaultOpen:!0,children:[n.jsx(i,{leftIcon:n.jsx(s,{className:"w-4 h-4"}),children:"Analyzing Request"}),n.jsxs(r,{children:[n.jsx(t,{children:"Parsing user input..."}),n.jsx(t,{children:"Identifying key constraints..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{leftIcon:n.jsx(g,{className:"w-4 h-4"}),children:"Searching Knowledge Base"}),n.jsxs(r,{children:[n.jsx(t,{children:"Querying database..."}),n.jsx(t,{children:"Filtering results..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{children:"Synthesizing Answer"}),n.jsx(r,{children:n.jsx(t,{children:"Drafting response..."})})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const b=["Default"];export{h as Default,b as __namedExportsOrder,N as default};
