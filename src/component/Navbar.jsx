import { React, useState, useEffect } from "react";
import myLogo from "../component/asset/image/icon/my-logo.png";
import { colorTheme } from "../style/theme";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-scroll";
import resumeFile from "./asset/file/Mayura_jam_resume.pdf";

import { Button } from "@mui/material";
import { NotificationDialog } from "./dialog/notificationDialog";

const Navbar = () => {
  const [openList, setOpenList] = useState(false);
  const [openDownloadNoti,setOpenDownloadNoti] = useState(false);
  const handleClistDrawer = () => {
    setOpenList(!openList);
  };

  const handleOpenDownloadNoti = ()=>{
    setOpenDownloadNoti(true);
  }
  const handleCloseDownLoadNoti = (event,reason)=>{
    if(reason === "clickaway") return;
    setOpenDownloadNoti(false);
  }
  return (
    <>
      <nav>
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
        <div>
          <ul
            id="navbar-ul"
            className={openList ? "#navbar-ul active" : "#navbar-ul"}
          >
            <li>
              <Link
                to="profile"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="about-me" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="certificate" smooth={true} duration={500}>
                Certificates
              </Link>
            </li>
            <li>
              <a href={resumeFile} download="Mayura-Jampasri-Resume" style={{ textDecoration: "none" }}>
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
                  onClick={handleOpenDownloadNoti}
                >
                  Resume
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClistDrawer}>
          <i class={openList ? "bi bi-x" : "bi bi-list"}></i>
        </div>
      </nav>
      <NotificationDialog 
      open={openDownloadNoti} 
      handleClose={handleCloseDownLoadNoti} 
      massage="Download resume sucess !!!"
      status="success"
      />
    </>
  );
};
export default Navbar;
