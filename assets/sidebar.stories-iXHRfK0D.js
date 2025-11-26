import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as i,S as o,d as n,h as s,i as d,j as m,k as p,e as l,f as c,g as b,m as u,l as S,b as x}from"./sidebar-C1B7HbZv.js";import{H as h}from"./house-B04yJRqG.js";import{c as j}from"./createLucideIcon-C7LiED1z.js";import{C as f}from"./calendar-DzjpbH9F.js";import{S as g}from"./search-DiR6bk0k.js";import{S as C}from"./settings-CQiWhn6o.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kfhzG9hJ.js";import"./index-CBcad8_V.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./button-h8Xtxk8g.js";import"./input-Bw95PIWX.js";import"./separator-BfLkATUu.js";import"./index-DUKs2XLr.js";import"./index-CB9-nTE4.js";import"./sheet-CnHz6aUG.js";import"./index-BV8Wy0-v.js";import"./index-BMkdXBaN.js";import"./index-vQf6FlO2.js";import"./index-ACo_yVpg.js";import"./index-ByNdtO7x.js";import"./index-yuJPGWlL.js";import"./index-5kL4xweL.js";import"./index-CIMAa5B7.js";import"./index-D5mq6C8D.js";import"./index-N66yc9Ib.js";import"./index-IVJZSK8U.js";import"./x-BEm08ED7.js";import"./skeleton-A7behTLO.js";import"./tooltip-Ce8VEweP.js";import"./index-C_9DACu4.js";import"./index-UFuzBEnu.js";import"./index-BZjnzXVK.js";const M=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],N=j("inbox",M),se={title:"UI/Sidebar",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}},G=[{title:"Home",url:"#",icon:h},{title:"Inbox",url:"#",icon:N},{title:"Calendar",url:"#",icon:f},{title:"Search",url:"#",icon:g},{title:"Settings",url:"#",icon:C}],t={render:a=>e.jsxs(o,{children:[e.jsxs(i,{...a,children:[e.jsx(n,{children:e.jsx("h2",{className:"px-4 text-lg font-semibold",children:"App Name"})}),e.jsx(s,{children:e.jsxs(d,{children:[e.jsx(m,{children:"Application"}),e.jsx(p,{children:e.jsx(l,{children:G.map(r=>e.jsx(c,{children:e.jsx(b,{asChild:!0,children:e.jsxs("a",{href:r.url,children:[e.jsx(r.icon,{}),e.jsx("span",{children:r.title})]})})},r.title))})})]})}),e.jsx(u,{children:e.jsx("p",{className:"px-4 text-xs text-muted-foreground",children:"Footer Content"})}),e.jsx(S,{})]}),e.jsxs("main",{className:"flex-1 p-4",children:[e.jsx(x,{}),e.jsx("div",{className:"p-4 border rounded-lg border-dashed mt-4",children:"Main Content Area"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const de=["Default"];export{t as Default,de as __namedExportsOrder,se as default};
