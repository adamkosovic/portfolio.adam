export type TechTag = string;

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;

  tags: TechTag[];

  liveUrl?: string;
  repoUrl?: string;
}