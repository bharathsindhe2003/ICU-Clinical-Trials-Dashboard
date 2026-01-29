// MUI Imports
import Box from "@mui/material/Box";
// Custom Components
import Heading from "./UI/Heading";
import LastUpdated from "./UI/LastUpdated";
export default function Section1({ lastUpdated }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        pt: 4,
        mb: 2,
        border: 1,
        borderColor: "#bbdefb",
        boxShadow: 4,
        borderRadius: 2,
        background: "linear-gradient(135deg, #ffffff 0%, #e8f4ff 50%, #ffffff 100%)",
      }}>
      {/* Section heading on top border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          px: 1.5,
          bgcolor: "background.paper",
        }}>
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
            flexBasis: { xs: "100%", md: "20%" },
            flexGrow: 0,
          }}>
          <Box
            sx={{
              position: "relative",
              border: 1,
              borderColor: "#bbdefb",
              borderRadius: 2,
              p: 2,
              pt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                px: 1.5,
                bgcolor: "background.paper",
              }}>
              <Heading text="Completion of Trial" />
            </Box>
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
            flexBasis: { xs: "100%", md: "80%" },
            flexGrow: 0,
            minWidth: 0,
          }}>
          <Box
            sx={{
              position: "relative",
              border: 1,
              borderColor: "#bbdefb",
              borderRadius: 2,
              p: 2,
              pt: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                px: 1.5,
                bgcolor: "background.paper",
              }}>
              <Heading text="Vital Collection" />
            </Box>
            <Box
              id="VDPVC"
              className="echart-container"
              sx={{
                minHeight: { xs: 200, sm: 240 },
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* Row 3: four pie charts in a single box with centered legend-style heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}>
        <Box
          sx={{
            position: "relative",
            border: 1,
            borderColor: "#bbdefb",
            borderRadius: 2,
            p: 2,
            pt: 4,
          }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
              px: 1.5,
              bgcolor: "background.paper",
            }}>
            <Heading text="For HR, SPO2, RR, BP" />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))", // 2 per row on mobile
                sm: "repeat(4, minmax(0, 1fr))", // 4 per row on larger screens
              },
              gap: 2,
            }}>
            <Box
              id="VDPHR"
              className="echart-container"
              sx={{
                width: "100%",
                minHeight: { xs: 200, sm: 240 },
              }}
            />
            <Box
              id="VDPSPO2"
              className="echart-container"
              sx={{
                width: "100%",
                minHeight: { xs: 200, sm: 240 },
              }}
            />
            <Box
              id="VDPRR"
              className="echart-container"
              sx={{
                width: "100%",
                minHeight: { xs: 200, sm: 240 },
              }}
            />
            <Box
              id="VDPBP"
              className="echart-container"
              sx={{
                width: "100%",
                minHeight: { xs: 200, sm: 240 },
              }}
            />
          </Box>
        </Box>
      </Box>
      <LastUpdated lastUpdated={lastUpdated} />
    </Box>
  );
}
