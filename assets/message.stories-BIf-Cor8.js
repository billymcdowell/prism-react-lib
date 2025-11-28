import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as o,a as n,b as i,c as p,d as c}from"./message-CPDyHd38.js";import{C as m}from"./copy-B5qkylD-.js";import{T as l}from"./thumbs-up-BXcW4YYa.js";import"./avatar-DTrZ9mfO.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ApAwEG_-.js";import"./index-B1okM1AP.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-BNY7203a.js";import"./index-CO3hOlhW.js";import"./index-B6Ga2ycG.js";import"./utils-CDN07tui.js";import"./tooltip-DisIHmo6.js";import"./index-DXm186LG.js";import"./index-CffJVRRg.js";import"./index-B0n9j3DP.js";import"./index-ZaosRtZH.js";import"./index-8ZzCNrKt.js";import"./index-DBv-CLuo.js";import"./index-CaKWyVBK.js";import"./index-C8ABDzS5.js";import"./index-BuX_BX6j.js";import"./index-Dp2eQppM.js";import"./markdown-B540sNGz.js";import"./code-block-C4-RpvyQ.js";import"./createLucideIcon-Bs7DeJGf.js";const D={title:"AI/Message",component:o,tags:["autodocs"]},a={render:s=>e.jsxs(o,{...s,className:"flex-row-reverse",children:[e.jsx(n,{src:"https://github.com/shadcn.png",alt:"User"}),e.jsx(i,{className:"bg-primary text-primary-foreground",children:"Hello, how are you?"})]})},r={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsx(i,{markdown:!0,children:"I'm doing well, thank you! **How can I help you today?** Here is a list: - Item 1 - Item 2"})]})},t={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{children:"Here is the generated code."}),e.jsxs(p,{children:[e.jsx(c,{tooltip:"Copy code",children:e.jsx(m,{className:"w-4 h-4"})}),e.jsx(c,{tooltip:"Helpful",children:e.jsx(l,{className:"w-4 h-4"})})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
