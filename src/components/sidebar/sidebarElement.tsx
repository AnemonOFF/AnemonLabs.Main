"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface SidebarElementProps {
  name: string;
  year: string;
  url: string;
  highlightClassName?: string;
  isPresent?: boolean;
}

const SidebarElement: React.FC<SidebarElementProps> = ({
  name,
  year,
  url,
  highlightClassName,
  isPresent,
}) => {
  const pathname = usePathname();
  const isActive = pathname == url;
  const className = `bg-gradient-to-b ${highlightClassName}`;
  const presentClassName = isPresent
    ? "text-blue-400 font-bold"
    : "text-foreground-400";

  return (
    <Link className={cn("rounded-xl pl-1 w-full", className)} href={url}>
      <div className="rounded-lg p-2 bg-background hover:bg-foreground-100 transition-colors flex gap-5 items-center justify-between w-full">
        <span className="text-lg text-foreground">{name}</span>
        <span className={presentClassName}>{year}</span>
      </div>
    </Link>
  );
};

export default React.memo(SidebarElement);
