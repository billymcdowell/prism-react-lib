import{j as t}from"./jsx-runtime-u17CrQMm.js";import{P as s,a as p,b as c,c as m}from"./prompt-input-DkaG3f2T.js";import{B as i}from"./button-CUbMXTi2.js";import{P as d}from"./paperclip-DW-TeN5d.js";import{A as l}from"./arrow-up-CuL6kyy8.js";import"./textarea-WFWn170-.js";import"./utils-CDN07tui.js";import"./tooltip-kB0ZB9Un.js";import"./iframe-CzIjHCkM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKBRRWT1.js";import"./index-Dv-B9L0L.js";import"./index-BSDLliFe.js";import"./index-D_QQW2kf.js";import"./index-CZaYSkPR.js";import"./index-DiHu5XcI.js";import"./index-HviMIcE2.js";import"./index-C9uoKnKI.js";import"./index-B9ISfK40.js";import"./index-DD4fDXxF.js";import"./index-D31tkxfm.js";import"./index-HxwPMSK8.js";import"./index-MUIKTGbn.js";import"./index-BggxqMqP.js";import"./index-RpykjlcG.js";import"./index-Bm9DY6Hk.js";import"./index-B_jtOnfb.js";import"./createLucideIcon-D2Wp4eEU.js";const C={title:"AI/PromptInput",component:s,tags:["autodocs"],args:{}},e={render:r=>t.jsx(s,{...r,className:"w-[400px]",children:t.jsx(p,{placeholder:"Ask something..."})})},o={render:r=>t.jsxs(s,{...r,className:"w-[400px]",children:[t.jsx(p,{placeholder:"Ask something..."}),t.jsxs(c,{className:"justify-between mt-2",children:[t.jsx(m,{tooltip:"Attach file",children:t.jsx(i,{variant:"ghost",size:"icon",children:t.jsx(d,{className:"w-4 h-4"})})}),t.jsx(m,{tooltip:"Send",children:t.jsx(i,{size:"icon",children:t.jsx(l,{className:"w-4 h-4"})})})]})]})},a={render:r=>t.jsxs(s,{...r,className:"w-[400px]",isLoading:!0,children:[t.jsx(p,{placeholder:"Processing..."}),t.jsx(c,{className:"justify-end mt-2",children:t.jsx(i,{size:"icon",disabled:!0,children:t.jsx(l,{className:"w-4 h-4"})})})]})},n={render:r=>t.jsx(s,{...r,className:"w-[400px]",disabled:!0,children:t.jsx(p,{placeholder:"Input disabled"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <PromptInput {...args} className="w-[400px]">
        <PromptInputTextarea placeholder="Ask something..." />
    </PromptInput>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <PromptInput {...args} className="w-[400px]">
        <PromptInputTextarea placeholder="Ask something..." />
        <PromptInputActions className="justify-between mt-2">
            <PromptInputAction tooltip="Attach file">
                <Button variant="ghost" size="icon">
                    <Paperclip className="w-4 h-4" />
                </Button>
            </PromptInputAction>
             <PromptInputAction tooltip="Send">
                <Button size="icon">
                    <ArrowUp className="w-4 h-4" />
                </Button>
            </PromptInputAction>
        </PromptInputActions>
    </PromptInput>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <PromptInput {...args} className="w-[400px]" isLoading>
        <PromptInputTextarea placeholder="Processing..." />
         <PromptInputActions className="justify-end mt-2">
             <Button size="icon" disabled>
                <ArrowUp className="w-4 h-4" />
            </Button>
        </PromptInputActions>
    </PromptInput>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <PromptInput {...args} className="w-[400px]" disabled>
        <PromptInputTextarea placeholder="Input disabled" />
    </PromptInput>
}`,...n.parameters?.docs?.source}}};const F=["Default","WithActions","Loading","Disabled"];export{e as Default,n as Disabled,a as Loading,o as WithActions,F as __namedExportsOrder,C as default};
