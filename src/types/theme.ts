import { PaletteMode } from "@mui/material";

export type ThemeSetting = {
  mode: PaletteMode;
};

export type ThemeModeContextType = {
  setting: ThemeSetting;
  changeSetting: (setting: ThemeSetting) => void;
};
