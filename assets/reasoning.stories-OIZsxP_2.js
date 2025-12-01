import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s,a as t,b as g}from"./reasoning-DNwpGSGh.js";import"./utils-CDN07tui.js";import"./iframe-D2adQVxF.js";import"./preload-helper-PPVm8Dsz.js";import"./markdown-CLYU6VWw.js";import"./code-block-InmF1O-b.js";import"./chevron-down-BjETIi2S.js";import"./createLucideIcon-Bwevr7EZ.js";const T={title:"AI/Reasoning",component:s,tags:["autodocs"]},r={render:n=>e.jsxs(s,{...n,children:[e.jsx(t,{children:"View Reasoning"}),e.jsx(g,{children:"This is the reasoning behind the response. It explains the steps taken to arrive at the answer."})]})},a={render:n=>e.jsxs(s,{...n,children:[e.jsx(t,{children:"Reasoning (Open)"}),e.jsx(g,{children:"The reasoning is already visible because `open` prop is set to true."})]}),args:{open:!0}},i={render:n=>e.jsxs(s,{...n,children:[e.jsx(t,{children:"Streaming Reasoning"}),e.jsx(g,{children:"This reasoning block automatically opens because `isStreaming` is true."})]}),args:{isStreaming:!0}},o={render:n=>e.jsxs(s,{...n,children:[e.jsx(t,{children:"Markdown Reasoning"}),e.jsx(g,{markdown:!0,children:"**Bold Step 1** - List item A - List item B `inline code`"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Reasoning {...args}>
      <ReasoningTrigger>View Reasoning</ReasoningTrigger>
      <ReasoningContent>
        This is the reasoning behind the response. It explains the steps taken to arrive at the answer.
      </ReasoningContent>
    </Reasoning>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Reasoning {...args}>
      <ReasoningTrigger>Reasoning (Open)</ReasoningTrigger>
      <ReasoningContent>
        The reasoning is already visible because \`open\` prop is set to true.
      </ReasoningContent>
    </Reasoning>,
  args: {
    open: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Reasoning {...args}>
      <ReasoningTrigger>Streaming Reasoning</ReasoningTrigger>
      <ReasoningContent>
        This reasoning block automatically opens because \`isStreaming\` is true.
      </ReasoningContent>
    </Reasoning>,
  args: {
    isStreaming: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Reasoning {...args}>
      <ReasoningTrigger>Markdown Reasoning</ReasoningTrigger>
      <ReasoningContent markdown>
        **Bold Step 1**
        
        - List item A
        - List item B
        
        \`inline code\`
      </ReasoningContent>
    </Reasoning>
}`,...o.parameters?.docs?.source}}};const j=["Default","OpenByDefault","Streaming","WithMarkdown"];export{r as Default,a as OpenByDefault,i as Streaming,o as WithMarkdown,j as __namedExportsOrder,T as default};
