import Box from "@mui/material/Box";
import Heading from "./UI/Heading";
import LastUpdated from "./UI/LastUpdated";
export default function Section2({ lastUpdated }) {
  return (
    <Box
      id="section2"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        pt: 4,
        mb: 4,
        background: "linear-gradient(135deg, #ffffff 0%, #e3f2fd 60%, #ffffff 100%)",
        border: 1,
        borderColor: "#b2dfdb",
        borderRadius: 2,
        boxShadow: 4,
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
          borderRadius: 2,
        }}>
        <Heading text="Trial Cohort" size="h5" type="main" />
      </Box>
      <Box sx={{ mb: 0.5 }} />
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
              borderColor: "#b2dfdb",
              borderRadius: 2,
              // p: 2,
              pt: 2,
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
                borderRadius: 2,
              }}>
              <Heading text="Cohort size" size="subtitle1" type="normal" />
            </Box>
            <Box
              id="PCDNOP"
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
              borderColor: "#b2dfdb",
              borderRadius: 2,
              // p: 2,
              pt: 2,
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
                borderRadius: 2,
              }}>
              <Heading text="Cohort age distribution" size="subtitle1" type="normal" />
            </Box>
            <Box
              id="PCDADMF"
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
