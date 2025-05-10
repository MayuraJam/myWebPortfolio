import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from "@mui/material";
import React, { useState } from "react";
import { colorTheme } from "../../style/theme";
import profile from "../asset/image/profile.jpg";
import githubImg from "../asset/image/icon/2048px-Octicons-mark-github.png";
import { BtnSlider } from "./BtnSlider";
import { Dots } from "./Dots";

export const ProjectDialog = ({ open, onClose, data }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");
  console.log("data in project dialog :", data);
  if (!data) return;
  const numSlides = data.projectImage.length;

  const onArrowClick = (direction) => {
    const increment = direction === "prev" ? -1 : 1;
    const newIndex = (sliderIndex + increment + numSlides) % numSlides;
    const oppDirection = direction === "prev" ? "next" : "prev";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setSliderIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "8px",
          overflow: "hidden",
          padding: "0",
          background: colorTheme.cream.main,
        },
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            color: colorTheme.lightBrown.main,
            textAlign: "start",
          }}
        >
          {data.timeline}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: colorTheme.black.main,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          xs={12}
          sm={6}
          sx={{
            padding: 2,
            borderRadius: "15px",
            border: "1px solid transparent",
            transition: "all 0.3s ease",
            width: "800px",
          }}
        >
          <Box
            sx={{
              border: `1px solid ${colorTheme.greenleft.main}`,
              p: 1,
              px: 2,
              borderRadius: "15px",
              mb: 1.5,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
              background: "#FFFDF6",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                lineHeight: "3rem",
                color: colorTheme.woodBrown.main,
                fontWeight: "bold",
                textAlign: "start",
              }}
            >
              {data.projectName}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                lineHeight: "1rem",
                color: colorTheme.lightBrown.main,
                mb: 3,
                textAlign: "start",
              }}
            >
              {data.projectDescription}
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
              {data.tools.map((tool) => (
                <Typography
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
            <Box
              sx={{
                display: "flex",
                mt: 2,
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >
              <Button
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  transition: "all 0.3s ease",
                  width: "80px",
                  visibility: data.link === "-" ? "hidden" : "visible",
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
               <Typography
              variant="h6"
              sx={{
                color: colorTheme.lightBrown.main,
                textAlign: "start",
              }}
            >
              {data.role}
            </Typography>
             <Typography
              variant="h6"
              sx={{
                color: colorTheme.lightBrown.main,
                textAlign: "start",
              }}
            >
              {data.projectType}
            </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ustifyContent: "center",
              alignItems: "center",
            }}
          >
            <Dots content={data.projectImage} index={sliderIndex} />
            <Box
              id="container-slider"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "550px",
                margin: "auto",
              }}
            >
              <BtnSlider
                moveSlide={() => onArrowClick("prev")}
                direction={"prev"}
              />
              {data.projectImage.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: index === sliderIndex ? "block" : "none",
                    transition: "all 0.5s ease-in-out",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                    background: "#FFFDF6",
                    mt:2,
                    borderRadius:"15px"
                  }}
                >
                  <img
                    src={item}
                    alt={"project image slice"}
                    style={{
                      width: "650px",
                      height: "500px",
                      borderRadius: "15px",
                      marginBottom: 4,
                      marginTop: "20px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
              <BtnSlider
                moveSlide={() => onArrowClick("next")}
                direction={"next"}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
