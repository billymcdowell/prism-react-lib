import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
    Check, 
    Menu, 
    Zap, 
    Shield, 
    Globe, 
    BarChart, 
    ArrowRight 
} from "lucide-react"

export default function LandingPageHero() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-6 w-6 text-primary" />
            <span>SaaSify</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</a>
            <a href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</a>
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">Log in</Button>
            <Button size="sm">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
                <Badge variant="outline" className="w-fit px-4 py-1 text-sm border-primary/50 bg-primary/10 text-primary">
                    New Feature: AI Analytics 🚀
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
                    Build your next idea <span className="text-primary">faster</span>.
                </h1>
                <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-8">
                    The all-in-one platform to help you launch, scale, and manage your business with ease. Beautifully designed components included.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button size="lg" className="gap-2">
                        Start Building Now
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                        View Demo
                    </Button>
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex -space-x-2">
                         <div className="h-8 w-8 rounded-full bg-muted border-2 border-background"></div>
                         <div className="h-8 w-8 rounded-full bg-muted border-2 border-background"></div>
                         <div className="h-8 w-8 rounded-full bg-muted border-2 border-background"></div>
                    </div>
                    <p>Trusted by 10,000+ developers</p>
                </div>
            </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container py-24 bg-muted/50 rounded-3xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features that empower you</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to build world-class applications.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-background border-none shadow-sm">
                    <CardHeader>
                        <Zap className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Lightning Fast</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Optimized for speed and performance. Your users will love the snappy experience.
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-none shadow-sm">
                    <CardHeader>
                        <Shield className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Secure by Default</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Enterprise-grade security built-in. We handle the hard stuff so you don't have to.
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-none shadow-sm">
                    <CardHeader>
                        <Globe className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Global Edge</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Deploy to 100+ regions in seconds. Low latency for everyone, everywhere.
                        </p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-none shadow-sm">
                    <CardHeader>
                        <BarChart className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Real-time Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Track your growth with detailed insights and real-time data visualization.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="bg-background border-none shadow-sm">
                    <CardHeader>
                        <Check className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>99.9% Uptime</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Reliability you can count on. Our infrastructure is designed to stay up.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="bg-background border-none shadow-sm">
                    <CardHeader>
                        <Menu className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Customizable</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Flexible components that adapt to your brand. Style it your way.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* CTA */}
        <section className="container py-24">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-24 text-center shadow-xl sm:px-16">
                <div className="relative z-10 max-w-2xl mx-auto text-primary-foreground">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to get started?</h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        Join thousands of developers building the future. Start your free trial today.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                         <Button size="lg" variant="secondary" className="text-primary font-bold">
                            Get Started for Free
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 bg-muted/20">
            <div className="container grid gap-8 md:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2 font-bold text-xl mb-4">
                        <Zap className="h-6 w-6 text-primary" />
                        <span>SaaSify</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Making the web a better place, one component at a time.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">Features</a></li>
                        <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                        <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">About</a></li>
                        <li><a href="#" className="hover:text-foreground">Blog</a></li>
                        <li><a href="#" className="hover:text-foreground">Careers</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold mb-4">Stay Connected</h3>
                    <div className="flex gap-2">
                        <Input placeholder="Enter your email" className="max-w-[200px]" />
                        <Button size="sm">Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
      </main>
    </div>
  )
}

