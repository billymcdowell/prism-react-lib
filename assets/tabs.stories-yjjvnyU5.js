import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as m,a as C,b as d,c as t}from"./tabs-Ds-soxWz.js";import{C as o,a as n,b as c,c as l,d as i,e as u}from"./card-C3N4QfhV.js";import{B as p}from"./button-BdLVrME1.js";import{I as s}from"./input-Bw95PIWX.js";import{L as r}from"./label-BNnr4jpp.js";const x={title:"UI/Tabs",component:m},a={render:h=>e.jsxs(m,{defaultValue:"account",className:"w-[400px]",...h,children:[e.jsxs(C,{className:"grid w-full grid-cols-2",children:[e.jsx(d,{value:"account",children:"Account"}),e.jsx(d,{value:"password",children:"Password"})]}),e.jsx(t,{value:"account",children:e.jsxs(o,{children:[e.jsxs(n,{children:[e.jsx(c,{children:"Account"}),e.jsx(l,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(i,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"name",children:"Name"}),e.jsx(s,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"username",children:"Username"}),e.jsx(s,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(u,{children:e.jsx(p,{children:"Save changes"})})]})}),e.jsx(t,{value:"password",children:e.jsxs(o,{children:[e.jsxs(n,{children:[e.jsx(c,{children:"Password"}),e.jsx(l,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(i,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"current",children:"Current password"}),e.jsx(s,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"new",children:"New password"}),e.jsx(s,{id:"new",type:"password"})]})]}),e.jsx(u,{children:e.jsx(p,{children:"Save password"})})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
}`,...a.parameters?.docs?.source}}};const j=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{f as T};
