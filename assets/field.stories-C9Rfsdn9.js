import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-Duy2BnNL.js";import{c as v}from"./index-B_jtOnfb.js";import{c as l}from"./utils-CDN07tui.js";import{L as N}from"./label-CYuUgHlC.js";import"./separator-Bw1-Ia-F.js";import{I as g}from"./input-Bw95PIWX.js";import{S as _}from"./switch-BkWJW2y6.js";function x({className:a,...t}){return e.jsx("fieldset",{"data-slot":"field-set",className:l("flex flex-col gap-6","has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",a),...t})}function h({className:a,...t}){return e.jsx("div",{"data-slot":"field-group",className:l("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",a),...t})}const S=v("group/field flex w-full gap-3 data-[invalid=true]:text-destructive",{variants:{orientation:{vertical:["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],responsive:["flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function d({className:a,orientation:t="vertical",...r}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":t,className:l(S({orientation:t}),a),...r})}function c({className:a,...t}){return e.jsx("div",{"data-slot":"field-content",className:l("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",a),...t})}function m({className:a,...t}){return e.jsx(N,{"data-slot":"field-label",className:l("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4","has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",a),...t})}function F({className:a,...t}){return e.jsx("div",{"data-slot":"field-label",className:l("flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",a),...t})}function u({className:a,...t}){return e.jsx("p",{"data-slot":"field-description",className:l("text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance","last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5","[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",a),...t})}function y({className:a,children:t,errors:r,...j}){const f=w.useMemo(()=>{if(t)return t;if(!r?.length)return null;const p=[...new Map(r.map(i=>[i?.message,i])).values()];return p?.length==1?p[0]?.message:e.jsx("ul",{className:"ml-4 flex list-disc flex-col gap-1",children:p.map((i,b)=>i?.message&&e.jsx("li",{children:i.message},b))})},[t,r]);return f?e.jsx("div",{role:"alert","data-slot":"field-error",className:l("text-destructive text-sm font-normal",a),...j,children:f}):null}d.__docgenInfo={description:"",methods:[],displayName:"Field",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"FieldLabel"};u.__docgenInfo={description:"",methods:[],displayName:"FieldDescription"};y.__docgenInfo={description:"",methods:[],displayName:"FieldError",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"{ message?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ message?: string }",signature:{properties:[{key:"message",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:"Array<{ message?: string } | undefined>"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"FieldGroup"};x.__docgenInfo={description:"",methods:[],displayName:"FieldSet"};c.__docgenInfo={description:"",methods:[],displayName:"FieldContent"};F.__docgenInfo={description:"",methods:[],displayName:"FieldTitle"};const E={title:"UI/Field",component:d},s={render:a=>e.jsxs(d,{className:"w-[350px]",...a,children:[e.jsx(m,{htmlFor:"email",children:"Email"}),e.jsxs(c,{children:[e.jsx(g,{id:"email",placeholder:"hello@example.com"}),e.jsx(u,{children:"We will never share your email with anyone else."})]})]})},o={render:a=>e.jsxs(d,{className:"w-[350px]",...a,children:[e.jsx(m,{htmlFor:"username",children:"Username"}),e.jsxs(c,{children:[e.jsx(g,{id:"username",placeholder:"shadcn"}),e.jsx(y,{errors:[{message:"Username is already taken."}]})]})]})},n={render:a=>e.jsxs(x,{className:"w-[400px]",children:[e.jsx(F,{children:"Notifications"}),e.jsx(h,{children:e.jsxs(d,{orientation:"horizontal",...a,children:[e.jsxs(c,{children:[e.jsx(m,{children:"Emails"}),e.jsx(u,{children:"Receive emails about your account activity."})]}),e.jsx(_,{})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Field className="w-[350px]" {...args}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" placeholder="hello@example.com" />
        <FieldDescription>
          We will never share your email with anyone else.
        </FieldDescription>
      </FieldContent>
    </Field>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Field className="w-[350px]" {...args}>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <FieldContent>
        <Input id="username" placeholder="shadcn" />
        <FieldError errors={[{
        message: 'Username is already taken.'
      }]} />
      </FieldContent>
    </Field>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet className="w-[400px]">
      <FieldTitle>Notifications</FieldTitle>
      <FieldGroup>
        <Field orientation="horizontal" {...args}>
          <FieldContent>
            <FieldLabel>Emails</FieldLabel>
            <FieldDescription>
              Receive emails about your account activity.
            </FieldDescription>
          </FieldContent>
          <Switch />
        </Field>
      </FieldGroup>
    </FieldSet>
}`,...n.parameters?.docs?.source}}};const I=["Default","WithError","Horizontal"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Horizontal:n,WithError:o,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{G as S};
