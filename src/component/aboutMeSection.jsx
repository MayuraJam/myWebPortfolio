import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import {React,useState} from "react";
import { colorTheme } from "../style/theme";
import profile from "./asset/image/profile.jpg";
import Header from "./Heading";
import { experienceDetail } from "./data/mockData";
import { Element, Link } from "react-scroll";
import transcriptFile from "./asset/file/My_transcript_eng.pdf";
import { NotificationDialog } from "./dialog/notificationDialog";
import emptyImage from "./asset/image/icon/empty_img.png";
const AboutMeSection = () => {
    const [openList, setOpenList] = useState(false);
    const [openDownloadNoti,setOpenDownloadNoti] = useState(false);

    const handleOpenDownloadNoti = ()=>{
    setOpenDownloadNoti(true);
  }
  const handleCloseDownLoadNoti = (event,reason)=>{
    if(reason === "clickaway") return;
    setOpenDownloadNoti(false);
  }
  return (
    <Element name="about-me">
      <Box
        sx={{ padding: "40px", paddingBottom: "70px", paddingTop: "150px" }}
        id="about-me"
      >
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
              padding: 2,
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
              background: "#FFFDF6",
              border: `1px solid ${colorTheme.greenleft.main}`,
            }}
          >
            <Box>
              <img
                src={profile?profile:emptyImage}
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
                  fontFamily: "'Share Tech', sans-serif"
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
                  fontFamily: "'Share Tech', sans-serif"
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
                    fontFamily: "'Share Tech', sans-serif",
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
                     fontFamily: "'Share Tech', sans-serif",
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
                     fontFamily: "'Share Tech', sans-serif",
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
                     fontFamily: "'Share Tech', sans-serif",
                    "&:hover": {
                      backgroundColor: colorTheme.greenleft.main,
                      color: "#ffffff",
                    },
                  }}
                >
                  React.Js
                </Typography>
                <Typography
                  sx={{
                    padding: 1.5,
                    borderRadius: "25px",
                    maxWidth: "90px",
                    color: colorTheme.greenleft.main,
                    border: `1px solid ${colorTheme.greenleft.main}`,
                    transition: "all 0.3s ease",
                     fontFamily: "'Share Tech', sans-serif",
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
                     fontFamily: "'Share Tech', sans-serif",
                    "&:hover": {
                      backgroundColor: colorTheme.greenleft.main,
                      color: "#ffffff",
                    },
                  }}
                >
                  Node.js
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  mt: 2,
                }}
              >
                <Link
                  to="skills"
                  style={{ textDecoration: "none" }}
                  smooth={true}
                  duration={500}
                >
                  <Typography
                    sx={{
                      padding: 1.5,
                      borderRadius: "25px",
                      maxWidth: "90px",
                      color: colorTheme.greenleft.main,
                      border: `1px solid ${colorTheme.greenleft.main}`,
                      transition: "all 0.3s ease",
                       fontFamily: "'Share Tech', sans-serif",
                      "&:hover": {
                        backgroundColor: colorTheme.greenleft.main,
                        color: "#ffffff",
                      },
                      cursor: "pointer",
                    }}
                  >
                    and more...
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ color: colorTheme.woodBrown.main }}
              >
               " I'm <span style={{ fontWeight: "bold" }}> Mayura Jampasri</span> I graduated from Kasetsart University <br />{" "}
                with a degree in{" "}
                <span style={{ fontWeight: "bold" }}>
                  Information Technology
                </span>
                .
                <br /> I'm currently learning and practice web development{" "}
                <br />
                and looking forward to becoming a{" "}
                <span style={{ fontWeight: "bold" }}>junior developer</span>."
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  mt: 3,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    border: `1px solid ${colorTheme.lightBrown.main}`,
                    padding: 2,
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: colorTheme.woodBrown.main,
                      fontWeight: "bold",
                       fontFamily: "'Share Tech', sans-serif",
                    }}
                  >
                    <i
                      class="bi bi-mortarboard"
                      style={{ marginRight: "8px" }}
                    ></i>{" "}
                    Education
                  </Typography>
                  <Divider variant="middle" sx={{ my: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      color: colorTheme.woodBrown.main,
                      fontWeight: "bold",
                       fontFamily: "'Share Tech', sans-serif",
                    }}
                  >
                    BSc in Information Technology
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: colorTheme.lightBrown.main ,
                      fontFamily: "'Share Tech', sans-serif", }}
                  >
                    Kasetsart University (Sriracha campus)
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: colorTheme.lightBrown.main }}
                  >
                    2021 - 2025
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: colorTheme.lightBrown.main,
                      border: `1px solid ${colorTheme.lightBrown.main}`,
                      display: "inline-block",
                      borderRadius: "15px",
                      mt: 2,
                      fontWeight:"bold"
                    }}
                  >
                    GPA : 3.71
                  </Typography>
                  <a
                    href={transcriptFile}
                    download="My-Transcript"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="large"
                      variant="contained"
                      id="resume-button"
                      sx={{
                        borderRadius: "25px",
                        color: colorTheme.lightPink.main,
                        fontWeight: "bold",
                        background: colorTheme.greenleft.main,
                        mt:3
                      }}
                      onClick={handleOpenDownloadNoti}
                    >
                      Transcript
                    </Button>
                  </a>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    border: `1px solid ${colorTheme.lightBrown.main}`,
                    padding: 2,
                    px: 5,
                    borderRadius: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: colorTheme.woodBrown.main,
                      fontWeight: "bold",
                       fontFamily: "'Share Tech', sans-serif",
                    }}
                  >
                    <i
                      class="bi bi-person-workspace"
                      style={{ marginRight: "8px" }}
                    ></i>
                    experience
                  </Typography>
                  <Divider variant="middle" sx={{ my: 2 }} />
                  {experienceDetail.map((item) => (
                    <Box key={item.id}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: colorTheme.woodBrown.main,
                          fontWeight: "bold",
                           fontFamily: "'Share Tech', sans-serif",
                        }}
                      >
                        {item.role}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: colorTheme.lightBrown.main 
                          , fontFamily: "'Share Tech', sans-serif",
                        }}
                      >
                        {item.company}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: colorTheme.lightBrown.main, mb: 2 }}
                      >
                        {item.timeline}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      <NotificationDialog
      open={openDownloadNoti} 
      handleClose={handleCloseDownLoadNoti} 
      massage="Download Transcript sucess !!!"
      status="success"
      />
      </Box>
    </Element>
  );
};
export default AboutMeSection;
