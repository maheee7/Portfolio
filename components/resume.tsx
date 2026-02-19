"use client";

import React from "react";
import { Section } from "./section";
import { FileText, Download, CheckCircle } from "lucide-react";

export function Resume() {
    return (
        <Section id="resume" title="Resume" subtitle="Download my detailed professional background.">
            <div className="rounded-[3rem] border border-border bg-card p-10 md:p-20 shadow-2xl shadow-blue-500/5 text-center max-w-4xl mx-auto relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />

                <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 mb-10 transform -rotate-6">
                    <FileText className="h-12 w-12" />
                </div>

                <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready to collaborate?</h3>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    My resume provides a comprehensive look at my technical expertise,
                    leadership experience, and the impact I've delivered in the tech industry.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Modern Tech Stack</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Enterprise Experience</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Production Ready AI</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <a
                        href="/Mahendran-S-SDE (2).pdf"
                        className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-12 text-lg font-black text-white shadow-2xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95"
                    >
                        Download PDF
                        <Download className="h-6 w-6 transition-transform group-hover:translate-y-1" />
                    </a>
                </div>
            </div>
        </Section>
    );
}
