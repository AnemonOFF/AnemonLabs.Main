"use client";

import React from "react";
import Skill, { SkillProps } from "./skill";
import { getDictionary } from "@/i18n/get-dictionary";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

export interface SkillReactQueryProps extends Pick<SkillProps, "iconOnly"> {
  skills: Awaited<ReturnType<typeof getDictionary>>["skills"];
}

const SkillReactQuery: React.FC<SkillReactQueryProps> = ({
  iconOnly,
  skills,
}) => {
  const { theme } = useTheme();
  const description = skills.reactquery.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="React Query"
      description={description}
      iconSrc={getIconSrc("reactquery.webp", theme as "light" | "dark")}
      link="https://tanstack.com/query/latest/docs/framework/react/overview"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillReactQuery);
