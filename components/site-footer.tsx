import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} John Doe. <span className="hidden sm:inline">Built with resilience in mind.</span>
                </p>
                <div className="flex gap-6">
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Resume
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Twitter
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Polywork
                    </Link>
                </div>
            </div>
        </footer>
    )
}
