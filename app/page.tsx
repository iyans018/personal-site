import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 lg:pt-32">
        {/* Background Grid Effect */}
        <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-[0.15]"></div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to technical leadership roles
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-[1.1]">
              Building <span className="text-primary">Resilient</span> &amp; Scalable Backends for High-Stakes Systems.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Senior Backend Architect specializing in distributed systems, fintech security, and high-frequency data processing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="h-12 px-6 text-base font-bold shadow-lg shadow-primary/25 rounded-md" asChild>
                <Link href="/projects">View Case Studies</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-6 text-base font-bold bg-transparent border-gray-300 dark:border-gray-700 hover:bg-muted rounded-md" asChild>
                <Link href="/blog">Read Engineering Blog</Link>
              </Button>
            </div>
            {/* Mini Stats */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-border pt-8">
              <div>
                <p className="text-sm font-medium text-muted-foreground">System Uptime</p>
                <p className="font-mono text-xl font-bold text-foreground">99.99<span className="text-primary">%</span></p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Latency Reduction</p>
                <p className="font-mono text-xl font-bold text-foreground">50<span className="text-primary">ms</span></p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Daily Requests</p>
                <p className="font-mono text-xl font-bold text-foreground">50<span className="text-primary">M+</span></p>
              </div>
            </div>
          </div>

          {/* Code / Terminal Visual */}
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
            {/* Decorative glow */}
            <div className="absolute -inset-1 z-[-1] bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="border-y border-border/50 bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by engineering teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <span className="text-xl font-bold">GOOGLE</span>
            <span className="text-xl font-bold">NETFLIX</span>
            <span className="text-xl font-bold">SPOTIFY</span>
            <span className="text-xl font-bold">MICROSOFT</span>
            <span className="text-xl font-bold">UBER</span>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Core Architectural Pillars</h2>
          <p className="mt-4 text-lg text-muted-foreground">Engineering philosophy centered around robust system design, failure mitigation, and long-term codebase health.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Reliability", icon: "shield", desc: "Systems that survive failure states through circuit breakers, retry mechanisms, and graceful degradation." },
            { title: "Scalability", icon: "trending_up", desc: "Horizontal scaling strategies designed for millions of concurrent connections using sharding and async processing." },
            { title: "Maintainability", icon: "code", desc: "Codebases designed for humans first, focusing on strong typing, comprehensive documentation, and modularity." }
          ].map((pillar) => (
            <div key={pillar.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 glow-hover">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined font-bold text-xl">{pillar.icon === "shield" ? "🛡️" : pillar.icon === "trending_up" ? "📈" : "💻"}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ledger Case Study */}
          <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-border bg-card p-1">
            <div className="relative h-full w-full rounded-lg bg-muted/30 p-8 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-muted/50">
              <div className="absolute top-0 right-0 p-4">
                <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="z-10 mt-auto">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">Case Study 01</span>
                <h3 className="mb-2 text-2xl font-bold text-foreground">Ledger: Real-time Transaction Engine</h3>
                <p className="mb-6 max-w-md text-sm text-muted-foreground">Re-architected a legacy monolith into event-driven microservices processing $50M+ daily volume.</p>
                <div className="flex flex-wrap gap-2">
                  {["Go", "Kafka", "PostgreSQL", "Kubernetes"].map(tech => (
                    <span key={tech} className="rounded border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-1 rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Go", color: "#00ADD8" },
                { name: "Rust", color: "#DEA584" },
                { name: "PostgreSQL", color: "#336791" },
                { name: "GraphQL", color: "#E535AB" },
                { name: "Kubernetes", color: "#326CE5" },
                { name: "AWS", color: "#FF6600" },
                { name: "Kafka", color: "#231F20" },
                { name: "Nginx", color: "#009639" },
              ].map(tech => (
                <div key={tech.name} className="flex items-center gap-3 rounded-lg border border-border bg-muted/20 p-3 transition-colors hover:border-primary/50">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: tech.color }}></div>
                  <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* API Gateway Refactor */}
          <div className="md:col-span-1 rounded-xl border border-border bg-card p-6 flex flex-col group hover:border-primary/50 transition-colors">
            <div className="mb-4 h-32 w-full rounded-lg bg-muted bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-efc535b5c47c?q=80&w=2607&auto=format&fit=crop')" }}></div>
            <h3 className="text-lg font-bold text-foreground">API Gateway Refactor</h3>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-3">Designed a custom API gateway handling auth, rate-limiting, and routing for 50+ internal services.</p>
          </div>

          {/* Blog Post */}
          <div className="md:col-span-1 rounded-xl border border-border bg-card p-6 flex flex-col group hover:border-primary/50 transition-colors">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              <span className="text-sm">📄</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">Idempotency in Payment Systems</h3>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-3">Deep dive into handling duplicate requests in distributed fintech environments to prevent double spending.</p>
          </div>

          {/* Contact Card */}
          <div className="md:col-span-1 rounded-xl border border-border bg-[#161b22] p-6 flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-bold text-white mb-2">Let's Build Something</h3>
            <p className="text-xs text-text-secondary dark:text-gray-400 mb-4">Currently available for Q3 projects.</p>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Email"].map(link => (
                <Link key={link} href="#" className="p-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <span className="text-xs font-mono">{link}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
