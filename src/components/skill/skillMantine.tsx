"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillMantine: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.mantine.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Mantine"
      description={description}
      iconSrc={getIconSrc("mantine.png", theme as "light" | "dark")}
      link="https://mantine.dev/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillMantine);
