import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c}from"./index-B_jtOnfb.js";import{c as u}from"./utils-CDN07tui.js";import{B as x}from"./button-BdLVrME1.js";import{I as f}from"./input-Bw95PIWX.js";import"./textarea-WFWn170-.js";import{U as v}from"./user-oRuBzdhi.js";import{S as I}from"./search-C2ta05nL.js";function p({className:e,...r}){return t.jsx("div",{"data-slot":"input-group",role:"group",className:u("group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none","h-9 min-w-0 has-[>textarea]:h-auto","has-[>[data-align=inline-start]]:[&>input]:pl-2","has-[>[data-align=inline-end]]:[&>input]:pr-2","has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3","has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3","has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]","has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",e),...r})}const b=c("text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",{variants:{align:{"inline-start":"order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]","inline-end":"order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]","block-start":"order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5","block-end":"order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"}},defaultVariants:{align:"inline-start"}});function i({className:e,align:r="inline-start",...l}){return t.jsx("div",{role:"group","data-slot":"input-group-addon","data-align":r,className:u(b({align:r}),e),onClick:n=>{n.target.closest("button")||n.currentTarget.parentElement?.querySelector("input")?.focus()},...l})}const G=c("text-sm shadow-none flex gap-2 items-center",{variants:{size:{xs:"h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",sm:"h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5","icon-xs":"size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0","icon-sm":"size-8 p-0 has-[>svg]:p-0"}},defaultVariants:{size:"xs"}});function m({className:e,type:r="button",variant:l="ghost",size:n="xs",...h}){return t.jsx(x,{type:r,"data-size":n,variant:l,className:u(G({size:n}),e),...h})}function g({className:e,...r}){return t.jsx("span",{className:u("text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",e),...r})}function d({className:e,...r}){return t.jsx(f,{"data-slot":"input-group-control",className:u("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",e),...r})}p.__docgenInfo={description:"",methods:[],displayName:"InputGroup"};i.__docgenInfo={description:"",methods:[],displayName:"InputGroupAddon",props:{align:{defaultValue:{value:'"inline-start"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"InputGroupButton",props:{type:{defaultValue:{value:'"button"',computed:!1},required:!1},variant:{defaultValue:{value:'"ghost"',computed:!1},required:!1},size:{defaultValue:{value:'"xs"',computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"InputGroupText"};d.__docgenInfo={description:"",methods:[],displayName:"InputGroupInput"};const j={title:"UI/InputGroup",component:p},a={render:e=>t.jsx("div",{className:"w-[300px]",children:t.jsxs(p,{...e,children:[t.jsx(i,{children:t.jsx(v,{className:"h-4 w-4"})}),t.jsx(d,{placeholder:"Username"})]})})},s={render:e=>t.jsx("div",{className:"w-[300px]",children:t.jsxs(p,{...e,children:[t.jsx(d,{placeholder:"Search..."}),t.jsx(i,{align:"inline-end",children:t.jsx(m,{children:t.jsx(I,{className:"h-4 w-4"})})})]})})},o={render:e=>t.jsx("div",{className:"w-[300px]",children:t.jsxs(p,{...e,children:[t.jsx(i,{children:t.jsx(g,{children:"https://"})}),t.jsx(d,{placeholder:"example.com"})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[300px]">
      <InputGroup {...args}>
        <InputGroupAddon>
          <User className="h-4 w-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" />
      </InputGroup>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[300px]">
      <InputGroup {...args}>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[300px]">
      <InputGroup {...args}>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
}`,...o.parameters?.docs?.source}}};const N=["Default","WithButton","WithText"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithButton:s,WithText:o,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{T as S};
