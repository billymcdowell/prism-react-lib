import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as p,a as u,b as d,c as m,d as s,e as a,f as e,g as r,h as l,i as c,j as w,k as i}from"./dropdown-menu-mc-iTyRk.js";import{B as h}from"./button-DeiKwW4F.js";import{U as M}from"./user-hTtRbWrj.js";import{C as D}from"./credit-card-BwcL4JkP.js";import{S as j}from"./settings-BvujqcUZ.js";import{K as x,U as S,C as g,G as I,L as N}from"./user-plus-xOihELu3.js";import{U as b}from"./users-CXEKQX6b.js";import{M as f}from"./mail-DfM9lUVf.js";import{M as C}from"./message-square-B7Dyv18p.js";import{P}from"./plus-CWkyx5g9.js";import{C as T}from"./cloud-GZ1aOBdm.js";import{L as y}from"./log-out-BWUe0xin.js";const L={title:"UI/DropdownMenu",component:p},o={render:t=>n.jsxs(p,{...t,children:[n.jsx(u,{asChild:!0,children:n.jsx(h,{variant:"outline",children:"Open"})}),n.jsxs(d,{className:"w-56",children:[n.jsx(m,{children:"My Account"}),n.jsx(s,{}),n.jsxs(a,{children:[n.jsxs(e,{children:[n.jsx(M,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Profile"}),n.jsx(r,{children:"⇧⌘P"})]}),n.jsxs(e,{children:[n.jsx(D,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Billing"}),n.jsx(r,{children:"⌘B"})]}),n.jsxs(e,{children:[n.jsx(j,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Settings"}),n.jsx(r,{children:"⌘S"})]}),n.jsxs(e,{children:[n.jsx(x,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Keyboard shortcuts"}),n.jsx(r,{children:"⌘K"})]})]}),n.jsx(s,{}),n.jsxs(a,{children:[n.jsxs(e,{children:[n.jsx(b,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Team"})]}),n.jsxs(l,{children:[n.jsxs(c,{children:[n.jsx(S,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Invite users"})]}),n.jsx(w,{children:n.jsxs(i,{children:[n.jsxs(e,{children:[n.jsx(f,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Email"})]}),n.jsxs(e,{children:[n.jsx(C,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Message"})]}),n.jsx(s,{}),n.jsxs(e,{children:[n.jsx(g,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"More..."})]})]})})]}),n.jsxs(e,{children:[n.jsx(P,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"New Team"}),n.jsx(r,{children:"⌘+T"})]})]}),n.jsx(s,{}),n.jsxs(e,{children:[n.jsx(I,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"GitHub"})]}),n.jsxs(e,{children:[n.jsx(N,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Support"})]}),n.jsxs(e,{disabled:!0,children:[n.jsx(T,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"API"})]}),n.jsx(s,{}),n.jsxs(e,{children:[n.jsx(y,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Log out"}),n.jsx(r,{children:"⇧⌘Q"})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...o.parameters?.docs?.source}}};const B=["Default"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:B,default:L},Symbol.toStringTag,{value:"Module"}));export{R as S};
