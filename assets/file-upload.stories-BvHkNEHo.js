import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as o,a as l,b as d}from"./file-upload-BeQduna5.js";import{B as t}from"./button-D4N-Zn8t.js";import{c as n}from"./createLucideIcon-ZT_-Fol2.js";import"./utils-CDN07tui.js";import"./iframe-Duy2BnNL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNDXaxkE.js";import"./index-p2IZywWK.js";import"./index-Bgfk8m88.js";import"./index-fiM-0oeH.js";import"./index-B_jtOnfb.js";const p=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],i=n("upload",p),N={title:"AI/FileUpload",component:o,tags:["autodocs"],args:{}},a={render:s=>e.jsxs(o,{...s,children:[e.jsx(l,{asChild:!0,children:e.jsxs(t,{variant:"outline",children:[e.jsx(i,{className:"w-4 h-4 mr-2"}),"Upload Files"]})}),e.jsx(d,{children:e.jsx("div",{className:"p-8 bg-background rounded-lg shadow-lg text-center",children:e.jsx("p",{className:"text-lg font-medium",children:"Drop files here"})})})]})},r={render:s=>e.jsx(o,{...s,disabled:!0,children:e.jsx(l,{asChild:!0,children:e.jsxs(t,{variant:"outline",disabled:!0,children:[e.jsx(i,{className:"w-4 h-4 mr-2"}),"Upload Files (Disabled)"]})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <FileUpload {...args}>
        <FileUploadTrigger asChild>
            <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
            </Button>
        </FileUploadTrigger>
        <FileUploadContent>
            <div className="p-8 bg-background rounded-lg shadow-lg text-center">
                <p className="text-lg font-medium">Drop files here</p>
            </div>
        </FileUploadContent>
    </FileUpload>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <FileUpload {...args} disabled>
        <FileUploadTrigger asChild>
             <Button variant="outline" disabled>
                <Upload className="w-4 h-4 mr-2" />
                Upload Files (Disabled)
            </Button>
        </FileUploadTrigger>
    </FileUpload>
}`,...r.parameters?.docs?.source}}};const D=["Default","Disabled"];export{a as Default,r as Disabled,D as __namedExportsOrder,N as default};
