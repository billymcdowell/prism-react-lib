import{T as o}from"./tool-uNlh2TWM.js";import"./jsx-runtime-u17CrQMm.js";import"./button-CUbMXTi2.js";import"./index-Bm9DY6Hk.js";import"./iframe-CzIjHCkM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_QQW2kf.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./collapsible-Ch7lAm8k.js";import"./index-CpFS1TDb.js";import"./index-CKBRRWT1.js";import"./index-Dv-B9L0L.js";import"./index-BSDLliFe.js";import"./index-CZaYSkPR.js";import"./index-BggxqMqP.js";import"./index-B9ISfK40.js";import"./index-MUIKTGbn.js";import"./index-C9uoKnKI.js";import"./chevron-down-oUnWdxpl.js";import"./createLucideIcon-D2Wp4eEU.js";import"./settings-Ch1jb6rx.js";import"./loader-circle-DLgrFmrl.js";const h={title:"AI/Tool",component:o,tags:["autodocs"]},t={args:{toolPart:{type:"calculator",state:"input-streaming",toolCallId:"call_123"},defaultOpen:!0}},r={args:{toolPart:{type:"weather_api",state:"input-available",input:{city:"San Francisco",unit:"celsius"},toolCallId:"call_456"},defaultOpen:!0}},a={args:{toolPart:{type:"search",state:"output-available",input:{query:"React hooks"},output:{results:["Result 1","Result 2"]},toolCallId:"call_789"},defaultOpen:!0}},e={args:{toolPart:{type:"database",state:"output-error",input:{query:"SELECT * FROM users"},errorText:"Connection timeout",toolCallId:"call_000"},defaultOpen:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    toolPart: {
      type: 'calculator',
      state: 'input-streaming',
      toolCallId: 'call_123'
    },
    defaultOpen: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    toolPart: {
      type: 'weather_api',
      state: 'input-available',
      input: {
        city: 'San Francisco',
        unit: 'celsius'
      },
      toolCallId: 'call_456'
    },
    defaultOpen: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    toolPart: {
      type: 'search',
      state: 'output-available',
      input: {
        query: 'React hooks'
      },
      output: {
        results: ['Result 1', 'Result 2']
      },
      toolCallId: 'call_789'
    },
    defaultOpen: true
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    toolPart: {
      type: 'database',
      state: 'output-error',
      input: {
        query: 'SELECT * FROM users'
      },
      errorText: 'Connection timeout',
      toolCallId: 'call_000'
    },
    defaultOpen: true
  }
}`,...e.parameters?.docs?.source}}};const A=["InputStreaming","InputAvailable","OutputAvailable","OutputError"];export{r as InputAvailable,t as InputStreaming,a as OutputAvailable,e as OutputError,A as __namedExportsOrder,h as default};
