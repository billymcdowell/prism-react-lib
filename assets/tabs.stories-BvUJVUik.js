import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-ByXrCVSE.js";import{P as h,c as T}from"./index-_GgyENNU.js";import{c as U}from"./index-CkcuydbZ.js";import{c as S,R as O,I as q}from"./index-C7jyee_n.js";import{P as J}from"./index-B2mXhRUC.js";import{u as Q}from"./index-fgeIUTJt.js";import{u as W}from"./index-CQ1SDm7x.js";import{u as X}from"./index-CrmZR6Lu.js";import{c as x}from"./utils-CDN07tui.js";import{C as I,a as _,b as F,c as A,d as L,e as P}from"./card-C3N4QfhV.js";import{B as D}from"./button-DXipNNy6.js";import{I as v}from"./input-Bw95PIWX.js";import{L as f}from"./label-6sp4s1YW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7kr8Nhj.js";import"./index-CB3_CspQ.js";import"./index-CSosH7wG.js";import"./index-DqMhJp4S.js";import"./index-DQMh9hd7.js";import"./index-iC3IO28h.js";import"./index-CBWl2S-Y.js";import"./index-B_jtOnfb.js";var C="Tabs",[Y]=U(C,[S]),R=S(),[Z,y]=Y(C),k=p.forwardRef((a,t)=>{const{__scopeTabs:d,value:r,onValueChange:n,defaultValue:c,orientation:s="horizontal",dir:l,activationMode:m="automatic",...b}=a,i=Q(l),[o,u]=W({prop:r,onChange:n,defaultProp:c??"",caller:C});return e.jsx(Z,{scope:d,baseId:X(),value:o,onValueChange:u,orientation:s,dir:i,activationMode:m,children:e.jsx(h.div,{dir:i,"data-orientation":s,...b,ref:t})})});k.displayName=C;var V="TabsList",E=p.forwardRef((a,t)=>{const{__scopeTabs:d,loop:r=!0,...n}=a,c=y(V,d),s=R(d);return e.jsx(O,{asChild:!0,...s,orientation:c.orientation,dir:c.dir,loop:r,children:e.jsx(h.div,{role:"tablist","aria-orientation":c.orientation,...n,ref:t})})});E.displayName=V;var M="TabsTrigger",B=p.forwardRef((a,t)=>{const{__scopeTabs:d,value:r,disabled:n=!1,...c}=a,s=y(M,d),l=R(d),m=H(s.baseId,r),b=z(s.baseId,r),i=r===s.value;return e.jsx(q,{asChild:!0,...l,focusable:!n,active:i,children:e.jsx(h.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":b,"data-state":i?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:m,...c,ref:t,onMouseDown:T(a.onMouseDown,o=>{!n&&o.button===0&&o.ctrlKey===!1?s.onValueChange(r):o.preventDefault()}),onKeyDown:T(a.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&s.onValueChange(r)}),onFocus:T(a.onFocus,()=>{const o=s.activationMode!=="manual";!i&&!n&&o&&s.onValueChange(r)})})})});B.displayName=M;var $="TabsContent",G=p.forwardRef((a,t)=>{const{__scopeTabs:d,value:r,forceMount:n,children:c,...s}=a,l=y($,d),m=H(l.baseId,r),b=z(l.baseId,r),i=r===l.value,o=p.useRef(i);return p.useEffect(()=>{const u=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(u)},[]),e.jsx(J,{present:n||i,children:({present:u})=>e.jsx(h.div,{"data-state":i?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":m,hidden:!u,id:b,tabIndex:0,...s,ref:t,style:{...a.style,animationDuration:o.current?"0s":void 0},children:u&&c})})});G.displayName=$;function H(a,t){return`${a}-trigger-${t}`}function z(a,t){return`${a}-content-${t}`}var ee=k,ae=E,te=B,re=G;function N({className:a,...t}){return e.jsx(ee,{"data-slot":"tabs",className:x("flex flex-col gap-2",a),...t})}function K({className:a,...t}){return e.jsx(ae,{"data-slot":"tabs-list",className:x("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...t})}function j({className:a,...t}){return e.jsx(te,{"data-slot":"tabs-trigger",className:x("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...t})}function w({className:a,...t}){return e.jsx(re,{"data-slot":"tabs-content",className:x("flex-1 outline-none",a),...t})}N.__docgenInfo={description:"",methods:[],displayName:"Tabs"};K.__docgenInfo={description:"",methods:[],displayName:"TabsList"};j.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};w.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const _e={title:"UI/Tabs",component:N,tags:["autodocs"]},g={render:a=>e.jsxs(N,{defaultValue:"account",className:"w-[400px]",...a,children:[e.jsxs(K,{className:"grid w-full grid-cols-2",children:[e.jsx(j,{value:"account",children:"Account"}),e.jsx(j,{value:"password",children:"Password"})]}),e.jsx(w,{value:"account",children:e.jsxs(I,{children:[e.jsxs(_,{children:[e.jsx(F,{children:"Account"}),e.jsx(A,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(L,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"name",children:"Name"}),e.jsx(v,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"username",children:"Username"}),e.jsx(v,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(P,{children:e.jsx(D,{children:"Save changes"})})]})}),e.jsx(w,{value:"password",children:e.jsxs(I,{children:[e.jsxs(_,{children:[e.jsx(F,{children:"Password"}),e.jsx(A,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(L,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"current",children:"Current password"}),e.jsx(v,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"new",children:"New password"}),e.jsx(v,{id:"new",type:"password"})]})]}),e.jsx(P,{children:e.jsx(D,{children:"Save password"})})]})})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
}`,...g.parameters?.docs?.source}}};const Fe=["Default"];export{g as Default,Fe as __namedExportsOrder,_e as default};
