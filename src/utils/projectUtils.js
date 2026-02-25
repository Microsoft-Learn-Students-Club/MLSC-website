import projectData from "./projectData.json";

const addIdsToProjects = (projects, categoryPrefix) =>
  projects.map((project) => ({
    ...project,
    id: `${categoryPrefix}-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
  }));

export const getProjectsByCategory = () => ({
  webDev: addIdsToProjects(projectData.webDev, "webDev"),
  aiMl: addIdsToProjects(projectData.aiMl, "aiMl"),
  app: addIdsToProjects(projectData.app, "app"),
});

export const getAllProjects = () => {
  const categorizedProjects = getProjectsByCategory();
  return [...categorizedProjects.webDev, ...categorizedProjects.aiMl, ...categorizedProjects.app];
};
