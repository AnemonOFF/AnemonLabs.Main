"use client";

import React from "react";
import Skill, { SkillProps } from "./skill";
import { getDictionary } from "@/i18n/get-dictionary";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

export interface SkillNextJSProps extends Pick<SkillProps, "iconOnly"> {
  skills: Awaited<ReturnType<typeof getDictionary>>["skills"];
}

const SkillNextJS: React.FC<SkillNextJSProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.nextjs.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="NextJS"
      description={description}
      iconSrc={getIconSrc("nextjs.webp", theme as "light" | "dark")}
      link="https://nextjs.org/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillNextJS);
