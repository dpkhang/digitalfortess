import { ThemeModeContextType } from "@/types/theme";
import { createContext } from "react";

export const ThemeModeContext = createContext<ThemeModeContextType>({
  setting: {
    mode: "light",
  },
  changeSetting: () => null,
});
