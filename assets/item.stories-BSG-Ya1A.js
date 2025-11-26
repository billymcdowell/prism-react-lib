import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as x}from"./index-kfhzG9hJ.js";import{c as p}from"./index-B_jtOnfb.js";import{c as s}from"./utils-CDN07tui.js";import"./separator-BfLkATUu.js";import{B as I}from"./button-h8Xtxk8g.js";import{c as v}from"./createLucideIcon-C7LiED1z.js";import{C as j}from"./chevron-right-CwKzs4HW.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBcad8_V.js";import"./index-DUKs2XLr.js";import"./index-CB9-nTE4.js";const y=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],b=v("layout-grid",y),N=p("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{default:"p-4 gap-4 ",sm:"py-3 px-4 gap-2.5"}},defaultVariants:{variant:"default",size:"default"}});function o({className:t,variant:a="default",size:n="default",asChild:f=!1,...h}){const g=f?x:"div";return e.jsx(g,{"data-slot":"item","data-variant":a,"data-size":n,className:s(N({variant:a,size:n,className:t})),...h})}const _=p("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",{variants:{variant:{default:"bg-transparent",icon:"size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",image:"size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function d({className:t,variant:a="default",...n}){return e.jsx("div",{"data-slot":"item-media","data-variant":a,className:s(_({variant:a,className:t})),...n})}function m({className:t,...a}){return e.jsx("div",{"data-slot":"item-content",className:s("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",t),...a})}function c({className:t,...a}){return e.jsx("div",{"data-slot":"item-title",className:s("flex w-fit items-center gap-2 text-sm leading-snug font-medium",t),...a})}function l({className:t,...a}){return e.jsx("p",{"data-slot":"item-description",className:s("text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",t),...a})}function u({className:t,...a}){return e.jsx("div",{"data-slot":"item-actions",className:s("flex items-center gap-2",t),...a})}o.__docgenInfo={description:"",methods:[],displayName:"Item",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"ItemContent"};u.__docgenInfo={description:"",methods:[],displayName:"ItemActions"};c.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"};l.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"};const R={title:"UI/Item",component:o,tags:["autodocs"]},r={render:t=>e.jsxs(o,{className:"w-[400px]",...t,children:[e.jsx(d,{children:e.jsx(b,{className:"h-5 w-5 text-muted-foreground"})}),e.jsxs(m,{children:[e.jsx(c,{children:"Appearance"}),e.jsx(l,{children:"Customize the look and feel of the application."})]}),e.jsx(u,{children:e.jsx(I,{variant:"ghost",size:"icon",children:e.jsx(j,{className:"h-4 w-4"})})})]})},i={render:t=>e.jsxs(o,{className:"w-[400px]",...t,children:[e.jsx(d,{variant:"image",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Unsplash"})}),e.jsxs(m,{children:[e.jsx(c,{children:"Project Cover"}),e.jsx(l,{children:"The cover image for your project."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Item className="w-[400px]" {...args}>
      <ItemMedia>
        <LayoutGrid className="h-5 w-5 text-muted-foreground" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Appearance</ItemTitle>
        <ItemDescription>
          Customize the look and feel of the application.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </ItemActions>
    </Item>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Item className="w-[400px]" {...args}>
      <ItemMedia variant="image">
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Unsplash" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Project Cover</ItemTitle>
        <ItemDescription>
          The cover image for your project.
        </ItemDescription>
      </ItemContent>
    </Item>
}`,...i.parameters?.docs?.source}}};const U=["Default","WithImage"];export{r as Default,i as WithImage,U as __namedExportsOrder,R as default};
