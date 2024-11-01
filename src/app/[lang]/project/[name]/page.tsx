import Carousel from "@/components/carousel";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import projects from "@/static/projects";
import { GroupBy } from "@/utils/array";
import { Button } from "@nextui-org/button";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "node:fs";

export async function generateStaticParams() {
  const pageNames = projects.map((p) => ({ name: p.pageName }));

  return pageNames;
}

export default async function ProjectPage({
  params,
}: {
  params: { name: string; lang: Locale };
}) {
  const name = params.name;
  const dictionary = (await getDictionary(params.lang)).page.project;
  const project = projects.find((p) => p.pageName === name);
  if (project === undefined) notFound();

  const mdBuffer = await fs.readFile(
    `${process.cwd()}/src/static/projects/${params.lang}/${params.name}.mdx`
  );
  const markdown = mdBuffer.toString();

  const stack = GroupBy(project.stack, "category");

  return (
    <div className="max-w-[1600px] w-full mx-auto">
      <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-10 m-5 mt-20">
        <div>
          <h1 className="text-4xl font-bold">
            {project.url && (
              <Button
                as={Link}
                href={project.url}
                variant="light"
                target="_blank"
                className="mr-1"
                isIconOnly
              >
                <IconExternalLink />
              </Button>
            )}
            {project.name}
          </h1>
          <h2 className="text-2xl font-semibold mt-5">{dictionary.stack}</h2>
          <div className="flex flex-wrap gap-5 justify-between">
            {Object.keys(stack).map((category) => (
              <div className="flex flex-col gap-2" key={category}>
                <h3 className="text-lg text-foreground-400 font-medium mt-5">
                  {category}
                </h3>
                {stack[category].map((tech) => (
                  <div className="flex items-center gap-2" key={tech.name}>
                    <Image
                      width={32}
                      height={32}
                      src={tech.icon}
                      alt={tech.name}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-5 prose prose-headings:mt-5 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
            <MDXRemote source={markdown} />
          </div>
        </div>
        <div className="block max-w-[600px] w-full mx-auto">
          <Carousel
            imageUrls={project.images}
            className="max-h-[700px] w-full aspect-[6/7]"
          />
        </div>
      </div>
    </div>
  );
}
