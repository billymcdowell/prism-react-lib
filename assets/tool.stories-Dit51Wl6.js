import{T as o}from"./tool-INmVeWPe.js";import"./jsx-runtime-u17CrQMm.js";import"./button-VZmRfN8J.js";import"./index-BNY7203a.js";import"./iframe-C0dHGTsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO3hOlhW.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./collapsible-DH1xmazt.js";import"./index-wbrQ4X3w.js";import"./index-DXm186LG.js";import"./index-CG-OPaJY.js";import"./index-avl2kFiD.js";import"./index-CffJVRRg.js";import"./index-BuX_BX6j.js";import"./index-B1okM1AP.js";import"./index-C8ABDzS5.js";import"./index-ZaosRtZH.js";import"./chevron-down--z3JOiU-.js";import"./createLucideIcon-Bs7DeJGf.js";import"./settings-BNnCk-Pr.js";import"./loader-circle-4xplpy2P.js";const h={title:"AI/Tool",component:o,tags:["autodocs"]},t={args:{toolPart:{type:"calculator",state:"input-streaming",toolCallId:"call_123"},defaultOpen:!0}},r={args:{toolPart:{type:"weather_api",state:"input-available",input:{city:"San Francisco",unit:"celsius"},toolCallId:"call_456"},defaultOpen:!0}},a={args:{toolPart:{type:"search",state:"output-available",input:{query:"React hooks"},output:{results:["Result 1","Result 2"]},toolCallId:"call_789"},defaultOpen:!0}},e={args:{toolPart:{type:"database",state:"output-error",input:{query:"SELECT * FROM users"},errorText:"Connection timeout",toolCallId:"call_000"},defaultOpen:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
