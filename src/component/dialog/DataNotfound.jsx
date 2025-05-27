import { Box, Typography } from "@mui/material";
import { colorTheme } from "../../style/theme";
import { motion } from "framer-motion";
import { cardMotionHandler } from "../../style/motion";

export const DataNotFound = () => {
  return (
    <motion.div
      variants={cardMotionHandler}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount: 0.2 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 2,
          mt: "60px",
        }}
      >
        <i
          class="bi bi-exclamation-triangle"
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            color: colorTheme.greenleft.main,
          }}
        ></i>
        <Typography
          variant="h1"
          sx={{
            color: colorTheme.woodBrown.main,
            fontSize: "30px",
            fontFamily: "'Share Tech', sans-serif",
          }}
        >
          Data not found.
        </Typography>
      </Box>
    </motion.div>
  );
};
