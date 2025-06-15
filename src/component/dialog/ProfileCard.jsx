import { Box, Typography } from "@mui/material";
import { colorTheme } from "../../style/theme";
import profile from "../asset/image/profile.jpg";
import emptyImage from "../asset/image/icon/empty_img.png";
import { Element, Link } from "react-scroll";

const ProfileCard = () => {
  const techstackList = [
    { id: 1, techName: "front End" },
    { id: 2, techName: "back End" },
    { id: 3, techName: "full Stack" },
  ];

  return (
    <Box  sx={{
        padding: 1,
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
        background: "#FFFDF6",
        border: `1px solid ${colorTheme.greenleft.main}`,
        maxWidth: "225px",
      }}>
       <Box
        component="img"
        src={profile ? profile : emptyImage}
        alt={"profile image"}
        style={{
          width: "210px",
          height: "250px",
          marginBottom: 4,
          borderRadius: "15px",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <Box
       sx={{display:"flex",
        flexDirection:"column",
       }}
       >
          <Typography
        variant="h5"
        sx={{
          lineHeight: "3rem",
          color: colorTheme.woodBrown.main,
          fontWeight: "bold",
          fontFamily: "'Share Tech', sans-serif",
        }}
      >
        Mayura Jampasri (Mai)
      </Typography>
      <Typography
        variant="h7"
        sx={{
          lineHeight: "0.6rem",
          color: colorTheme.woodBrown.main,
          mb: 3,
          fontFamily: "'Share Tech', sans-serif",
        }}
      >
        Information Technology student
      </Typography>
       <Typography
        variant="p"
        sx={{
          lineHeight: "0.1rem",
          color: colorTheme.woodBrown.main,
          mb: 3,
          fontFamily: "'Share Tech', sans-serif",
          fontWeight: "bold",
        }}
      >
        I able to develop in this position
      </Typography>
        <Box
        sx={{
          gap: 2,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {techstackList.map((item) => (
          <Typography
            key={item.id}
            variant="p"
            sx={{
              padding: 1,
              borderRadius: "25px",
              width: "20%",
              maxWidth: "180px",
              color: colorTheme.cream.main,
              backgroundColor:colorTheme.greenleft.main,
              // border: `1px solid ${colorTheme.greenleft.main}`,
              transition: "all 0.3s ease",
              fontFamily: "'Share Tech', sans-serif",
            }}
          >
            {item.techName}
          </Typography>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
