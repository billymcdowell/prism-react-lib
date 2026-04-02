import{T as o}from"./tool-CrfOnCq8.js";import"./jsx-runtime-u17CrQMm.js";import"./button-Cdu7QBs_.js";import"./index-Dlb3m4xI.js";import"./iframe-CUYRbRBK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhaaUe0c.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./collapsible-D-eR6PfO.js";import"./index-CF1YpnGP.js";import"./index-V9QEtJvU.js";import"./index-DTsQcHOp.js";import"./index-jfXM7GBZ.js";import"./index-DRTMPWoK.js";import"./index-ByQbsh2J.js";import"./index-Cq1PSqlX.js";import"./index-qvpiirN5.js";import"./index-X-6BvtxF.js";import"./chevron-down-txKaPaDH.js";import"./createLucideIcon-PuqRuo2p.js";import"./settings-BNs_VRhh.js";import"./loader-circle-B7ko3Quu.js";const h={title:"AI/Tool",component:o,tags:["autodocs"]},t={args:{toolPart:{type:"calculator",state:"input-streaming",toolCallId:"call_123"},defaultOpen:!0}},r={args:{toolPart:{type:"weather_api",state:"input-available",input:{city:"San Francisco",unit:"celsius"},toolCallId:"call_456"},defaultOpen:!0}},a={args:{toolPart:{type:"search",state:"output-available",input:{query:"React hooks"},output:{results:["Result 1","Result 2"]},toolCallId:"call_789"},defaultOpen:!0}},e={args:{toolPart:{type:"database",state:"output-error",input:{query:"SELECT * FROM users"},errorText:"Connection timeout",toolCallId:"call_000"},defaultOpen:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
