"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillWPF: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.wpf.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="WPF"
      description={description}
      iconSrc={getIconSrc("wpf.svg", theme as "light" | "dark")}
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillWPF);
