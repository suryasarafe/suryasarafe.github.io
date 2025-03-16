export interface Project {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  description: string;
  project: Project[];
}

export interface Experience {
  id: number;
  date: string;
  position: string;
  company: string;
  description: string;
  skill: Skill[];
}

export interface ParamsId {
  params: { id: Promise<string> };
}