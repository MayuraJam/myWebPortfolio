import { Box, Typography, Grid, } from "@mui/material";
import React from "react";
import { colorTheme } from "../style/theme";
import Header from "./Heading";
import { skills } from "./data/mockData";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { cardMotionHandler, containerMotionHandler } from "../style/motion";
import { DataNotFound } from "./dialog/DataNotfound";

const SkillsSection = () => {
  return (
    <Element name="skills">
      <Box
        sx={{ padding: "40px", paddingBottom: "70px", paddingTop: "150px" }}
        id="skills"
      >
        <Header text="Skills" />
        <motion.div
          variants={containerMotionHandler}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.2 }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            {skills.length === 0 || !skills ? (
              <>
               <DataNotFound/>
              </>
            ) : (
              <>
                {skills.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.skillId}>
                    <motion.div variants={cardMotionHandler}>
                      <Box
                        sx={{
                          padding: 3,
                          background: "#FFFDF6",
                          border: `1px solid ${colorTheme.lightGrey.main}`,
                          borderRadius: "15px",
                          "&:hover": {
                            border: `1px solid ${colorTheme.greenleft.main}`,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                          },
                        }}
                        width={{ lg: "350px", sm: "450px" }}
                        height={{ lg: "190px", sm: "140px" }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <img
                            src={item.skillIcon}
                            alt={item.skillType}
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "8px",
                              background: colorTheme.lightPink.main,
                              border: `1px solid ${colorTheme.sakuraPink.main}`,
                              padding: "8px",
                              borderRadius: "5px",
                            }}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              color: colorTheme.woodBrown.main,
                              textAlign: "start",
                              fontWeight: "bold",
                              fontFamily: "'Share Tech', sans-serif",
                            }}
                          >
                            {item.skillType}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "start",
                            alignContent: "start",
                            mt: 2,
                            flexWrap: "wrap",
                          }}
                        >
                          {item.skillList.map((skill, index) => (
                            <Typography
                              key={index}
                              sx={{
                                borderRadius: "25px",
                                color: colorTheme.greenleft.main,
                                border: `1px solid ${colorTheme.greenleft.main}`,
                                padding: "5px 10px",
                                transition: "all 0.3s ease",
                                fontFamily: "'Share Tech', sans-serif",
                                "&:hover": {
                                  backgroundColor: colorTheme.greenleft.main,
                                  color: "#ffffff",
                                },
                              }}
                            >
                              {skill}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </motion.div>
      </Box>
    </Element>
  );
};
export default SkillsSection;
