import { ThemeSetting } from "@/types/theme";

export const getLocalThemeSetting = (): ThemeSetting => {
  const setting = localStorage.getItem("setting");
  return setting ? JSON.parse(setting) : { mode: "light" };
};

export function setLocalThemeSetting(setting: ThemeSetting) {
  localStorage.setItem("setting", JSON.stringify(setting));
  return setting;
}
