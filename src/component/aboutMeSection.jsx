import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { React, useState } from "react";
import { colorTheme } from "../style/theme";
import Header from "./Heading";
import { experienceDetail } from "./data/mockData";
import { Element, Link } from "react-scroll";
import transcriptFile from "./asset/file/My_transcript_eng.pdf";
import { NotificationDialog } from "./dialog/notificationDialog";
import { motion } from "framer-motion";
import { cardMotionHandler, imageMotionHandler } from "../style/motion";
import ProfileCard from "./dialog/ProfileCard";

const AboutMeSection = () => {
  const [openDownloadNoti, setOpenDownloadNoti] = useState(false);

  const handleOpenDownloadNoti = () => {
    setOpenDownloadNoti(true);
  };
  const handleCloseDownLoadNoti = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenDownloadNoti(false);
  };

  const containerListMotionHandler = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  const itemMotionHandler = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
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
          <Grid item xs={12} sm={6}>
            <motion.div
              variants={imageMotionHandler}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ amount: 0.2 }}
            >
              <ProfileCard />
            </motion.div>
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
              <motion.div
                variants={cardMotionHandler}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ amount: 0.2 }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: colorTheme.woodBrown.main }}
                >
                  " I'm{" "}
                  <span style={{ fontWeight: "bold" }}> Mayura Jampasri</span> I
                  graduated from Kasetsart University <br /> with a degree in{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Information Technology
                  </span>
                  .
                  <br /> I'm currently learning and practice web development{" "}
                  <br />
                  and looking forward to becoming a{" "}
                  <span style={{ fontWeight: "bold" }}>junior developer</span>."
                </Typography>
              </motion.div>
              <motion.div
                ariants={containerListMotionHandler}
                initial="hidden"
                whileInView={"show"}
              >
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
                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemMotionHandler}>
                      <Box
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
                          sx={{
                            color: colorTheme.lightBrown.main,
                            fontFamily: "'Share Tech', sans-serif",
                          }}
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
                            fontWeight: "bold",
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
                              mt: 3,
                            }}
                            onClick={handleOpenDownloadNoti}
                          >
                            Transcript
                          </Button>
                        </a>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <motion.div variants={itemMotionHandler}>
                      <Box
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
                              sx={{
                                color: colorTheme.lightBrown.main,
                                fontFamily: "'Share Tech', sans-serif",
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
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
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
