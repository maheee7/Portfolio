import React from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { ArrowLeft, Github, ExternalLink, Code2, Cpu, Database, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.name} | Mahendran S`,
        description: project.description,
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24 lg:pt-32">
                <Section>
                    <div className="max-w-5xl mx-auto">
                        <Link
                            href="/#projects"
                            className="group mb-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-blue-600"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>

                        <header className="mb-20">
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl mb-10">
                                {project.name}
                            </h1>

                            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                                <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    {project.githubLink && project.githubLink !== "#" && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background transition-all hover:bg-accent"
                                        >
                                            <Github className="h-6 w-6" />
                                        </a>
                                    )}
                                    {project.liveLink && project.liveLink !== "#" && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </header>

                        <div className="grid gap-16 lg:grid-cols-12 border-t border-border pt-16">
                            <div className="lg:col-span-8 space-y-20">
                                <section>
                                    <h2 className="text-2xl font-black tracking-tight mb-6 uppercase tracking-widest text-blue-600/80">
                                        Overview
                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-blue-600/20 pl-6">
                                        {project.overview}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-black tracking-tight mb-6 uppercase tracking-widest text-blue-600/80">
                                        Problem & Solution
                                    </h2>
                                    <div className="space-y-8">
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {project.problemStatement}
                                        </p>

                                        <div className="grid gap-8 md:grid-cols-2">
                                            <div className="space-y-4">
                                                <p className="text-sm font-black uppercase tracking-widest text-red-500">Challenges</p>
                                                <ul className="space-y-3">
                                                    {project.challenges.map((c, i) => (
                                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground font-medium underline underline-offset-4 decoration-red-500/20">
                                                            {c}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-sm font-black uppercase tracking-widest text-green-500">Implemented Solutions</p>
                                                <ul className="space-y-3">
                                                    {project.solutions.map((s, i) => (
                                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground font-medium underline underline-offset-4 decoration-green-500/20">
                                                            {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <aside className="lg:col-span-4 space-y-12">
                                <div className="space-y-8">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">Architecture</h3>
                                    <div className="space-y-8">
                                        <ArchitectureItem icon={<Code2 />} label="Frontend" value={project.architecture.frontend} />
                                        <ArchitectureItem icon={<Cpu />} label="Backend" value={project.architecture.backend} />
                                        <ArchitectureItem icon={<Database />} label="Database" value={project.architecture.database} />
                                    </div>
                                </div>

                                <div className="space-y-8 pt-8 border-t border-border">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">Learnings</h3>
                                    <ul className="space-y-4">
                                        {project.learnings.map((l, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex gap-3">
                                                <div className="mt-1.5 h-1 w-1 shrink-0 bg-blue-600 rounded-full" />
                                                {l}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </Section>
            </main>

            <footer className="py-12 border-t border-border">
                <div className="container mx-auto px-6 text-center text-muted-foreground">
                    <p className="text-sm font-medium">© {new Date().getFullYear()} Mahendran S. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

function ArchitectureItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex gap-4">
            <div className="text-blue-600 shrink-0">
                {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm font-bold leading-relaxed">{value}</p>
            </div>
        </div>
    );
}
