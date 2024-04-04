import "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    color?: {
      border?: string;
      outlinedBorder23p?: string;

      bgButton?: string;
      bgSecondary?: string;
      bgDisabled?: string;
      bgManagementBlue?: string;
      bgManagementSkyBlue?: string;
      bgDisabled12p?: string;
      bgDisabledHover?: string;

      textLightPrimary?: string;
      textLightSecondary?: string;
      textManagement2?: string;
      textManagement1?: string;
      textBoooongBlue?: string;
      textDisabled26p?: string;
    };
    appBar?: {
      hover?: string;
      active?: string;
    };
    disable?: {
      main: string;
    };
  }

  interface Palette {
    color?: {
      border?: string;
      outlinedBorder23p?: string;

      bgButton?: string;
      bgSecondary?: string;
      bgDisabled?: string;
      bgManagementBlue?: string;
      bgManagementSkyBlue?: string;
      bgDisabled12p?: string;

      textLightPrimary?: string;
      textLightSecondary?: string;
      textManagement2?: string;
      textManagement1?: string;
      textBoooongBlue?: string;
      textDisabled26p?: string;
    };
  }
}
