import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./scroll-area-D3ieN5-r.js";import{S as m}from"./separator-D9lYGYnp.js";const n={title:"UI/ScrollArea",component:t},l=Array.from({length:50}).map((s,r,o)=>`v1.2.0-beta.${o.length-r}`),a={render:s=>e.jsx(t,{className:"h-72 w-48 rounded-md border",...s,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"Tags"}),l.map(r=>e.jsxs("div",{children:[e.jsx("div",{className:"text-sm",children:r}),e.jsx(m,{className:"my-2"})]},r))]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map(tag => <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>)}
      </div>
    </ScrollArea>
}`,...a.parameters?.docs?.source}}};const d=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:d,default:n},Symbol.toStringTag,{value:"Module"}));export{g as S};
