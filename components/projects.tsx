"use client";

import React from "react";
import { Section } from "./section";
import { projects } from "@/data/projects";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <Section id="projects" title="Featured Work" subtitle="A collection of the technical solutions I've engineered.">
            <div className="space-y-24 md:space-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="group grid gap-8 md:grid-cols-12 md:items-center"
                    >
                        {/* Visual Indicator / Number */}
                        <div className="hidden md:block md:col-span-1">
                            <span className="text-6xl font-black text-blue-600/10 transition-colors group-hover:text-blue-600/20">
                                0{index + 1}
                            </span>
                        </div>

                        {/* Content Area - No "Box" */}
                        <div className="md:col-span-7 space-y-6">
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600/60"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-4xl font-black tracking-tighter md:text-5xl lg:text-6xl">
                                {project.name}
                            </h3>

                            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-8 pt-4">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group/btn inline-flex items-center gap-3 font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    Read Case Study
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                                </Link>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Github className="h-6 w-6" />
                                </a>
                            </div>
                        </div>

                        {/* Side summary or abstract element if needed, but keeping it minimal */}
                        <div className="hidden md:block md:col-span-4 border-l border-border pl-8 py-4">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Core Contribution</p>
                            <p className="text-sm font-medium leading-relaxed italic">
                                "{project.overview.split('.')[0]}."
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
