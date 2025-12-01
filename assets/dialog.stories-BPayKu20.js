import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as o,b as n,c as d,d as c,e as m,f as g}from"./dialog-Cq8HjIct.js";import{B as r}from"./button-Du1quxP-.js";import{I as s}from"./input-Bw95PIWX.js";import{L as i}from"./label-DfewmwWF.js";const p={title:"UI/Dialog",component:t},a={render:l=>e.jsxs(t,{...l,children:[e.jsx(o,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Edit Profile"})}),e.jsxs(n,{className:"sm:max-w-[425px]",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(s,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(i,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(s,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(g,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...a.parameters?.docs?.source}}};const u=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{N as S};
