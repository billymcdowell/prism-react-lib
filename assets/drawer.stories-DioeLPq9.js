import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as s,b as i,c as l,d as o,e as d,f as c,g as m}from"./drawer-CzbxHLOJ.js";import{B as a}from"./button-24IbpKd0.js";const x={title:"UI/Drawer",component:t},r={render:n=>e.jsxs(t,{...n,children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Drawer"})}),e.jsx(i,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Move Goal"}),e.jsx(d,{children:"Set your daily activity goal."})]}),e.jsx("div",{className:"p-4 pb-0",children:e.jsx("div",{className:"flex items-center justify-center space-x-2",children:e.jsxs("div",{className:"flex-1 text-center",children:[e.jsx("div",{className:"text-7xl font-bold tracking-tighter",children:"350"}),e.jsx("div",{className:"text-[0.70rem] uppercase text-muted-foreground",children:"Calories/day"})]})})}),e.jsxs(c,{children:[e.jsx(a,{children:"Submit"}),e.jsx(m,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Cancel"})})]})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  350
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
}`,...r.parameters?.docs?.source}}};const u=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:u,default:x},Symbol.toStringTag,{value:"Module"}));export{v as S};
