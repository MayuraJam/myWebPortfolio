import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  Box,
} from "@mui/material";
import { colorTheme } from "./style/theme";
import ProfileSection from "./component/profileSection";
import AboutMeSection from "./component/aboutMeSection";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: colorTheme.cream.main,
        }}
      >
        <Navbar />
        <ProfileSection/>
        <AboutMeSection/>
      </Box>
    </div>
  );
}

export default App;
