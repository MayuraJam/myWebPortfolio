import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import React from "react";
import { colorTheme } from "../style/theme";
import githubImg from "./asset/image/icon/2048px-Octicons-mark-github.png";
import emailImg from "./asset/image/icon/email.png";
import teleImg from "./asset/image/icon/phone.png";

const FooterSction = () => {
  return (
    <footer
      style={{
        background: colorTheme.lightBrown.main,
        paddingRight: 4,
        paddingLeft: 4,
      }}
    >
      <Grid container spacing={5} sx={{ padding: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            sx={{
              color: colorTheme.cream.main,
              fontWeight: "bold",
            }}

          >
            About us
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: colorTheme.lightPink.main,
              mb: 2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptatibus nam maxime error veritatis, quo facilis sunt culpa
            nostrum cupiditate dolore dolores possimus ratione fugiat non sit
            harum et natus.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            sx={{
              color: colorTheme.cream.main,
              fontWeight: "bold",
            }}
          >
            Contact us
          </Typography>
          <ul>
            <li>
              <a style={{}}>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};
export default FooterSction;
