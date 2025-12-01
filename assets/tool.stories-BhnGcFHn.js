import{T as o}from"./tool-CDRh7LfU.js";import"./jsx-runtime-u17CrQMm.js";import"./button-DfDABheV.js";import"./index-BKmhc7-k.js";import"./iframe-B1FMP7ev.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVIuXOjC.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./collapsible-COSJZNnZ.js";import"./index-DAmiIGfX.js";import"./index-C0czC1vr.js";import"./index-CnSrwqD0.js";import"./index-DhgqUPOW.js";import"./index-CAlTrB-E.js";import"./index-CrucKXqn.js";import"./index-DDesiWCi.js";import"./index-nyo8kubt.js";import"./index-CC0hhZNt.js";import"./chevron-down-C3rIgFhP.js";import"./createLucideIcon-Cx6i2raP.js";import"./settings-B5az3HIU.js";import"./loader-circle-DgxVLMxL.js";const h={title:"AI/Tool",component:o,tags:["autodocs"]},t={args:{toolPart:{type:"calculator",state:"input-streaming",toolCallId:"call_123"},defaultOpen:!0}},r={args:{toolPart:{type:"weather_api",state:"input-available",input:{city:"San Francisco",unit:"celsius"},toolCallId:"call_456"},defaultOpen:!0}},a={args:{toolPart:{type:"search",state:"output-available",input:{query:"React hooks"},output:{results:["Result 1","Result 2"]},toolCallId:"call_789"},defaultOpen:!0}},e={args:{toolPart:{type:"database",state:"output-error",input:{query:"SELECT * FROM users"},errorText:"Connection timeout",toolCallId:"call_000"},defaultOpen:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
