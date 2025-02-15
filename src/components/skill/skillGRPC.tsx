"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillGRPC: React.FC<PredefinedSkillProps> = ({ iconOnly, skills }) => {
  const { theme } = useTheme();
  const description = skills.grpc.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="gRPC"
      description={description}
      iconSrc={getIconSrc("grpc.png", theme as "light" | "dark")}
      link="https://grpc.io/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillGRPC);
