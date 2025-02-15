"use client";

import React from "react";
import Skill, { SkillProps } from "./skill";
import { getDictionary } from "@/i18n/get-dictionary";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

export interface SkillReactProps extends Pick<SkillProps, "iconOnly"> {
  skills: Awaited<ReturnType<typeof getDictionary>>["skills"];
}

const SkillReact: React.FC<SkillReactProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.react.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="React"
      description={description}
      iconSrc={getIconSrc("react.png", theme as "light" | "dark")}
      link="https://react.dev/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillReact);
