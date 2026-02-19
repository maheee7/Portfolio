"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.08)_0%,transparent_100%)]" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400"
                >
                    Junior Software Engineer
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
                >
                    Building <span className="text-blue-600">scalable</span> systems with <span className="text-blue-600">modern</span> tech
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl lg:max-w-3xl"
                >
                    I am Mahendran S, specializing in React (TypeScript) and Node.js.
                    I build production-ready applications with PostgreSQL, Supabase, and AWS.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="#projects"
                        className="group flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/25 active:scale-95"
                    >
                        View Projects
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                        href="/Mahendran-S-SDE (2).pdf"
                        className="group flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-base font-semibold shadow-sm transition-all hover:bg-accent active:scale-95"
                    >
                        Download Resume
                        <FileDown className="h-5 w-5" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-16 flex items-center justify-center gap-8 text-muted-foreground"
                >
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com/in/mahendran-s746" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="mailto:mahendran.s746@gmail.com" className="hover:text-blue-600 transition-colors">
                        <Mail className="h-6 w-6" />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="h-12 w-7 items-start rounded-full border-2 border-muted-foreground/20 p-1.5 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="h-2 w-1 rounded-full bg-blue-600"
                    />
                </div>
            </motion.div>
        </section>
    );
}
