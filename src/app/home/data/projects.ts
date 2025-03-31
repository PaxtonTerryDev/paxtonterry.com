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
  githubUrl: "https://www.bingus.com",
  deploymentUrl: "https://www.lingus.com",
};
