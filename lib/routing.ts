export const routing = {
  locales: ['en', 'fr'] as const,
  defaultLocale: 'en' as const
};
export type Locale = (typeof routing.locales)[number];
