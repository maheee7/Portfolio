"use client";

import React from "react";
import { Section } from "./section";
import { CheckCircle2, Code2, Database, Cloud, Zap } from "lucide-react";

const strengths = [
    "React (TypeScript) & Next.js",
    "Node.js & Express.js",
    "PostgreSQL & Supabase",
    "AWS (Lambda, CloudWatch, S3)",
    "Secure Authentication",
    "RESTful API Development",
];

export function About() {
    return (
        <Section id="about" title="Engineering Philosophy">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <p className="text-xl leading-relaxed text-muted-foreground">
                            I am a <span className="text-foreground font-semibold underline decoration-blue-500/30 decoration-4">Full-Stack Software Engineer</span> with 1.5+ years of experience
                            building scalable web applications. My expertise lies in creating production-ready
                            features that prioritize reliability and performance.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Skilled in modern frontend frameworks and robust backend architectures,
                            I specialize in delivering end-to-end solutions—from complex UI dashboards
                            with React and TypeScript to automated cloud-based workflows on AWS.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {strengths.map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-border/50">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                                <span className="font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <SkillCard icon={<Code2 />} title="Frontend" desc="React, TS, NextJS, Tailwind" />
                    <SkillCard icon={<Zap />} title="Backend" desc="Node.js, Express, Java" />
                    <SkillCard icon={<Database />} title="Databases" desc="PostgreSQL, MySQL, MongoDB" />
                    <SkillCard icon={<Cloud />} title="DevOps" desc="AWS, Docker, Vercel" />
                </div>
            </div>
        </Section>
    );
}

function SkillCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:bg-blue-600/5 hover:border-blue-600/30">
            <div className="mb-4 text-blue-600 transition-transform group-hover:scale-110">
                {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-tight">{desc}</p>
        </div>
    );
}
