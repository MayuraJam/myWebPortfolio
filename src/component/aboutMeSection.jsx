import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import { colorTheme } from "../style/theme";
import profile from "./asset/image/profile.jpg";
import Header from "./Heading";

const AboutMeSection = () => {
  return (
    <Box sx={{padding: "40px",paddingBottom:"100px" }}>
      <Header text="About Me" />
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            border: "1px solid #000",
          }}
        >
          <Box>
            <img
              src={profile}
              alt={"profile image"}
              style={{
                width: "200px",
                height: "230px",
                marginBottom: 4,
                borderRadius: "100%",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                lineHeight: "5rem",
                color: colorTheme.woodBrown.main,
                fontWeight: "bold",
              }}
            >
              Mayura Jampasri
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: "1rem",
                color: colorTheme.woodBrown.main,
                mb: 3,
              }}
            >
              Information Technology student
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  padding: 1.5,
                  borderRadius: "25px",
                  maxWidth: "90px",
                  color: colorTheme.greenleft.main,
                  border: `1px solid ${colorTheme.greenleft.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colorTheme.greenleft.main,
                    color: "#ffffff",
                  },
                }}
              >
                front-end
              </Typography>
              <Typography
                sx={{
                  padding: 1.5,
                  borderRadius: "25px",
                  maxWidth: "90px",
                  color: colorTheme.greenleft.main,
                  border: `1px solid ${colorTheme.greenleft.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colorTheme.greenleft.main,
                    color: "#ffffff",
                  },
                }}
              >
                back-end
              </Typography>
              <Typography
                sx={{
                  padding: 1.5,
                  borderRadius: "25px",
                  maxWidth: "90px",
                  color: colorTheme.greenleft.main,
                  border: `1px solid ${colorTheme.greenleft.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colorTheme.greenleft.main,
                    color: "#ffffff",
                  },
                }}
              >
                full-stack
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  padding: 1.5,
                  borderRadius: "25px",
                  maxWidth: "90px",
                  color: colorTheme.greenleft.main,
                  border: `1px solid ${colorTheme.greenleft.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colorTheme.greenleft.main,
                    color: "#ffffff",
                  },
                }}
              >
                react.Js
              </Typography>
              <Typography
                sx={{
                  padding: 1.5,
                  borderRadius: "25px",
                  maxWidth: "90px",
                  color: colorTheme.greenleft.main,
                  border: `1px solid ${colorTheme.greenleft.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colorTheme.greenleft.main,
                    color: "#ffffff",
                  },
                }}
              >
                Next.js
              </Typography>
              <Typography
                sx={{
                  padding: 1.5,
                  borderRadius: "25px",
                  maxWidth: "90px",
                  color: colorTheme.greenleft.main,
                  border: `1px solid ${colorTheme.greenleft.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: colorTheme.greenleft.main,
                    color: "#ffffff",
                  },
                }}
              >
                Node.js
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ border: "1px solid #000",display:"flex",flexDirection:"column",justifyContent:"start" }}>
          <Box>
            <Typography variant="h5" sx={{ color: colorTheme.woodBrown.main }}>
              I'm Mayura Jampasri I graduated from Kasetsart University <br />{" "}
              with a degree in <span style={{fontWeight:"bold"}}>Information Technology</span>.
              <br /> I'm currently learning and practice web development <br />
              and looking forward to becoming a <span style={{fontWeight:"bold"}}>junior developer</span>.
            </Typography>
            <Box sx={{display:"flex",border: "1px solid #000",mt:2,gap:3,alignContent:"space-between"}}>
              <Box sx={{
                border: "1px solid #000",
                borderRadius:"15px",
                width:"280px",
                padding:"15px"
              }}>
              <Typography variant="h5" sx={{ color: colorTheme.woodBrown.main ,fontWeight:"bold"}}>
               Education detail
            </Typography>
              </Box>
              <Box sx={{
                border: "1px solid #000",
                borderRadius:"15px",
                width:"280px",
                padding:"15px"
              }}>
              <Typography variant="h5" sx={{ color: colorTheme.woodBrown.main ,fontWeight:"bold"}}>
               experience detail
            </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutMeSection;
