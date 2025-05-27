import { Box, Typography, Grid, Button } from "@mui/material";
import { colorTheme } from "../style/theme";
import { motion } from "framer-motion";
import { cardMotionHandler } from "../style/motion";



const Header = ({ text }) => {


  return (
    <motion.div
       variants={cardMotionHandler}
                initial="hidden"
                whileInView={"visible"}
                viewport={{amount:0.2}}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: colorTheme.woodBrown.main,
          textAlign: "start",
          fontFamily: "'Share Tech', sans-serif",
        }}
      >
        {text} <span style={{ color: colorTheme.greenleft.main }}>{">>"}</span>
      </Typography>
    </motion.div>
  );
};
export default Header;
