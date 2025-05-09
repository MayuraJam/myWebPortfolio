import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import React from "react";
import { colorTheme } from "../style/theme";
import Header from "./Heading";
import githubImg from "./asset/image/icon/2048px-Octicons-mark-github.png";

const projectData = [
  {
    projectId: 1,
    projectName: "MockMYKU  (practice project)",
    projectDescription: "test description",
    role: "Backend developer",
    tools: ["Express.Js", "MongoDB", "NodeJs"],
    projectType: "Rest API",
    projectImage: [
      "/image/project1/1.png",
      "/image/project1/3.png",
      "/image/project1/4.png",
      "/image/project1/5.png",
      "/image/project1/9.png",
      "/image/project1/11.png",
    ],
    link: "https://github.com/MayuraJam/mockMyKU_app_API",
  },
  {
    projectId: 2,
    projectName: "Japanease resturant system",
    projectDescription: "test description",
    role: "front end developer",
    tools: ["React.Js", "JavaScript", "Bootstrap"],
    projectType: "Website application",
    projectImage: [
      "/image/project2/login_customer.png",
      "/image/project2/manuList.png",
      "/image/project2/order.png",
      "/image/project2/payment.png",
      "/image/project2/payment_card.png",
      "/image/project2/action_modal.png",
    ],
    link: "https://github.com/MayuraJam/japanese_restaurant_app",
  },
  {
    projectId: 3,
    projectName: "Japanease resturant system",
    projectDescription: "test description",
    role: "back end developer",
    tools: ["C# .net", "SQL server"],
    projectType: "Rest API",
    projectImage: [
      "/image/project3/apiResturant1.png",
      "/image/project3/apiResturant2.png",
      "/image/project3/apiResturant3.png",
      "/image/project3/apiResturant4.png",
      "/image/project3/apiResturant5.png",
      "/image/project3/apiResturant6.png",
      "/image/project3/apiResturant7.png",
    ],
    link: "https://github.com/MayuraJam/japanese_restaurant_api/tree/main/basic_JWT_project",
  },
  {
    projectId: 4,
    projectName: "Flea Market lock booking system",
    projectDescription: "test description",
    role: "developer",
    tools: ["C# window app", "SQL server"],
    projectType: "desktop application",
    projectImage: [
      "/image/project4/login.png",
      "/image/project4/customerRegister.png",
      "/image/project4/reservationLock.png",
      "/image/project4/reservationSlip.png",
      "/image/project4/customerDataDialog.png",
      "/image/project4/adminLockManagement.png",
      "/image/project4/lockStatusDashboard.png",
    ],
    link: "-",
  },
];

const ProjectSection = () => {
  return (
    <Box sx={{ padding: "40px", paddingBottom: "70px" }}>
      <Header text="Project" />
      <Typography
        variant="h5"
        sx={{ color: colorTheme.woodBrown.main, textAlign: "start", my: 2 }}
      >
        A collection of projects, I've worked on.
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
            sx={{
              padding: 2,
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
              background: "#FFFDF6",
              border: "1px solid transparent",
              transition: "all 0.3s ease",
              width: "600px",
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
                  justifyContent: "center",
                  alignContent: "center",
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
                      //   objectFit: "contain",
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

        {/* <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: 2,
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
            background: "#FFFDF6",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            width:"500px"
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
              Project Name
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
              project description
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
                  borderRadius: "25px",
                  maxWidth: "90px",
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
                front-end
              </Typography>
              <Typography
                sx={{
                  borderRadius: "25px",
                  maxWidth: "90px",
                  padding: "5px 10px",
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
                  borderRadius: "25px",
                  maxWidth: "90px",
                  padding: "5px 10px",
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
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
              <Button
                href="#text-buttons"
                sx={{
                  transition: "all 0.3s ease",
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
              <Box sx={{position:"relative",display:"inline-block"}}>
                <img
                  src={profile}
                  alt={"profile image"}
                  style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "15px",
                    marginBottom: 4,
                    marginTop: "20px",
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
                    position:"absolute",
                    top:30,
                    right:45,
                  }}
                >
                  project type
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
};
export default ProjectSection;
