import{j as t}from"./jsx-runtime-u17CrQMm.js";import{S as m}from"./index-kfhzG9hJ.js";import{c as h}from"./index-B_jtOnfb.js";import{c as d}from"./utils-CDN07tui.js";import{S as f}from"./separator-BfLkATUu.js";import{B as r}from"./button-h8Xtxk8g.js";import{C as v}from"./chevron-down-B9GUjQ_D.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBcad8_V.js";import"./index-DUKs2XLr.js";import"./index-CB9-nTE4.js";import"./createLucideIcon-C7LiED1z.js";const x=h("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function a({className:o,orientation:e,...n}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":e,className:d(x({orientation:e}),o),...n})}function c({className:o,asChild:e=!1,...n}){const p=e?m:"div";return t.jsx(p,{className:d("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",o),...n})}function l({className:o,orientation:e="vertical",...n}){return t.jsx(f,{"data-slot":"button-group-separator",orientation:e,className:d("bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",o),...n})}a.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};l.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupSeparator",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupText",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const C={title:"UI/ButtonGroup",component:a,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},s={render:o=>t.jsxs(a,{...o,children:[t.jsx(r,{variant:"outline",children:"Save"}),t.jsx(r,{variant:"outline",children:t.jsx(v,{className:"h-4 w-4"})})]})},i={render:o=>t.jsxs(a,{...o,children:[t.jsx(r,{variant:"outline",children:"Item One"}),t.jsx(l,{}),t.jsx(r,{variant:"outline",children:"Item Two"}),t.jsx(l,{}),t.jsx(r,{variant:"outline",children:"Item Three"})]})},u={render:o=>t.jsxs(a,{...o,children:[t.jsx(c,{children:"Label"}),t.jsx(r,{variant:"outline",children:"Action"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">Save</Button>
      <Button variant="outline">
        <ChevronDown className="h-4 w-4" />
      </Button>
    </ButtonGroup>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">Item One</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Item Two</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Item Three</Button>
    </ButtonGroup>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <ButtonGroupText>Label</ButtonGroupText>
      <Button variant="outline">Action</Button>
    </ButtonGroup>
}`,...u.parameters?.docs?.source}}};const D=["Default","WithSeparator","WithText"];export{s as Default,i as WithSeparator,u as WithText,D as __namedExportsOrder,C as default};
