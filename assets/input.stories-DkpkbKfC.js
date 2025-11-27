import{I as o}from"./input-Bw95PIWX.js";const t={title:"UI/Input",component:o,argTypes:{type:{control:"text"},disabled:{control:"boolean"},placeholder:{control:"text"}}},e={args:{placeholder:"Email",type:"email"}},r={args:{placeholder:"Disabled",disabled:!0}},a={args:{type:"file"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Email',
    type: 'email'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'file'
  }
}`,...a.parameters?.docs?.source}}};const s=["Default","Disabled","File"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:r,File:a,__namedExportsOrder:s,default:t},Symbol.toStringTag,{value:"Module"}));export{c as S};
