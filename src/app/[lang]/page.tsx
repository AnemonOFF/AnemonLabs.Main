import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

export default async function Home(
  props: Readonly<{
    params: Promise<{ lang: Locale }>;
  }>
) {
  const params = await props.params;
  const dictionary = (await getDictionary(params.lang)).page.index;

  return (
    <div className="w-full min-h-full flex flex-col justify-center gap-5">
      <main className="m-5">
        <div className="flex flex-col gap-5 items-center">
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
          <Divider className="max-w-96" />
          <div className="">
            <Link href={"https://github.com/anemonoff"} target="_blank">
              <Button variant="flat">
                <IconBrandGithub /> GitHub
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
