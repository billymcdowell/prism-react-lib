import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as p,a as o,b as t,c as i}from"./steps-JAa-CKo0.js";import{c}from"./createLucideIcon-D2Wp4eEU.js";import"./collapsible-Ch7lAm8k.js";import"./index-CpFS1TDb.js";import"./iframe-CzIjHCkM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKBRRWT1.js";import"./index-Dv-B9L0L.js";import"./index-BSDLliFe.js";import"./index-D_QQW2kf.js";import"./index-CZaYSkPR.js";import"./index-BggxqMqP.js";import"./index-B9ISfK40.js";import"./index-MUIKTGbn.js";import"./index-C9uoKnKI.js";import"./utils-CDN07tui.js";import"./chevron-down-oUnWdxpl.js";const m=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],d=c("calculator",m),_={title:"AI/Steps",component:p,tags:["autodocs"]},r={render:s=>e.jsxs(p,{...s,children:[e.jsx(o,{children:e.jsx(t,{children:"Thinking Process"})}),e.jsxs(i,{children:[e.jsx(t,{children:"Analyzing input..."}),e.jsx(t,{children:"Searching knowledge base..."}),e.jsx(t,{children:"Formulating response..."})]})]}),args:{defaultOpen:!0}},n={render:s=>e.jsxs(p,{...s,children:[e.jsx(o,{leftIcon:e.jsx(d,{className:"w-4 h-4"}),children:e.jsx(t,{children:"Calculations"})}),e.jsxs(i,{children:[e.jsx(t,{children:"2 + 2 = 4"}),e.jsx(t,{children:"4 * 4 = 16"})]})]}),args:{defaultOpen:!0}},a={render:s=>e.jsxs(p,{...s,children:[e.jsx(o,{children:e.jsx(t,{children:"Hidden Steps"})}),e.jsx(i,{children:e.jsx(t,{children:"You found me!"})})]}),args:{defaultOpen:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Steps {...args}>
      <StepsTrigger>
        <StepsItem>Thinking Process</StepsItem>
      </StepsTrigger>
      <StepsContent>
        <StepsItem>Analyzing input...</StepsItem>
        <StepsItem>Searching knowledge base...</StepsItem>
        <StepsItem>Formulating response...</StepsItem>
      </StepsContent>
    </Steps>,
  args: {
    defaultOpen: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Steps {...args}>
      <StepsTrigger leftIcon={<Calculator className="w-4 h-4" />}>
        <StepsItem>Calculations</StepsItem>
      </StepsTrigger>
      <StepsContent>
        <StepsItem>2 + 2 = 4</StepsItem>
        <StepsItem>4 * 4 = 16</StepsItem>
      </StepsContent>
    </Steps>,
  args: {
    defaultOpen: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Steps {...args}>
      <StepsTrigger>
        <StepsItem>Hidden Steps</StepsItem>
      </StepsTrigger>
      <StepsContent>
        <StepsItem>You found me!</StepsItem>
      </StepsContent>
    </Steps>,
  args: {
    defaultOpen: false
  }
}`,...a.parameters?.docs?.source}}};const z=["Default","WithIcon","ClosedByDefault"];export{a as ClosedByDefault,r as Default,n as WithIcon,z as __namedExportsOrder,_ as default};
