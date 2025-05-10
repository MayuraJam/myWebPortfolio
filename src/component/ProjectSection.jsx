import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { colorTheme } from "../style/theme";
import Header from "./Heading";
import githubImg from "./asset/image/icon/2048px-Octicons-mark-github.png";
import { Element } from "react-scroll";
import { projectData } from "./data/mockData";
import { ProjectDialog } from "./dialog/ProjectDialog";

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
        <Typography
          variant="h5"
          sx={{ color: colorTheme.woodBrown.main, textAlign: "start", my: 2 }}
        >
          Here are some projects I've worked on, showcasing my skills in various
          technologies and problem domains.
        </Typography>
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          {projectData.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={item.projectId}
              onClick={()=>handleOpenProjectDialog(item)}
              sx={{
                padding: 2,
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                background: "#FFFDF6",
                border: "1px solid transparent",
                transition: "all 0.3s ease",
                width: "600px",
                cursor: "pointer",
                "&:hover": {
                  border: `2px solid ${colorTheme.greenleft.main}`,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    lineHeight: "4rem",
                    color: colorTheme.woodBrown.main,
                    fontWeight: "bold",
                    textAlign: "start",
                  }}
                >
                  {item.projectName}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: "1rem",
                    color: colorTheme.woodBrown.main,
                    mb: 3,
                    textAlign: "start",
                  }}
                >
                  {item.projectDescription}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    display: "flex",
                    justifyContent: "start",
                    alignContent: "start",
                  }}
                >
                  {item.tools.map((tool, index) => (
                    <Typography
                      key={index}
                      sx={{
                        borderRadius: "25px",
                        maxWidth: "200px",
                        color: colorTheme.greenleft.main,
                        border: `1px solid ${colorTheme.greenleft.main}`,
                        padding: "5px 10px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: colorTheme.greenleft.main,
                          color: "#ffffff",
                        },
                      }}
                    >
                      {tool}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                  <Button
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      transition: "all 0.3s ease",
                      visibility: item.link === "-" ? "hidden" : "visible",
                      "&:hover": {
                        border: colorTheme.greenleft.main,
                      },
                    }}
                  >
                    <img
                      src={githubImg}
                      alt={"github logo"}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    Github
                  </Button>
                  <Box sx={{ position: "relative", display: "inline-block" }}>
                    <img
                      src={item.projectImage[0]}
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
                          zIndex: 1,
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        borderRadius: "25px",
                        padding: "5px 10px",
                        backgroundColor: colorTheme.greenleft.main,
                        color: "#ffffff",
                        border: `1px solid ${colorTheme.greenleft.main}`,
                        transition: "all 0.3s ease",
                        position: "absolute",
                        top: 30,
                        right: 45,
                      }}
                    >
                      {item.projectType}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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
