"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillDocker: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.docker.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Docker"
      description={description}
      iconSrc={getIconSrc("docker.webp", theme as "light" | "dark")}
      link="https://www.docker.com/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillDocker);
