"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillTypeScript: React.FC<PredefinedSkillProps> = ({
  iconOnly,
  skills,
}) => {
  const { theme } = useTheme();
  const description = skills.typescript.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="TypeScript"
      description={description}
      iconSrc={getIconSrc("typescript.png", theme as "light" | "dark")}
      link="https://www.typescriptlang.org/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillTypeScript);
