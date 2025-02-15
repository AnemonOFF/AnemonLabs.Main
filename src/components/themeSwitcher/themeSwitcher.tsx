"use client";

import { Button } from "@heroui/button";
import { IconLoader, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onPress={() =>
        setTheme(() => (currentTheme === "light" ? "dark" : "light"))
      }
      isIconOnly
      variant="light"
      disabled={!mounted}
    >
      {!mounted ? (
        <IconLoader className="animate-spin" />
      ) : currentTheme === "light" ? (
        <IconSun />
      ) : (
        <IconMoon />
      )}
    </Button>
  );
};

export default React.memo(ThemeSwitcher);
