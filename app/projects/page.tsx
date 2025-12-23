import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"
import { ArrowRight, ArrowUpRight, Shield, Terminal, Database, Cloud } from "lucide-react"

export default function ProjectsPage() {
    const posts = getAllPosts("projects")
    const featuredPost = posts[0]
    const otherPosts = posts.slice(1)

    // Helper to get icon based on basic keywords, fallback to Terminal
    const getIconForPost = (title: string) => {
        const lower = title.toLowerCase()
        if (lower.includes("security") || lower.includes("fraud")) return <Shield className="h-8 w-8 text-orange-400" />
        if (lower.includes("api") || lower.includes("gateway")) return <Terminal className="h-8 w-8 text-purple-400" />
        if (lower.includes("data") || lower.includes("ledger")) return <Database className="h-8 w-8 text-green-400" />
        if (lower.includes("cloud") || lower.includes("migration")) return <Cloud className="h-8 w-8 text-blue-400" />
        return <Terminal className="h-8 w-8 text-primary" />
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Section */}
            <div className="w-full flex-col items-center py-12 md:py-16 px-4 md:px-10 lg:px-20 border-b border-border bg-muted/20">
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 items-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Case Studies
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-foreground mb-4">
                            Featured Projects
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl">
                            Architecting high-availability financial infrastructure and distributed systems. A collection of production-grade solutions focused on performance and security.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Featured Post (Span 2) */}
                    {featuredPost && (
                        <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-1 overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(19,91,236,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 md:p-8 h-full flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-muted rounded-lg border border-border">
                                        <Terminal className="h-8 w-8 text-primary" />
                                    </div>
                                    <Link href={`/projects/${featuredPost.slug}`} className="flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                                        View Case Study <ArrowUpRight className="h-3 w-3" />
                                    </Link>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{featuredPost.metadata.title}</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mb-6">
                                        {featuredPost.metadata.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {featuredPost.metadata.stack?.map((tech: string) => (
                                            <span key={tech} className="px-2.5 py-1 bg-muted border border-border rounded text-xs font-medium text-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {featuredPost.metadata.metrics && (
                                    <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mt-auto">
                                        {featuredPost.metadata.metrics.map((metric: string, idx: number) => {
                                            // Rough parsing for display: "10k TPS" -> Value "10k", Label "TPS"
                                            const parts = metric.split(" ")
                                            const value = parts[0]
                                            const label = parts.slice(1).join(" ")
                                            return (
                                                <div key={idx}>
                                                    <p className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{value}</p>
                                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">{label}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Other Posts */}
                    {otherPosts.map((post) => (
                        <div key={post.slug} className="group relative col-span-1 overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(19,91,236,0.1)]">
                            <div className="p-6 h-full flex flex-col relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-muted rounded-lg border border-border">
                                        {getIconForPost(post.metadata.title)}
                                    </div>
                                    <Link href={`/projects/${post.slug}`} className="text-muted-foreground hover:text-foreground">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{post.metadata.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                    {post.metadata.description}
                                </p>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {post.metadata.stack?.slice(0, 3).map((tech: string) => (
                                            <span key={tech} className="px-2 py-0.5 bg-muted rounded text-[10px] text-muted-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder Card for "Legacy Migration" if needed, OR just the CTA below */}
                </div>

                {/* CTA Section */}
                <div className="mt-6 rounded-xl bg-gradient-to-r from-card to-background border border-border p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                    <div className="flex-1 relative z-10">
                        <h3 className="text-xl font-bold text-foreground mb-2">Looking for technical leadership?</h3>
                        <p className="text-muted-foreground text-sm max-w-xl">
                            I specialize in not just writing code, but defining architecture and engineering culture.
                            Let's discuss how I can help scale your engineering team.
                        </p>
                    </div>
                    <div className="flex gap-4 relative z-10">
                        <Link href="/contact" className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-blue-600 text-primary-foreground text-sm font-bold shadow-[0_0_15px_rgba(19,91,236,0.3)] transition-all">
                            <span>Schedule a Call</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
