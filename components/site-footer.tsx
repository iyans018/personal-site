import Link from "next/link"
import { Mail, Briefcase, Code, FileText } from "lucide-react"

const Year = new Date().getFullYear();

export function SiteFooter() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="max-w-lg text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Always open to deep dives into data-intensive applications, fintech infrastructures, or system design challenges. Let's build something that lasts.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                        <Link href="mailto:oktavian.aji18@gmail.com" target="_blank" className="flex items-center gap-2 px-3 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm">
                            <Mail className="h-4 w-4" />
                            <span>Email</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/oktavian-aji-3a43b0216/" target="_blank" className="flex items-center gap-2 px-3 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm">
                            <Briefcase className="h-4 w-4" />
                            <span>LinkedIn</span>
                        </Link>
                        <Link href="https://github.com/iyans018" target="_blank" className="flex items-center gap-2 px-3 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm">
                            <Code className="h-4 w-4" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="https://medium.com/@oktavian.aji18" target="_blank" className="flex items-center gap-2 px-3 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm" title="Medium">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Medium</span>
                        </Link>
                    </div>
                </div>
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {Year} Oktavian Aji. <span className="hidden sm:inline">Powered by Google Antigravity and Stitch.</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
