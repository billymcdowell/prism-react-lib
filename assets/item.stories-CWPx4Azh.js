import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as x}from"./index-lxHNymn1.js";import{c as p}from"./index-B_jtOnfb.js";import{c as n}from"./utils-CDN07tui.js";import"./separator-BSiytalg.js";import{B as I}from"./button-BdLVrME1.js";import{c as v}from"./createLucideIcon-DNvLzEEK.js";import{C as j}from"./chevron-right-zDtcAkO_.js";const y=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],b=v("layout-grid",y),_=p("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{default:"p-4 gap-4 ",sm:"py-3 px-4 gap-2.5"}},defaultVariants:{variant:"default",size:"default"}});function i({className:t,variant:a="default",size:o="default",asChild:f=!1,...h}){const g=f?x:"div";return e.jsx(g,{"data-slot":"item","data-variant":a,"data-size":o,className:n(_({variant:a,size:o,className:t})),...h})}const N=p("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",{variants:{variant:{default:"bg-transparent",icon:"size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",image:"size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function d({className:t,variant:a="default",...o}){return e.jsx("div",{"data-slot":"item-media","data-variant":a,className:n(N({variant:a,className:t})),...o})}function m({className:t,...a}){return e.jsx("div",{"data-slot":"item-content",className:n("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",t),...a})}function c({className:t,...a}){return e.jsx("div",{"data-slot":"item-title",className:n("flex w-fit items-center gap-2 text-sm leading-snug font-medium",t),...a})}function l({className:t,...a}){return e.jsx("p",{"data-slot":"item-description",className:n("text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",t),...a})}function u({className:t,...a}){return e.jsx("div",{"data-slot":"item-actions",className:n("flex items-center gap-2",t),...a})}i.__docgenInfo={description:"",methods:[],displayName:"Item",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"ItemContent"};u.__docgenInfo={description:"",methods:[],displayName:"ItemActions"};c.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"};l.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"};const w={title:"UI/Item",component:i},s={render:t=>e.jsxs(i,{className:"w-[400px]",...t,children:[e.jsx(d,{children:e.jsx(b,{className:"h-5 w-5 text-muted-foreground"})}),e.jsxs(m,{children:[e.jsx(c,{children:"Appearance"}),e.jsx(l,{children:"Customize the look and feel of the application."})]}),e.jsx(u,{children:e.jsx(I,{variant:"ghost",size:"icon",children:e.jsx(j,{className:"h-4 w-4"})})})]})},r={render:t=>e.jsxs(i,{className:"w-[400px]",...t,children:[e.jsx(d,{variant:"image",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Unsplash"})}),e.jsxs(m,{children:[e.jsx(c,{children:"Project Cover"}),e.jsx(l,{children:"The cover image for your project."})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const C=["Default","WithImage"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithImage:r,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{A as S};
