"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillPrisma: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.prisma.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="React"
      description={description}
      iconSrc={getIconSrc("prisma.webp", theme as "light" | "dark")}
      link="https://www.prisma.io/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillPrisma);
