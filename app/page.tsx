import Link from "next/link"
import { Code, Database, Settings, Rss, ArrowRight, Workflow, ShoppingCart, Gavel, ArrowLeftRight, BookOpen, Cloud, Lock, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllPosts } from "@/lib/mdx"

export default function Home() {
  const posts = getAllPosts("blog").slice(0, 3)
  const projects = getAllPosts("projects").slice(0, 3)

  // Helper for category icons
  const getCategoryIcon = (tags?: string[]) => {
    const tag = tags?.[0]?.toLowerCase() || ""
    if (tag.includes("admin") || tag.includes("ops")) return <Terminal className="h-4 w-4" />
    if (tag.includes("db") || tag.includes("data")) return <Database className="h-4 w-4" />
    if (tag.includes("cloud") || tag.includes("aws")) return <Cloud className="h-4 w-4" />
    if (tag.includes("sec") || tag.includes("auth")) return <Lock className="h-4 w-4" />
    return <BookOpen className="h-4 w-4" />
  }

  // Helper for project icons
  const getProjectIcon = (project: any) => {
    const title = project.metadata.title?.toLowerCase() || ""
    const client = project.metadata.client?.toLowerCase() || ""
    const stack = (project.metadata.stack || []).map((s: string) => s.toLowerCase())

    if (title.includes("ledger") || title.includes("finance") || stack.includes("postgresql")) return <Database className="h-8 w-8 text-primary" />
    if (title.includes("hub") || title.includes("sso") || title.includes("auth")) return <Lock className="h-8 w-8 text-primary" />
    if (title.includes("digipactum") || title.includes("legal") || title.includes("gavel")) return <Gavel className="h-8 w-8 text-primary" />
    if (title.includes("mobile") || title.includes("mts") || title.includes("mango")) return <Terminal className="h-8 w-8 text-primary" />
    if (title.includes("ess") || title.includes("mentorship")) return <Workflow className="h-8 w-8 text-primary" />

    return <Settings className="h-8 w-8 text-primary" />
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* ... previous sections ... */}
      <section className="relative w-full pt-8 md:pt-16 lg:pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-[0.15]"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Focused on Reliability & System Design
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-[1.1]">
                Building <span className="text-primary">Resilient</span> & Scalable Backends for High-Stakes Systems.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A Software Engineer specializing in scalable backends and distributed systems. From optimizing enterprise workflows to building event-driven architectures, I design resilient software that lasts.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="h-12 px-6 text-base font-bold shadow-lg shadow-primary/25">
                  <Link href="/projects">Explore My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base font-bold bg-transparent">
                  <Link href="/blog">Read My Engineering Log</Link>
                </Button>
              </div>
            </div>
            {/* Terminal Visual */}
            <div className="relative hidden lg:block">
              <div className="rounded-xl border border-border-dark bg-[#0d1117] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                  <div className="ml-2 text-xs text-gray-500 font-mono">server_health.go</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed text-gray-300 overflow-x-auto">
                  <div className="flex"><span className="w-8 text-gray-600 select-none">1</span><span className="text-[#ff7b72]">package</span> <span className="text-white ml-2">main</span></div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">2</span></div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">3</span><span className="text-[#ff7b72]">import</span> (</div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">4</span> <span className="text-[#a5d6ff] ml-4">"fmt"</span></div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">5</span> <span className="text-[#a5d6ff] ml-4">"time"</span></div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">6</span>)</div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">7</span></div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">8</span><span className="text-[#ff7b72]">func</span> <span className="text-[#d2a8ff] ml-2">CheckSystemHealth</span>() <span className="text-[#79c0ff] ml-2">string</span> {"{"}</div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">9</span> <span className="text-[#8b949e] ml-4">// Simulating high-performance check</span></div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">10</span> <span className="text-[#79c0ff] ml-4">latency</span> := <span className="text-[#79c0ff] ml-2">12</span> * time.Millisecond</div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">11</span> <span className="text-[#ff7b72] ml-4">return</span> <span className="ml-2">fmt.</span><span className="text-[#d2a8ff]">Sprintf</span>(<span className="text-[#a5d6ff]">"System Optimal. Latency: %v"</span>, <span className="text-[#79c0ff]">latency</span>)</div>
                  <div className="flex"><span className="w-8 text-gray-600 select-none">12</span>{"}"}</div>
                  <div className="flex mt-4 pt-4 border-t border-gray-800 text-green-400">
                    <span className="mr-2">$</span> go run main.go
                  </div>
                  <div className="flex text-white">
                    &gt; System Optimal. Latency: 12ms
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-1 z-[-1] bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* 2. About Me */}
      <section className="border-y border-border bg-muted/50 py-16 backdrop-blur-sm" id="about">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About Me</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            I don’t just write code; I design systems that last.
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed space-y-4 text-justify">
            <p>
              With 3+ years of experience building enterprise-grade systems, I’ve developed
              a deep focus on system efficiency and robustness. My engineering philosophy
              is rooted in the principles of <em>Designing Data-Intensive Applications</em> (DDIA)—moving
              beyond just "making it work" to ensuring systems are truly resilient and scalable.
            </p>
            <p>
              Currently, I am channeling my focus into mastering <strong>Fintech Core Principles</strong>,
              deepening my expertise in <strong>Go</strong>, and refining my <strong>System Design</strong> skills.
              My goal is to bridge the gap between complex business logic and high-performance
              infrastructure, thriving in environments where precision matters and downtime is not an option.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Highlight Projects */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 py-20" id="projects">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Highlight Projects</h2>
          <p className="mt-2 text-muted-foreground">Solving real-world problems with scalable architecture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-6 flex flex-col group glow-hover h-full transition-transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {getProjectIcon(project)}
              </div>
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.metadata.client?.includes("Telkomsigma") ? "Enterprise" : project.metadata.client || "Project"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                {project.metadata.title}
              </h3>
              <p className="text-xs font-medium text-muted-foreground/80 mb-4 italic line-clamp-2">
                {project.metadata.description}
              </p>
              <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-4">
                {project.content.split('\n').find(line => line.trim().length > 50 && !line.startsWith('#')) || project.metadata.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.metadata.stack?.slice(0, 4).map((tech: string) => (
                  <span key={tech} className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Blog Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 pb-20" id="blog">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl text-primary"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Rss className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">From the Engineering Log</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">Engineering Insights & Technical Logs.</h2>
              <p className="text-lg text-muted-foreground">
                Deep dives into distributed systems, backend patterns, and system optimization strategies.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base font-bold bg-transparent hover:bg-primary/5 border-primary/20 hover:border-primary/40 transition-all">
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Latest Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group h-full">
                <div className="p-6 rounded-xl bg-muted/20 border border-border hover:border-primary/40 hover:bg-muted/30 transition-all h-full flex flex-col relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary flex items-center justify-center rounded-lg bg-background border border-border size-10 group-hover:scale-110 transition-transform shadow-sm">
                      {getCategoryIcon(post.metadata.tags)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                      {post.metadata.tags?.[0] || "General"}
                    </span>
                  </div>

                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 text-lg">
                    {post.metadata.title}
                  </h4>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow leading-relaxed">
                    {post.metadata.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <p className="text-[11px] font-medium text-muted-foreground">
                      {new Date(post.metadata.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
