"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

export function Section({ children, id, className, title, subtitle }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("container mx-auto px-6 py-24 md:py-32", className)}
        >
            {(title || subtitle) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16"
                >
                    {title && (
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            )}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
