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
        backgroundColor: "#FFFFFF",

        border: 3,
        borderRadius: 2,
      }}>
      {/* Row 0: heading */}
      <Box sx={{ textAlign: "center" }}>
        <Heading text="Section 2: Patient Cohort Details" />
      </Box>
      {/* Row 1 & 2: side by side (30% / 70%) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}>
        {/* First: 30% width */}
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "30%" },
            flexGrow: 0,
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

        {/* Second: 70% width */}
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "70%" },
            flexGrow: 0,
            minWidth: 0,
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
    </Box>
  );
}
