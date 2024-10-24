import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import { IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

export default async function Home({
  params,
}: Readonly<{
  params: { lang: Locale };
}>) {
  const dictionary = (await getDictionary(params.lang)).page.index;

  return (
    <div className="w-full min-h-full flex flex-col justify-center gap-5">
      <div />
      <main className="m-5">
        <div className="flex gap-5 justify-evenly">
          <div className="">
            <div className="flex gap-2 items-end">
              <h2 className="text-3xl text-foreground font-bold">Anemon</h2>
              <h3 className="text-xl text-foreground-500 font-semibold">
                {dictionary.name}
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
    </div>
  );
}
