import{j as r}from"./jsx-runtime-u17CrQMm.js";import{S as B}from"./index-CBWl2S-Y.js";import{c as m}from"./utils-CDN07tui.js";import{C as x}from"./chevron-right-URwIV_6D.js";import{E as h}from"./ellipsis-ccX2wUTO.js";import"./iframe-ByXrCVSE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSosH7wG.js";import"./createLucideIcon-BSah2I-h.js";function o({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:m("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...a})}function s({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:m("inline-flex items-center gap-1.5",e),...a})}function t({asChild:e,className:a,...i}){const p=e?B:"a";return r.jsx(p,{"data-slot":"breadcrumb-link",className:m("hover:text-foreground transition-colors",a),...i})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:m("text-foreground font-normal",e),...a})}function n({children:e,className:a,...i}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:m("[&>svg]:size-3.5",a),...i,children:e??r.jsx(x,{})})}function b({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:m("flex size-9 items-center justify-center",e),...a,children:[r.jsx(h,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const y={title:"UI/Breadcrumb",component:o,tags:["autodocs"]},d={render:e=>r.jsx(o,{...e,children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(s,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(n,{}),r.jsx(s,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},c={render:e=>r.jsx(o,{...e,children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(s,{children:r.jsx(b,{})}),r.jsx(n,{}),r.jsx(s,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(n,{}),r.jsx(s,{children:r.jsx(l,{children:"Breadcrumb"})})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...c.parameters?.docs?.source}}};const E=["Default","WithEllipsis"];export{d as Default,c as WithEllipsis,E as __namedExportsOrder,y as default};
