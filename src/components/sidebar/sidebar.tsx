import React from "react";
import SidebarElement from "./sidebarElement";
import { Button } from "@heroui/button";
import ThemeSwitcher from "../themeSwitcher";
import Link from "next/link";
import { IconAddressBook, IconFileInfo, IconX } from "@tabler/icons-react";
import { cn } from "@heroui/react";
import projects from "@/static/projects";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleSwitcher } from "../localeSwitcher";
import { Locale } from "@/i18n/i18n-config";

export interface SidebarProps {
  className?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["layout"]["sidebar"];
  locale: Locale;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  dictionary,
  locale,
  onClose,
}) => {
  return (
    <aside
      className={cn(
        "p-5 h-screen flex flex-col justify-between sticky top-0",
        className
      )}
    >
      <div className="flex flex-col">
        <Button variant="flat" onPress={onClose}>
          <IconX className="text-foreground-500" />
        </Button>
        <Button as={Link} href="/" variant="light" className="mr-5">
          <IconAddressBook className="text-foreground-500" />
          {dictionary.contacts}
        </Button>
        <Button
          as={Link}
          href={`/cv/${locale}.pdf`}
          variant="light"
          className="mr-5"
          target="_blank"
        >
          <IconFileInfo className="text-foreground-500" />
          {dictionary.cv}
        </Button>
      </div>
      <div className="flex items-stretch max-lg:justify-center gap-5 max-h-full overflow-auto">
        <nav className="gap-5 flex flex-col mt-5">
          {projects.map((project) => (
            <SidebarElement key={project.name} locale={locale} {...project} />
          ))}
        </nav>
        <div className="w-[1px] bg-gradient-to-b from-background via-divider via-[percentage:20%_80%] to-background max-lg:hidden" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
