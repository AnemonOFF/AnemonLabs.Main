import React from "react";
import SidebarElement, { SidebarElementProps } from "./sidebarElement";
import { Button } from "@nextui-org/button";
import ThemeSwitcher from "../themeSwitcher";
import Link from "next/link";
import { Contact2Icon } from "lucide-react";

export interface SidebarProps {}

const projects: SidebarElementProps[] = [
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

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <aside className="p-5 h-screen flex flex-col justify-between">
      <Button as={Link} href="/" variant="light" className="mr-5">
        <Contact2Icon className="text-foreground-500" />
        Контакты
      </Button>
      <div className="flex items-stretch gap-5 max-h-full overflow-auto">
        <nav className="gap-5 flex flex-col mt-5">
          {projects.map((project) => (
            <SidebarElement key={project.name} {...project} />
          ))}
        </nav>
        <div className="w-[1px] bg-divider" />
      </div>
      <div className="text-center">
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
