import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t,a as r,b as l}from"./popover-C1Zgg62f.js";import{B as d}from"./button-Bf87xu13.js";import{I as s}from"./input-Bw95PIWX.js";import{L as i}from"./label-mQp1_3YJ.js";const o={title:"UI/Popover",component:t},a={render:n=>e.jsxs(t,{...n,children:[e.jsx(r,{asChild:!0,children:e.jsx(d,{variant:"outline",children:"Open popover"})}),e.jsx(l,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"width",children:"Width"}),e.jsx(s,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"maxWidth",children:"Max. width"}),e.jsx(s,{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"height",children:"Height"}),e.jsx(s,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"maxHeight",children:"Max. height"}),e.jsx(s,{id:"maxHeight",defaultValue:"none",className:"col-span-2 h-8"})]})]})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...a.parameters?.docs?.source}}};const c=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:c,default:o},Symbol.toStringTag,{value:"Module"}));export{u as S};
