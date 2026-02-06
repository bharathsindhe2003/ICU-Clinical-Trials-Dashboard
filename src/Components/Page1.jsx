import { useState, useEffect } from "react";
import FetchDatafromFB from "../Services/Dashboard/FetchData";

// MUI Imports
import Box from "@mui/material/Box";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Navbar from "../Components/UI/Navbar";
import Footer from "../Components/UI/Footer";
export default function Page1({ DISPLAY_MODE }) {
  const [vdaMetrics, setVdaMetrics] = useState(null);
  const [selectedVital, setSelectedVital] = useState("HR");
  const [lastUpdated, setLastUpdated] = useState(null);
  useEffect(() => {
    async function getExcelData() {
      await FetchDatafromFB(setVdaMetrics, setLastUpdated, DISPLAY_MODE);
    }
    getExcelData();
  }, [DISPLAY_MODE]);

  const handleVitalChange = (event) => {
    setSelectedVital(event.target.value);
  };
  return (
    <Box
      sx={{
        p: 2,
        g: 2,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #f3f7fb 50%, #e0f7fa 100%)",
      }}>
      {/* section 0: heading*/}
      <Navbar DISPLAY_MODE={DISPLAY_MODE} />
      {/* section 1 */}
      <Section1 DISPLAY_MODE={DISPLAY_MODE} lastUpdated={lastUpdated} />
      {/* section 2 */}
      <Section2 DISPLAY_MODE={DISPLAY_MODE} lastUpdated={lastUpdated} />
      {/* section 3 */}
      <Section3 DISPLAY_MODE={DISPLAY_MODE} selectedVital={selectedVital} onVitalChange={handleVitalChange} vdaMetrics={vdaMetrics} lastUpdated={lastUpdated} />
      <Footer />
    </Box>
  );
}
