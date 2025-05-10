import {
  Fab
} from "@mui/material";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colorTheme } from "../../style/theme";
export const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <Fab
      style={{
        padding: "2em",
        backgroundColor: "unset",
        boxShadow: "unset",
        border: `2px solid ${colorTheme.greenleft.main}`,
        background: "#FFFDF6",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
      onClick={moveSlide}
    >
      {direction === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </Fab>
  );
};
