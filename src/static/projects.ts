import {
  SkillAutoMapper,
  SkillAWSS3,
  SkillChromium,
  SkillDocker,
  SkillDotNet,
  SkillEFCore,
  SkillGRPC,
  SkillHeroUI,
  SkillMantine,
  SkillNextJS,
  SkillPrisma,
  SkillRabbitMQ,
  SkillReact,
  SkillReactQuery,
  SkillShadcn,
  SkillTypeScript,
  SkillWPF,
  SkillZustand,
} from "@/components/skill";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    name: "DotStat",
    description: "",
    stack: [
      {
        category: "Front-End",
        component: SkillNextJS,
      },
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillTypeScript,
      },
      {
        category: "Front-End",
        component: SkillZustand,
      },
      {
        category: "Front-End",
        component: SkillShadcn,
      },
      {
        category: "Front-End",
        component: SkillReactQuery,
      },
      {
        category: "Back-End",
        component: SkillDotNet,
      },
      {
        category: "Back-End",
        component: SkillEFCore,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
      },
    ],
    images: [
      "/projects/dotstat/1.png",
      "/projects/dotstat/2.png",
      "/projects/dotstat/3.png",
      "/projects/dotstat/4.png",
    ],
    pageName: "dotstat",
    year: "2024-2025",
    // highlightClassName: "from-green-400 to-cyan-400",
    isPresent: true,
    gitHubUrl: "https://github.com/al-dotstat",
  },
  {
    name: "MuzInt",
    description: "",
    stack: [
      {
        category: "Front-End",
        component: SkillNextJS,
      },
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillReactQuery,
      },
      {
        category: "Back-End",
        component: SkillDotNet,
      },
      {
        category: "Back-End",
        component: SkillEFCore,
      },
      {
        category: "Back-End",
        component: SkillAutoMapper,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
      },
      {
        category: "Front-End",
        component: SkillTypeScript,
      },
      {
        category: "Front-End",
        component: SkillShadcn,
      },
    ],
    year: "2025",
    pageName: "muzint",
    images: [
      "/projects/muzint/3.png",
      "/projects/muzint/4.png",
      "/projects/muzint/1.png",
      "/projects/muzint/2.png",
    ],
    url: "https://muzint.obana.club",
  },
  {
    name: "ФСП",
    description: "",
    stack: [
      {
        category: "Front-End",
        component: SkillNextJS,
      },
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillTypeScript,
      },
      {
        category: "Front-End",
        component: SkillShadcn,
      },
      {
        category: "Front-End",
        component: SkillReactQuery,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
      },
    ],
    images: ["/projects/fsp/1.png"],
    pageName: "fsp",
    year: "2024",
    gitHubUrl:
      "https://github.com/8kelena8/Sports-Programming-Sverdlovsk-Portal/tree/feature/no-ref/front/home-page",
  },
  {
    name: "Gate",
    description:
      "Специализированный браузер, скрывающий свою работу, с защитой от записи на видео и скриншотов",
    stack: [
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillTypeScript,
      },
      {
        category: "Front-End",
        component: SkillZustand,
      },
      {
        category: "Front-End",
        component: SkillShadcn,
      },
      {
        category: "Back-End",
        component: SkillDotNet,
      },
      {
        category: "Back-End",
        component: SkillEFCore,
      },
      {
        category: "Приложение",
        component: SkillWPF,
      },
      {
        category: "Приложение",
        component: SkillChromium,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
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
        component: SkillNextJS,
      },
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillReactQuery,
      },
      {
        category: "Front-End",
        component: SkillMantine,
      },
      {
        category: "Front-End",
        component: SkillHeroUI,
      },
      {
        category: "Back-End",
        component: SkillDotNet,
      },
      {
        category: "Back-End",
        component: SkillEFCore,
      },
      {
        category: "Back-End",
        component: SkillAWSS3,
      },
      {
        category: "Back-End",
        component: SkillAutoMapper,
      },
      {
        category: "Back-End",
        component: SkillGRPC,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
      },
      {
        category: "Архитектура",
        component: SkillRabbitMQ,
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
        component: SkillNextJS,
      },
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillReactQuery,
      },
      {
        category: "Front-End",
        component: SkillHeroUI,
      },
      {
        category: "Back-End",
        component: SkillDotNet,
      },
      {
        category: "Back-End",
        component: SkillEFCore,
      },
      {
        category: "Back-End",
        component: SkillAWSS3,
      },
      {
        category: "Back-End",
        component: SkillAutoMapper,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
      },
      {
        category: "Архитектура",
        component: SkillRabbitMQ,
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
        component: SkillNextJS,
      },
      {
        category: "",
        component: SkillTypeScript,
      },
      {
        category: "",
        component: SkillPrisma,
      },
      {
        category: "",
        component: SkillMantine,
      },
    ],
    images: ["/projects/paper/1.png"],
    pageName: "paper",
    year: "2023",
    gitHubUrl: "https://github.com/AnemonOFF/paper",
  },
  {
    name: "FontNet",
    description:
      "Сервис для перевода англоязычных шрифтов на русский язык с помощью искуственного интелекта (AI)",
    stack: [
      {
        category: "Front-End",
        component: SkillNextJS,
      },
      {
        category: "Front-End",
        component: SkillReact,
      },
      {
        category: "Front-End",
        component: SkillReactQuery,
      },
      {
        category: "Front-End",
        component: SkillHeroUI,
      },
      {
        category: "Back-End",
        component: SkillDotNet,
      },
      {
        category: "Back-End",
        component: SkillEFCore,
      },
      {
        category: "Архитектура",
        component: SkillDocker,
      },
    ],
    images: ["/projects/fontnet/1.png", "/projects/fontnet/2.png"],
    pageName: "fontnet",
    year: "2022 - 2023",
  },
];

export default projects;
