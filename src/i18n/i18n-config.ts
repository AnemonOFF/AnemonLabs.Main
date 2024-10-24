export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ru"],
  localesNames: {
    en: "English",
    ru: "Русский",
  },
} as const;

export type Locale = (typeof i18n)["locales"][number];
