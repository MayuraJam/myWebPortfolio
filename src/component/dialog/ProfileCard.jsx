import { Box, Typography } from "@mui/material";
import { colorTheme } from "../../style/theme";
import profile from "../asset/image/profile.jpg";
import emptyImage from "../asset/image/icon/empty_img.png";
import { Element, Link } from "react-scroll";

const ProfileCard = () => {
  const techstackList = [
    { id: 1, techName: "front-end" },
    { id: 2, techName: "back-end" },
    { id: 3, techName: "full-stack" },
    { id: 4, techName: "React.js" },
    { id: 5, techName: "Next.js" },
    { id: 6, techName: "Node.js" },
  ];

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
        background: "#FFFDF6",
        border: `1px solid ${colorTheme.greenleft.main}`,
        width: "370px",
      }}
    >
      <Box
        component="img"
        src={profile ? profile : emptyImage}
        alt={"profile image"}
        style={{
          width: "200px",
          height: "230px",
          marginBottom: 4,
          borderRadius: "100%",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <Typography
        variant="h4"
        sx={{
          lineHeight: "5rem",
          color: colorTheme.woodBrown.main,
          fontWeight: "bold",
          fontFamily: "'Share Tech', sans-serif",
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
          fontFamily: "'Share Tech', sans-serif",
        }}
      >
        Information Technology student
      </Typography>

      <Box
        sx={{
          gap: 2,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        {techstackList.map((item) => (
          <Typography
            key={item.id}
            sx={{
              padding: 1.5,
              borderRadius: "25px",
              width: "20%",
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
            {item.techName}
          </Typography>
        ))}
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
  );
};

export default ProfileCard;
