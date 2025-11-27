import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as n,a as o,b as s,c as l,d as c,e as d}from"./card-C3N4QfhV.js";import{B as a}from"./button-CzXZL4Rf.js";import{I as i}from"./input-Bw95PIWX.js";import{L as m}from"./label-HUQgifVK.js";const p={title:"UI/Card",component:n},r={render:t=>e.jsxs(n,{className:"w-[350px]",...t,children:[e.jsxs(o,{children:[e.jsx(s,{children:"Create project"}),e.jsx(l,{children:"Deploy your new project in one-click."})]}),e.jsx(c,{children:e.jsx("form",{children:e.jsx("div",{className:"grid w-full items-center gap-4",children:e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx(m,{htmlFor:"name",children:"Name"}),e.jsx(i,{id:"name",placeholder:"Name of your project"})]})})})}),e.jsxs(d,{className:"flex justify-between",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Deploy"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...r.parameters?.docs?.source}}};const u=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{y as S};
