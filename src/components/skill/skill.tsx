"use client";

import React from "react";
import { Tooltip } from "@heroui/tooltip";
import Image from "next/image";

export interface SkillProps {
  name: string;
  iconSrc: string;
  description: string;
  link?: string;
  iconOnly?: boolean;
}

const Skill: React.FC<SkillProps> = ({
  description,
  iconSrc,
  name,
  link,
  iconOnly = false,
}) => {
  return (
    <Tooltip
      closeDelay={500}
      content={
        <div className="space-y-2 p-2 max-w-64">
          <p className="flex items-center gap-2 text-lg font-semibold">
            {<Image width={24} height={24} src={iconSrc} alt={name} />}{" "}
            {link ? (
              <a
                href={link}
                className="text-foreground underline flex items-center"
                target="_blank"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </p>
          <p className="">{description}</p>
        </div>
      }
      showArrow
    >
      <div className="cursor-pointer flex items-center gap-2">
        {<Image width={32} height={32} src={iconSrc} alt={name} />}
        {iconOnly ? null : name}
      </div>
    </Tooltip>
  );
};

export default React.memo(Skill);
