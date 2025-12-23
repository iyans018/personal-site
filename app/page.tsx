import Link from "next/link"
import { Code, Database, Settings, Rss, ArrowRight, Workflow, ShoppingCart, Gavel, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full pt-12 md:pt-24 lg:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-[0.15]"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
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
                Building <span className="text-primary">Resilient</span> & Scalable Backends for High-Stakes Systems.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Backend Engineer specializing in Python, Node.js, and Distributed Systems. Driven by the principles of Reliability, Scalability, and Maintainability.
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
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-1 z-[-1] bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* 2. About Me (The Narrative) */}
      <section className="border-y border-border bg-muted/50 py-16 backdrop-blur-sm" id="about">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            I don’t just write code; I design systems that last.
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed space-y-4">
            <p>
              With 3+ years of hands-on experience in building enterprise-grade systems, I have developed
              an obsession with system efficiency and robustness. My engineering philosophy is heavily
              influenced by the principles found in <em>Designing Data-Intensive Applications</em> (DDIA).
            </p>
            <p>
              Currently, I am channeling my focus into mastering Fintech Core Principles, deepening my
              expertise in Go, and honing my System Design skills to prepare for Technical Leadership
              roles. I thrive in environments where performance matters and downtime is not an option.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Technical Arsenal */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 py-20" id="skills">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Technical Arsenal</h2>
          <p className="mt-2 text-muted-foreground">A comprehensive toolkit for modern backend engineering.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Core Expertise */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 glow-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-blue-500/10 text-blue-500">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">Core Expertise</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Python</li>
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>Node.js</li>
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>RESTful API</li>
            </ul>
          </div>
          {/* Data & Performance */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 glow-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-purple-500/10 text-purple-500">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">Data & Performance</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>PostgreSQL & Oracle SQL</li>
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>Redis Caching</li>
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>Query Indexing</li>
            </ul>
          </div>
          {/* Distributed Systems */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 glow-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-orange-500/10 text-orange-500">
                <Workflow className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">Distributed Systems</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>RabbitMQ</li>
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>Celery Task Queue</li>
              <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>Async Architecture</li>
            </ul>
          </div>
          {/* Infra & Focus */}
          <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 glow-hover lg:row-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-green-500/10 text-green-500">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">Infra & Focus</h3>
            </div>
            <div className="mb-4">
              <h4 className="text-xs uppercase font-bold text-muted-foreground mb-2">Infrastructure</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Docker</li>
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Gitlab CI/CD</li>
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Apache Airflow</li>
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Linux</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-muted-foreground mb-2">Current Pursuit</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2"></span>Go (Golang)</li>
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2"></span>System Design</li>
                <li className="flex items-center text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-2"></span>Cybersecurity & DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Highlight Projects */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 pb-20" id="projects">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Highlight Projects</h2>
          <p className="mt-2 text-muted-foreground">Solving real-world problems with scalable architecture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1: Fintech */}
          <Link href="/projects/fintech-exchange" className="relative overflow-hidden rounded-xl border border-border bg-card p-6 flex flex-col group glow-hover h-full transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <ArrowLeftRight className="h-8 w-8 text-primary" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Fintech</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Fintech Exchange Backend</h3>
            <p className="text-xs font-medium text-muted-foreground/80 mb-4 italic">Architectural Experiment in High-Concurrency Financial Systems.</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Designed a high-concurrency backend leveraging microservices architecture. Integrated RabbitMQ to handle transaction queues efficiently, ensuring data consistency and system resilience under load.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">RabbitMQ</span>
              <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">Microservices</span>
            </div>
          </Link>

          {/* Project 2: Enterprise */}
          <Link href="/projects" className="relative overflow-hidden rounded-xl border border-border bg-card p-6 flex flex-col group glow-hover h-full transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Gavel className="h-8 w-8 text-primary" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Enterprise</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Legal & Approval System</h3>
            <p className="text-xs font-medium text-muted-foreground/80 mb-4 italic">Optimizing Workflow for Enterprise-Grade Performance.</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Overhauled the backend at Telkomsigma by refactoring complex SQL queries and implementing asynchronous processing. Achieved a 50% increase in system speed and approval workflow efficiency.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">SQL Optimization</span>
              <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">Async</span>
            </div>
          </Link>

          {/* Project 3: E-Commerce */}
          <Link href="/projects" className="relative overflow-hidden rounded-xl border border-border bg-card p-6 flex flex-col group glow-hover h-full transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">E-Commerce</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">ModuCommerce</h3>
            <p className="text-xs font-medium text-muted-foreground/80 mb-4 italic">Event-Driven Microservices Simulation.</p>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Developed a scalable e-commerce simulation using Pub/Sub patterns. Decoupled services allowed for independent scaling of inventory, order processing, and notification systems.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">Pub/Sub</span>
              <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground border border-border">Scalability</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. Blog Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-6 pb-20" id="blog">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Rss className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Latest From Medium</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Engineering Insights & Technical Logs.</h2>
              <p className="text-lg text-muted-foreground">
                I share detailed technical insights on backend engineering, system optimization strategies, and using AI to boost developer productivity.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base font-bold bg-transparent">
                <Link href="https://medium.com" target="_blank">
                  Read on Medium
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Placeholder Grid for Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link href="/blog/reliability-matters" className="block group">
              <div className="p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/50 transition-colors h-full">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">Understanding Database Locking</h4>
                <p className="text-xs text-muted-foreground mt-2">Oct 24 • 5 min read</p>
              </div>
            </Link>
            <Link href="/blog" className="block group">
              <div className="p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/50 transition-colors h-full">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">My Journey with Go: First Impressions</h4>
                <p className="text-xs text-muted-foreground mt-2">Nov 02 • 4 min read</p>
              </div>
            </Link>
            <Link href="/blog" className="block group">
              <div className="p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/50 transition-colors h-full">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">Productivity with AI Coding Assistants</h4>
                <p className="text-xs text-muted-foreground mt-2">Nov 15 • 7 min read</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
