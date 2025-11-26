import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function StickerSheetLayout() {
  return (
    <div className="min-h-screen bg-background p-10">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Buttons */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Interactive triggers for actions.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4 items-center">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>

          {/* 2. Inputs */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>Fields for user text entry.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                 <Label htmlFor="text">Text</Label>
                <Input type="text" id="text" placeholder="Disabled input" disabled />
              </div>
            </CardContent>
          </Card>

          {/* 3. Badges */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status indicators and labels.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          {/* 4. Avatars */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
              <CardDescription>User profile images.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* 5. Switch */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Switch</CardTitle>
              <CardDescription>Toggle controls.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">Notifications</Label>
              </div>
            </CardContent>
          </Card>

          {/* 6. Slider */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Slider</CardTitle>
              <CardDescription>Range selection input.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Slider defaultValue={[33]} max={100} step={1} />
              <Slider defaultValue={[50, 75]} max={100} step={1} />
            </CardContent>
          </Card>

           {/* 7. Tabs */}
           <Card className="flex flex-col md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Segmented content views.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <p className="text-sm text-muted-foreground py-4">
                    Make changes to your account here. Click save when you're done.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <p className="text-sm text-muted-foreground py-4">
                    Change your password here. After saving, you'll be logged out.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* 8. Card (Meta) */}
          <Card className="flex flex-col md:col-span-2 lg:col-span-2">
             <CardHeader>
              <CardTitle>Card</CardTitle>
              <CardDescription>Container for grouped content.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="rounded-md border p-4 bg-muted/20">
                  <h3 className="font-medium mb-2">This is a card within a card</h3>
                  <p className="text-sm text-muted-foreground">Cards are used to group related content and actions. They are one of the most versatile components in the library.</p>
                  <div className="mt-4 flex justify-end">
                    <Button size="sm">Action</Button>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

