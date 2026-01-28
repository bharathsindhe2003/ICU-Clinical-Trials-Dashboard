import { useState, useEffect } from "react";
import FetchExcel from "../Services/Dashborad/FetchExcel";
import FetchDatafromFB from "../Services/Dashborad/FetchData";

// MUI Imports
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
export default function Dashboard() {
  // const [excelData, setExcelData] = useState([]);

  // useEffect(() => {
  //   async function loadData() {
  //     const result = await FetchExcel();
  //     setExcelData(result);
  //   }
  //   loadData();
  // }, []); // run only once when the component mounts

  useEffect(() => {
    async function getExcelData() {
      const result = await FetchDatafromFB();
      console.log("result", result);
    }
    getExcelData();
  }, []);

  return (
    <>
      {/* section 0: heading*/}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Dashboard
        </Typography>
      </Box>
      {/* section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}>
        {/* Row 0: heading */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div" gutterBottom>
            Vital Data Points
          </Typography>
        </Box>
        {/* Row 1: single pie chart */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box sx={{ width: "100%", alignItems: "center" }}>
            <h2>Completion of Trial</h2>
            <Box
              id="VDPCOT"
              sx={{
                width: "100%",
                minHeight: { xs: 200, sm: 240 },
              }}
            />
          </Box>
        </Box>

        {/* Row 2: single bar chart */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box sx={{ width: "100%" }}>
            <h2>Vital Collection</h2>
            <Box
              id="VDPVC"
              sx={{
                width: "100%",
                minHeight: { xs: 200, sm: 240 },
              }}
            />
          </Box>
        </Box>

        {/* Row 3: four pie charts */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}>
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <h2>For HR, SPO2, RR, BP</h2>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))", // 2 per row on mobile
                sm: "repeat(4, minmax(0, 1fr))", // 4 per row on larger screens
              },
              gap: 1.5,
            }}>
            <Box
              id="VDPHR"
              sx={{
                width: "100%",
                minHeight: { xs: 140, sm: 160 },
              }}
            />
            <Box
              id="VDPSPO2"
              sx={{
                width: "100%",
                minHeight: { xs: 140, sm: 160 },
              }}
            />
            <Box
              id="VDPRR"
              sx={{
                width: "100%",
                minHeight: { xs: 140, sm: 160 },
              }}
            />
            <Box
              id="VDPBP"
              sx={{
                width: "100%",
                minHeight: { xs: 140, sm: 160 },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}></Box>
      <Box sx={{ p: 2 }}></Box>
    </>
  );
}
