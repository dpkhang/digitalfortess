"use client";

import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import { ThemeSetting } from "@/types/theme";
import { buildTheme } from "@/config/theme";
import { ThemeProvider } from "@emotion/react";
import { getLocalThemeSetting } from "@/utils/theme-mode";
import { LanguageType } from "@/types/language";

type Props = {
  children: ReactNode;
  lang: LanguageType;
  fontFamily?: string;
};

export const ThemeModeProvider = ({ children, fontFamily, lang }: Props) => {
  const [setting, changeSetting] = useState<ThemeSetting>({ mode: "light" });

  const theme = useMemo(() => {
    return buildTheme(lang, setting, fontFamily);
  }, [fontFamily, lang, setting]);

  useEffect(() => {
    if (typeof window !== undefined && localStorage.getItem("setting")) {
      changeSetting(getLocalThemeSetting());
    }
  }, []);

  return (
    <ThemeModeContext.Provider value={{ setting, changeSetting }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
