import { createTheme } from "@mui/material/styles";



const { palette } = createTheme();

const colorTheme = {
  green: palette.augmentColor({
    color: { main: "#38CB89" },
    name: "green",
  }),
  white: palette.augmentColor({
    color: { main: "#ffffff" },
    name: "white",
  }),
  black: palette.augmentColor({
    color: { main: "#000" },
    name: "black",
  }),
  greenleft: palette.augmentColor({
    color: { main: "#86A788" },
    name: "greenleft",
  }),
  cream: palette.augmentColor({
    color: { main: "#FFFDEC" },
    name: "cream",
  }),
  lightPink: palette.augmentColor({
    color: { main: "#FFE2E2" },
    name: "lightPink ",
  }),
  sakuraPink: palette.augmentColor({
    color: { main: "#FFCFCF" },
    name: "sakuraPink",
  }),
  lightBrown: palette.augmentColor({
    color: { main: "#A27B5C" },
    name: "lightBrown",
  }),
  woodBrown: palette.augmentColor({
    color: { main: "#685752" },
    name: "woodBrown",
  }),
  blackGreen: palette.augmentColor({
    color: { main: "#2C3930" },
    name: "blackGreen",
  }),
  blackLightGreen: palette.augmentColor({
    color: { main: "#3F4F44" },
    name: "blackLightGreen",
  }),
  darkGrey: palette.augmentColor({
    color: { main: "#5A5A5D" },
    name: "darkGrey",
  }),
  darkBlueGrey: palette.augmentColor({
    color: { main: "#636576" },
    name: "darkBlueGrey",
  }),

  grey: palette.augmentColor({
    color: { main: "#BEBEBF" },
    name: "grey",
  }),

  lightGrey: palette.augmentColor({
    color: { main: "#D9D9D9" },
    name: "lightGrey",
  }),
};

export { colorTheme };
