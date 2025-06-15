import { Box, Typography, Grid, } from "@mui/material";
import React, { useState } from "react";
import { colorTheme } from "../style/theme";
import Header from "./Heading";
import { Element } from "react-scroll";
import { projectData } from "./data/mockData";
import { ProjectDialog } from "./dialog/ProjectDialog";
import emptyImage from "./asset/image/icon/empty_img.png";
import { motion } from "framer-motion";
import { cardMotionHandler, containerMotionHandler } from "../style/motion";
import ProjectSectionCard from "./dialog/ProjectSectionCard";
import { DataNotFound } from "./dialog/DataNotfound";

export const truncateText = (text, maxLength) => {
  if(!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

const ProjectSection = () => {
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const handleOpenProjectDialog = (data) => {
    setSelectId(data);
    setOpenProjectDialog(true);
  };
  const handleCloseProjectDialog = () => {
    setOpenProjectDialog(false);
    setSelectId(null);
  };

  
  return (
    <Element name="project">
      <Box
        sx={{
          padding: "40px",
          paddingBottom: "70px",
          paddingTop: "150px",
        }}
        id="project"
      >
        <Header text="Project" />
        <motion.div
          variants={cardMotionHandler}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.2 }}
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
            Here are some projects I've worked on, showcasing my skills in
            various technologies and problem domains.
          </Typography>
        </motion.div>
        <motion.div
          variants={containerMotionHandler}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.1}}
        >
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            {projectData.length === 0 || !projectData ? (
              <DataNotFound/>
            ):(
              <>
              {projectData.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={item.projectId}
                  onClick={() => handleOpenProjectDialog(item)}
                  
                >
                   <motion.div variants={cardMotionHandler}>
                    <ProjectSectionCard data={item}/>
                   </motion.div>
                </Grid>
              ))}
              </>
            )}
          </Grid>
        </motion.div>
      </Box>
      <ProjectDialog
        open={openProjectDialog}
        onClose={handleCloseProjectDialog}
        data={selectId}
      />
    </Element>
  );
};
export default ProjectSection;
