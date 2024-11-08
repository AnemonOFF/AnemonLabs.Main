import { Project } from "@/types/project";

const projects: Project[] = [
  {
    name: "DotStat",
    description: "",
    stack: [
      {
        category: "Front-End",
        icon: "/icons/nextjs.webp",
        name: "NextJS",
      },
      {
        category: "Front-End",
        icon: "/icons/react.webp",
        name: "React",
      },
      {
        category: "Front-End",
        icon: "/icons/typescript.png",
        name: "TypeScript",
      },
      {
        category: "Front-End",
        icon: "/icons/zustand.png",
        name: "Zustand",
      },
      {
        category: "Front-End",
        icon: "/icons/shadcn.png",
        name: "shadcn/ui",
      },
      {
        category: "Front-End",
        icon: "/icons/reactquery.png",
        name: "React Query",
      },
      {
        category: "Back-End",
        icon: "/icons/dotnetcore.png",
        name: ".NET Core",
      },
      {
        category: "Back-End",
        icon: "/icons/efcore.png",
        name: "Entity Framework Core",
      },
      {
        category: "Архитектура",
        icon: "/icons/docker.webp",
        name: "Docker",
      },
    ],
    images: [
      "/projects/dotstat/1.png",
      "/projects/dotstat/2.png",
      "/projects/dotstat/3.png",
      "/projects/dotstat/4.png",
    ],
    pageName: "dotstat",
    year: "2024",
    highlightClassName: "from-green-400 to-cyan-400",
    isPresent: true,
  },
  {
    name: "Gate",
    description:
      "Специализированный браузер, скрывающий свою работу, с защитой от записи на видео и скриншотов",
    stack: [
      {
        category: "Front-End",
        icon: "/icons/react.webp",
        name: "React",
      },
      {
        category: "Front-End",
        icon: "/icons/typescript.png",
        name: "TypeScript",
      },
      {
        category: "Front-End",
        icon: "/icons/zustand.png",
        name: "Zustand",
      },
      {
        category: "Front-End",
        icon: "/icons/shadcn.png",
        name: "shadcn/ui",
      },
      {
        category: "Back-End",
        icon: "/icons/dotnetcore.png",
        name: ".NET Core",
      },
      {
        category: "Back-End",
        icon: "/icons/efcore.png",
        name: "Entity Framework Core",
      },
      {
        category: "Приложение",
        icon: "/icons/wpf.svg",
        name: "WPF",
      },
      {
        category: "Приложение",
        icon: "/icons/chromium.png",
        name: "Chromium Engine",
      },
      {
        category: "Архитектура",
        icon: "/icons/docker.webp",
        name: "Docker",
      },
    ],
    images: ["/projects/gate/1.png", "/projects/gate/2.png"],
    pageName: "gate",
    year: "2024",
    url: "https://gate.anemonlabs.ru",
  },
  {
    name: "Obana Club",
    description:
      "Сервис для онлайн регистраций на офлайн квиз-игры в разных регионах планеты",
    stack: [
      {
        category: "Front-End",
        icon: "/icons/nextjs.webp",
        name: "NextJS",
      },
      {
        category: "Front-End",
        icon: "/icons/react.webp",
        name: "React",
      },
      {
        category: "Front-End",
        icon: "/icons/reactquery.png",
        name: "React Query",
      },
      {
        category: "Front-End",
        icon: "/icons/mantine.png",
        name: "Mantine UI",
      },
      {
        category: "Front-End",
        icon: "/icons/nextui.png",
        name: "NextUI",
      },
      {
        category: "Back-End",
        icon: "/icons/dotnetcore.png",
        name: ".NET Core",
      },
      {
        category: "Back-End",
        icon: "/icons/efcore.png",
        name: "Entity Framework Core",
      },
      {
        category: "Back-End",
        icon: "/icons/awss3.png",
        name: "Amazon S3",
      },
      {
        category: "Back-End",
        icon: "/icons/automapper.png",
        name: "AutoMapper",
      },
      {
        category: "Back-End",
        icon: "/icons/grpc.png",
        name: "gRPC",
      },
      {
        category: "Архитектура",
        icon: "/icons/docker.webp",
        name: "Docker",
      },
      {
        category: "Архитектура",
        icon: "/icons/rabbitmq.png",
        name: "RabbitMQ",
      },
    ],
    images: [
      "/projects/obana/1.png",
      "/projects/obana/2.png",
      "/projects/obana/3.png",
    ],
    pageName: "obana",
    year: "2023 - 2024",
    url: "https://obana.club",
  },
  {
    name: "People",
    description:
      "Система бонусных баллов для сотрудников компании с возможностью оплаты товаров и услуг за эти баллы с открытым API для доступа сторонних сервисов",
    stack: [
      {
        category: "Front-End",
        icon: "/icons/nextjs.webp",
        name: "NextJS",
      },
      {
        category: "Front-End",
        icon: "/icons/react.webp",
        name: "React",
      },
      {
        category: "Front-End",
        icon: "/icons/reactquery.png",
        name: "React Query",
      },
      {
        category: "Front-End",
        icon: "/icons/nextui.png",
        name: "NextUI",
      },
      {
        category: "Back-End",
        icon: "/icons/dotnetcore.png",
        name: ".NET Core",
      },
      {
        category: "Back-End",
        icon: "/icons/efcore.png",
        name: "Entity Framework Core",
      },
      {
        category: "Back-End",
        icon: "/icons/awss3.png",
        name: "Amazon S3",
      },
      {
        category: "Back-End",
        icon: "/icons/automapper.png",
        name: "AutoMapper",
      },
      {
        category: "Архитектура",
        icon: "/icons/docker.webp",
        name: "Docker",
      },
      {
        category: "Архитектура",
        icon: "/icons/rabbitmq.png",
        name: "RabbitMQ",
      },
    ],
    images: [
      "/projects/people/1.png",
      "/projects/people/2.png",
      "/projects/people/3.png",
      "/projects/people/4.png",
      "/projects/people/5.png",
    ],
    pageName: "people",
    year: "2023 - 2024",
  },
  {
    name: "Paper",
    description:
      "💨 Простой CRUD API с интерфейсом для пользовательских профилей",
    stack: [
      {
        category: "",
        icon: "/icons/nextjs.webp",
        name: "NextJS",
      },
      {
        category: "",
        icon: "/icons/typescript.png",
        name: "TypeScript",
      },
      {
        category: "",
        icon: "/icons/prisma.png",
        name: "Prisma",
      },
      {
        category: "",
        icon: "/icons/mantine.png",
        name: "Mantine UI",
      },
    ],
    images: ["/projects/paper/1.png"],
    pageName: "paper",
    year: "2023",
    url: "https://github.com/AnemonOFF/paper",
  },
  {
    name: "FontNet",
    description:
      "Сервис для перевода англоязычных шрифтов на русский язык с помощью искуственного интелекта (AI)",
    stack: [
      {
        category: "Front-End",
        icon: "/icons/nextjs.webp",
        name: "NextJS",
      },
      {
        category: "Front-End",
        icon: "/icons/react.webp",
        name: "React",
      },
      {
        category: "Front-End",
        icon: "/icons/reactquery.png",
        name: "React Query",
      },
      {
        category: "Front-End",
        icon: "/icons/nextui.png",
        name: "NextUI",
      },
      {
        category: "Back-End",
        icon: "/icons/dotnetcore.png",
        name: ".NET Core",
      },
      {
        category: "Back-End",
        icon: "/icons/efcore.png",
        name: "Entity Framework Core",
      },
      {
        category: "Архитектура",
        icon: "/icons/docker.webp",
        name: "Docker",
      },
    ],
    images: ["/projects/fontnet/1.png", "/projects/fontnet/2.png"],
    pageName: "fontnet",
    year: "2022 - 2023",
  },
];

export default projects;
