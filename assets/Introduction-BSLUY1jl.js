import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-GXF-gqXV.js";import{M as o,S as s}from"./blocks-D4eqba3d.js";import{StickerSheetExample as l}from"./sticker-sheet.stories-BZHPyY5i.js";import"./iframe-CKhhgl9q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUKs2XLr.js";import"./index-CB9-nTE4.js";import"./index-CThXmo1i.js";import"./button-h8Xtxk8g.js";import"./index-kfhzG9hJ.js";import"./index-CBcad8_V.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./input-Bw95PIWX.js";import"./card-C3N4QfhV.js";import"./badge-_FAPCdnR.js";import"./avatar-CPzBDbZr.js";import"./index-CIMAa5B7.js";import"./index-ByNdtO7x.js";import"./switch-DzDgZm3l.js";import"./index-BMkdXBaN.js";import"./index-vQf6FlO2.js";import"./index-yuJPGWlL.js";import"./index-CAnrUYrn.js";import"./index-UFuzBEnu.js";import"./slider-CT216LCl.js";import"./index-BdQq_4o_.js";import"./index-DRde4DcG.js";import"./index-dwsKs55q.js";import"./tabs-CHLmvFow.js";import"./index-CgRHhljm.js";import"./index-ACo_yVpg.js";import"./index-IVJZSK8U.js";import"./label-CXn17Gkl.js";function i(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction"}),`
`,e.jsx(r.h1,{id:"prism-react-lib",children:"Prism React Lib"}),`
`,e.jsx(r.p,{children:"A modern, accessible, and beautiful React component library built with TypeScript and Tailwind CSS."}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["🎨 ",e.jsx(r.strong,{children:"Modern Design"}),": Beautifully designed components out of the box."]}),`
`,e.jsxs(r.li,{children:["🌙 ",e.jsx(r.strong,{children:"Dark Mode"}),": Built-in dark mode support using standard CSS variables."]}),`
`,e.jsxs(r.li,{children:["♿ ",e.jsx(r.strong,{children:"Accessible"}),": Built on top of Radix UI primitives for robustness and accessibility."]}),`
`,e.jsxs(r.li,{children:["🔧 ",e.jsx(r.strong,{children:"TypeScript"}),": Fully typed for excellent developer experience."]}),`
`,e.jsxs(r.li,{children:["⚡ ",e.jsx(r.strong,{children:"Vite & Tailwind"}),": Optimized for performance."]}),`
`]}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.p,{children:"Install the package using your preferred package manager:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`npm install prism-react-lib
# or
yarn add prism-react-lib
# or
pnpm add prism-react-lib
`})}),`
`,e.jsx(r.h2,{id:"setup",children:"Setup"}),`
`,e.jsx(r.h3,{id:"1-import-styles",children:"1. Import Styles"}),`
`,e.jsxs(r.p,{children:["To use the components correctly, you must import the CSS file at the root of your application (e.g., in ",e.jsx(r.code,{children:"main.tsx"}),", ",e.jsx(r.code,{children:"App.tsx"}),", or ",e.jsx(r.code,{children:"layout.tsx"}),"):"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import 'prism-react-lib/styles.css';
`})}),`
`,e.jsx(r.h3,{id:"2-usage-example",children:"2. Usage Example"}),`
`,e.jsx(r.p,{children:"Import and use components in your React application:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Button, Card, CardHeader, CardTitle, CardContent } from 'prism-react-lib';

function App() {
  return (
    <div className="p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Deploy</Button>
        </CardContent>
      </Card>
    </div>
  );
}
`})}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.p,{children:"This library includes a comprehensive set of UI components:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Core"}),": Button, Badge, Card, Separator, Skeleton"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Inputs"}),": Input, Textarea, Checkbox, RadioGroup, Select, Switch, Slider, Form"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Feedback"}),": Alert, Progress, Spinner, Sonner (Toast), Tooltip"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Overlay"}),": Dialog, Drawer, Sheet, Popover, AlertDialog, ContextMenu, DropdownMenu"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Navigation"}),": Breadcrumb, Menubar, NavigationMenu, Pagination, Tabs, Sidebar"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Data Display"}),": Avatar, Table, Calendar, Chart, Carousel, Accordion, ScrollArea"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Layout"}),": AspectRatio, Resizable, Collapsible"]}),`
`]}),`
`,e.jsx(r.h2,{id:"theming",children:"Theming"}),`
`,e.jsx(r.p,{children:"The library uses CSS variables (oklch color space) for theming. You can customize the look and feel by overriding these variables in your global CSS."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
  /* Override primary color */
  --primary: oklch(0.4 0.15 250);
  --primary-foreground: oklch(1 0 0);
  
  /* Override radius */
  --radius: 0.5rem;
}
`})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.p,{children:e.jsx(r.em,{children:"Note: This library is currently in development (v0.0.2)."})})]})}function _(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{_ as default};
