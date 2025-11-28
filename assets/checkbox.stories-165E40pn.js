import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./checkbox-DtF5n87c.js";import{L as o}from"./label-LPgFh6Jl.js";const c={title:"UI/Checkbox",component:a,argTypes:{disabled:{control:"boolean"}}},r={render:t=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms",...t}),e.jsx(o,{htmlFor:"terms",children:"Accept terms and conditions"})]})},s={render:t=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms2",disabled:!0,...t}),e.jsx(o,{htmlFor:"terms2",children:"Accept terms and conditions"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled {...args} />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </div>
}`,...s.parameters?.docs?.source}}};const n=["Default","Disabled"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:s,__namedExportsOrder:n,default:c},Symbol.toStringTag,{value:"Module"}));export{l as S};
