import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function LandingPagePricing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that's right for you. No hidden fees. Cancel anytime.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:max-w-6xl lg:mx-auto">
            {/* Basic Plan */}
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>Essential features for individuals.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="mb-6">
                        <span className="text-4xl font-bold">$10</span>
                        <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>5 Projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Basic Analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Community Support</span>
                        </li>
                         <li className="flex items-center gap-2 text-muted-foreground">
                            <Check className="h-4 w-4" />
                            <span>Custom Domain</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" variant="outline">Get Started</Button>
                </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col relative border-primary shadow-lg scale-105 z-10">
                 <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary">Most Popular</Badge>
                </div>
                <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Perfect for growing teams.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="mb-6">
                        <span className="text-4xl font-bold">$29</span>
                        <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Unlimited Projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Advanced Analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Priority Support</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Custom Domain</span>
                        </li>
                         <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Team Collaboration</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Get Started</Button>
                </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large scale organizations.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="mb-6">
                        <span className="text-4xl font-bold">$99</span>
                        <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Everything in Pro</span>
                        </li>
                         <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>SSO & Security</span>
                        </li>
                         <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Dedicated Account Manager</span>
                        </li>
                         <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>SLA Agreement</span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" variant="outline">Contact Sales</Button>
                </CardFooter>
            </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
                <p className="text-muted-foreground mt-2">Everything you need to know about the product and billing.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
                    <AccordionContent>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                    <AccordionContent>
                        Of course. You can change your plan at any time. Network traffic and storage usage are prorated, so you only pay for what you use.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                    <AccordionContent>
                        You can cancel your subscription at any time. We do not offer refunds for partial months.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
                    <AccordionContent>
                        Yes! We offer email support for all plans and priority support for Pro and Enterprise plans.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
    </div>
  )
}

