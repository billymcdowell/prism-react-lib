import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as s,a as d,b as r,c as o,d as t,e as c,f as n}from"./table-_22xWezX.js";import"./utils-CDN07tui.js";const u={title:"UI/Table",component:s,tags:["autodocs"]},m=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],l={render:i=>e.jsxs(s,{...i,children:[e.jsx(d,{children:"A list of your recent invoices."}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(t,{className:"w-[100px]",children:"Invoice"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Method"}),e.jsx(t,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:m.map(a=>e.jsxs(o,{children:[e.jsx(n,{className:"font-medium",children:a.invoice}),e.jsx(n,{children:a.paymentStatus}),e.jsx(n,{children:a.paymentMethod}),e.jsx(n,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const h=["Default"];export{l as Default,h as __namedExportsOrder,u as default};
