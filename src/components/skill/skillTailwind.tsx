"use client";

import React from "react";
import Skill, { SkillProps } from "./skill";
import { getDictionary } from "@/i18n/get-dictionary";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

export interface SkillTailwindProps extends Pick<SkillProps, "iconOnly"> {
  skills: Awaited<ReturnType<typeof getDictionary>>["skills"];
}

const SkillTailwind: React.FC<SkillTailwindProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.tailwind.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Tailwind"
      description={description}
      iconSrc={getIconSrc("tailwind.webp", theme as "light" | "dark")}
      link="https://tailwindcss.com/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillTailwind);
