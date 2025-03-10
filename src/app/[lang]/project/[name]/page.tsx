import Carousel from "@/components/carousel";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import projects from "@/static/projects";
import { GroupBy } from "@/utils/array";
import { Button } from "@heroui/button";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "node:fs";
import { Footer } from "@/components/layout";

export async function generateStaticParams() {
  const pageNames = projects.map((p) => ({ name: p.pageName }));

  return pageNames;
}

export default async function ProjectPage(props: {
  params: Promise<{ name: string; lang: Locale }>;
}) {
  const params = await props.params;
  const name = params.name;
  const dictionary = await getDictionary(params.lang);
  const pageDictionary = dictionary.page.project;
  const project = projects.find((p) => p.pageName === name);
  if (project === undefined) notFound();

  const mdBuffer = await fs.readFile(
    `${process.cwd()}/src/static/projects/${params.lang}/${params.name}.mdx`
  );
  const markdown = mdBuffer.toString();

  const stack = GroupBy(project.stack, "category");

  return (
    <>
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-x-10 m-5 mt-20">
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
            {project.gitHubUrl && (
              <Button
                as={Link}
                href={project.gitHubUrl}
                variant="light"
                target="_blank"
                className="mr-1"
                isIconOnly
              >
                <IconBrandGithub />
              </Button>
            )}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground-500">
              {project.name}
            </span>
          </h1>
          <h2 className="text-2xl font-semibold mt-5">
            {pageDictionary.stack}
          </h2>
          <div className="flex flex-wrap gap-5 justify-between">
            {Object.keys(stack).map((category) => (
              <div className="flex flex-col gap-2" key={category}>
                <h3 className="text-lg text-foreground-400 font-medium mt-5">
                  {category}
                </h3>
                {stack[category].map((tech, i) => (
                  <tech.component
                    skills={dictionary.skills}
                    key={`${category}_${i}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-5 prose prose-headings:mt-5 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-invert prose-zinc">
            <MDXRemote source={markdown} />
          </div>
          <div className="block max-w-[600px] w-full mx-auto xl:row-span-4 xl:row-start-1 xl:col-start-2 max-xl:row-start-4">
            <Carousel imageUrls={project.images} />
          </div>
        </div>
      </div>
      <Footer dictionary={dictionary.layout.footer} />
    </>
  );
}
