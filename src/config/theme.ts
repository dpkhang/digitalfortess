import { LanguageType } from "@/types/language";
import { ThemeOptions, createTheme } from "@mui/material";
import { ThemeSetting } from "@/types/theme";

const commonTheme: ThemeOptions = {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
        },
      },
    },
  },
};

const darkTheme = (lang: LanguageType, fontFamily?: string) =>
  createTheme({
    ...commonTheme,
    palette: {
      primary: {
        main: "#9966FF",
      },
      color: {
        border: "#262941",
        // gray: { 0: "#454545", 1: "#707070", 2: "#9A9A9A", 3: "#D4D4D4", 4: "#e9e9e9" },
        // blue: {
        //   0: "#0080BF",
        //   1: "#00ACDF",
        //   2: "#55D0FF",
        //   3: "#7CE8FF",
        //   4: "#ccf9ff",
        //   5: "#F2F6FB",
        // },
      },
      error: {
        main: "#F46241",
      },
      background: {
        default: "#070c27",
        // secondary: "#111633",
        // third: "#252941",
        // filter: "#070c27",
        // loading: "none",
        // input: "#070c27",
        // adornment: "#262941",
        // focus: "#282b574f",
      },
      appBar: {
        hover: "#252941",
        active: "#282b574f",
      },
      text: {
        primary: "#C9CAD0",
        secondary: "#C9CAD0",
        // third: "#8C7CF0",
        // disabled: "#C9CAD099",
        // black: "#000000",
        // link: "#C9CAD0",
      },
      disable: {
        main: "#282b574f",
      },
    },
    typography: {
      fontFamily: lang === "ko" ? fontFamily : "Roboto, Helvetica, Arial, sans-serif;",
      allVariants: {
        color: "#C9CAD0",
      },
      h2: {
        fontSize: "24px",
        color: "#2A2A2A",
        fontWeight: 500,
        lineHeight: "20px",
      },
      h3: {
        fontSize: "20px",
        color: "#282531",
        fontWeight: 600,
        lineHeight: "27px",
      },
      h4: {
        fontSize: "18px",
        color: "#525252",
        fontWeight: 400,
        lineHeight: "20px",
      },
      h5: {
        fontSize: "14px",
        color: "#E4D4D3",
        fontWeight: 400,
        lineHeight: "20px",
      },
      h6: {
        fontSize: "12px",
        color: "#E4D4D3",
        fontWeight: 400,
        lineHeight: "20px",
      },
    },
  });

const lightTheme = (lang: LanguageType, fontFamily?: string) =>
  createTheme({
    ...commonTheme,
    palette: {
      primary: {
        main: "#1976D2",
      },
      error: {
        main: "#F46241",
      },
      color: {
        border: "#e1e1e1",
        bgButton: "#F5F5F5",
        bgSecondary: "#FFFFFF",
        bgDisabled: "#EFEFEF",
        bgManagementBlue: "#1976D2",
        bgManagementSkyBlue: "#1890FF",
        bgDisabled12p: "#0000001F",
        bgDisabledHover: "#D9D9D9AA",

        textLightPrimary: "#000000DE",
        textLightSecondary: "#00000099",
        textBoooongBlue: "#0864FF",
        textDisabled26p: "#00000042",
        textManagement2: "#808080",
        textManagement1: "#C2C2C2",

        // gray: { 0: "#454545", 1: "#707070", 2: "#9A9A9A", 3: "#D4D4D4", 4: "#e9e9e9" },
        // blue: {
        //   0: "#1890FF",
        //   1: "#00ACDF",
        //   2: "#55D0FF",
        //   3: "#7CE8FF",
        //   4: "#ccf9ff",
        //   5: "#F2F6FB",
        // },
      },
      background: {
        default: "#FAFAFB",
        // secondary: "#FFFFFF",
        // third: "#F5F5F5",
        // loading: "rgba(255, 255, 255, .4)",
        // filter: "#FFFFFF",
        // input: "#F3F3F3",
        // adornment: "#f5f5f5",
        // focus: "#F5F5F5",
      },
      appBar: {
        hover: "#F2F6FB",
        active: "#E6F4FF",
      },
      text: {
        primary: "#000000DE",
        secondary: "#808080",
        // third: "#000000DE",
        // disabled: "#00000099",
        // black: "#000000",
        // link: "#3D3D3D",
      },
      disable: {
        main: "#cecece",
      },
    },
    typography: {
      fontFamily: lang === "ko" ? fontFamily : "Roboto, Helvetica, Arial, sans-serif;",
      allVariants: {
        // color: "#000000DE",
        color: "inherit",
      },
      h2: {
        fontSize: "24px",
        color: "#2A2A2A",
        fontWeight: 500,
        lineHeight: "20px",
      },
      h3: {
        fontSize: "20px",
        color: "#282531",
        fontWeight: 600,
        lineHeight: "27px",
      },
      h4: {
        fontSize: "18px",
        color: "#525252",
        fontWeight: 400,
        lineHeight: "20px",
      },
      h5: {
        fontSize: "14px",
        color: "#000000DE",
        fontWeight: 400,
        lineHeight: "20px",
      },
      h6: {
        fontSize: "12px",
        color: "#000000",
        fontWeight: 400,
        lineHeight: "20px",
      },
    },
  });

export const buildTheme = (
  lang: LanguageType,
  setting?: ThemeSetting,
  fontFamily?: string,
) => {
  if (setting?.mode === "dark") {
    return darkTheme(lang, fontFamily);
  }
  return lightTheme(lang, fontFamily);
};
