import Link from "next/link"
import { Mail, Briefcase, Code, FileText } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="max-w-lg text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Tertarik buat diskusi soal system design, kolaborasi proyek fintech, atau sekadar ngopi
                            bareng bahas distributed systems?
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                            <span className="text-sm font-medium">Email</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                            <Briefcase className="h-5 w-5" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                            <Code className="h-5 w-5" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                            <FileText className="h-5 w-5" />
                            <span className="text-sm font-medium">Medium</span>
                        </Link>
                    </div>
                </div>
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Oktavian Aji. <span className="hidden sm:inline">Powered by Google Antigravity and Stitch.</span>
                    </p>
                    <div className="flex gap-6">
                        <span className="text-xs font-mono text-muted-foreground">v2.4.0-stable</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
