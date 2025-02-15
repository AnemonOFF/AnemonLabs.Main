"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillAutoMapper: React.FC<PredefinedSkillProps> = ({
  iconOnly,
  skills,
}) => {
  const { theme } = useTheme();
  const description = skills.automapper.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="AutoMapper"
      description={description}
      iconSrc={getIconSrc("automapper.png", theme as "light" | "dark")}
      link="https://automapper.org/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillAutoMapper);
