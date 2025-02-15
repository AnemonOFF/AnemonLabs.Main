"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillAWSS3: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.awss3.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="Amazon S3"
      description={description}
      iconSrc={getIconSrc("awss3.png", theme as "light" | "dark")}
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillAWSS3);
