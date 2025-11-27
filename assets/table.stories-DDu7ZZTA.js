import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as s,a as r,b as d,c as o,d as n,e as c,f as l}from"./table-_22xWezX.js";const m={title:"UI/Table",component:s},b=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],t={render:i=>e.jsxs(s,{...i,children:[e.jsx(r,{children:"A list of your recent invoices."}),e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(c,{children:b.map(a=>e.jsxs(o,{children:[e.jsx(l,{className:"font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"text-right",children:a.totalAmount})]},a.invoice))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:T,default:m},Symbol.toStringTag,{value:"Module"}));export{h as S};
