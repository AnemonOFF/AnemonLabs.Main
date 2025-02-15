import { PredefinedSkillProps } from "@/components/skill";
import React from "react";

export type Project = {
  name: string;
  description: string;
  images: string[];
  stack: Technology[];
  pageName: string;
  year: string;
  url?: string;
  gitHubUrl?: string;
  highlightClassName?: string;
  isPresent?: boolean;
};

export type Technology = {
  component: React.ElementType<PredefinedSkillProps>;
  category: string;
};
