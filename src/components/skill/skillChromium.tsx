"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillChromium: React.FC<PredefinedSkillProps> = ({
  iconOnly,
  skills,
}) => {
  const { theme } = useTheme();
  const description = skills.chromium.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Chromium"
      description={description}
      iconSrc={getIconSrc("chromium.png", theme as "light" | "dark")}
      link="https://www.chromium.org/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillChromium);
