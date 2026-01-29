import Box from "@mui/material/Box";
import Dropdown from "./UI/DropDown";
import Heading from "./UI/Heading";
import PLotVDA from "./UI/PlotVDA";
export default function Section3({ selectedVital, onVitalChange, vdaMetrics }) {
  const vitals = ["HR", "SPO2", "RR", "SBP", "DBP"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        mb: 2,
        border: 3,
        borderRadius: 2,
      }}>
      {/* Row 0: heading */}
      <Box sx={{ textAlign: "center" }}>
        <Heading text="Section 3: Vitals accuracy" />
      </Box>
      {/* Row 1: single pie chart */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          p: 2,
        }}>
        <Box sx={{ width: "100%", textAlign: "center", alignItems: "center" }}>
          <Box sx={{ width: "20%", mb: 2 }}>
            <Dropdown selectedVital={selectedVital} onVitalChange={onVitalChange} vitals={vitals} />
          </Box>
          <Box
            id="VDA"
            sx={{
              width: "100%",
            }}
          />
          {/* Render all vitals' plots so their DOM nodes always exist; toggle visibility via selectedVital */}

          <PLotVDA id={"VDAHR"} data={vdaMetrics?.HR} isVisible={selectedVital === "HR"} />
          <PLotVDA id={"VDASPO2"} data={vdaMetrics?.SPO2} isVisible={selectedVital === "SPO2"} />
          <PLotVDA id={"VDARR"} data={vdaMetrics?.RR} isVisible={selectedVital === "RR"} />
          <PLotVDA id={"VDASBP"} data={vdaMetrics?.SBP} isVisible={selectedVital === "SBP"} />
          <PLotVDA id={"VDADBP"} data={vdaMetrics?.DBP} isVisible={selectedVital === "DBP"} />
        </Box>
      </Box>
    </Box>
  );
}
