"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "border-b bg-background/80 backdrop-blur-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    MAHENDRAN
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-4 w-[1px] bg-border" />
                    <div className="flex items-center gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <Github className="h-5 w-5 transition-colors hover:text-blue-600" />
                        </a>
                        <a href="https://linkedin.com/in/mahendran-s746" target="_blank" rel="noreferrer">
                            <Linkedin className="h-5 w-5 transition-colors hover:text-blue-600" />
                        </a>
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full border-b bg-background px-6 py-8 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium transition-colors hover:text-blue-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com" target="_blank" rel="noreferrer">
                                    <Github className="h-6 w-6" />
                                </a>
                                <a href="https://linkedin.com/in/mahendran-s746" target="_blank" rel="noreferrer">
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
