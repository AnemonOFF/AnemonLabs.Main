"use client";

import React from "react";
import Skill, { SkillProps } from "./skill";
import { getDictionary } from "@/i18n/get-dictionary";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

export interface SkillShadcnProps extends Pick<SkillProps, "iconOnly"> {
  skills: Awaited<ReturnType<typeof getDictionary>>["skills"];
}

const SkillShadcn: React.FC<SkillShadcnProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.shadcn.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="shadcn"
      description={description}
      iconSrc={getIconSrc("react.png", theme as "light" | "dark")}
      link="https://ui.shadcn.com/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillShadcn);
