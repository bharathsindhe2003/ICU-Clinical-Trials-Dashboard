import Box from "@mui/material/Box";
import Dropdown from "./UI/DropDown";
import Heading from "./UI/Heading";
import PLotVDA from "./UI/PlotVDA";
import TableComponent from "./UI/TableComponent";

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
        backgroundColor: "#FFFFFF",

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
          //  display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          p: 2,
        }}>
        <Box sx={{ width: "100%", textAlign: "center", alignItems: "center" }}>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}>
            <Box sx={{ flex: 1, maxWidth: "50%" }}>
              <Dropdown selectedVital={selectedVital} onVitalChange={onVitalChange} vitals={vitals} />
            </Box>
            <Box sx={{ flex: 1, maxWidth: "50%" }}>
              <TableComponent
                data={
                  selectedVital === "HR"
                    ? vdaMetrics?.HR
                    : selectedVital === "SPO2"
                      ? vdaMetrics?.SPO2
                      : selectedVital === "RR"
                        ? vdaMetrics?.RR
                        : selectedVital === "SBP"
                          ? vdaMetrics?.SBP
                          : selectedVital === "DBP"
                            ? vdaMetrics?.DBP
                            : null
                }
              />
            </Box>
          </Box>
          <Box
            id="VDA"
            sx={{
              width: "100%",
            }}
          />
          {/* Render all vitals' plots so their DOM nodes always exist; toggle visibility via selectedVital */}
          <PLotVDA id={"VDAHR"} isVisible={selectedVital === "HR"} />
          <PLotVDA id={"VDASPO2"} isVisible={selectedVital === "SPO2"} />
          <PLotVDA id={"VDARR"} isVisible={selectedVital === "RR"} />
          <PLotVDA id={"VDASBP"} isVisible={selectedVital === "SBP"} />
          <PLotVDA id={"VDADBP"} isVisible={selectedVital === "DBP"} />
        </Box>
      </Box>
    </Box>
  );
}
