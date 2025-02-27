import { cn } from "@heroui/react";
import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";
import React from "react";

export interface SocialLinksProps {
  className?: string;
  small?: boolean;
  orientation?: "horizontal" | "vertical";
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  small,
  orientation = "vertical",
}) => {
  return (
    <div
      className={cn(
        "flex",
        { "flex-col": orientation == "vertical" },
        className
      )}
    >
      <Tooltip content="Telegram" isDisabled={!small} showArrow>
        <Button
          as={Link}
          href={"https://t.me/anemonoff"}
          target="_blank"
          variant="light"
          className={cn("text-blue-400", {
            "justify-start": !small && orientation !== "horizontal",
          })}
          fullWidth={!small && orientation !== "horizontal"}
          isIconOnly={small}
        >
          <IconBrandTelegram />
          {small ? null : "Telegram"}
        </Button>
      </Tooltip>
      <Tooltip content="GitHub" isDisabled={!small} showArrow>
        <Button
          as={Link}
          href={"https://github.com/anemonoff"}
          target="_blank"
          variant="light"
          className={cn("", {
            "justify-start": !small && orientation !== "horizontal",
          })}
          fullWidth={!small && orientation !== "horizontal"}
          isIconOnly={small}
        >
          <IconBrandGithub /> {small ? null : "GitHub"}
        </Button>
      </Tooltip>
    </div>
  );
};

export default React.memo(SocialLinks);
