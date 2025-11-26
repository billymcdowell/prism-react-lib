import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
    Heart,
    MessageCircle,
    Share2,
    MoreHorizontal,
    Image as ImageIcon,
    Smile,
    MapPin,
    Search,
    Home,
    Bell,
    Mail,
    User,
    Bookmark,
    Hash
} from "lucide-react"

export default function SocialFeed() {
  return (
    <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <a href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">SocialApp</span>
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search..." className="pl-8" />
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                         <Mail className="h-5 w-5" />
                    </Button>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>

        <div className="container grid grid-cols-1 gap-6 py-6 md:grid-cols-[240px_1fr_300px] lg:grid-cols-[280px_1fr_300px]">
            {/* Left Sidebar - Navigation */}
            <div className="hidden flex-col gap-2 md:flex">
                <nav className="grid items-start gap-2">
                    <Button variant="ghost" className="justify-start gap-2">
                        <Home className="h-4 w-4" />
                        Home
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2">
                        <Hash className="h-4 w-4" />
                        Explore
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2">
                        <Bell className="h-4 w-4" />
                        Notifications
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2">
                        <Mail className="h-4 w-4" />
                        Messages
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2">
                        <Bookmark className="h-4 w-4" />
                        Bookmarks
                    </Button>
                    <Button variant="ghost" className="justify-start gap-2">
                        <User className="h-4 w-4" />
                        Profile
                    </Button>
                    <Separator className="my-2" />
                    <div className="px-4 py-2">
                        <h3 className="mb-2 text-sm font-semibold">Communities</h3>
                         <div className="space-y-1">
                            <Button variant="ghost" size="sm" className="w-full justify-start font-normal">
                                Tech Enthusiasts
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start font-normal">
                                Design Hub
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start font-normal">
                                React Developers
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Main Feed */}
            <div className="flex flex-col gap-6">
                {/* Create Post */}
                <Card>
                    <CardContent className="p-4">
                        <div className="flex gap-4">
                            <Avatar>
                                <AvatarFallback>ME</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <Input className="mb-4 border-none bg-muted/50 shadow-none focus-visible:ring-0" placeholder="What's on your mind?" />
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                            <ImageIcon className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                            <Smile className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Button size="sm">Post</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Posts */}
                {[1, 2, 3].map((post) => (
                    <Card key={post}>
                        <CardHeader className="flex flex-row items-start gap-4 p-4">
                            <Avatar>
                                <AvatarImage src={`/avatars/0${post}.png`} />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-sm">John Doe</h4>
                                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-sm">
                                Just finished working on a new project using React and Shadcn UI. The components are incredibly flexible and easy to style! 🚀 #webdev #react
                            </p>
                             <div className="mt-4 overflow-hidden rounded-md bg-muted h-[200px] flex items-center justify-center text-muted-foreground">
                                Image Placeholder
                            </div>
                        </CardContent>
                        <CardFooter className="p-4">
                            <div className="flex w-full justify-between">
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Heart className="h-4 w-4" />
                                    <span className="text-xs">245</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <MessageCircle className="h-4 w-4" />
                                    <span className="text-xs">12</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Share2 className="h-4 w-4" />
                                    <span className="text-xs">Share</span>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Right Sidebar - Trending/Suggestions */}
            <div className="hidden flex-col gap-6 md:flex">
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Trending for you</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex flex-col gap-1">
                             <span className="text-xs text-muted-foreground">Technology · Trending</span>
                             <span className="font-bold text-sm">#ArtificialIntelligence</span>
                             <span className="text-xs text-muted-foreground">52K posts</span>
                        </div>
                        <div className="flex flex-col gap-1">
                             <span className="text-xs text-muted-foreground">Sports · Trending</span>
                             <span className="font-bold text-sm">#WorldCup2026</span>
                             <span className="text-xs text-muted-foreground">120K posts</span>
                        </div>
                        <div className="flex flex-col gap-1">
                             <span className="text-xs text-muted-foreground">Design · Trending</span>
                             <span className="font-bold text-sm">#Minimalism</span>
                             <span className="text-xs text-muted-foreground">15K posts</span>
                        </div>
                    </CardContent>
                 </Card>

                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Who to follow</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        {[1, 2, 3].map((user) => (
                            <div key={user} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>U{user}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">User {user}</span>
                                        <span className="text-xs text-muted-foreground">@user{user}</span>
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="h-7 px-2">Follow</Button>
                            </div>
                        ))}
                    </CardContent>
                 </Card>
            </div>
        </div>
    </div>
  )
}

