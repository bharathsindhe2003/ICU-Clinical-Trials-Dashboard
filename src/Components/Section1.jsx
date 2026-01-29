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
        border: 0,
        boxShadow: 4,
        borderRadius: 2,
        background: "linear-gradient(135deg, #ffffff 0%, #e8f4ff 50%, #ffffff 100%)",
      }}>
      {/* Row 0: heading */}
      <Box sx={{ textAlign: "center" }}>
        <Heading text="Section 1: Vital Data Points" />
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
            borderColor: "#bbdefb",
            borderRadius: 2,
            p: 2,
          }}>
          <Box sx={{ width: "100%", textAlign: "center", alignItems: "center" }}>
            <Heading text="Completion of Trial" />
            <Box
              id="VDPCOT"
              className="echart-container"
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
            borderColor: "#bbdefb",
            borderRadius: 2,
            p: 2,
          }}>
          <Box sx={{ textAlign: "center", alignItems: "center", width: "100%" }}>
            <Heading text="Vital Collection" />
            <Box
              id="VDPVC"
              className="echart-container"
              sx={{
                minHeight: { xs: 200, sm: 240 },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Row 3: four pie charts */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          border: 1,
          borderColor: "#bbdefb",
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
            // gap: 1.5,
          }}>
          <Box
            id="VDPHR"
            className="echart-container"
            sx={{
              width: "100%",
              minHeight: { xs: 140, sm: 160 },
            }}
          />
          <Box
            id="VDPSPO2"
            className="echart-container"
            sx={{
              width: "100%",
              minHeight: { xs: 140, sm: 160 },
            }}
          />
          <Box
            id="VDPRR"
            className="echart-container"
            sx={{
              width: "100%",
              minHeight: { xs: 140, sm: 160 },
            }}
          />
          <Box
            id="VDPBP"
            className="echart-container"
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
