import { colorTheme } from "../../style/theme";
import React, { useState,useEffect } from "react";
import { Box, Typography } from "@mui/material";
import emptyImage from "../asset/image/icon/empty_img.png";
import { truncateText } from "../ProjectSection";

const ProjectSectionCard = ({ data }) => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "15px",
        background: "#FFFDF6",
        border: `1px solid ${colorTheme.lightGrey.main}`,
        transition: "all 0.3s ease",
        width: "600px",
        cursor: "pointer",
        "&:hover": {
          border: `2px solid ${colorTheme.greenleft.main}`,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
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
        {data.projectName?data.projectName : "projectName"}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          lineHeight: "1.2rem",
          color: colorTheme.woodBrown.main,
          mb: 3,
          textAlign: "start",
          fontFamily: "'Share Tech', sans-serif",
        }}
      >
        {truncateText(data.projectDescription, 200)?truncateText(data.projectDescription, 200):"project description"}
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
        {data.tools && data.tools.length > 0? (
        <>
        {data.tools.map((tool, index) => (
          <Typography
            key={index}
            sx={{
              borderRadius: "25px",
              maxWidth: "200px",
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
            {tool}
          </Typography>
        ))}
        </>
      ):null}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <img
            src={data.projectImage[0] ? data.projectImage[0] : emptyImage}
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
              fontFamily: "'Share Tech', sans-serif",
            }}
          >
            {data.projectType?data.projectType:""}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ProjectSectionCard;
