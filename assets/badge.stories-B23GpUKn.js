import{j as u}from"./jsx-runtime-u17CrQMm.js";import{S as l}from"./index-CBWl2S-Y.js";import{c as p}from"./index-B_jtOnfb.js";import{c as v}from"./utils-CDN07tui.js";import"./iframe-ByXrCVSE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CSosH7wG.js";const g=p("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function s({className:n,variant:o,asChild:i=!1,...c}){const d=i?l:"span";return u.jsx(d,{"data-slot":"badge",className:v(g({variant:o}),n),...c})}s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const w={title:"UI/Badge",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},e={args:{children:"Badge",variant:"default"}},r={args:{children:"Secondary",variant:"secondary"}},a={args:{children:"Destructive",variant:"destructive"}},t={args:{children:"Outline",variant:"outline"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'default'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Destructive',
    variant: 'destructive'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};const D=["Default","Secondary","Destructive","Outline"];export{e as Default,a as Destructive,t as Outline,r as Secondary,D as __namedExportsOrder,w as default};
