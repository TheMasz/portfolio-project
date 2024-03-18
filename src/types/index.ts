export type INavLink = {
  route: string;
  label: string;
};

export type ISkill = {
  label: string;
  type: string;
};

export type portfoliosType = {
  id: number;
  name: string;
  pics: string[];
  dev: string[];
  functions: string[];
  desc?:string;
  github: string;
}