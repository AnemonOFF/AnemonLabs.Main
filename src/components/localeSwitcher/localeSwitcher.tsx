"use client";

import { i18n, Locale } from "@/i18n/i18n-config";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconLanguage } from "@tabler/icons-react";
import { setCookie } from "cookies-next";

export interface LocaleSwitcherProps {}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname ? pathname.split("/")[1] : undefined;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const onSelect = (keys: Set<string>) => {
    const newLocale = Array.from(keys)[0] as Locale;
    setCookie("al-locale", newLocale, { maxAge: 60 * 60 * 24 * 365 });
    router.push(redirectedPathname(newLocale));
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          <IconLanguage />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={new Set([currentLocale]) as any}
        selectionMode="single"
        disallowEmptySelection
        onSelectionChange={onSelect as any}
      >
        {i18n.locales.map((locale) => (
          <DropdownItem key={locale}>{i18n.localesNames[locale]}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default React.memo(LocaleSwitcher);
