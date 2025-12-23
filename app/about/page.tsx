import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
    const experiences = [
        {
            company: "Tech Giant Corp (Example)",
            role: "Senior Backend Engineer",
            period: "2023 - Present",
            description: "Leading the core payments infrastructure team. Migrated monolith to microservices using Go and gRPC.",
            skills: ["Go", "gRPC", "PostgreSQL", "Kafka"]
        },
        {
            company: "Fintech Startup",
            role: "Backend Engineer",
            period: "2021 - 2023",
            description: "Built the initial ledger system handling 1M+ daily transactions. Optimized database queries reducing latency by 40%.",
            skills: ["Node.js", "TypeScript", "Redis", "AWS"]
        },
        {
            company: "Software House",
            role: "Fullstack Developer",
            period: "2019 - 2021",
            description: "Developed enterprise applications for banking clients. Focusing on security and compliance.",
            skills: ["Python", "Django", "React", "Docker"]
        }
    ]

    const education = [
        {
            institution: "Top University",
            degree: "B.S. Computer Science",
            period: "2015 - 2019",
            description: "Focus on Distributed Systems and Algorithms. Graduated Cum Laude."
        }
    ]

    return (
        <div className="container py-10 max-w-[64rem]">
            <div className="flex flex-col gap-4 pb-8">
                <h1 className="font-heading text-3xl font-bold leading-tight lg:text-5xl">Experience & Education</h1>
                <p className="text-muted-foreground text-lg">My professional journey and academic background.</p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6">Work Experience</h2>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative border-l pl-6 pb-6 last:pb-0 border-muted-foreground/30">
                                <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary" />
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{exp.period}</span>
                                    </div>
                                    <h4 className="text-lg font-medium text-foreground/80">{exp.company}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                    <div className="flex gap-2 flex-wrap pt-2">
                                        {exp.skills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="font-heading text-2xl font-bold mb-6">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <Card key={index} className="bg-muted/20">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle>{edu.institution}</CardTitle>
                                            <CardDescription className="text-base mt-1">{edu.degree}</CardDescription>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border">{edu.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{edu.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
