import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as i,a as l,b as m,c as d,d as p,e as c,f as h,g as u}from"./sheet-GJVe7e-p.js";import{B as r}from"./button-DXipNNy6.js";import{I as s}from"./input-Bw95PIWX.js";import{L as a}from"./label-6sp4s1YW.js";import"./index-C5uLusiU.js";import"./iframe-ByXrCVSE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_GgyENNU.js";import"./index-B7kr8Nhj.js";import"./index-CB3_CspQ.js";import"./index-CSosH7wG.js";import"./index-CkcuydbZ.js";import"./index-CrmZR6Lu.js";import"./index-iC3IO28h.js";import"./index-CQ1SDm7x.js";import"./index-Dfg8qZAV.js";import"./index-DQMh9hd7.js";import"./index-D_8aezkX.js";import"./index-Bf57Gv7N.js";import"./index-B2mXhRUC.js";import"./utils-CDN07tui.js";import"./x-Dh_s28nM.js";import"./createLucideIcon-BSah2I-h.js";import"./index-CBWl2S-Y.js";import"./index-B_jtOnfb.js";const q={title:"UI/Sheet",component:i,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","right","bottom","left"]}}},t={render:({side:o,...n})=>e.jsxs(i,{...n,children:[e.jsx(l,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open"})}),e.jsxs(m,{side:o,children:[e.jsxs(d,{children:[e.jsx(p,{children:"Edit profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(s,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(s,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(h,{children:e.jsx(u,{asChild:!0,children:e.jsx(r,{type:"submit",children:"Save changes"})})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ({
    side,
    ...args
  }: any) => <Sheet {...args}>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...t.parameters?.docs?.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,q as default};
