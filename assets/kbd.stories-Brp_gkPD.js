import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./utils-CDN07tui.js";function o({className:t,...n}){return e.jsx("kbd",{"data-slot":"kbd",className:d("bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none","[&_svg:not([class*='size-'])]:size-3","[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",t),...n})}function a({className:t,...n}){return e.jsx("kbd",{"data-slot":"kbd-group",className:d("inline-flex items-center gap-1",t),...n})}o.__docgenInfo={description:"",methods:[],displayName:"Kbd"};a.__docgenInfo={description:"",methods:[],displayName:"KbdGroup"};const p={title:"UI/Kbd",component:o,tags:["autodocs"]},r={render:t=>e.jsx(o,{...t,children:"⌘ K"})},s={render:()=>e.jsxs(a,{children:[e.jsx(o,{children:"⌘"}),e.jsx(o,{children:"K"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Kbd {...args}>⌘ K</Kbd>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
    </KbdGroup>
}`,...s.parameters?.docs?.source}}};const u=["Default","Group"];export{r as Default,s as Group,u as __namedExportsOrder,p as default};
