"use client";

import React from "react";
import Skill, { SkillProps } from "./skill";
import { getDictionary } from "@/i18n/get-dictionary";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

export interface SkillTypeScriptProps extends Pick<SkillProps, "iconOnly"> {
  skills: Awaited<ReturnType<typeof getDictionary>>["skills"];
}

const SkillTypeScript: React.FC<SkillTypeScriptProps> = ({
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
