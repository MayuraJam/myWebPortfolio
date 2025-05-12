import { Box, Typography, Grid, Button } from "@mui/material";
import { colorTheme } from "../style/theme";

const Header = ({ text }) => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: colorTheme.woodBrown.main,
          textAlign: "start",
          fontFamily: "'Share Tech', sans-serif"
        }}
      >
        {text} <span style={{ color: colorTheme.greenleft.main }}>{">>"}</span>
      </Typography>
    </>
  );
};
export default Header;
