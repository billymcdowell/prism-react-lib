import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as d,b as n}from"./code-block-C6ffwT18.js";import"./utils-CDN07tui.js";import"./iframe-B1FMP7ev.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"AI/CodeBlock",component:a,tags:["autodocs"]},c=`import React from 'react';

export function HelloWorld() {
  return <div>Hello World</div>;
}`,p=`def hello_world():
    print("Hello World")`,r={render:o=>e.jsx(a,{...o,children:e.jsx(d,{code:c,language:"typescript"})})},s={render:o=>e.jsx(a,{...o,children:e.jsx(d,{code:p,language:"python"})})},t={render:o=>e.jsxs(a,{...o,children:[e.jsx(n,{className:"border-b p-2 bg-muted/50",children:e.jsx("span",{className:"text-xs text-muted-foreground",children:"example.ts"})}),e.jsx(d,{code:c,language:"typescript"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <CodeBlock {...args}>
      <CodeBlockCode code={tsCode} language="typescript" />
    </CodeBlock>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <CodeBlock {...args}>
      <CodeBlockCode code={pyCode} language="python" />
    </CodeBlock>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <CodeBlock {...args}>
      <CodeBlockGroup className="border-b p-2 bg-muted/50">
        <span className="text-xs text-muted-foreground">example.ts</span>
      </CodeBlockGroup>
      <CodeBlockCode code={tsCode} language="typescript" />
    </CodeBlock>
}`,...t.parameters?.docs?.source}}};const x=["TypeScript","Python","WithGroup"];export{s as Python,r as TypeScript,t as WithGroup,x as __namedExportsOrder,C as default};
