/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { cn } from "@heroui/react";
import { Button } from "@heroui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export interface LayoutProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["layout"];
  locale: Locale;
}

const Layout: React.FC<LayoutProps> = ({ children, dictionary, locale }) => {
  const pathName = usePathname();
  const [isOpened, setOpened] = useState(() => pathName === "/");

  useEffect(() => {
    setOpened(false);
  }, [pathName]);

  return (
    <div className="min-h-screen grid grid-rows-1 grid-cols-[auto_1fr] max-lg:grid-cols-1 max-lg:grid-rows-[auto_1fr]">
      <div
        className={cn(
          "lg:hidden w-full text-center backdrop-blur sticky top-0 z-30",
          {
            "max-lg:hidden": isOpened,
          }
        )}
      >
        <div className="relative bg-background/70 p-1">
          <Button
            variant="light"
            onPress={() => setOpened(true)}
            className="bg-gradient-to-br from-lime-400/20 to-teal-400/20"
            isIconOnly
          >
            <IconMenu2 />
          </Button>
          {/* <div className="absolute top-[calc(100%-40px)] left-[calc(50%+45px)] -translate-x-1/2 rotate-[10deg] pointer-events-none">
            <img
              src="/icons/arrow.png"
              width={100}
              height={100}
              alt=""
              className="dark:invert"
            />
            <p
              className={`-translate-y-4 translate-x-4 text-2xl ${caveat.className}`}
            >
              {dictionary.sidebar.projects}
            </p>
          </div> */}
        </div>
      </div>
      <Sidebar
        className={cn("transition-all", {
          "max-lg:hidden": !isOpened,
        })}
        dictionary={dictionary.sidebar}
        locale={locale}
      />
      <div className={cn({ "max-lg:hidden": isOpened })}>{children}</div>
    </div>
  );
};

export default React.memo(Layout);
