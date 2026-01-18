import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/mdx"
import { ArrowRight, ArrowUpRight, Pin, BookOpen, Database, Cloud, Lock, Terminal } from "lucide-react"

export default function BlogPage() {
    const posts = getAllPosts("blog")
    const featuredPost = posts[0]
    const otherPosts = posts.slice(1)

    // Helper for category icons
    const getCategoryIcon = (tags?: string[]) => {
        const tag = tags?.[0]?.toLowerCase() || ""
        if (tag.includes("admin") || tag.includes("ops")) return <Terminal className="h-5 w-5" />
        if (tag.includes("db") || tag.includes("data")) return <Database className="h-5 w-5" />
        if (tag.includes("cloud") || tag.includes("aws")) return <Cloud className="h-5 w-5" />
        if (tag.includes("sec") || tag.includes("auth")) return <Lock className="h-5 w-5" />
        return <BookOpen className="h-5 w-5" />
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Content Wrapper */}
            <div className="mx-auto max-w-[960px] px-4 md:px-10 py-10 flex flex-col gap-8">

                {/* Hero Section */}
                <div className="flex flex-col gap-4 py-4">
                    <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight">Engineering Log</h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        Deep dives into distributed systems, financial ledgers, and database optimization. A collection of notes on building scalable backend architecture.
                    </p>
                </div>

                {/* Filter Chips (Visual Only) */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {["All Posts", "System Design", "Database", "Golang", "Fintech", "AWS"].map((filter, idx) => (
                        <button
                            key={filter}
                            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-colors text-sm font-medium border ${idx === 0 ? "bg-foreground text-background border-foreground" : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Featured / Pinned Post */}
                {featuredPost && (
                    <div className="w-full">
                        <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-6 rounded-xl bg-card p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex flex-[3] flex-col justify-between gap-6">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <Pin className="h-4 w-4 text-primary" />
                                        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                                            Pinned • {featuredPost.metadata.date}
                                        </p>
                                    </div>
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        <h3 className="text-foreground text-2xl font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                                            {featuredPost.metadata.title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground text-base font-normal leading-relaxed line-clamp-3">
                                        {featuredPost.metadata.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-semibold group">
                                        Read Article
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <div className="flex gap-2">
                                        {featuredPost.metadata.tags?.slice(0, 2).map((tag: string) => (
                                            <span key={tag} className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Featured Thumbnail / Visual */}
                            <div className="md:flex-[2] min-h-[240px] w-full rounded-lg overflow-hidden relative border border-border">
                                {featuredPost.metadata.thumbnail ? (
                                    <Image
                                        src={featuredPost.metadata.thumbnail}
                                        alt={featuredPost.metadata.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        priority
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-muted/40 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
                                        <div className="z-10 bg-background/50 backdrop-blur-sm p-4 rounded-full border border-primary/20">
                                            {getCategoryIcon(featuredPost.metadata.tags)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Recent Items Header */}
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-muted-foreground font-mono text-xl">#</span>
                        <h3 className="text-foreground text-lg font-bold">Recent Posts</h3>
                    </div>

                    {/* List */}
                    {otherPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <div className="flex flex-col sm:flex-row gap-5 bg-card border border-border hover:border-primary/40 rounded-xl p-5 transition-all hover:bg-muted/30">
                                <div className="flex items-center gap-5 flex-1">
                                    {/* Small Thumbnail */}
                                    <div className="relative shrink-0 size-24 md:size-32 rounded-lg overflow-hidden border border-border bg-muted/30">
                                        {post.metadata.thumbnail ? (
                                            <Image
                                                src={post.metadata.thumbnail}
                                                alt={post.metadata.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {getCategoryIcon(post.metadata.tags)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-foreground text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                            {post.metadata.title}
                                        </p>
                                        <p className="text-muted-foreground text-sm mb-1">
                                            {post.metadata.date} • {post.metadata.tags?.[0] || "General"}
                                        </p>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {post.metadata.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0 self-start sm:self-center">
                                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination (Visual) */}
                <div className="flex justify-center pt-6">
                    <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all text-sm font-medium">
                        Load More Articles
                    </button>
                </div>
            </div>

            {/* Newsletter Footer Section */}
            <div className="w-full bg-card border-t border-border mt-auto">
                <div className="max-w-[960px] mx-auto px-4 md:px-10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-foreground font-bold text-lg">Stay in the loop</h4>
                        <p className="text-muted-foreground text-sm max-w-sm">
                            Get the latest engineering notes on distributed systems and backend patterns delivered to your inbox.
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto items-center gap-2">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="bg-background border border-border rounded-lg px-4 py-2 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full md:w-64 placeholder:text-muted-foreground/50"
                        />
                        <button className="bg-primary hover:bg-blue-600 text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
