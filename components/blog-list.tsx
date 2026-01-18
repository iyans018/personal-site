"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowRight,
    ArrowUpRight,
    Pin,
    BookOpen,
    Database,
    Cloud,
    Lock,
    Terminal,
    Search,
    X
} from "lucide-react"
import type { Post } from "@/lib/mdx"

interface BlogListProps {
    initialPosts: Post[]
    tags: string[]
}

const POSTS_PER_PAGE = 6

export function BlogList({ initialPosts, tags }: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTag, setActiveTag] = useState("All Posts")
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

    // Helper for category icons
    const getCategoryIcon = (tags?: string[]) => {
        const tag = tags?.[0]?.toLowerCase() || ""
        if (tag.includes("admin") || tag.includes("ops")) return <Terminal className="h-4 w-4" />
        if (tag.includes("db") || tag.includes("data")) return <Database className="h-4 w-4" />
        if (tag.includes("cloud") || tag.includes("aws")) return <Cloud className="h-4 w-4" />
        if (tag.includes("sec") || tag.includes("auth")) return <Lock className="h-4 w-4" />
        return <BookOpen className="h-4 w-4" />
    }

    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchesSearch =
                post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.metadata.description.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesTag = activeTag === "All Posts" || post.metadata.tags?.includes(activeTag)

            return matchesSearch && matchesTag
        })
    }, [initialPosts, searchQuery, activeTag])

    const postsToShow = filteredPosts.slice(0, visibleCount)
    const hasMore = visibleCount < filteredPosts.length

    return (
        <div className="flex flex-col gap-8">
            {/* Search and Filters */}
            <div className="flex flex-col gap-6">
                {/* Search Bar */}
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search articles by title or description..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                            setVisibleCount(POSTS_PER_PAGE) // Reset pagination on search
                        }}
                        className="w-full bg-card border border-border rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground/50"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                        >
                            <X className="h-4 w-4 text-muted-foreground" />
                        </button>
                    )}
                </div>

                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
                    {["All Posts", ...tags].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => {
                                setActiveTag(tag)
                                setVisibleCount(POSTS_PER_PAGE) // Reset pagination on filter
                            }}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-all text-sm font-medium border ${activeTag === tag
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                    : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                    <span className="text-muted-foreground font-mono text-xl">#</span>
                    <h3 className="text-foreground text-lg font-bold">
                        {activeTag === "All Posts" ? "Recent Posts" : `${activeTag} Articles`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </h3>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md border border-border">
                    {filteredPosts.length} posts found
                </span>
            </div>

            {/* Posts Grid/List */}
            <div className="grid grid-cols-1 gap-6">
                <AnimatePresence mode="popLayout">
                    {postsToShow.length > 0 ? (
                        postsToShow.map((post) => (
                            <motion.div
                                key={post.slug}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block">
                                    <div className="flex flex-col sm:flex-row gap-5 bg-card border border-border hover:border-primary/40 rounded-xl p-5 transition-all hover:bg-muted/30 hover:shadow-md">
                                        <div className="flex items-center gap-5 flex-1">
                                            {/* Thumbnail */}
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
                                                    {post.metadata.date} • {post.readingTime} • {post.metadata.tags?.[0] || "General"}
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
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-20 text-center border-2 border-dashed border-border rounded-xl"
                        >
                            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveTag("All Posts"); }}
                                className="mt-4 text-primary font-bold hover:underline"
                            >
                                Reset all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center pt-8">
                    <button
                        onClick={() => setVisibleCount(prev => prev + POSTS_PER_PAGE)}
                        className="flex items-center gap-2 px-8 py-3 rounded-xl bg-card border border-border text-foreground hover:bg-muted hover:border-primary transition-all text-sm font-bold shadow-sm"
                    >
                        Load More Articles
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    )
}
