import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as i,a as l,b as m,c as d,d as p,e as c,f as h,g as u}from"./sheet-CnHz6aUG.js";import{B as r}from"./button-h8Xtxk8g.js";import{I as s}from"./input-Bw95PIWX.js";import{L as a}from"./label-CXn17Gkl.js";import"./index-BV8Wy0-v.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMkdXBaN.js";import"./index-DUKs2XLr.js";import"./index-CB9-nTE4.js";import"./index-CBcad8_V.js";import"./index-vQf6FlO2.js";import"./index-ACo_yVpg.js";import"./index-ByNdtO7x.js";import"./index-yuJPGWlL.js";import"./index-5kL4xweL.js";import"./index-CIMAa5B7.js";import"./index-D5mq6C8D.js";import"./index-N66yc9Ib.js";import"./index-IVJZSK8U.js";import"./utils-CDN07tui.js";import"./x-BEm08ED7.js";import"./createLucideIcon-C7LiED1z.js";import"./index-kfhzG9hJ.js";import"./index-B_jtOnfb.js";const q={title:"UI/Sheet",component:i,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","right","bottom","left"]}}},t={render:({side:o,...n})=>e.jsxs(i,{...n,children:[e.jsx(l,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open"})}),e.jsxs(m,{side:o,children:[e.jsxs(d,{children:[e.jsx(p,{children:"Edit profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(s,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(s,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(h,{children:e.jsx(u,{asChild:!0,children:e.jsx(r,{type:"submit",children:"Save changes"})})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
