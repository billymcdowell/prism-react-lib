import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as o,a as n,b as i,c as p,d as c}from"./message-Cjhekoa3.js";import{C as m}from"./copy-xCeQkAWu.js";import{T as l}from"./thumbs-up-C_7yseKp.js";import"./avatar-C8FVe7o3.js";import"./iframe-CzIjHCkM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HviMIcE2.js";import"./index-B9ISfK40.js";import"./index-Dv-B9L0L.js";import"./index-BSDLliFe.js";import"./index-Bm9DY6Hk.js";import"./index-D_QQW2kf.js";import"./index-GyKuygwm.js";import"./utils-CDN07tui.js";import"./tooltip-kB0ZB9Un.js";import"./index-CKBRRWT1.js";import"./index-CZaYSkPR.js";import"./index-DiHu5XcI.js";import"./index-C9uoKnKI.js";import"./index-DD4fDXxF.js";import"./index-D31tkxfm.js";import"./index-HxwPMSK8.js";import"./index-MUIKTGbn.js";import"./index-BggxqMqP.js";import"./index-RpykjlcG.js";import"./markdown-5GkJ0wsu.js";import"./code-block-CklnaSVI.js";import"./createLucideIcon-D2Wp4eEU.js";const D={title:"AI/Message",component:o,tags:["autodocs"]},a={render:s=>e.jsxs(o,{...s,className:"flex-row-reverse",children:[e.jsx(n,{src:"https://github.com/shadcn.png",alt:"User"}),e.jsx(i,{className:"bg-primary text-primary-foreground",children:"Hello, how are you?"})]})},r={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsx(i,{markdown:!0,children:"I'm doing well, thank you! **How can I help you today?** Here is a list: - Item 1 - Item 2"})]})},t={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{children:"Here is the generated code."}),e.jsxs(p,{children:[e.jsx(c,{tooltip:"Copy code",children:e.jsx(m,{className:"w-4 h-4"})}),e.jsx(c,{tooltip:"Helpful",children:e.jsx(l,{className:"w-4 h-4"})})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Message {...args} className="flex-row-reverse">
        <MessageAvatar src="https://github.com/shadcn.png" alt="User" />
        <MessageContent className="bg-primary text-primary-foreground">
            Hello, how are you?
        </MessageContent>
    </Message>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Message {...args}>
        <MessageAvatar src="https://github.com/openai.png" alt="AI" fallback="AI" />
        <MessageContent markdown>
            I'm doing well, thank you! **How can I help you today?**
            
            Here is a list:
            - Item 1
            - Item 2
        </MessageContent>
    </Message>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Message {...args}>
        <MessageAvatar src="https://github.com/openai.png" alt="AI" fallback="AI" />
        <div className="flex flex-col gap-2">
            <MessageContent>
                Here is the generated code.
            </MessageContent>
            <MessageActions>
                <MessageAction tooltip="Copy code">
                    <Copy className="w-4 h-4" />
                </MessageAction>
                <MessageAction tooltip="Helpful">
                    <ThumbsUp className="w-4 h-4" />
                </MessageAction>
            </MessageActions>
        </div>
    </Message>
}`,...t.parameters?.docs?.source}}};const F=["UserMessage","AIMessage","WithActions"];export{r as AIMessage,a as UserMessage,t as WithActions,F as __namedExportsOrder,D as default};
