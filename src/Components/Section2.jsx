import Box from "@mui/material/Box";
import Heading from "./UI/Heading";
export default function Section2() {
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
        <Heading text="Section 2: Patient Cohort Details" />
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
          <Heading text="Number of Patients" />
          <Box
            id="PCDNOP"
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
          border: 1,
          borderRadius: 2,
          p: 2,
        }}>
        <Box sx={{ width: "100%", textAlign: "center", alignItems: "center" }}>
          <Heading text="Age Distribution for Male & Female" />
          <Box
            id="PCDADMF"
            sx={{
              width: "100%",
              minHeight: { xs: 200, sm: 240 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
