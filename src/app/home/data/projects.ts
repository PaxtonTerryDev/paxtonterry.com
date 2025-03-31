import { ProgrammingLanguage, Project } from "@/types/project";

export const testProject: Project = {
  title: "Test Project 1",
  description: {
    short: "Short Description of Test Project 1",
    long: "This is a much longer and much more verbose description of the project. It goes into other details like the reasons it was implemented, why it was implmented, etc.  Overall, it just gives a good overview into the conception and purpose of the project.",
  },
  languages: [
    ProgrammingLanguage.Typescript,
    ProgrammingLanguage.NextJS,
    ProgrammingLanguage.Oracle,
    ProgrammingLanguage.PostgreSQL,
    ProgrammingLanguage.Go,
  ],
  githubUrl: {
    label: "Github",
    href: "https://www.bingus.com",
  },
  deploymentUrl: {
    label: "Live Demo",
    href: "https://www.lingus.com",
  },
};

export const testProject2: Project = {
  title: "DevOps Dashboard",
  description: {
    short: "Real-time dashboard to monitor CI/CD pipelines and server health.",
    long: "This project was built to give developers and DevOps engineers real-time insight into CI/CD pipeline status, server health, and deployment logs. It integrates with GitHub Actions, Docker, and Kubernetes clusters, and is optimized for quick visual parsing of health metrics.",
  },
  languages: [
    ProgrammingLanguage.Typescript,
    ProgrammingLanguage.Go,
    ProgrammingLanguage.PostgreSQL,
  ],
  githubUrl: {
    label: "GitHub",
    href: "https://github.com/example/devops-dashboard",
  },
  deploymentUrl: {
    label: "Live Dashboard",
    href: "https://dashboard.example.com",
  },
};

export const testProject3: Project = {
  title: "Health Analytics ETL",
  description: {
    short: "ETL pipeline for processing patient data from multiple systems.",
    long: "A robust ETL pipeline that extracts patient health records from various clinical systems, transforms them into a unified format, and loads them into a secure Oracle database. Focused on high reliability, data integrity, and compliance with HIPAA standards.",
  },
  languages: [ProgrammingLanguage.Go, ProgrammingLanguage.Oracle],
  githubUrl: {
    label: "GitHub",
    href: "https://github.com/example/health-etl",
  },
  deploymentUrl: {
    label: "ETL Console",
    href: "https://etl.examplehealth.com",
  },
};

export const testProject4: Project = {
  title: "Portfolio v2",
  description: {
    short: "A redesign of my personal portfolio using modern web stacks.",
    long: "This is the second iteration of my personal portfolio site. It's built with Next.js, TailwindCSS, and a PostgreSQL backend for project and blog content. It also includes a light/dark mode toggle and dynamic filtering of portfolio items by tag.",
  },
  languages: [
    ProgrammingLanguage.NextJS,
    ProgrammingLanguage.Typescript,
    ProgrammingLanguage.PostgreSQL,
  ],
  githubUrl: {
    label: "GitHub",
    href: "https://github.com/example/portfolio-v2",
  },
  deploymentUrl: {
    label: "Live Site",
    href: "https://portfolio.example.com",
  },
};
