import { createTheme } from "@mui/material/styles";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";

const noto = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const notoTH = Noto_Sans_Thai({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

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
};

export { colorTheme };
