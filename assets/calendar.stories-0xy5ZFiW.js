import{j as s}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./calendar-DvnbmGX5.js";import{a as n}from"./iframe-Duy2BnNL.js";const d={title:"UI/Calendar",component:t},e={render:r=>{const[a,o]=n.useState(new Date);return s.jsx(t,{...r,mode:"single",selected:a,onSelect:o,className:"rounded-md border"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar {...args} mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{p as S};
