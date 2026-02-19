"use client";

import React from "react";
import { Section } from "./section";
import { workExperience } from "@/data/work";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Work() {
    return (
        <Section id="work" title="Professional Experience" subtitle="Building enterprise and retail solutions at scale.">
            <div className="max-w-4xl mx-auto space-y-12">
                {workExperience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 p-8 rounded-3xl border border-border bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10"
                    >
                        {/* Left side: Timeline/Date */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 px-3 py-1 rounded-full bg-blue-600/10">
                                <Calendar className="w-3 h-3" />
                                {job.duration}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Chennai, Tamil Nadu
                            </div>
                        </div>

                        {/* Right side: Content */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-black tracking-tight group-hover:text-blue-600 transition-colors">
                                    {job.role}
                                </h3>
                                <div className="mt-1 flex items-center gap-2 text-lg font-bold">
                                    <Briefcase className="w-5 h-5 text-blue-600" />
                                    {job.company}
                                </div>
                            </div>

                            <ul className="grid gap-4">
                                {job.impact.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                                        <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                                        <span className="text-[15px]">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
