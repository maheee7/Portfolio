"use client";

import React from "react";
import { Section } from "./section";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's build something exceptional together.">
            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                    <p className="text-xl leading-relaxed text-muted-foreground">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6">
                        <ContactLink
                            icon={<Mail />}
                            label="Email"
                            value="mahendran.s746@gmail.com"
                            href="mailto:mahendran.s746@gmail.com"
                        />
                        <ContactLink
                            icon={<Phone />}
                            label="Phone"
                            value="+91 8056082746"
                            href="tel:+918056082746"
                        />
                        <ContactLink
                            icon={<Linkedin />}
                            label="LinkedIn"
                            value="linkedin.com/in/mahendran-s746"
                            href="https://linkedin.com/in/mahendran-s746"
                        />
                        <ContactLink
                            icon={<Github />}
                            label="GitHub"
                            value="github.com/mahendran-s746"
                            href="https://github.com"
                        />
                    </div>
                </div>

                
            </div>
        </Section>
    );
}

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
    return (
        <a href={href} className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-blue-600/5 transition-colors">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
            </div>

            <div>
                <p className="text-xs text-muted-foreground uppercase font-black tracking-widest">{label}</p>
                <p className="text-lg font-bold group-hover:text-blue-600 transition-colors">{value}</p>
            </div>
        </a>
    );
}
