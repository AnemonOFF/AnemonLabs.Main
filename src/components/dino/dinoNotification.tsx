"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export interface DinoNotificationProps {
  forceClose?: boolean;
}

const DinoNotification: React.FC<DinoNotificationProps> = ({ forceClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!forceClose) setOpen(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [forceClose]);

  useEffect(() => {
    if (forceClose) setOpen(false);
  }, [forceClose]);

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute lg:-top-5 max-lg:top-[calc(50%-10px)] lg:left-1/2 lg:-translate-x-1/2 max-lg:left-[calc(100%-15px)] rounded-lg bg-neutral-200 dark:bg-neutral-600 p-2 text-sm w-max text-foreground/75"
        >
          <div className="absolute lg:top-full max-lg:right-full lg:left-1/2 max-lg:top-1/2 lg:-translate-x-1/2 max-lg:-translate-y-1/2 h-0 w-0 lg:border-x-8 max-lg:border-y-8 lg:border-x-transparent max-lg:border-y-transparent lg:border-t-4 max-lg:border-r-4 lg:dark:border-t-neutral-600 max-lg:dark:border-r-neutral-600 lg:border-t-neutral-200 max-lg:border-r-neutral-200" />
          Потяни меня
        </motion.div>
      )}
    </>
  );
};

export default React.memo(DinoNotification);
