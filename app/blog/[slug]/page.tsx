import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import remarkGfm from "remark-gfm"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
    const posts = getAllPosts("blog")
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPost({ params }: { params: Params }) {
    const { slug } = await params
    const post = getPostBySlug("blog", slug)

    // Simulate "Related Posts" by just taking the first 2 other posts
    const allPosts = getAllPosts("blog")
    const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2)

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* 1. Header Section */}
            <div className="bg-background pt-10 pb-8 border-b border-border">
                <div className="container max-w-[800px] px-4 md:px-0 mx-auto flex flex-col gap-6">
                    {/* Breadcrumbs & Back */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-foreground truncate max-w-[200px]">{post.metadata.title}</span>
                    </nav>

                    {/* Main Header Content */}
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2">
                            {post.metadata.tags?.map((tag: string) => (
                                <span key={tag} className="px-2 py-1 rounded-md bg-muted text-xs font-semibold text-primary uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
                            {post.metadata.title}
                        </h1>

                        <div className="flex items-center gap-4 py-2 border-y border-border/50">
                            {/* Author Avatar Placeholder */}
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                OA
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-bold text-foreground">Oktavian Aji</p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" /> {post.metadata.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> 8 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Content Section */}
            <article className="container max-w-[800px] px-4 md:px-0 mx-auto py-12">
                <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-blue max-w-none 
                    prose-p:leading-relaxed prose-p:text-muted-foreground prose-headings:text-foreground
                    prose-li:text-muted-foreground prose-strong:text-foreground
                    prose-code:bg-muted prose-code:text-primary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                    [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit
                    prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-muted-foreground
                ">
                    <MDXRemote
                        source={post.content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                            },
                        }}
                    />
                </div>

                {/* Visual Separator */}
                <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Share Actions */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-card border border-border">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-foreground">Share this article</h4>
                        <p className="text-sm text-muted-foreground">Found this useful? Share it with your network.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:border-primary/50">
                            <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:border-primary/50">
                            <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:border-primary/50">
                            <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground hover:border-primary/50">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </article>

            {/* 3. Read Next Section */}
            <div className="bg-muted/30 border-t border-border py-16">
                <div className="container max-w-[960px] mx-auto px-4 md:px-10 flex flex-col gap-8">
                    <div className="flex items-center gap-2">
                        <span className="h-6 w-1 bg-primary rounded-full"></span>
                        <h3 className="text-xl font-bold text-foreground">More from Engineering Log</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedPosts.map((related) => (
                            <Link key={related.slug} href={`/blog/${related.slug}`} className="group block h-full">
                                <div className="flex flex-col h-full bg-card border border-border p-6 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-2">
                                            {related.metadata.tags?.slice(0, 1).map((tag: string) => (
                                                <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground uppercase border border-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {related.metadata.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
                                        {related.metadata.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
