"use client";

import React, { useEffect, useState } from "react";
import DinoGame from "react-chrome-dino-ts";
import "./style.css";
import { Skeleton } from "@heroui/react";

export interface DinoProps {
  firstMount: boolean;
}

const Dino: React.FC<DinoProps> = ({ firstMount }) => {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(!firstMount);

  useEffect(() => {
    if (hidden && firstMount) setHidden(false);
  }, [hidden, firstMount]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hidden)
    return <Skeleton className="rounded-xl w-full h-60" />;
  return (
    <div className="w-full">
      <DinoGame hideInstructions />
    </div>
  );
};

export default React.memo(Dino);
