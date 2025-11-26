import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,a as p,b as d}from"./index-CuyvzQnQ.js";import{B as m}from"./button-DXipNNy6.js";import{R as c}from"./iframe-ByXrCVSE.js";import{c as x}from"./createLucideIcon-BSah2I-h.js";import"./index-_GgyENNU.js";import"./index-B7kr8Nhj.js";import"./index-CB3_CspQ.js";import"./index-CSosH7wG.js";import"./index-CkcuydbZ.js";import"./index-CQ1SDm7x.js";import"./index-iC3IO28h.js";import"./index-B2mXhRUC.js";import"./index-CrmZR6Lu.js";import"./index-CBWl2S-Y.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const u=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],h=x("chevrons-up-down",u);function t({...s}){return e.jsx(l,{"data-slot":"collapsible",...s})}function n({...s}){return e.jsx(p,{"data-slot":"collapsible-trigger",...s})}function a({...s}){return e.jsx(d,{"data-slot":"collapsible-content",...s})}t.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};n.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};a.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const k={title:"UI/Collapsible",component:t,tags:["autodocs"]},o={render:s=>{const[r,i]=c.useState(!1);return e.jsxs(t,{open:r,onOpenChange:i,className:"w-[350px] space-y-2",...s,children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(n,{asChild:!0,children:e.jsxs(m,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(a,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@stitches/react"})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2" {...args}>
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...o.parameters?.docs?.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,k as default};
