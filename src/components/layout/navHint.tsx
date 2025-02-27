/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { Caveat } from "next/font/google";
import { getDictionary } from "@/i18n/get-dictionary";
import { usePathname } from "next/navigation";
import { cn } from "@heroui/react";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export interface NavHintProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["layout"];
}

const NavHint: React.FC<NavHintProps> = ({ dictionary }) => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => setHidden(window.scrollY > 0);
    }
  }, []);

  return (
    <div
      className={cn(
        "absolute -top-10 z-30 left-[calc(50%+45px)] -translate-x-1/2 rotate-[10deg] pointer-events-none lg:hidden",
        { hidden: hidden || pathname.split("/").length > 2 }
      )}
    >
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
    </div>
  );
};

export default React.memo(NavHint);
