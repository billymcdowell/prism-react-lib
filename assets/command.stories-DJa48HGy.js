import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as d,a as c,b as l,c as i,d as e,e as m,f as p,g as s}from"./command-Cq4FZCAk.js";import{C as h}from"./calendar-DTwktWDt.js";import{U as o}from"./user-B0Y3QrPy.js";import{S as r}from"./settings-Cfa9ptpa.js";import{M as C}from"./mail-BKMksO1T.js";const u={title:"UI/Command",component:d},a={render:t=>n.jsxs(d,{className:"rounded-lg border shadow-md md:min-w-[450px]",...t,children:[n.jsx(c,{placeholder:"Type a command or search..."}),n.jsxs(l,{children:[n.jsx(i,{children:"No results found."}),n.jsxs(e,{heading:"Suggestions",children:[n.jsxs(m,{children:[n.jsx(h,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Calendar"})]}),n.jsxs(m,{children:[n.jsx(o,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"User"})]}),n.jsxs(m,{children:[n.jsx(r,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Launch"})]})]}),n.jsx(p,{}),n.jsxs(e,{heading:"Settings",children:[n.jsxs(m,{children:[n.jsx(o,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Profile"}),n.jsx(s,{children:"⌘P"})]}),n.jsxs(m,{children:[n.jsx(C,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Mail"}),n.jsx(s,{children:"⌘B"})]}),n.jsxs(m,{children:[n.jsx(r,{className:"mr-2 h-4 w-4"}),n.jsx("span",{children:"Settings"}),n.jsx(s,{children:"⌘S"})]})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Command className="rounded-lg border shadow-md md:min-w-[450px]" {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>User</span>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MailIcon className="mr-2 h-4 w-4" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...a.parameters?.docs?.source}}};const x=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:x,default:u},Symbol.toStringTag,{value:"Module"}));export{N as S};
