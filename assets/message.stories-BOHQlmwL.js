import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as o,a as n,b as i,c as p,d as c}from"./message-BpRT1X82.js";import{C as m}from"./copy-DKVp0q_y.js";import{T as l}from"./thumbs-up-KE9K_wK7.js";import"./avatar-CbiJ8VeY.js";import"./iframe-Duy2BnNL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DoLCnyUT.js";import"./index-BaN3TgAG.js";import"./index-DNDXaxkE.js";import"./index-p2IZywWK.js";import"./index-Bgfk8m88.js";import"./index-fiM-0oeH.js";import"./index-DBYoJzCo.js";import"./utils-CDN07tui.js";import"./tooltip-hzUGPhbQ.js";import"./index-D7vzY3Ns.js";import"./index-DjUR2ipe.js";import"./index-DEWTWwku.js";import"./index-BlJcpxs9.js";import"./index-B8F4rauU.js";import"./index-BXsOMhnu.js";import"./index-Bpbk2NAJ.js";import"./index-BGulSCFB.js";import"./index-CPCP3Tpo.js";import"./index-DW5L5ylK.js";import"./markdown-BEXpQEEX.js";import"./code-block-DLnhohY0.js";import"./createLucideIcon-ZT_-Fol2.js";const D={title:"AI/Message",component:o,tags:["autodocs"]},a={render:s=>e.jsxs(o,{...s,className:"flex-row-reverse",children:[e.jsx(n,{src:"https://github.com/shadcn.png",alt:"User"}),e.jsx(i,{className:"bg-primary text-primary-foreground",children:"Hello, how are you?"})]})},r={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsx(i,{markdown:!0,children:"I'm doing well, thank you! **How can I help you today?** Here is a list: - Item 1 - Item 2"})]})},t={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{children:"Here is the generated code."}),e.jsxs(p,{children:[e.jsx(c,{tooltip:"Copy code",children:e.jsx(m,{className:"w-4 h-4"})}),e.jsx(c,{tooltip:"Helpful",children:e.jsx(l,{className:"w-4 h-4"})})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
