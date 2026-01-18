import { getAllPosts, getAllTags } from "@/lib/mdx"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
    const posts = getAllPosts("blog")
    const tags = getAllTags(posts)

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Content Wrapper */}
            <div className="mx-auto max-w-[960px] px-4 md:px-10 py-10 flex flex-col gap-8">

                {/* Hero Section */}
                <div className="flex flex-col gap-4 py-4">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Engineering Log & Technical Notes
                    </div>
                    <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight">Engineering Log</h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        Deep dives into distributed systems, financial ledgers, and database optimization. A collection of notes on building scalable backend architecture.
                    </p>
                </div>

                {/* Dynamic Blog List Component */}
                <BlogList initialPosts={posts} tags={tags} />
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
