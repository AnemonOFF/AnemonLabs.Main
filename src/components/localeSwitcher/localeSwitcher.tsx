"use client";

import { i18n, Locale } from "@/i18n/i18n-config";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconLanguage } from "@tabler/icons-react";

export interface LocaleSwitcherProps {}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({}) => {
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          <IconLanguage />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {i18n.locales.map((locale) => (
          <DropdownItem key={locale} href={redirectedPathname(locale)}>
            {i18n.localesNames[locale]}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default React.memo(LocaleSwitcher);
