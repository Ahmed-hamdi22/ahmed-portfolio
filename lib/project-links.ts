import type { ProjectItem } from "./data";

function externalUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol) ? url.href : undefined; } catch { return undefined; }
}
export function getProjectLinks(project: Pick<ProjectItem, "demo" | "github">) {
  const live = externalUrl(project.demo);
  const github = externalUrl(project.github);
  return { live, github, primary: live ?? github };
}
