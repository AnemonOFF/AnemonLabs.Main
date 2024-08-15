import Dino from "@/components/dino";
import { IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-full flex flex-col justify-between gap-5">
      <div />
      <main className="m-5">
        <div className="flex gap-5 justify-evenly">
          <div className="">
            <div className="flex gap-2 items-end">
              <h2 className="text-3xl text-foreground font-bold">Anemon</h2>
              <h3 className="text-xl text-foreground-500 font-semibold">
                aka Дмитрий
              </h3>
            </div>
            <h1 className="text-3xl text-foreground font-bold">
              Full-Stack Software Engineer
            </h1>
            <div className="flex">
              <Link
                href={"https://t.me/anemonoff"}
                className="flex text-blue-400"
                target="_blank"
              >
                <IconBrandTelegram />
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Dino />
    </div>
  );
}
