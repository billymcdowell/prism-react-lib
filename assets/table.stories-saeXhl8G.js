import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as n}from"./utils-CDN07tui.js";function i({className:t,...a}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:n("w-full caption-bottom text-sm",t),...a})})}function r({className:t,...a}){return e.jsx("thead",{"data-slot":"table-header",className:n("[&_tr]:border-b",t),...a})}function c({className:t,...a}){return e.jsx("tbody",{"data-slot":"table-body",className:n("[&_tr:last-child]:border-0",t),...a})}function d({className:t,...a}){return e.jsx("tr",{"data-slot":"table-row",className:n("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",t),...a})}function o({className:t,...a}){return e.jsx("th",{"data-slot":"table-head",className:n("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...a})}function l({className:t,...a}){return e.jsx("td",{"data-slot":"table-cell",className:n("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...a})}function m({className:t,...a}){return e.jsx("caption",{"data-slot":"table-caption",className:n("text-muted-foreground mt-4 text-sm",t),...a})}i.__docgenInfo={description:"",methods:[],displayName:"Table"};r.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};c.__docgenInfo={description:"",methods:[],displayName:"TableBody"};o.__docgenInfo={description:"",methods:[],displayName:"TableHead"};d.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};m.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const h={title:"UI/Table",component:i,tags:["autodocs"]},b=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],s={render:t=>e.jsxs(i,{...t,children:[e.jsx(m,{children:"A list of your recent invoices."}),e.jsx(r,{children:e.jsxs(d,{children:[e.jsx(o,{className:"w-[100px]",children:"Invoice"}),e.jsx(o,{children:"Status"}),e.jsx(o,{children:"Method"}),e.jsx(o,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:b.map(a=>e.jsxs(d,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...s.parameters?.docs?.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,h as default};
