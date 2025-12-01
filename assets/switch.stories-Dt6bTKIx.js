import{j as a}from"./jsx-runtime-u17CrQMm.js";import{S as s}from"./switch-BGZaEa9H.js";import{L as t}from"./label-BBsqXW3q.js";const n={title:"UI/Switch",component:s,argTypes:{disabled:{control:"boolean"}}},e={render:o=>a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx(s,{id:"airplane-mode",...o}),a.jsx(t,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},r={args:{disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","Disabled"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:r,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{m as S};
