"use client";

import React, { useEffect, useState } from "react";
import DinoGame from "react-chrome-dino-ts";
import "./style.css";

export interface DinoProps {}

const Dino: React.FC<DinoProps> = ({}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) return <div className=""></div>;
  return (
    <div className="w-full">
      <DinoGame instructions="Нажмите пробел для прыжка" />
    </div>
  );
};

export default React.memo(Dino);
