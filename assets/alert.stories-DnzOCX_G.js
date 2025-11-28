import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-B_jtOnfb.js";import{c as o}from"./utils-CDN07tui.js";import{T as p}from"./terminal-DXeP3RMq.js";import{C as u}from"./circle-alert-1OKLvYlR.js";const m=d("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function i({className:t,variant:r,...c}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:o(m({variant:r}),t),...c})}function n({className:t,...r}){return e.jsx("div",{"data-slot":"alert-title",className:o("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",t),...r})}function l({className:t,...r}){return e.jsx("div",{"data-slot":"alert-description",className:o("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",t),...r})}i.__docgenInfo={description:"",methods:[],displayName:"Alert"};n.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};l.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const g={title:"UI/Alert",component:i,argTypes:{variant:{control:"select",options:["default","destructive"]}}},s={render:t=>e.jsxs(i,{...t,children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx(n,{children:"Heads up!"}),e.jsx(l,{children:"You can add components to your app using the cli."})]})},a={args:{variant:"destructive"},render:t=>e.jsxs(i,{...t,children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(n,{children:"Error"}),e.jsx(l,{children:"Your session has expired. Please log in again."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Alert {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  },
  render: args => <Alert {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...a.parameters?.docs?.source}}};const x=["Default","Destructive"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Destructive:a,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as S};
