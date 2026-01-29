import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom Service Imports
import FetchExcel from "../Services/Dashborad/FetchExcel";
import FetchDatafromFB from "../Services/Dashborad/FetchData";

// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import FadeInSection from "../Components/UI/FadeInSection";
import logo from "../assets/logo2.png";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Dashboard() {
  // const [excelData, setExcelData] = useState([]);

  // useEffect(() => {
  //   async function loadData() {
  //     const result = await FetchExcel();
  //     setExcelData(result);
  //   }
  //   loadData();
  // }, []); // run only once when the component mounts

  const [vdaMetrics, setVdaMetrics] = useState(null);
  const [slectedVital, setSelectedVital] = useState("HR");
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getExcelData() {
      try {
        const result = await FetchDatafromFB(setVdaMetrics, setLastUpdated);
        console.log("result", result);
      } finally {
        setIsLoading(false);
      }
    }
    getExcelData();
  }, []);

  const handleVitalChange = (event) => {
    setSelectedVital(event.target.value);
  };
  const handleLogout = () => {
    // Add any auth cleanup here if needed
    navigate("/");
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3f7fb 50%, #e0f7fa 100%)",
        }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        p: 2,
        g: 2,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #f3f7fb 50%, #e0f7fa 100%)",
      }}>
      {/* top navigation bar */}
      <Box
        sx={{
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
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleLogout}
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
      {/* section 1 */}
      <FadeInSection>
        <Section1 lastUpdated={lastUpdated} />
      </FadeInSection>
      {/* section 2 */}
      <FadeInSection>
        <Section2 lastUpdated={lastUpdated} />
      </FadeInSection>
      {/* section 3 */}
      <FadeInSection>
        <Section3 selectedVital={slectedVital} onVitalChange={handleVitalChange} vdaMetrics={vdaMetrics} lastUpdated={lastUpdated} />
      </FadeInSection>
    </Box>
  );
}
