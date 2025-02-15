"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillEFCore: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.efcore.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Entity Framework"
      description={description}
      iconSrc={getIconSrc("efcore.png", theme as "light" | "dark")}
      link="https://react.dev/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillEFCore);
