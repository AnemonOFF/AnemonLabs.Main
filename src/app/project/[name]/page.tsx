import Carousel from "@/components/carousel";
import projects from "@/static/projects";
import { GroupBy } from "@/utils/array";
import { Button } from "@nextui-org/button";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pageNames = projects.map((p) => ({ name: p.pageName }));

  return pageNames;
}

export default function ProjectPage({ params }: { params: { name: string } }) {
  const name = params.name;
  const project = projects.find((p) => p.pageName === name);
  if (project === undefined) notFound();

  const stack = GroupBy(project.stack, "category");

  return (
    <div className="max-w-[1600px] w-full mx-auto">
      <div className="flex max-xl:flex-col gap-10 m-5 mt-20 items-stretch max-xl:items-center">
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
          <p className="mt-5">{project.description}</p>
          <h2 className="text-2xl font-semibold mt-5">Стек технологий</h2>
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
        </div>
        <div className="max-w-[600px] w-full">
          <Carousel
            imageUrls={project.images}
            className="max-h-[700px] w-full aspect-[6/7]"
          />
        </div>
      </div>
    </div>
  );
}
