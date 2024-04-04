import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { appLocales } from "./locales";

export type NavItem = {
  label: string;
  path: string;
};

export const locales = appLocales.map((d) => d.locale);
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales, localePrefix },
);
