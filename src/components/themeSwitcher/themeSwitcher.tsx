"use client";

import { Button } from "@nextui-org/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() =>
        setTheme(() => (currentTheme === "light" ? "dark" : "light"))
      }
      isIconOnly
      variant="light"
    >
      {currentTheme === "light" && <SunIcon />}
      {currentTheme === "dark" && <MoonIcon />}
    </Button>
  );
};

export default React.memo(ThemeSwitcher);
