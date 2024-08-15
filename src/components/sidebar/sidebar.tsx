import React from "react";
import SidebarElement, { SidebarElementProps } from "./sidebarElement";
import { Button } from "@nextui-org/button";
import ThemeSwitcher from "../themeSwitcher";
import Link from "next/link";
import { IconAddressBook } from "@tabler/icons-react";
import { cn } from "@nextui-org/react";

export interface SidebarProps {
  onLinkClick: () => void;
  className?: string;
}

const projects: Omit<SidebarElementProps, "onClick">[] = [
  {
    name: "Gate",
    url: "/project/gate",
    year: "2024",
    highlightClassName: "from-green-400 to-cyan-400",
  },
  {
    name: "Obana Club",
    url: "/project/obana",
    year: "2023 - 2024",
  },
  {
    name: "People",
    url: "/project/people",
    year: "2023-2024",
  },
  {
    name: "Paper",
    url: "/project/paper",
    year: "2023",
  },
  {
    name: "FontNET",
    url: "/project/fontnet",
    year: "2022-2023",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ onLinkClick, className }) => {
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
        Контакты
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
      <div className="text-center">
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
