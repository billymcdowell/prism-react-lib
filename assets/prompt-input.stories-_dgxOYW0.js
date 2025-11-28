import{j as t}from"./jsx-runtime-u17CrQMm.js";import{P as s,a as p,b as c,c as m}from"./prompt-input-BTbTQR4g.js";import{B as i}from"./button-VZmRfN8J.js";import{P as d}from"./paperclip-D0B_VvqW.js";import{A as l}from"./arrow-up-BXaGIPd4.js";import"./textarea-WFWn170-.js";import"./utils-CDN07tui.js";import"./tooltip-DisIHmo6.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXm186LG.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-CO3hOlhW.js";import"./index-CffJVRRg.js";import"./index-B0n9j3DP.js";import"./index-ApAwEG_-.js";import"./index-ZaosRtZH.js";import"./index-B1okM1AP.js";import"./index-8ZzCNrKt.js";import"./index-DBv-CLuo.js";import"./index-CaKWyVBK.js";import"./index-C8ABDzS5.js";import"./index-BuX_BX6j.js";import"./index-Dp2eQppM.js";import"./index-BNY7203a.js";import"./index-B_jtOnfb.js";import"./createLucideIcon-Bs7DeJGf.js";const C={title:"AI/PromptInput",component:s,tags:["autodocs"],args:{}},e={render:r=>t.jsx(s,{...r,className:"w-[400px]",children:t.jsx(p,{placeholder:"Ask something..."})})},o={render:r=>t.jsxs(s,{...r,className:"w-[400px]",children:[t.jsx(p,{placeholder:"Ask something..."}),t.jsxs(c,{className:"justify-between mt-2",children:[t.jsx(m,{tooltip:"Attach file",children:t.jsx(i,{variant:"ghost",size:"icon",children:t.jsx(d,{className:"w-4 h-4"})})}),t.jsx(m,{tooltip:"Send",children:t.jsx(i,{size:"icon",children:t.jsx(l,{className:"w-4 h-4"})})})]})]})},a={render:r=>t.jsxs(s,{...r,className:"w-[400px]",isLoading:!0,children:[t.jsx(p,{placeholder:"Processing..."}),t.jsx(c,{className:"justify-end mt-2",children:t.jsx(i,{size:"icon",disabled:!0,children:t.jsx(l,{className:"w-4 h-4"})})})]})},n={render:r=>t.jsx(s,{...r,className:"w-[400px]",disabled:!0,children:t.jsx(p,{placeholder:"Input disabled"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
