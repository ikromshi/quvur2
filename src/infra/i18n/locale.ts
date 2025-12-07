export const symbols = {
  en: { decimals: ".", groups: "," },
  uz: { decimals: ".", groups: "," },
  ru: { decimals: ".", groups: "," },
};

export type Locale = "en" | "uz" | "ru";

export const languageConfig: Array<{
  code: Locale;
  name: string;
  experimental?: boolean;
}> = [
  { code: "en", name: "English (US)" },
  { code: "uz", name: "Uzbek (UZ)", experimental: true },
  { code: "ru", name: "Russian (RU)", experimental: true },
];

export const stableLanguages: Locale[] = languageConfig
  .filter((lang) => !lang.experimental)
  .map((lang) => lang.code);

export const allSupportedLanguages: Locale[] = languageConfig.map(
  (lang) => lang.code,
);

export const getLocale = (): Locale => {
  if (typeof window === "undefined") return "en";

  try {
    const savedValue = localStorage.getItem("locale");
    if (savedValue) {
      const savedLocale = JSON.parse(savedValue) as Locale;
      if (allSupportedLanguages.includes(savedLocale)) {
        return savedLocale;
      }
    }
  } catch {}

  const language = navigator.language;
  const code = stableLanguages.find(
    (code) => language === code || language.startsWith(`${code}-`),
  );
  return code || "en";
};
