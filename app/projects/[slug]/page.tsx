import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Activity, Zap, Shield, Terminal, TrendingUp, Calendar, User, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
    const posts = getAllPosts("projects")
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function ProjectPost({ params }: { params: Params }) {
    const { slug } = await params
    const post = getPostBySlug("projects", slug)

    // Simulate "Next Project"
    const allPosts = getAllPosts("projects")
    const currentIndex = allPosts.findIndex(p => p.slug === slug)
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : allPosts[0]

    // Helper to get random icon for features/metrics if needed
    // In a real app, these might come from metadata
    const getMetricIcon = (idx: number) => {
        const icons = [Activity, Zap, Shield, TrendingUp]
        const Icon = icons[idx % icons.length]
        return <Icon className="h-6 w-6 text-primary" />
    }

    if (!post) {
        return <div>Project not found</div>
    }

    return (
        <div className="min-h-screen bg-background">
            {/* 1. Header Section */}
            <div className="w-full bg-background border-b border-border">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-20 flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left: Info */}
                    <div className="flex-1 flex flex-col gap-8">
                        <Button variant="ghost" asChild className="self-start pl-0 hover:bg-transparent hover:text-primary -ml-2">
                            <Link href="/projects" className="flex items-center gap-2 text-muted-foreground">
                                <ArrowLeft className="h-4 w-4" /> Back to Case Studies
                            </Link>
                        </Button>

                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-foreground">
                                {post.metadata.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-xl">
                                {post.metadata.description}
                            </p>
                        </div>

                        {/* Metadata Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-border/50">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                                    <Building2 className="h-3 w-3" /> Client
                                </div>
                                <p className="font-semibold text-foreground">{post.metadata.client}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                                    <User className="h-3 w-3" /> Role
                                </div>
                                <p className="font-semibold text-foreground">{post.metadata.role}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                                    <Calendar className="h-3 w-3" /> Timeline
                                </div>
                                <p className="font-semibold text-foreground">{post.metadata.date}</p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Technologies</span>
                            <div className="flex flex-wrap gap-2">
                                {post.metadata.stack?.map((tech: string) => (
                                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium text-foreground border border-border">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Abstract Visual */}
                    <div className="flex-1 w-full lg:w-auto h-[300px] lg:h-[500px] rounded-2xl bg-muted relative overflow-hidden flex items-center justify-center border border-border shadow-2xl">
                        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent"></div>
                        {/* Fake "Architecture Diagram" visual */}
                        <div className="relative z-10 p-8 grid grid-cols-2 gap-4 opacity-80 rotate-[-5deg] scale-90 md:scale-100">
                            <div className="w-32 h-32 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg">
                                <Terminal className="h-10 w-10 text-primary" />
                            </div>
                            <div className="w-32 h-32 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg translate-y-8">
                                <Activity className="h-10 w-10 text-blue-400" />
                            </div>
                            <div className="w-32 h-32 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg -translate-y-4">
                                <Shield className="h-10 w-10 text-orange-400" />
                            </div>
                            <div className="w-32 h-32 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg translate-y-4">
                                <Zap className="h-10 w-10 text-yellow-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Content */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Content Column */}
                <article className="lg:col-span-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none">
                    <MDXRemote source={post.content} />
                </article>

                {/* Sidebar / Sticky Metrics */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border shadow-sm">
                        <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-500" />
                            Key Results
                        </h3>
                        <div className="flex flex-col gap-6">
                            {post.metadata.metrics?.map((metric: string, idx: number) => {
                                const parts = metric.split(" ")
                                const value = parts[0]
                                const label = parts.slice(1).join(" ")
                                return (
                                    <div key={idx} className="pb-6 border-b border-border last:border-0 last:pb-0">
                                        <p className="text-4xl font-black text-foreground tracking-tight">{value}</p>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mt-1">{label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </aside>
            </div>

            {/* 3. Next Project Navigation */}
            {nextPost && (
                <div className="w-full bg-muted/20 border-t border-border mt-10">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-20 flex flex-col items-center text-center gap-6">
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Next Case Study</p>
                        <h2 className="text-4xl md:text-5xl font-black text-foreground max-w-3xl leading-tight">
                            {nextPost.metadata.title}
                        </h2>
                        <Link href={`/projects/${nextPost.slug}`} className="group flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold hover:bg-primary hover:text-white transition-all mt-4">
                            View Project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
