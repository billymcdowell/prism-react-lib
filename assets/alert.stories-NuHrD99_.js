import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-B_jtOnfb.js";import{c as o}from"./utils-CDN07tui.js";import{c as l}from"./createLucideIcon-C7LiED1z.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";const m=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],u=l("circle-alert",m);const g=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],x=l("terminal",g),v=p("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function i({className:t,variant:r,...d}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:o(v({variant:r}),t),...d})}function n({className:t,...r}){return e.jsx("div",{"data-slot":"alert-title",className:o("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",t),...r})}function c({className:t,...r}){return e.jsx("div",{"data-slot":"alert-description",className:o("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",t),...r})}i.__docgenInfo={description:"",methods:[],displayName:"Alert"};n.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};c.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const N={title:"UI/Alert",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"]}}},s={render:t=>e.jsxs(i,{...t,children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx(n,{children:"Heads up!"}),e.jsx(c,{children:"You can add components to your app using the cli."})]})},a={args:{variant:"destructive"},render:t=>e.jsxs(i,{...t,children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(n,{children:"Error"}),e.jsx(c,{children:"Your session has expired. Please log in again."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const D=["Default","Destructive"];export{s as Default,a as Destructive,D as __namedExportsOrder,N as default};
