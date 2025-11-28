import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i,a as d,b as p}from"./index-DmwQ6Mx3.js";import{B as c}from"./button-CA3OaIpr.js";import{a as m}from"./iframe-BCbsaKOz.js";import{c as x}from"./createLucideIcon-aPwG8KT1.js";const u=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],b=x("chevrons-up-down",u);function n({...s}){return e.jsx(i,{"data-slot":"collapsible",...s})}function t({...s}){return e.jsx(d,{"data-slot":"collapsible-trigger",...s})}function a({...s}){return e.jsx(p,{"data-slot":"collapsible-content",...s})}n.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};t.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};a.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const h={title:"UI/Collapsible",component:n},o={render:s=>{const[r,l]=m.useState(!1);return e.jsxs(n,{open:r,onOpenChange:l,className:"w-[350px] space-y-2",...s,children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(t,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(b,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(a,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@stitches/react"})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const f=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{v as S};
