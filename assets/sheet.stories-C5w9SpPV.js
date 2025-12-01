import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as i,a as n,b as d,c,d as h,e as m,f as p,g as u}from"./sheet-BDwd_jkq.js";import{B as s}from"./button-D4N-Zn8t.js";import{I as r}from"./input-Bw95PIWX.js";import{L as a}from"./label-CYuUgHlC.js";const g={title:"UI/Sheet",component:i,argTypes:{side:{control:"select",options:["top","right","bottom","left"]}}},t={render:({side:o,...l})=>e.jsxs(i,{...l,children:[e.jsx(n,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open"})}),e.jsxs(d,{side:o,children:[e.jsxs(c,{children:[e.jsx(h,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(r,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(r,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(p,{children:e.jsx(u,{asChild:!0,children:e.jsx(s,{type:"submit",children:"Save changes"})})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const S=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:S,default:g},Symbol.toStringTag,{value:"Module"}));export{y as S};
