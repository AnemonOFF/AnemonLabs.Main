"use client";

import React, { PropsWithChildren, useState } from "react";
import Sidebar from "../sidebar";
import { cn } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";

export interface LayoutProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["layout"];
  locale: Locale;
}

const Layout: React.FC<LayoutProps> = ({ children, dictionary, locale }) => {
  const pathName = usePathname();
  const [isOpened, setOpened] = useState(() => pathName === "/");

  return (
    <div className="min-h-screen bg-background grid grid-rows-1 grid-cols-[auto_1fr] max-lg:grid-cols-1">
      <div
        className={cn(
          "lg:hidden w-full text-center backdrop-blur sticky top-0",
          {
            "max-lg:hidden": isOpened,
          }
        )}
      >
        <div className="bg-background/70 w-full h-full p-1">
          <Button variant="light" onClick={() => setOpened(true)} isIconOnly>
            <IconMenu2 />
          </Button>
        </div>
      </div>
      <Sidebar
        className={cn("transition-all", { "max-lg:hidden": !isOpened })}
        onLinkClick={() => setOpened(false)}
        dictionary={dictionary.sidebar}
        locale={locale}
      />
      <div className={cn({ "max-lg:hidden": isOpened })}>{children}</div>
    </div>
  );
};

export default React.memo(Layout);
