import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import "./footer.css";
import { colorTheme } from "../style/theme";
import myLogo from "./asset/image/icon/my-logo.png";
import { Link } from "react-scroll";
import IconButtonComponent from "./IconButton";
import { motion } from "framer-motion";

const FooterSction = () => {
  const containerListMotionHandler = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemMotionHandler = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <footer
      style={{
        background: colorTheme.lightBrown.main,
        padding: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "flex-start",
          },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "start",
            },
          }}
        >
          <Link
            to="profile"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <img
              src={myLogo}
              alt={"logo image"}
              style={{
                width: "55px",
                height: "55px",
                marginBottom: 4,
                borderRadius: "100%",
              }}
            />
          </Link>
          <Typography
            variant="h5"
            sx={{
              color: colorTheme.lightPink.main,
              lineHeight: "3rem",
              fontWeight: "bold",
              fontFamily: "'Share Tech', sans-serif",
            }}
          >
            Mayura Jampasri
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colorTheme.sakuraPink.main,
              fontFamily: "'Share Tech', sans-serif",
            }}
          >
            "A little progress each day adds up to big results."
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "end",
            },
          }}
        >
          <motion.div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
            variants={containerListMotionHandler}
            initial="hidden"
            whileInView={"show"}
          >
             <motion.div variants={itemMotionHandler}>
            <a
              href="https://github.com/MayuraJam"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButtonComponent text="Github">
                <i class="bi bi-github icon-contect"></i>
              </IconButtonComponent>
            </a>
             </motion.div>
              <motion.div variants={itemMotionHandler}>
            <a
              href="https://www.linkedin.com/in/mayura-jampasri-5293652b1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconButtonComponent text="Linkedin">
                <i class="bi bi-linkedin icon-contect"></i>
              </IconButtonComponent>
            </a>
              </motion.div>
               <motion.div variants={itemMotionHandler}>
            <IconButtonComponent text="maimayura37620@gmail.com">
              <i class="bi bi-envelope icon-contect"></i>
            </IconButtonComponent>
               </motion.div>
                <motion.div variants={itemMotionHandler}>
            <IconButtonComponent text="0909845033">
              <i class="bi bi-telephone-fill icon-contect"></i>
            </IconButtonComponent>

                </motion.div>
          </motion.div>

          <Divider
            sx={{
              borderColor: colorTheme.lightPink.main,
              my: 2,
              width: "100%",
            }}
          />
          <Typography
            variant="p"
            sx={{
              color: colorTheme.lightPink.main,
              fontFamily: "'Share Tech', sans-serif",
            }}
          >
            © 2025 Mayura Jampasri | Built with React MUI and CSS
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};
export default FooterSction;
