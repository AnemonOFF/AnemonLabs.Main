import {
  SkillNextJS,
  SkillReact,
  SkillReactQuery,
  SkillShadcn,
  SkillTailwind,
  SkillZustand,
} from "@/components/skill";
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
  const dictionary = await getDictionary(params.lang);
  const pageDictionary = dictionary.page.index;

  return (
    <div className="w-full min-h-full flex flex-col justify-center gap-5">
      <main className="m-5">
        <div className="flex flex-col gap-5 items-center">
          <div className="max-w-[550px] space-y-5">
            <div className="flex gap-2 items-end">
              <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-foreground from-50% to-foreground-500 font-bold">
                {pageDictionary.name}
              </h2>
              <h3 className="text-xl text-foreground-500 font-semibold">
                aka Anemon
              </h3>
            </div>
            <p className="dark:text-foreground-600">
              {pageDictionary.description}
            </p>
            <p className="dark:text-foreground-600">{pageDictionary.stack}:</p>
            <div className="flex items-center gap-2">
              <SkillNextJS skills={dictionary.skills} iconOnly />
              <SkillReact skills={dictionary.skills} iconOnly />
              <SkillZustand skills={dictionary.skills} iconOnly />
              <SkillReactQuery skills={dictionary.skills} iconOnly />
              <SkillTailwind skills={dictionary.skills} iconOnly />
              <SkillShadcn skills={dictionary.skills} iconOnly />
            </div>
          </div>
          <div className="max-w-96 w-full h-[1px] bg-gradient-to-r from-background via-divider via-[percentage:20%_80%] to-background" />
          <div className="">
            <Link
              href={"https://t.me/anemonoff"}
              className="flex"
              target="_blank"
            >
              <Button
                variant="light"
                className="justify-start text-blue-400"
                fullWidth
              >
                <IconBrandTelegram />
                Telegram
              </Button>
            </Link>
            <Link href={"https://github.com/anemonoff"} target="_blank">
              <Button variant="light" className="justify-start" fullWidth>
                <IconBrandGithub /> GitHub
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
