import{M as o}from"./markdown-hVKY6zBN.js";import"./jsx-runtime-u17CrQMm.js";import"./utils-CDN07tui.js";import"./iframe-B1FMP7ev.js";import"./preload-helper-PPVm8Dsz.js";import"./code-block-C6ffwT18.js";const m={title:"AI/Markdown",component:o,tags:["autodocs"]},t=`
# Heading 1
## Heading 2

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello Code Block');
\`\`\`

And some \`inline code\`.
`,e={args:{children:t}},r={args:{children:"```typescript\nconst x: number = 10;\n```"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: markdownContent
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: '```typescript\\nconst x: number = 10;\\n```'\n  }\n}",...r.parameters?.docs?.source}}};const p=["Default","WithCodeBlock"];export{e as Default,r as WithCodeBlock,p as __namedExportsOrder,m as default};
