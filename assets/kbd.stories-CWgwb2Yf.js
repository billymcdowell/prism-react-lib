import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./utils-CDN07tui.js";function n({className:t,...s}){return e.jsx("kbd",{"data-slot":"kbd",className:d("bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none","[&_svg:not([class*='size-'])]:size-3","[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",t),...s})}function a({className:t,...s}){return e.jsx("kbd",{"data-slot":"kbd-group",className:d("inline-flex items-center gap-1",t),...s})}n.__docgenInfo={description:"",methods:[],displayName:"Kbd"};a.__docgenInfo={description:"",methods:[],displayName:"KbdGroup"};const c={title:"UI/Kbd",component:n},o={render:t=>e.jsx(n,{...t,children:"⌘ K"})},r={render:()=>e.jsxs(a,{children:[e.jsx(n,{children:"⌘"}),e.jsx(n,{children:"K"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Kbd {...args}>⌘ K</Kbd>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
    </KbdGroup>
}`,...r.parameters?.docs?.source}}};const i=["Default","Group"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Group:r,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{u as S};
