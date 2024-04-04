import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { ModeEnum } from "@/types/app";
import { getLocalThemeSetting, setLocalThemeSetting } from "@/utils/theme-mode";
import { ThemeModeContext } from "@/providers/ThemeModeContext";

const SwitchMode = () => {
  const {
    changeSetting,
    setting: { mode },
  } = useContext(ThemeModeContext);
  const handleChangeMode = () => {
    const { mode: _mode } = getLocalThemeSetting();
    if (_mode) {
      if (_mode === "light") {
        setLocalThemeSetting({
          mode: "dark",
        });
        changeSetting({
          mode: "dark",
        });
      } else {
        setLocalThemeSetting({
          mode: "light",
        });
        changeSetting({
          mode: "light",
        });
      }
    } else {
      setLocalThemeSetting({
        mode: "light",
      });
      changeSetting({
        mode: "light",
      });
    }
  };
  return (
    <IconButton
      disableRipple
      onClick={handleChangeMode}
      sx={{
        borderRadius: "5px",
        width: "36px",
        height: "36px",
        mr: "17px",
        position: "relative",
        bgcolor: "color.bgButton",
        transition: "none",
        overflow: "hidden",
        p: 0,
        ":after": {
          content: "''",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
          transition: "background .25s ,opacity .25s",
          opacity: 0.1,
        },
        ":hover:after": {
          bgcolor: "primary.main",
          opacity: 0.2,
        },
        ":hover .dark-icon": {
          color: "primary.main",
        },
      }}
    >
      <LightModeIcon
        className="light-icon"
        sx={{
          color: "#8c7cf0",
          transition: ".4s",
          position: "absolute",
          top: "50%",
          zIndex: 2,
          transform: "translate(-50%, -50%)",
          left: mode === ModeEnum.DARK ? "50%" : "100px",
        }}
      />
      <DarkModeIcon
        className="dark-icon"
        sx={{
          position: "absolute",
          top: "50%",
          zIndex: 2,
          transform: "translate(-50%, -50%)",
          left: mode === ModeEnum.LIGHT ? "50%" : "100px",
          transition: ".4s",
        }}
      />
    </IconButton>
  );
};

export default SwitchMode;
