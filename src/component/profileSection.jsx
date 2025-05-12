import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import { colorTheme } from "../style/theme";
import githubImg from "./asset/image/icon/2048px-Octicons-mark-github.png";
import emailImg from "./asset/image/icon/email.png";
import teleImg from "./asset/image/icon/phone.png";
import linkedInImg from "./asset/image/icon/linkedin.png";
import laptopWithProgrammingImg from "./asset/image/icon/programming.png";
import { Element } from "react-scroll";
import IconButtonComponent from "./IconButton";

const ProfileSection = () => {
  return (
    <Element name="profile">
      <Box sx={{ padding: "110px", paddingTop: "200px" }} id="profile">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: "start" }}>
              <Typography
                variant="h5"
                sx={{
                  lineHeight: "5rem",
                  color: colorTheme.woodBrown.main,
                  fontFamily: "'Share Tech', sans-serif",
                }}
              >
                Hello! I'm
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: "bold", lineHeight: "4.5rem",fontFamily: "'Share Tech', sans-serif" }}
              >
                Mayura{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: colorTheme.greenleft.main,
                    fontFamily: "'Share Tech', sans-serif"
                  }}
                >
                  Jampasri
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    lineHeight: "6rem",
                    fontWeight: "light",
                    color: colorTheme.woodBrown.main,
                    fontFamily: "'Share Tech', sans-serif"
                  }}
                >
                  Information Technology Student
                </Typography>
                <img
                  src={laptopWithProgrammingImg}
                  alt={"laptop image"}
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  lineHeight: "5rem",
                  fontWeight: "light",
                  color: colorTheme.woodBrown.main,
                  fontFamily: "'Share Tech', sans-serif"
                }}
              >
                Welcome to my Portfolio website
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    background: colorTheme.greenleft.main,
                    padding: 2,
                    borderRadius: "10px",
                    maxWidth: "90px",
                    color: colorTheme.lightPink.main,
                    fontFamily: "'Share Tech', sans-serif"
                  }}
                >
                  Contact Me
                </Typography>
                <a
                  href="https://github.com/MayuraJam?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <IconButtonComponent text="Github">
                    <img
                      src={githubImg}
                      alt={"github logo"}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </IconButtonComponent>
                </a>
                <a
                  href="https://www.linkedin.com/in/mayura-jampasri-5293652b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <IconButtonComponent text="Linkedin">
                    <img
                      src={linkedInImg}
                      alt={"linkedIn logo"}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </IconButtonComponent>
                </a>
                <IconButtonComponent text="maimayura37620@gmail.com">
                  <img
                    src={emailImg}
                    alt={"email logo"}
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </IconButtonComponent>
                <IconButtonComponent text="0909845033">
                  <img
                    src={teleImg}
                    alt={"telephone logo"}
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </IconButtonComponent>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};
export default ProfileSection;
