import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as n,S as i,d as o,h as d,i as s,j as l,k as c,e as m,f as b,g as p,m as S,l as u,b as x}from"./sidebar-COHvTiBD.js";import{H as h}from"./house-D52Itod0.js";import{c as j}from"./createLucideIcon-CBNv5Nc_.js";import{C as f}from"./calendar-y8ZxmNBx.js";import{S as g}from"./search-HnnIZGtT.js";import{S as C}from"./settings-DhmU86se.js";const M=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],N=j("inbox",M),v={title:"UI/Sidebar",component:n,parameters:{layout:"fullscreen"}},G=[{title:"Home",url:"#",icon:h},{title:"Inbox",url:"#",icon:N},{title:"Calendar",url:"#",icon:f},{title:"Search",url:"#",icon:g},{title:"Settings",url:"#",icon:C}],r={render:t=>e.jsxs(i,{children:[e.jsxs(n,{...t,children:[e.jsx(o,{children:e.jsx("h2",{className:"px-4 text-lg font-semibold",children:"App Name"})}),e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(l,{children:"Application"}),e.jsx(c,{children:e.jsx(m,{children:G.map(a=>e.jsx(b,{children:e.jsx(p,{asChild:!0,children:e.jsxs("a",{href:a.url,children:[e.jsx(a.icon,{}),e.jsx("span",{children:a.title})]})})},a.title))})})]})}),e.jsx(S,{children:e.jsx("p",{className:"px-4 text-xs text-muted-foreground",children:"Footer Content"})}),e.jsx(u,{})]}),e.jsxs("main",{className:"flex-1 p-4",children:[e.jsx(x,{}),e.jsx("div",{className:"p-4 border rounded-lg border-dashed mt-4",children:"Main Content Area"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <SidebarProvider>
      <Sidebar {...args}>
        <SidebarHeader>
             <h2 className="px-4 text-lg font-semibold">App Name</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <p className="px-4 text-xs text-muted-foreground">Footer Content</p>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <main className="flex-1 p-4">
         <SidebarTrigger />
         <div className="p-4 border rounded-lg border-dashed mt-4">
            Main Content Area
         </div>
      </main>
    </SidebarProvider>
}`,...r.parameters?.docs?.source}}};const y=["Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{P as S};
