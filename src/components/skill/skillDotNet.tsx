"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillDotNet: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.dotnet.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name=".NET"
      description={description}
      iconSrc={getIconSrc("dotnet.png", theme as "light" | "dark")}
      link="https://dotnet.microsoft.com/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillDotNet);
