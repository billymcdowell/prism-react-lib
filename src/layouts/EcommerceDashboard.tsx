import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
    ShoppingBag, 
    LayoutDashboard, 
    Package, 
    Users, 
    Settings,
    CreditCard,
    TrendingUp,
    MoreHorizontal
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EcommerceDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold">Store Overview</h1>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="outline">Download Report</Button>
                <Button>New Product</Button>
            </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <span className="font-bold text-muted-foreground">$</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$15,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Orders</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Products</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+34</div>
                        <p className="text-xs text-muted-foreground">+12 new products</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Orders Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>You made 265 sales this month.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Order</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { id: "ORD-001", customer: "Liam Johnson", status: "Paid", method: "Credit Card", amount: "$250.00" },
                                { id: "ORD-002", customer: "Olivia Smith", status: "Pending", method: "PayPal", amount: "$150.00" },
                                { id: "ORD-003", customer: "Noah Williams", status: "Paid", method: "Credit Card", amount: "$350.00" },
                                { id: "ORD-004", customer: "Emma Brown", status: "Shipped", method: "Credit Card", amount: "$450.00" },
                                { id: "ORD-005", customer: "Ava Jones", status: "Paid", method: "PayPal", amount: "$550.00" },
                            ].map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <AvatarImage src={`/avatars/${order.id}.png`} />
                                                <AvatarFallback>{order.customer[0]}</AvatarFallback>
                                            </Avatar>
                                            {order.customer}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={order.status === "Paid" || order.status === "Shipped" ? "default" : "secondary"}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{order.method}</TableCell>
                                    <TableCell className="text-right">{order.amount}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>View details</DropdownMenuItem>
                                                <DropdownMenuItem>Print invoice</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
            <SidebarMenuItem>
                <div className="flex items-center gap-2 px-4 py-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ShoppingBag className="size-4" />
                    </div>
                    <span className="font-semibold group-data-[collapsible=icon]:hidden">ShopAdmin</span>
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Dashboard", url: "#", icon: LayoutDashboard },
                { title: "Orders", url: "#", icon: ShoppingBag },
                { title: "Products", url: "#", icon: Package },
                { title: "Customers", url: "#", icon: Users },
                { title: "Billing", url: "#", icon: CreditCard },
                { title: "Settings", url: "#", icon: Settings },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

