import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as m,a as C,b as t,c as o}from"./tabs-CHLmvFow.js";import{C as d,a as n,b as c,c as i,d as l,e as p}from"./card-C3N4QfhV.js";import{B as u}from"./button-h8Xtxk8g.js";import{I as a}from"./input-Bw95PIWX.js";import{L as r}from"./label-CXn17Gkl.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMkdXBaN.js";import"./index-DUKs2XLr.js";import"./index-CB9-nTE4.js";import"./index-CBcad8_V.js";import"./index-vQf6FlO2.js";import"./index-CgRHhljm.js";import"./index-dwsKs55q.js";import"./index-ACo_yVpg.js";import"./index-ByNdtO7x.js";import"./index-CIMAa5B7.js";import"./index-yuJPGWlL.js";import"./index-DRde4DcG.js";import"./index-IVJZSK8U.js";import"./utils-CDN07tui.js";import"./index-kfhzG9hJ.js";import"./index-B_jtOnfb.js";const _={title:"UI/Tabs",component:m,tags:["autodocs"]},s={render:h=>e.jsxs(m,{defaultValue:"account",className:"w-[400px]",...h,children:[e.jsxs(C,{className:"grid w-full grid-cols-2",children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"})]}),e.jsx(o,{value:"account",children:e.jsxs(d,{children:[e.jsxs(n,{children:[e.jsx(c,{children:"Account"}),e.jsx(i,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"name",children:"Name"}),e.jsx(a,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"username",children:"Username"}),e.jsx(a,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(p,{children:e.jsx(u,{children:"Save changes"})})]})}),e.jsx(o,{value:"password",children:e.jsxs(d,{children:[e.jsxs(n,{children:[e.jsx(c,{children:"Password"}),e.jsx(i,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"current",children:"Current password"}),e.jsx(a,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{htmlFor:"new",children:"New password"}),e.jsx(a,{id:"new",type:"password"})]})]}),e.jsx(p,{children:e.jsx(u,{children:"Save password"})})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,_ as default};
