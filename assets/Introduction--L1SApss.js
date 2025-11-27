import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CKMyecN8.js";import{M as o,S as s}from"./blocks-D7AWXfWX.js";import{StickerSheetExample as l}from"./sticker-sheet.stories-CnpywtJg.js";import"./iframe-DuVnZ3IU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CbPSGrel.js";import"./index-Cb-cBY0a.js";import"./index-7F2DRami.js";import"./button-Bf87xu13.js";import"./index-CZuJkbN3.js";import"./index-DD8fzp89.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./input-Bw95PIWX.js";import"./card-C3N4QfhV.js";import"./badge-DOxRuaMe.js";import"./avatar-0Ubx2_7f.js";import"./index-DbAc5SrR.js";import"./index-u8hsYIti.js";import"./switch-CXKL1giA.js";import"./index-TLdrDiDa.js";import"./index-Bwn2t3Ne.js";import"./index-D8xgHouE.js";import"./index-n56XjgTq.js";import"./index-C5WeB4ef.js";import"./slider-_fCVgZP5.js";import"./index-BdQq_4o_.js";import"./index-DGEPZup_.js";import"./index-CAjkVlSv.js";import"./tabs-BjA5alfV.js";import"./index-BjHiJlFA.js";import"./index-CKr2Hm9b.js";import"./index-DP5xuUnf.js";import"./label-mQp1_3YJ.js";function i(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction"}),`
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
