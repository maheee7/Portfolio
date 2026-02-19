export interface Project {
    slug: string;
    name: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    liveLink?: string;
    overview: string;
    problemStatement: string;
    architecture: {
        frontend: string;
        backend: string;
        database: string;
    };
    challenges: string[];
    solutions: string[];
    learnings: string[];
    images: string[];
}

export interface WorkExperience {
    company: string;
    role: string;
    duration: string;
    impact: string[];
}
