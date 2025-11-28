import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as o,a as n,b as i,c as p,d as c}from"./message-DWbVjaFC.js";import{C as m}from"./copy-KS65JReH.js";import{T as l}from"./thumbs-up-BaAEM5J5.js";import"./avatar-CVa8vMWq.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIznl4Bz.js";import"./index-DuSBl0US.js";import"./index-DtYTIzzJ.js";import"./index-Dkk1Xfhs.js";import"./index-Oq5s9i1g.js";import"./index-QGY4RfnD.js";import"./index-J6LJBlCe.js";import"./utils-CDN07tui.js";import"./tooltip-CbBhvFNn.js";import"./index-Bh4cr8XZ.js";import"./index-DUG4PCWj.js";import"./index-DVmjngav.js";import"./index-D3SCzLKk.js";import"./index-DliH2bRp.js";import"./index-uz_gQ9Hb.js";import"./index-BIi4cPx6.js";import"./index-bowKCPUO.js";import"./index-ETErxzm6.js";import"./index-DrTW8AUf.js";import"./markdown-CZ5LNPNi.js";import"./code-block-BDxY49yX.js";import"./createLucideIcon-Da8e7NOt.js";const D={title:"AI/Message",component:o,tags:["autodocs"]},a={render:s=>e.jsxs(o,{...s,className:"flex-row-reverse",children:[e.jsx(n,{src:"https://github.com/shadcn.png",alt:"User"}),e.jsx(i,{className:"bg-primary text-primary-foreground",children:"Hello, how are you?"})]})},r={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsx(i,{markdown:!0,children:"I'm doing well, thank you! **How can I help you today?** Here is a list: - Item 1 - Item 2"})]})},t={render:s=>e.jsxs(o,{...s,children:[e.jsx(n,{src:"https://github.com/openai.png",alt:"AI",fallback:"AI"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(i,{children:"Here is the generated code."}),e.jsxs(p,{children:[e.jsx(c,{tooltip:"Copy code",children:e.jsx(m,{className:"w-4 h-4"})}),e.jsx(c,{tooltip:"Helpful",children:e.jsx(l,{className:"w-4 h-4"})})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
