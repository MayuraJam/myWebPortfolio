import { React, useState, useEffect } from "react";
import myLogo from "../component/asset/image/documents.png";
import { colorTheme } from "../style/theme";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";

const Navbar = () => {
  const [openList, setOpenList] = useState(false);

  const handleClistDrawer = () => {
    setOpenList(!openList);
  };
  return (
    <>
      <nav>
        <a href="#">
          <img
            src={myLogo}
            alt={"logo image"}
            style={{
              width: "48px",
              height: "48px",
              marginBottom: 4,
              border: `5px solid ${colorTheme.cream.main}`,
              borderRadius: "100%",
            }}
          />
        </a>
        <div>
          <ul
            id="navbar-ul"
            className={openList ? "#navbar-ul active" : "#navbar-ul"}
          >
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Certificates</a>
            </li>
            <li>
              <Button
                size="large"
                variant="contained"
                id="resume-button"
                sx={{
                  borderRadius: "25px",
                  color: colorTheme.lightPink.main,
                  fontWeight: "bold",
                  background: colorTheme.greenleft.main,
                }}
              >
                Resume
              </Button>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClistDrawer}>
          <i class={openList ? "bi bi-x" : "bi bi-list"}></i>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
