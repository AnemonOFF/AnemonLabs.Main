import React from "react";
import SidebarElement, { SidebarElementProps } from "./sidebarElement";
import { Button } from "@nextui-org/button";
import ThemeSwitcher from "../themeSwitcher";
import Link from "next/link";
import { IconAddressBook } from "@tabler/icons-react";
import { cn } from "@nextui-org/react";
import projects from "@/static/projects";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleSwitcher } from "../localeSwitcher";

export interface SidebarProps {
  onLinkClick: () => void;
  className?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["layout"]["sidebar"];
}

const Sidebar: React.FC<SidebarProps> = ({
  onLinkClick,
  className,
  dictionary,
}) => {
  return (
    <aside
      className={cn("p-5 h-screen flex flex-col justify-between", className)}
    >
      <Button
        as={Link}
        href="/"
        variant="light"
        className="mr-5"
        onClick={onLinkClick}
      >
        <IconAddressBook className="text-foreground-500" />
        {dictionary.contacts}
      </Button>
      <div className="flex items-stretch max-lg:justify-center gap-5 max-h-full overflow-auto">
        <nav className="gap-5 flex flex-col mt-5">
          {projects.map((project) => (
            <SidebarElement
              key={project.name}
              onClick={onLinkClick}
              {...project}
            />
          ))}
        </nav>
        <div className="w-[1px] bg-divider max-lg:hidden" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
