"use client";

import React from "react";
import Skill, { PredefinedSkillProps } from "./skill";
import { getIconSrc } from "@/utils/src";
import { useTheme } from "next-themes";
import { Skeleton } from "@heroui/skeleton";

const SkillRabbitMQ: React.FC<PredefinedSkillProps> = ({
  iconOnly,
  skills,
}) => {
  const { theme } = useTheme();
  const description = skills.rabbitmq.description;

  if (theme === undefined) return <Skeleton className="rounded-full size-8" />;

  return (
    <Skill
      name="RabbitMQ"
      description={description}
      iconSrc={getIconSrc("rabbitmq.png", theme as "light" | "dark")}
      link="https://www.rabbitmq.com/"
      iconOnly={iconOnly}
    />
  );
};

export default React.memo(SkillRabbitMQ);
