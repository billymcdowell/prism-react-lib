import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r,B as g}from"./toggle-C2G9uWug.js";const c={title:"UI/Toggle",component:r,argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]},disabled:{control:"boolean"}}},s={render:a=>e.jsx(r,{"aria-label":"Toggle bold",...a,children:e.jsx(g,{className:"h-4 w-4"})})},o={render:a=>e.jsx(r,{variant:"outline","aria-label":"Toggle bold",...a,children:e.jsx(g,{className:"h-4 w-4"})})},l={render:a=>e.jsxs(r,{"aria-label":"Toggle italic",...a,children:[e.jsx(g,{className:"mr-2 h-4 w-4"}),"Bold"]})},t={render:a=>e.jsx(r,{size:"sm","aria-label":"Toggle bold",...a,children:e.jsx(g,{className:"h-4 w-4"})})},n={render:a=>e.jsx(r,{size:"lg","aria-label":"Toggle bold",...a,children:e.jsx(g,{className:"h-4 w-4"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle variant="outline" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle aria-label="Toggle italic" {...args}>
      <Bold className="mr-2 h-4 w-4" />
      Bold
    </Toggle>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle size="sm" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle size="lg" aria-label="Toggle bold" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
}`,...n.parameters?.docs?.source}}};const d=["Default","Outline","WithText","Small","Large"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Large:n,Outline:o,Small:t,WithText:l,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{p as T};
