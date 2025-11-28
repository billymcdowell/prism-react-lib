import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as n,a as r,b as l}from"./collapsible-DH1xmazt.js";import{B as i}from"./button-VZmRfN8J.js";import{a as d}from"./iframe-C0dHGTsJ.js";import{c as p}from"./createLucideIcon-Bs7DeJGf.js";const c=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],m=p("chevrons-up-down",c),x={title:"UI/Collapsible",component:n},s={render:a=>{const[o,t]=d.useState(!1);return e.jsxs(n,{open:o,onOpenChange:t,className:"w-[350px] space-y-2",...a,children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(r,{asChild:!0,children:e.jsxs(i,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(m,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(l,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@stitches/react"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const u=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:u,default:x},Symbol.toStringTag,{value:"Module"}));export{v as S};
