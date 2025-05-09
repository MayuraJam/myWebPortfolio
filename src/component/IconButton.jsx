import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import { colorTheme } from "../style/theme";
import { useRef, useState } from "react";

const IconButtonComponent = ({ children, text, color, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <Button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          display: "flex",
          padding: 2,
          justifyItems: "center",
          borderRadius: "25px",
          background: `${color || colorTheme.lightPink.main}`,
          color: `${colorTheme.darkGrey.main}`,
          border: `1px solid ${colorTheme.sakuraPink.main}`,
        }}
        {...props}
      >
        {children}
        <div
          style={{
            overflowX: "hidden",
            transition: "width 300ms ease-out",
            width: hovered ? ref.current?.offsetWidth || 0 : 0,
          }}
        >
          <span style={{ paddingRight: 1.5, paddingLeft: 1.5 }} ref={ref}>
            {text.toLowerCase()}
          </span>
        </div>
      </Button>
    </>
  );
};
export default IconButtonComponent;
