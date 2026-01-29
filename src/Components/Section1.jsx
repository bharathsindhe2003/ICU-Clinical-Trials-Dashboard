import Box from "@mui/material/Box";
import Heading from "./UI/Heading";
export default function Section1() {
  
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
        <Heading text="Section 1: Vital Data Points" />
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
          <Heading text="Completion of Trial" />
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
          border: 1,
          borderRadius: 2,
          p: 2,
        }}>
        <Box sx={{ width: "100%", textAlign: "center", alignItems: "center" }}>
          <Heading text="Vital Collection" />
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
          border: 1,
          borderRadius: 2,
          p: 2,
        }}>
        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Heading text="For HR, SPO2, RR, BP" />
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
  );
}
