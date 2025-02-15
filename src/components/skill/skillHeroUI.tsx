"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillHeroUI: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.heroui.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="HeroUI"
      description={description}
      iconSrc={getIconSrc("heroui.png", theme as "light" | "dark")}
      link="https://www.heroui.com/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillHeroUI);
