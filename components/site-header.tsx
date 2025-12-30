"use client"

import Link from "next/link"
import { Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
    const routes = [
        { href: "/#", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
    ]

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        })
    }

    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-border/40 bg-white/80 dark:bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                        <Terminal className="h-5 w-5" />
                    </div>
                    <div className="hidden flex-col md:flex">
                        <span className="text-sm font-bold leading-none tracking-tight">Oktavian Aji</span>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Backend Developer</span>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/resume" className="hidden sm:block text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group">
                        git checkout <span className="text-primary group-hover:underline">resume</span>
                    </Link>
                    <Button
                        onClick={scrollToBottom}
                        className="flex h-9 items-center justify-center rounded bg-primary px-4 text-sm font-bold text-primary-foreground transition-transform active:scale-95 hover:bg-blue-600 shadow-[0_0_15px_rgba(19,91,236,0.3)]"
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </header>
    )
}
