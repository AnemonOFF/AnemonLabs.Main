"use client";

import { Locale } from "@/i18n/i18n-config";
import { cn } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface SidebarElementProps {
  name: string;
  year: string;
  pageName: string;
  highlightClassName?: string;
  isPresent?: boolean;
  locale: Locale;
}

const SidebarElement: React.FC<SidebarElementProps> = ({
  name,
  year,
  pageName,
  highlightClassName,
  isPresent,
  locale,
}) => {
  const pathname = usePathname();
  const url = `/${locale}/project/${pageName}`;
  const isActive = pathname == url;
  const className = `bg-gradient-to-b ${highlightClassName}`;
  const presentClassName = isPresent
    ? "text-green-400 font-bold"
    : "text-foreground-400";

  return (
    <Link className={cn("rounded-xl pl-1 w-full", className)} href={url}>
      <div className="rounded-lg bg-background w-full">
        <div
          className={cn(
            "p-2 rounded-lg hover:bg-foreground-100 transition-colors flex gap-5 items-center justify-between w-full",
            { "bg-blue-400/25": isActive }
          )}
        >
          <span className="text-lg text-foreground">{name}</span>
          <span className={presentClassName}>{year}</span>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(SidebarElement);
