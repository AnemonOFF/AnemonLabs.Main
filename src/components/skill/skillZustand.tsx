"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillZustand: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.zustand.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Zustand"
      description={description}
      iconSrc={getIconSrc("zustand.svg", theme as "light" | "dark")}
      link="https://zustand.docs.pmnd.rs/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillZustand);
