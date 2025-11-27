import{j as t}from"./jsx-runtime-u17CrQMm.js";import{S as m}from"./index-CZuJkbN3.js";import{c as f}from"./index-B_jtOnfb.js";import{c as d}from"./utils-CDN07tui.js";import{S as h}from"./separator-BXvb_f41.js";import{B as r}from"./button-Bf87xu13.js";import{C as v}from"./chevron-down-B0Kztvi1.js";const x=f("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function u({className:e,orientation:o,...n}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":o,className:d(x({orientation:o}),e),...n})}function c({className:e,asChild:o=!1,...n}){const p=o?m:"div";return t.jsx(p,{className:d("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",e),...n})}function l({className:e,orientation:o="vertical",...n}){return t.jsx(h,{"data-slot":"button-group-separator",orientation:o,className:d("bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",e),...n})}u.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};l.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupSeparator",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupText",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"UI/ButtonGroup",component:u,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},a={render:e=>t.jsxs(u,{...e,children:[t.jsx(r,{variant:"outline",children:"Save"}),t.jsx(r,{variant:"outline",children:t.jsx(v,{className:"h-4 w-4"})})]})},s={render:e=>t.jsxs(u,{...e,children:[t.jsx(r,{variant:"outline",children:"Item One"}),t.jsx(l,{}),t.jsx(r,{variant:"outline",children:"Item Two"}),t.jsx(l,{}),t.jsx(r,{variant:"outline",children:"Item Three"})]})},i={render:e=>t.jsxs(u,{...e,children:[t.jsx(c,{children:"Label"}),t.jsx(r,{variant:"outline",children:"Action"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">Save</Button>
      <Button variant="outline">
        <ChevronDown className="h-4 w-4" />
      </Button>
    </ButtonGroup>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="outline">Item One</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Item Two</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Item Three</Button>
    </ButtonGroup>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <ButtonGroupText>Label</ButtonGroupText>
      <Button variant="outline">Action</Button>
    </ButtonGroup>
}`,...i.parameters?.docs?.source}}};const g=["Default","WithSeparator","WithText"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithSeparator:s,WithText:i,__namedExportsOrder:g,default:B},Symbol.toStringTag,{value:"Module"}));export{I as S};
