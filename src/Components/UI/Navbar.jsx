import logo from "../../assets/logo2.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "../../Services/Login/Logout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("section1");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96; // adjust for navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ids = ["section1", "section2", "section3"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with largest intersectionRatio that is intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      { root: null, threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0% -40% 0%" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <Box
      sx={{
        position: "sticky",
        top: 16,
        zIndex: 1100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        px: 2,
        py: 1,
        borderRadius: 999,
        backgroundColor: "#00458b",
        color: "#ffffff",
        boxShadow: 4,
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}>
        <Box component="img" src={logo} alt="SVASTHYa logo" sx={{ height: 40, width: 40, borderRadius: 1, objectFit: "contain" }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}>
          SVASTHYA
          <sup
            style={{
              fontSize: "0.55em",
              marginLeft: "0.15rem",
            }}>
            TM
          </sup>
        </Typography>
      </Box>
      {/* Section tabs */}
      <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1, alignItems: "center" }}>
        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            setActiveSection("section1");
            scrollToSection("section1");
          }}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 1.5,
            ...(activeSection === "section1" && {
              boxShadow: "0 6px 22px -6px rgba(0,69,139,0.34)",
              borderRadius: 4,
              backgroundColor: "#ffffff",
              color: "#00458b",
            }),
          }}>
          Overview
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            setActiveSection("section2");
            scrollToSection("section2");
          }}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 1.5,
            ...(activeSection === "section2" && {
              boxShadow: "0 6px 22px -6px rgba(0,69,139,0.34)",
              borderRadius: 4,
              backgroundColor: "#ffffff",
              color: "#00458b",
            }),
          }}>
          Cohort
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            setActiveSection("section3");
            scrollToSection("section3");
          }}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 1.5,
            ...(activeSection === "section3" && {
              boxShadow: "0 6px 22px -6px rgba(0,69,139,0.34)",
              borderRadius: 4,
              backgroundColor: "#ffffff",
              color: "#00458b",
            }),
          }}>
          Vitals
        </Button>
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => {
          Logout(navigate);
        }}
        sx={{
          borderColor: "#ffffff",
          color: "#ffffff",
          textTransform: "none",
          fontWeight: 500,
          px: 2.5,
          "&:hover": {
            borderColor: "#bbdefb",
            backgroundColor: "rgba(187,222,251,0.15)",
          },
        }}>
        <LogoutIcon sx={{ mr: 1 }} />
      </Button>
    </Box>
  );
}
