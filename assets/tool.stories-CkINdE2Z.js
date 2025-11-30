import{T as o}from"./tool-22gUDjhe.js";import"./jsx-runtime-u17CrQMm.js";import"./button-brVUi92s.js";import"./index-C32uMLkD.js";import"./iframe-BRnshzNF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDTCk58b.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./collapsible-BuRLe0hs.js";import"./index-BTVu3gRm.js";import"./index-DIJC5Xrb.js";import"./index-DMV8CCa4.js";import"./index-ASmZsYc4.js";import"./index-Co4v08xc.js";import"./index-CAj3bD8N.js";import"./index-DqFPIY4g.js";import"./index-D3FcFrBL.js";import"./index-CTm2Q6KN.js";import"./chevron-down-C9kDSBCN.js";import"./createLucideIcon-BffpPsEP.js";import"./settings-B6ehiwCF.js";import"./loader-circle-BT5m8Gzi.js";const h={title:"AI/Tool",component:o,tags:["autodocs"]},t={args:{toolPart:{type:"calculator",state:"input-streaming",toolCallId:"call_123"},defaultOpen:!0}},r={args:{toolPart:{type:"weather_api",state:"input-available",input:{city:"San Francisco",unit:"celsius"},toolCallId:"call_456"},defaultOpen:!0}},a={args:{toolPart:{type:"search",state:"output-available",input:{query:"React hooks"},output:{results:["Result 1","Result 2"]},toolCallId:"call_789"},defaultOpen:!0}},e={args:{toolPart:{type:"database",state:"output-error",input:{query:"SELECT * FROM users"},errorText:"Connection timeout",toolCallId:"call_000"},defaultOpen:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
