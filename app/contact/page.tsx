import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] py-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
                <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
                    Get in Touch
                </h1>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Interested in discussing distributed systems, Go, or a potential collaboration?
                    I'm currently open to new opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <Card className="hover:bg-muted/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5" /> Email
                        </CardTitle>
                        <CardDescription>Direct contact for professional inquiries.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="mailto:contact@example.com" className="text-primary hover:underline">
                            contact@example.com
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Linkedin className="h-5 w-5" /> LinkedIn
                        </CardTitle>
                        <CardDescription>Professional network and resume.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://linkedin.com/in/username" className="text-primary hover:underline" target="_blank">
                            linkedin.com/in/username
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Github className="h-5 w-5" /> GitHub
                        </CardTitle>
                        <CardDescription>Check out my open source contributions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://github.com/username" className="text-primary hover:underline" target="_blank">
                            github.com/username
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" /> Twitter / X
                        </CardTitle>
                        <CardDescription>Tech thoughts and engineering discussions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://twitter.com/username" className="text-primary hover:underline" target="_blank">
                            @username
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
