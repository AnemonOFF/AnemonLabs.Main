"use client";

import { Button } from "@nextui-org/button";
import { IconMoon, IconSun } from "@tabler/icons-react";
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
      {currentTheme === "light" && <IconSun />}
      {currentTheme === "dark" && <IconMoon />}
    </Button>
  );
};

export default React.memo(ThemeSwitcher);
