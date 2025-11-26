import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
    User,
    Bell,
    Lock,
    Monitor,
    Globe,
    HelpCircle,
    LogOut
} from "lucide-react"

export default function SettingsLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 md:max-w-4xl md:mx-auto w-full">
            <div className="flex items-center gap-2 py-4">
                <SidebarTrigger className="md:hidden" />
                <h1 className="text-3xl font-bold">Settings</h1>
            </div>
            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4 lg:w-[400px] mb-8">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="display">Display</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general">
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>Update your profile details and public information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input id="first-name" placeholder="Max" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input id="last-name" placeholder="Robinson" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m.robinson@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Input id="bio" placeholder="Software Engineer at Acme Inc." />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>

                         <Card>
                            <CardHeader>
                                <CardTitle>Language & Region</CardTitle>
                                <CardDescription>Customize your language and regional settings.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Language</Label>
                                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option>English (United States)</option>
                                        <option>French (France)</option>
                                        <option>German (Germany)</option>
                                        <option>Spanish (Spain)</option>
                                    </select>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password & Security</CardTitle>
                            <CardDescription>Manage your password and security settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Update Password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                         <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Choose what you want to be notified about.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Communication emails</Label>
                                    <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Marketing emails</Label>
                                    <p className="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Social emails</Label>
                                    <p className="text-sm text-muted-foreground">Receive emails for friend requests, follows, and more.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="none" className="hidden md:flex w-64 border-r bg-muted/10" {...props}>
      <SidebarHeader className="h-16 border-b flex items-center px-6">
        <span className="font-bold text-lg">Settings</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {[
                { title: "Profile", url: "#", icon: User },
                { title: "Account", url: "#", icon: Lock },
                { title: "Appearance", url: "#", icon: Monitor },
                { title: "Notifications", url: "#", icon: Bell },
                { title: "Language", url: "#", icon: Globe },
              ].map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2 font-medium">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
             <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                             <a href="#" className="flex items-center gap-2 font-medium">
                                <HelpCircle className="h-4 w-4" />
                                <span>Help & Support</span>
                             </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <SidebarMenuButton asChild className="text-destructive hover:text-destructive">
                             <a href="#" className="flex items-center gap-2 font-medium">
                                <LogOut className="h-4 w-4" />
                                <span>Log out</span>
                             </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
             </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

