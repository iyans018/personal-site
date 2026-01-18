'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const routes = [
        { href: "/#", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
    ]

    // Close menu when clicking a link
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const scrollToBottom = () => {
        setIsOpen(false)
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        })
    }

    return (
        <header className="fixed top-0 z-[60] w-full border-b border-gray-200 dark:border-border/40 bg-white/80 dark:bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <Terminal className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold leading-none tracking-tight">Oktavian Aji</span>
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Backend Developer</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
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

                <div className="flex items-center gap-3">
                    <Link href="/resume" className="hidden sm:block text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group">
                        git checkout <span className="text-primary group-hover:underline">resume</span>
                    </Link>

                    <Button
                        onClick={scrollToBottom}
                        className="hidden sm:flex h-9 items-center justify-center rounded bg-primary px-4 text-sm font-bold text-primary-foreground transition-transform active:scale-95 hover:bg-blue-600 shadow-[0_4px_15px_rgba(19,91,236,0.3)]"
                    >
                        Contact
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-10 md:hidden items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all active:scale-90"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-x-0 top-16 z-50 overflow-hidden bg-background md:hidden border-t border-border"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {routes.map((route, i) => (
                                <motion.div
                                    key={route.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={route.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between py-4 border-b border-border/50 text-lg font-bold text-foreground hover:text-primary transition-colors"
                                    >
                                        {route.label}
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: routes.length * 0.1 }}
                                className="pt-4 flex flex-col gap-4"
                            >
                                <Link
                                    href="/resume"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-sm font-mono text-muted-foreground"
                                >
                                    git checkout <span className="text-primary underline">resume</span>
                                </Link>
                                <Button
                                    onClick={scrollToBottom}
                                    className="h-12 w-full text-base font-bold"
                                >
                                    Connect with Me
                                </Button>

                                <div className="mt-8 flex flex-col gap-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Quick Contact</p>
                                    <p className="text-sm font-medium">oktavian.aji18@gmail.com</p>
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
