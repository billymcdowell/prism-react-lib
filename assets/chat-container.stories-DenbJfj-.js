import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s,a as o}from"./chat-container-BtCrltMl.js";import"./utils-CDN07tui.js";import"./StickToBottom-bDuqs7RV.js";import"./iframe-ZG3Ej-BF.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"AI/ChatContainer",component:s,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{height:"300px",border:"1px solid #ccc"},children:e.jsx(a,{})})]},r={render:a=>e.jsx(s,{...a,className:"h-full p-4",children:e.jsx(o,{className:"gap-4",children:Array.from({length:20}).map((n,t)=>e.jsxs("div",{className:`p-3 rounded-lg max-w-[80%] ${t%2===0?"bg-muted self-start":"bg-primary text-primary-foreground self-end"}`,children:["Message ",t+1]},t))})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ChatContainerRoot {...args} className="h-full p-4">
      <ChatContainerContent className="gap-4">
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className={\`p-3 rounded-lg max-w-[80%] \${i % 2 === 0 ? 'bg-muted self-start' : 'bg-primary text-primary-foreground self-end'}\`}>
            Message {i + 1}
          </div>)}
      </ChatContainerContent>
    </ChatContainerRoot>
}`,...r.parameters?.docs?.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,g as default};
