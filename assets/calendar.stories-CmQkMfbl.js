import{j as s}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./calendar-BfeQsWlN.js";import{R as n}from"./iframe-CKhhgl9q.js";import"./utils-CDN07tui.js";import"./button-h8Xtxk8g.js";import"./index-kfhzG9hJ.js";import"./index-CBcad8_V.js";import"./index-B_jtOnfb.js";import"./chevron-left-DPCfsLx_.js";import"./createLucideIcon-C7LiED1z.js";import"./chevron-right-CwKzs4HW.js";import"./chevron-down-B9GUjQ_D.js";import"./preload-helper-PPVm8Dsz.js";const R={title:"UI/Calendar",component:t,tags:["autodocs"]},e={render:r=>{const[a,o]=n.useState(new Date);return s.jsx(t,{...r,mode:"single",selected:a,onSelect:o,className:"rounded-md border"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar {...args} mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...e.parameters?.docs?.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,R as default};
