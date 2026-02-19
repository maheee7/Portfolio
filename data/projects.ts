import { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "dbxai-roadmap",
        name: "DBXAIValueRoadmap",
        description: "Enterprise-grade dashboard for AI value roadmapping, featuring complex data visualizations and real-time updates.",
        techStack: ["React", "TypeScript", "Redux Toolkit", "Figma", "REST API"],
        githubLink: "#",
        liveLink: "#",
        overview: "Built a modular, responsive UI system to drive dynamic dashboards and workflows for AI investment roadmapping.",
        problemStatement: "Enterprise users needed a way to visualize and manage complex AI project roadmaps with high-density data and real-time status tracking.",
        architecture: {
            frontend: "React with TypeScript and Redux Toolkit for state management, featuring Intersection Observer for lazy loading.",
            backend: "Integrated with 20-25 RESTful APIs for dynamic content and persistent storage.",
            database: "Enterprise-level data management with Excel export capabilities."
        },
        challenges: [
            "Optimizing rendering for large datasets in organizational tree maps.",
            "Implementing seamless drag-and-drop reordering for project workflows.",
            "Ensuring state-driven updates aligned perfectly with complex Figma designs."
        ],
        solutions: [
            "Implemented debounced search and lazy loading for high-performance scrolling.",
            "Used API polling to maintain real-time dashboard accuracy.",
            "Developed a custom organizational tree map visualization component."
        ],
        learnings: [
            "Mastered complex state synchronization between sidebars, chatbots, and main tables.",
            "Deepened expertise in performance optimization for data-heavy React applications."
        ],
        images: ["/projects/dbxai-1.png"]
    },
    {
        slug: "racpad",
        name: "RacPAD",
        description: "Full-stack rent-to-own retail platform supporting multi-country inventory and delivery logistics.",
        techStack: ["React.js", "Node.js", "PostgreSQL", "AWS (API Gateway, CloudWatch)"],
        githubLink: "#",
        liveLink: "#",
        overview: "A comprehensive retail management platform facilitating inventory, deliveries, and reconciliation across US and Mexico stores.",
        problemStatement: "Managing cross-border retail operations with multiple currencies and languages requires a centralized, high-performance system.",
        architecture: {
            frontend: "React-based dashboard with localization (English/Spanish) and multi-currency support (USD/MXN).",
            backend: "Node.js Express server with restructed request sequencing to eliminate redundancy.",
            database: "PostgreSQL for reliable transactional data and inventory tracking."
        },
        challenges: [
            "Handling multi-store inventory assignments and pickup tracking in real-time.",
            "Reducing high API latency caused by redundant backend calls."
        ],
        solutions: [
            "Restructured backend request sequencing, significantly reducing response times.",
            "Implemented a centralized dashboard for real-time inventory and delivery monitoring.",
            "Integrated AWS CloudWatch for production monitoring and error tracking."
        ],
        learnings: [
            "Extensive experience in building scalable, localized enterprise applications.",
            "Improved ability to optimize backend performance and REST integrations."
        ],
        images: ["/projects/racpad-1.png"]
    },
    {
        slug: "medremind",
        name: "MedRemind",
        description: "Full-stack healthcare alert system for medication adherence, featuring automated caregiver notifications.",
        techStack: ["React", "Supabase", "PostgreSQL", "Vercel", "Resend"],
        githubLink: "#",
        liveLink: "#",
        overview: "A critical care system that tracks medication adherence and alerts caregivers when doses are missed.",
        problemStatement: "Medication non-adherence is a major health risk; families need a reliable way to be notified if a loved one misses a dose.",
        architecture: {
            frontend: "React with React Hook Form and Zod for robust, validated user onboarding.",
            backend: "Vercel Serverless Functions running cron-based background jobs.",
            database: "Supabase (PostgreSQL) for user data, medication schedules, and audit logs."
        },
        challenges: [
            "Designing a reliable background job system to detect missed doses within a tight 1-hour window.",
            "Managing secure authentication and sensitive patient data."
        ],
        solutions: [
            "Implemented Supabase Auth for secure login and data isolation.",
            "Built automated email triggers via Resend API integrated with Vercel Cron.",
            "Used Zod schemas for end-to-end type safety and validation."
        ],
        learnings: [
            "Mastered the integration of real-time databases with background task scheduling.",
            "Learned to build production-ready healthcare utilities with modern serverless architecture."
        ],
        images: ["/projects/medremind-1.png"]
    }
];
