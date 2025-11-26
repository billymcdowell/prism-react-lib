import{j as s}from"./jsx-runtime-u17CrQMm.js";import{T as o}from"./textarea-WFWn170-.js";import{L as l}from"./label-6sp4s1YW.js";import"./utils-CDN07tui.js";import"./iframe-ByXrCVSE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7kr8Nhj.js";import"./index-CB3_CspQ.js";import"./index-CBWl2S-Y.js";import"./index-CSosH7wG.js";const x={title:"UI/Textarea",component:o,tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"}}},e={args:{placeholder:"Type your message here."}},r={render:t=>s.jsxs("div",{className:"grid w-full gap-1.5",children:[s.jsx(l,{htmlFor:"message",children:"Your message"}),s.jsx(o,{placeholder:"Type your message here.",id:"message",...t})]})},a={args:{disabled:!0,placeholder:"Disabled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" {...args} />
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","WithLabel","Disabled"];export{e as Default,a as Disabled,r as WithLabel,y as __namedExportsOrder,x as default};
