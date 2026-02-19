import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t py-12 bg-muted/20">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Mahendran S. Built with Next.js, Tailwind CSS and Framer Motion.</p>
        </div>
      </footer>

    </div>
  );
}
