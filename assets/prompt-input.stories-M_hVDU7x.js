import{j as t}from"./jsx-runtime-u17CrQMm.js";import{P as e,a as p,b as c,c as m}from"./prompt-input-DfgB0nBS.js";import{B as i}from"./button-BeD1xW-_.js";import{P as l}from"./paperclip-DqIehtoh.js";import{c as u}from"./createLucideIcon-Da8e7NOt.js";import"./textarea-WFWn170-.js";import"./utils-CDN07tui.js";import"./tooltip-CbBhvFNn.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bh4cr8XZ.js";import"./index-DtYTIzzJ.js";import"./index-Dkk1Xfhs.js";import"./index-QGY4RfnD.js";import"./index-DUG4PCWj.js";import"./index-DVmjngav.js";import"./index-BIznl4Bz.js";import"./index-D3SCzLKk.js";import"./index-DuSBl0US.js";import"./index-DliH2bRp.js";import"./index-uz_gQ9Hb.js";import"./index-BIi4cPx6.js";import"./index-bowKCPUO.js";import"./index-ETErxzm6.js";import"./index-DrTW8AUf.js";import"./index-Oq5s9i1g.js";import"./index-B_jtOnfb.js";const h=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],d=u("arrow-up",h),V={title:"AI/PromptInput",component:e,tags:["autodocs"],args:{}},s={render:r=>t.jsx(e,{...r,className:"w-[400px]",children:t.jsx(p,{placeholder:"Ask something..."})})},o={render:r=>t.jsxs(e,{...r,className:"w-[400px]",children:[t.jsx(p,{placeholder:"Ask something..."}),t.jsxs(c,{className:"justify-between mt-2",children:[t.jsx(m,{tooltip:"Attach file",children:t.jsx(i,{variant:"ghost",size:"icon",children:t.jsx(l,{className:"w-4 h-4"})})}),t.jsx(m,{tooltip:"Send",children:t.jsx(i,{size:"icon",children:t.jsx(d,{className:"w-4 h-4"})})})]})]})},a={render:r=>t.jsxs(e,{...r,className:"w-[400px]",isLoading:!0,children:[t.jsx(p,{placeholder:"Processing..."}),t.jsx(c,{className:"justify-end mt-2",children:t.jsx(i,{size:"icon",disabled:!0,children:t.jsx(d,{className:"w-4 h-4"})})})]})},n={render:r=>t.jsx(e,{...r,className:"w-[400px]",disabled:!0,children:t.jsx(p,{placeholder:"Input disabled"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <PromptInput {...args} className="w-[400px]">
        <PromptInputTextarea placeholder="Ask something..." />
    </PromptInput>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["Default","WithActions","Loading","Disabled"];export{s as Default,n as Disabled,a as Loading,o as WithActions,C as __namedExportsOrder,V as default};
