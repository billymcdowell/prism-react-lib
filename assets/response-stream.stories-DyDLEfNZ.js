import{R as n}from"./response-stream-B7Wjbmse.js";import"./jsx-runtime-u17CrQMm.js";import"./utils-CDN07tui.js";import"./iframe-C3KMRTyM.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"AI/ResponseStream",component:n,tags:["autodocs"]},o=`This is a long text that will be streamed. 
It simulates how an LLM might respond token by token. 
We can use this to show a typewriter effect or a fade-in effect for words.`,e={args:{textStream:o,mode:"typewriter",speed:20}},r={args:{textStream:o,mode:"fade",speed:20}},t={args:{textStream:"Slowly typing...",speed:5}},a={args:{textStream:"Fast typing...",speed:80}},s={args:{textStream:"This is rendered as a paragraph tag.",as:"p",className:"text-lg text-blue-600"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    textStream: longText,
    mode: 'typewriter',
    speed: 20
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    textStream: longText,
    mode: 'fade',
    speed: 20
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    textStream: 'Slowly typing...',
    speed: 5
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    textStream: 'Fast typing...',
    speed: 80
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    textStream: 'This is rendered as a paragraph tag.',
    as: 'p',
    className: 'text-lg text-blue-600'
  }
}`,...s.parameters?.docs?.source}}};const l=["Typewriter","Fade","SlowSpeed","FastSpeed","AsParagraph"];export{s as AsParagraph,r as Fade,a as FastSpeed,t as SlowSpeed,e as Typewriter,l as __namedExportsOrder,g as default};
