"use client"

import { useState, useEffect } from "react"
import { Terminal, Download, ArrowLeft, Briefcase, GraduationCap, Code, FileText, User, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function ResumePage() {
    const [lineIndex, setLineIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    const lines = [
        { type: "command", text: "git checkout main" },
        { type: "info", text: "Switched to branch 'main'" },
        { type: "command", text: "cat OKTAVIAN_AJI_CV.pdf" },
        { type: "fetching", text: "Fetching resource from local/storage/resume_final_2026..." },
    ]

    useEffect(() => {
        if (lineIndex < lines.length) {
            const timer = setTimeout(() => {
                setLineIndex(lineIndex + 1)
            }, lineIndex === 3 ? 1500 : 800)
            return () => clearTimeout(timer)
        } else {
            setIsComplete(true)
        }
    }, [lineIndex])

    return (
        <div className="min-h-screen text-gray-300 font-mono p-4 md:p-10 selection:bg-primary selection:text-white">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                {/* Terminal Window */}
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f0f] flex flex-col min-h-[70vh]">
                    {/* Terminal Header */}
                    <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                            <Terminal className="h-3 w-3" />
                            <span>oktavian-aji-resume — 80x24</span>
                        </div>
                        <div className="w-12"></div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-10 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">
                        {lines.slice(0, lineIndex).map((line, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                {line.type === "command" && (
                                    <div className="flex gap-2">
                                        <span className="text-primary font-bold">$</span>
                                        <span className="text-white">{line.text}</span>
                                    </div>
                                )}
                                {line.type === "info" && (
                                    <div className="text-blue-400 opacity-80">{line.text}</div>
                                )}
                                {line.type === "fetching" && (
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <div className="h-1 w-20 bg-white/10 rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ left: "-100%" }}
                                                animate={{ left: "100%" }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-0 bottom-0 w-full bg-primary/50"
                                            ></motion.div>
                                        </div>
                                        <span>{line.text}</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Resume Content (Render after "fetching") */}
                        <AnimatePresence>
                            {isComplete && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="mt-8 flex flex-col gap-10 pb-10"
                                >
                                    {/* Resume Visual Header */}
                                    <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                        <div>
                                            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight uppercase">Oktavian Aji Tyas Azis</h1>
                                            <p className="text-primary font-bold text-lg mb-4">Software Engineer • Backend Specialist • Full Stack Developer</p>
                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-sans">
                                                <span className="flex items-center gap-1 underline underline-offset-4 decoration-white/20 hover:decoration-primary transition-colors cursor-pointer">oktavian.aji18@gmail.com</span>
                                                <span className="flex items-center gap-1 underline underline-offset-4 decoration-white/20 hover:decoration-primary transition-colors cursor-pointer">linkedin.com/oktavian-aji</span>
                                                <span className="flex items-center gap-1 underline underline-offset-4 decoration-white/20 hover:decoration-primary transition-colors cursor-pointer">Jakarta, Indonesia</span>
                                            </div>
                                        </div>
                                        <a href="/cv/CV_Oktavian_Aji_2025.pdf" download="OKTAVIAN_AJI_CV.pdf">
                                            <Button className="bg-white text-black hover:bg-white/90 font-bold gap-2 font-sans">
                                                <Download className="h-4 w-4" /> Download
                                            </Button>
                                        </a>
                                    </div>

                                    {/* Summary Section */}
                                    <div className="text-muted-foreground leading-relaxed text-sm max-w-3xl">
                                        <p>Versatile Software Engineer with <span className="text-white font-bold">3+ years of experience</span> delivering end-to-end enterprise solutions. Specializing in <span className="text-primary italic font-bold">scalable backends</span>, distributed systems, and event-driven architectures. Currently focused on building high-integrity systems at <span className="text-white font-bold">Telkomsigma</span> while mastering Fintech core principles and advanced system design (DDIA).</p>
                                    </div>

                                    {/* Resume Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        {/* Main Column */}
                                        <div className="md:col-span-2 flex flex-col gap-10">
                                            {/* Experience */}
                                            <section className="flex flex-col gap-6">
                                                <div className="flex items-center gap-4">
                                                    <Briefcase className="h-5 w-5 text-primary" />
                                                    <h2 className="text-xl font-bold text-white uppercase tracking-widest">Experience</h2>
                                                    <div className="h-px flex-1 bg-white/10"></div>
                                                </div>

                                                <div className="flex flex-col gap-10">
                                                    {/* Telkomsigma */}
                                                    <div className="relative pl-6 border-l border-primary/30">
                                                        <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(19,91,236,1)]"></div>
                                                        <div className="flex flex-col gap-1 mb-3">
                                                            <div className="flex justify-between items-start">
                                                                <h3 className="font-bold text-white text-lg tracking-tight">Senior Back End Developer</h3>
                                                                <span className="text-[10px] font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded tracking-widest uppercase">Nov 2022 — Present</span>
                                                            </div>
                                                            <p className="text-sm font-bold text-primary italic">PT SIGMA CIPTA CARAKA (Telkomsigma)</p>
                                                        </div>
                                                        <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-2 leading-relaxed">
                                                            <li>Modernized legacy legal systems into an <span className="text-white">enterprise CLM (Digipactum)</span>, reducing processing time by <span className="text-primary italic font-bold">50%</span> through dynamic workflow engines.</li>
                                                            <li>Architected high-integrity background processing using <span className="text-white">Celery & RabbitMQ</span> to handle heavy asynchronous tasks.</li>
                                                            <li>Enhanced system synchronization by implementing <span className="text-white">Apache Airflow</span> DAGs for automated workforce data processing.</li>
                                                            <li>Implemented seamless multi-service integration between core backends and <span className="text-white">Microsoft SharePoint</span> via REST APIs.</li>
                                                            <li>Optimized mission-critical API performance by refactoring complex queries and logic, improving system responsiveness.</li>
                                                        </ul>
                                                    </div>

                                                    {/* Ravenry */}
                                                    <div className="relative pl-6 border-l border-white/10">
                                                        <div className="flex flex-col gap-1 mb-3">
                                                            <div className="flex justify-between items-start">
                                                                <h3 className="font-bold text-white text-lg tracking-tight">Full Stack Developer Intern</h3>
                                                                <span className="text-[10px] font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded tracking-widest uppercase">Sep 2021 — Feb 2022</span>
                                                            </div>
                                                            <p className="text-sm font-bold text-primary italic">Ravenry</p>
                                                        </div>
                                                        <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-2 leading-relaxed">
                                                            <li>Contributed to major UI revamps and API updates for internal services.</li>
                                                            <li>Developed a <span className="text-white">pub/sub integration</span> solution for inter-service communication.</li>
                                                            <li>Automated QA workflows using <span className="text-white font-serif italic">Cypress</span>, reducing regression bugs.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </section>

                                            {/* Highlight Projects */}
                                            <section className="flex flex-col gap-6">
                                                <div className="flex items-center gap-4">
                                                    <FileText className="h-5 w-5 text-primary" />
                                                    <h2 className="text-xl font-bold text-white uppercase tracking-widest">Major Projects</h2>
                                                    <div className="h-px flex-1 bg-white/10"></div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {[
                                                        { name: "Ledger Core", tech: "Go, Echo, PostgreSQL", impact: "100% Financial Integrity" },
                                                        { name: "Application Hub", tech: "Python, Django, RabbitMQ", impact: "Unified Enterprise SSO" },
                                                        { name: "Digipactum CLM", tech: "Python, Django, Oracle, MongoDB", impact: "70% Faster Drafting" },
                                                        { name: "Mobile Timesheet", tech: "Airflow, RabbitMQ, Python", impact: "Automated Workforce Sync" }
                                                    ].map((p, i) => (
                                                        <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/5 flex flex-col gap-1 hover:border-primary/30 transition-colors">
                                                            <div className="flex justify-between">
                                                                <h4 className="font-bold text-white text-sm">{p.name}</h4>
                                                                <span className="text-[10px] text-primary font-bold uppercase">{p.impact}</span>
                                                            </div>
                                                            <p className="text-[10px] text-muted-foreground font-mono">{p.tech}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        </div>

                                        {/* Sidebar */}
                                        <div className="flex flex-col gap-10">
                                            {/* Tech Stack */}
                                            <section className="flex flex-col gap-6">
                                                <div className="flex items-center gap-3">
                                                    <Code className="h-5 w-5 text-primary" />
                                                    <h2 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Competencies</h2>
                                                </div>
                                                <div className="flex flex-col gap-6">
                                                    {[
                                                        { label: "Backend", techs: ["Python (Django/FastAPI)", "Go (Echo/Fiber)", "Node.js"] },
                                                        { label: "Data & Messaging", techs: ["PostgreSQL", "Oracle", "Redis", "RabbitMQ", "Celery"] },
                                                        { label: "Infrastructure", techs: ["Docker", "GitLab CI/CD", "Apache Airflow", "Rancher"] },
                                                        { label: "Frontend", techs: ["React/Next.js", "Vue/Nuxt", "TailwindCSS"] }
                                                    ].map((item) => (
                                                        <div key={item.label} className="flex flex-col gap-2">
                                                            <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">{item.label}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {item.techs.map(tech => (
                                                                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] rounded hover:border-primary/50 hover:bg-primary/5 transition-all text-white">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            {/* Education */}
                                            <section className="flex flex-col gap-6">
                                                <div className="flex items-center gap-3">
                                                    <GraduationCap className="h-5 w-5 text-primary" />
                                                    <h2 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Education</h2>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="font-bold text-white text-sm">Pamulang University</h3>
                                                    <p className="text-xs text-muted-foreground italic tracking-tight">B.Sc Info Technology</p>
                                                    <p className="text-[11px] text-primary font-bold mt-1">GPA: 3.52 / 4.0</p>
                                                </div>
                                            </section>

                                            {/* Certifications */}
                                            <section className="flex flex-col gap-4">
                                                <div className="flex items-center gap-3">
                                                    <Shield className="h-4 w-4 text-primary" />
                                                    <h2 className="text-xs font-bold text-white uppercase tracking-widest">Certifications</h2>
                                                </div>
                                                <ul className="text-[10px] text-muted-foreground space-y-2">
                                                    <li>• Apache Airflow 3 Fundamentals</li>
                                                    <li>• Advanced Go Programming</li>
                                                    <li>• DevOps Foundation</li>
                                                    <li>• OWASP Top 10 Security</li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>

                                    {/* Footer Message */}
                                    <div className="mt-10 pt-10 border-t border-white/5 text-center">
                                        <p className="text-xs text-muted-foreground italic font-sans text-center">
                                            -- Last updated: 2026.01.16 --
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Blinking Cursor */}
                        {!isComplete && (
                            <div className="flex gap-2 items-center">
                                <span className="text-primary font-bold">$</span>
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="w-2 h-5 bg-primary"
                                ></motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    )
}
