import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

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

import Navbar from "../Components/UI/Navbar";

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

  useEffect(() => {
    async function getExcelData() {
      try {
        await FetchDatafromFB(setVdaMetrics, setLastUpdated);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getExcelData();
  }, []);

  const handleVitalChange = (event) => {
    setSelectedVital(event.target.value);
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
      <Navbar />
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
