import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ECG from "./ECG";
import { useState } from "react";
// import samplePdf from "../../assets/sarvarakshana_SDD_V2.5.pdf";

export default function PlotECG({ data, isVisible }) {
  const ecg_type = ["Normal", "Tachycardia", "Bradycardia"];
  const [selectedECG, setSelectedECG] = useState("Normal");
  const [ecgTabKey, setEcgTabKey] = useState(0); // used to force remount ECG

  if (!isVisible) return null;
  const currentECGIndex = Math.max(0, ecg_type.indexOf(selectedECG));
  const handleECGchange = (event) => {
    setSelectedECG(event.target.value);
    setEcgTabKey((k) => k + 1); // force remount ECG to reset selection
  };
  return (
    <Box>
      {/* Centered Tabs */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Tabs
          value={currentECGIndex}
          onChange={(_, newIndex) => {
            const val = ecg_type[newIndex] ?? ecg_type[0];
            handleECGchange({ target: { value: val } });
          }}
          // variant="scrollable"
          scrollButtons="auto"
          aria-label="Vitals Tabs"
          centered>
          {ecg_type.map((type) => (
            <Tab key={type} label={type} />
          ))}
        </Tabs>
      </Box>
      {/* Show only the selected ECG type */}
      <Box sx={{ flex: `0 0 ${100 / ecg_type.length}%`, minWidth: 0 }}>
        <ECG key={ecgTabKey} pdfData={data[selectedECG]} isVisible={true} />
      </Box>
    </Box>
  );
}
