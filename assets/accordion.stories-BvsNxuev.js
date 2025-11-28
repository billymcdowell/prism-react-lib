import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as c,a as n,b as o,c as r}from"./accordion-Cj779EAy.js";const i={title:"UI/Accordion",component:c},t={render:s=>e.jsxs(c,{...s,type:"single",collapsible:!0,className:"w-full",children:[e.jsxs(n,{value:"item-1",children:[e.jsx(o,{children:"Is it accessible?"}),e.jsx(r,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(o,{children:"Is it styled?"}),e.jsx(r,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(n,{value:"item-3",children:[e.jsx(o,{children:"Is it animated?"}),e.jsx(r,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <Accordion {...args} type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...t.parameters?.docs?.source}}};const a=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:a,default:i},Symbol.toStringTag,{value:"Module"}));export{m as S};
