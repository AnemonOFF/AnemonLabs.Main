import Link from "next/link";
import React from "react";
import ALIcon from "../icons/alIcon";
import { getDictionary } from "@/i18n/get-dictionary";
import SocialLinks from "../links/socialLinks";

export interface FooterProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["layout"]["footer"];
}

const Footer: React.FC<FooterProps> = ({ dictionary }) => {
  return (
    <footer className="w-full p-5 space-y-5">
      <div className="h-[1px] w-full bg-gradient-to-r from-background via-divider via-[percentage:20%_80%] to-background max-lg:hidden" />
      <SocialLinks className="mx-auto w-fit" orientation="horizontal" small />
      <Link
        className="flex gap-2 w-fit mx-auto"
        href="https://anemonlabs.ru"
        target="_blank"
      >
        <ALIcon size={30} color="null" className="fill-foreground" />
        <div className="flex flex-col">
          <span className="text-sm text-foreground-400 leading-none">
            {dictionary.madeby}
          </span>
          <span className="text-md leading-none">AnemonLabs</span>
        </div>
      </Link>
    </footer>
  );
};

export default React.memo(Footer);
