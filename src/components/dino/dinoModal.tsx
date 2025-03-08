/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
  useAnimate,
} from "motion/react";
import styles from "./dinoModal.module.css";
import Dino from "./dino";
import { Button, cn } from "@heroui/react";
import DinoNotification from "./dinoNotification";
import { getDictionary } from "@/i18n/get-dictionary";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";

export interface DinoModalProps {
  dictionary: Awaited<
    ReturnType<typeof getDictionary>
  >["page"]["index"]["dino"];
}

const DinoModal: React.FC<DinoModalProps> = ({ dictionary }) => {
  const [dragScope, dragAnimate] = useAnimate<HTMLDivElement>();
  const [modalScope, modalAnimate] = useAnimate<HTMLDivElement>();
  const [dragged, setDragged] = useState(false);
  const [open, setOpen] = useState(false);
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  const scale = useTransform(y, [-400, 400], [2, 0]);

  const handleOpen = async () => {
    setOpen(true);
    dragAnimate(
      "#dinoButton",
      {
        opacity: [1, 0],
      },
      {
        duration: 0,
      }
    );
    dragAnimate(
      "#dinoWave",
      {
        opacity: [1, 0],
        scaleY: [1, 1000],
        scaleX: [1, 100],
      },
      {
        duration: 2,
      }
    );
    modalAnimate(modalScope.current, {
      opacity: [0, 1],
      backdropFilter: ["blur(0px)", "blur(5px)"],
    });
    modalAnimate("#dinoModal", {
      opacity: [0, 1],
    });
  };

  const handleClose = async () => {
    dragAnimate(
      "#dinoWave",
      {
        y: "100%",
        scaleY: 1,
        scaleX: 0.8,
        opacity: 1,
      },
      {
        duration: 0,
      }
    );
    dragAnimate(
      "#dinoButton",
      {
        opacity: 1,
        transform: "translate(0, 20px)",
      },
      {
        duration: 0,
      }
    );
    modalAnimate(modalScope.current, {
      opacity: [1, 0],
      backdropFilter: ["blur(5px)", "blur(0px)"],
    });
    await modalAnimate("#dinoModal", {
      opacity: [1, 0],
    });
    setOpen(false);
    await dragAnimate(
      "#dinoWave",
      {
        y: ["100%", "0%"],
      },
      {
        duration: 1,
      }
    );
  };

  return (
    <>
      <motion.div
        className="fixed bottom-0 right-[calc(50%-64px)] flex"
        style={{ scaleY: scale, transformOrigin: "bottom right" }}
        ref={dragScope}
        id="dinoWrapper"
      >
        <motion.div
          className={`${styles.wave} w-32 pt-1 scale-x-80 bg-[#d4d4d4]`}
          id="dinoWave"
        >
          <motion.button
            dragControls={dragControls}
            onPointerDown={(e) => {
              dragControls.start(e);
            }}
            onPointerMove={(e) => {
              setDragged(true);
              const { top } = e.currentTarget.getBoundingClientRect();
              const overflow = e.clientY - top;
              if (overflow < -300) {
                e.currentTarget.releasePointerCapture(e.pointerId);
                handleOpen();
              } else if (overflow < 0) y.set(overflow);
              else y.set(0);
            }}
            onLostPointerCapture={() => dragAnimate(y, 0)}
            className="cursor-grab touch-none active:cursor-grabbing m-0 p-0 block mx-auto size-14 translate-y-5 bg-[url(/icons/dinosaur.png)] bg-contain"
            id="dinoButton"
          />
        </motion.div>
        <DinoNotification forceClose={dragged} />
      </motion.div>
      <motion.div
        className={cn("fixed inset-0 z-50 bg-background/10 m-2", {
          hidden: !open,
        })}
        onClick={() => handleClose()}
        id="dinoModalWrapper"
        ref={modalScope}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-5 max-lg:p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-neutral-200 max-w-[750px] w-full rounded-xl"
          id="dinoModal"
        >
          <div className="flex justify-between gap-2 items-center">
            <p className="flex items-center gap-2 text-black">
              <Image
                src={"/icons/dinosaur.png"}
                alt="Динозаврик"
                width={48}
                height={48}
              />
              {dictionary.instruction}
            </p>
            <Button variant="light" isIconOnly size="sm" onPress={handleClose}>
              <IconX className="text-foreground-800" />
            </Button>
          </div>
          <Dino firstMount={open} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default React.memo(DinoModal);
