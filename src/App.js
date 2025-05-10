import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { colorTheme } from "./style/theme";
import ProfileSection from "./component/profileSection";
import AboutMeSection from "./component/aboutMeSection";
import ProjectSection from "./component/ProjectSection";
import FooterSction from "./component/footer";
import SkillsSection from "./component/skillsSection";
import CertificateSection from "./component/certificateSection";

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
        <ProfileSection />
        <AboutMeSection />
        <ProjectSection />
        <SkillsSection />
        <CertificateSection />
        <FooterSction />
        {/* <Router>
          <Routes>
            <Route path="/" element={<ProfileSection />}/>
            <Route path="/about" element={<AboutMeSection />}/>
            <Route path="/projects" element={<ProjectSection />}/>
            <Route path="/skils" element={<SkillsSection />}/>
            <Route path="/certificates" element={<CertificateSection />}/>
          </Routes>
        </Router> */}
      </Box>
    </div>
  );
}

export default App;
