import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Section2() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        border: 3,
        borderRadius: 2,
      }}>
      {/* Row 0: heading */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" gutterBottom>
          Patient Cohort Details
        </Typography>
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
          <h2>Number of Patients</h2>
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
          <h2>Age Distribution for Male & Female</h2>
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
