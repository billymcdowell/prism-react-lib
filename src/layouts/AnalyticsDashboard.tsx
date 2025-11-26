import React, { useState } from "react"
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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    CalendarIcon,
    BarChart3,
    TrendingUp,
    TrendingDown,
    Users,
    DollarSign,
    CreditCard,
    Activity,
    PieChart,
    Download
} from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

export default function AnalyticsDashboard() {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2023, 0, 20),
        to: new Date(2023, 1, 20),
    })

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold">Analytics Overview</h1>
            </div>
            <div className="flex items-center gap-2">
                <div className={cn("grid gap-2")}>
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Pick a date</span>
                            )}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                        />
                        </PopoverContent>
                    </Popover>
                </div>
                <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                </Button>
            </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
            {/* Stats Row */}
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <div className="flex items-center text-xs text-green-500">
                             <TrendingUp className="mr-1 h-3 w-3" />
                             +20.1%
                             <span className="ml-1 text-muted-foreground">from last month</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                         <div className="flex items-center text-xs text-green-500">
                             <TrendingUp className="mr-1 h-3 w-3" />
                             +180.1%
                             <span className="ml-1 text-muted-foreground">from last month</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                         <div className="flex items-center text-xs text-red-500">
                             <TrendingDown className="mr-1 h-3 w-3" />
                             -4.5%
                             <span className="ml-1 text-muted-foreground">from last month</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                         <div className="flex items-center text-xs text-muted-foreground">
                             +201 since last hour
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {/* Placeholder for Chart */}
                        <div className="h-[300px] w-full flex items-end justify-between gap-2 p-4">
                            {[40, 70, 35, 60, 80, 50, 90, 65, 85, 45, 75, 55].map((h, i) => (
                                <div key={i} className="w-full bg-primary/20 rounded-t hover:bg-primary/80 transition-all relative group">
                                    <div className="absolute bottom-0 w-full bg-primary rounded-t" style={{ height: `${h}%` }}></div>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
                                        ${h * 1000}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between px-4 text-xs text-muted-foreground mt-2">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>You made 265 sales this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
                                { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
                                { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
                                { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
                                { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
                            ].map((sale, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                                        <p className="text-sm text-muted-foreground">{sale.email}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{sale.amount}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Another Row */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Traffic Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div className="flex items-center justify-center h-[200px]">
                             <PieChart className="h-32 w-32 text-muted-foreground/20" />
                             {/* Visual placeholder for pie chart */}
                         </div>
                         <div className="mt-4 space-y-2">
                             <div className="flex items-center justify-between text-sm">
                                 <div className="flex items-center gap-2">
                                     <div className="h-3 w-3 rounded-full bg-primary"></div>
                                     <span>Direct</span>
                                 </div>
                                 <span>45%</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                                 <div className="flex items-center gap-2">
                                     <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                     <span>Social</span>
                                 </div>
                                 <span>32%</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                                 <div className="flex items-center gap-2">
                                     <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                     <span>Organic</span>
                                 </div>
                                 <span>23%</span>
                             </div>
                         </div>
                    </CardContent>
                </Card>
                 <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>User Retention</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full flex items-end justify-between gap-1">
                             {[...Array(30)].map((_, i) => {
                                 const h = Math.floor(Math.random() * 80) + 20;
                                 return (
                                     <div key={i} className="flex-1 bg-primary/60 hover:bg-primary transition-colors rounded-t" style={{ height: `${h}%` }}></div>
                                 )
                             })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
         <div className="flex items-center gap-2 px-4 py-2 h-14">
             <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Activity className="size-4" />
            </div>
            <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">Analytics</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Overview", url: "#", icon: BarChart3, active: true },
                { title: "Sales", url: "#", icon: DollarSign },
                { title: "Traffic", url: "#", icon: Users },
                { title: "Reports", url: "#", icon: Download },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.active} tooltip={item.title}>
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
    </Sidebar>
  )
}

