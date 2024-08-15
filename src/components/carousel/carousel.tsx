"use client";

import { cn } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState } from "react";
import { IconCaretLeft, IconCaretRight } from "@tabler/icons-react";

export interface CarouselProps {
  imageUrls: string[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ imageUrls, className }) => {
  const [currentIndex, setIndex] = useState(0);

  return (
    <div
      className={cn("shadow-xl rounded-xl shadow-foreground-400", className)}
    >
      <div className="relative w-full h-full">
        {imageUrls.map((url, index) => (
          <Image
            src={url}
            alt="Изображение"
            key={index}
            className={cn("object-contain", { hidden: index !== currentIndex })}
            fill
          />
        ))}
        <Button
          className={cn("absolute left-1 top-1/2 -translate-y-1/2", {
            hidden: currentIndex === 0,
          })}
          radius="full"
          variant="flat"
          disabled={currentIndex === 0}
          isIconOnly
          onClick={() => setIndex((prev) => prev - 1)}
        >
          <IconCaretLeft size={35} />
        </Button>
        <Button
          className={cn("absolute right-1 top-1/2 -translate-y-1/2", {
            hidden: currentIndex === imageUrls.length - 1,
          })}
          radius="full"
          variant="flat"
          disabled={currentIndex === imageUrls.length - 1}
          isIconOnly
          onClick={() => setIndex((prev) => prev + 1)}
        >
          <IconCaretRight size={35} />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Carousel);
