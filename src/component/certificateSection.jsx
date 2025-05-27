import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colorTheme } from "../style/theme";
import Header from "./Heading";
import { certificateData } from "./data/mockData";
import emptyImage from "./asset/image/icon/empty_img.png";
import { motion } from "framer-motion";
import { cardMotionHandler, containerMotionHandler } from "../style/motion";



const CertificateSection = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    setData(certificateData);
  }, []);
  return (
    <Box
      sx={{ padding: "40px", paddingBottom: "70px", paddingTop: "150px" }}
      id="certificate"
    >
      <Header text="Certificate" />

      <motion.div
        variants={cardMotionHandler}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.1 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: colorTheme.woodBrown.main,
            textAlign: "start",
            my: 2,
            fontFamily: "'Share Tech', sans-serif",
          }}
        >
          A collection of my certifications earned throughout my journey.
        </Typography>
      </motion.div>
      <motion.div
        variants={containerMotionHandler}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.1 }}
      >
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          {data.map((item) => (
            <Grid item xs={12} sm={6} key={item.certificateId}>
              <motion.div variants={cardMotionHandler}>
                <Box
                  sx={{
                    padding: 2,
                    borderRadius: "15px",
                    background: "#FFFDF6",
                    border: "1px solid transparent",
                    transition: "all 0.3s ease",
                    width: "600px",
                    border: `1px solid ${colorTheme.lightGrey.main}`,
                    "&:hover": {
                      border: `1px solid ${colorTheme.greenleft.main}`,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      lineHeight: "4rem",
                      color: colorTheme.woodBrown.main,
                      fontWeight: "bold",
                      textAlign: "start",
                      fontFamily: "'Share Tech', sans-serif",
                    }}
                  >
                    {item.certificateName}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: "1rem",
                      color: colorTheme.lightBrown.main,
                      mb: 3,
                      textAlign: "start",
                      fontFamily: "'Share Tech', sans-serif",
                    }}
                  >
                    {item.organization}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: "1rem",
                      color: colorTheme.lightBrown.main,
                      mb: 3,
                      textAlign: "start",
                      fontFamily: "'Share Tech', sans-serif",
                    }}
                  >
                    ({item.issueDate})
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      lineHeight: "1rem",
                      color: colorTheme.woodBrown.main,
                      textAlign: "center",
                      border: `1px solid transparent`,
                      borderRadius: "15px",
                      padding: 1,
                      width: "220px",
                      fontFamily: "'Share Tech', sans-serif",
                      backgroundColor : item.about.includes("Workshop and training")?
                      colorTheme.lightPurpur.main:item.about.includes("Internship")?
                      colorTheme.lightBlue.main:item.about.includes("Test")?
                      colorTheme.lightPink.main:colorTheme.lightGreen.main
                    }}
                  >
                    {item.about}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      display: "flex",
                      justifyContent: "start",
                      alignContent: "start",
                    }}
                  ></Box>
                  <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                    <img
                      src={
                        item.certificateImage
                          ? item.certificateImage
                          : emptyImage
                      }
                      alt={"profile image"}
                      style={{
                        width: "560px",
                        height: "400px",
                        borderRadius: "15px",
                        marginBottom: 4,
                        marginTop: "20px",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "scale(2)",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};
export default CertificateSection;
