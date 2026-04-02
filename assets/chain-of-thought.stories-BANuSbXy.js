import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as e,b as i,c as r,d as t}from"./chain-of-thought-BLnPRdDu.js";import{B as s}from"./brain-0hswp8GN.js";import{S as g}from"./search-DqSledJA.js";import"./collapsible-D-eR6PfO.js";import"./index-CF1YpnGP.js";import"./iframe-CUYRbRBK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-V9QEtJvU.js";import"./index-DTsQcHOp.js";import"./index-jfXM7GBZ.js";import"./index-DhaaUe0c.js";import"./index-DRTMPWoK.js";import"./index-ByQbsh2J.js";import"./index-Cq1PSqlX.js";import"./index-qvpiirN5.js";import"./index-X-6BvtxF.js";import"./utils-CDN07tui.js";import"./chevron-down-txKaPaDH.js";import"./createLucideIcon-PuqRuo2p.js";import"./circle-DMRaX94i.js";const b={title:"AI/ChainOfThought",component:a,tags:["autodocs"]},h={render:o=>n.jsxs(a,{...o,children:[n.jsxs(e,{defaultOpen:!0,children:[n.jsx(i,{leftIcon:n.jsx(s,{className:"w-4 h-4"}),children:"Analyzing Request"}),n.jsxs(r,{children:[n.jsx(t,{children:"Parsing user input..."}),n.jsx(t,{children:"Identifying key constraints..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{leftIcon:n.jsx(g,{className:"w-4 h-4"}),children:"Searching Knowledge Base"}),n.jsxs(r,{children:[n.jsx(t,{children:"Querying database..."}),n.jsx(t,{children:"Filtering results..."})]})]}),n.jsxs(e,{children:[n.jsx(i,{children:"Synthesizing Answer"}),n.jsx(r,{children:n.jsx(t,{children:"Drafting response..."})})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
