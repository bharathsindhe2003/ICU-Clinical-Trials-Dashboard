import { useState, useEffect } from "react";
import FetchExcel from "../Services/Dashborad/FetchExcel";
import FetchDatafromFB from "../Services/Dashborad/FetchData";

// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
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
    <Box sx={{ p: 2 }}>
      {/* section 0: heading*/}

      <Typography sx={{ textAlign: "center" }} variant="h5" component="div" gutterBottom>
        Dashboard
      </Typography>
      {/* section 1 */}
      <Section1></Section1>
      {/* section 2 */}
      <Section2></Section2>
      {/* section 3 */}
      <Section3></Section3>
    </Box>
  );
}
