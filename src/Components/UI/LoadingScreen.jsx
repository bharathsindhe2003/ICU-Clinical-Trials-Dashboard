import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function LoadingScreen() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(255, 255, 255, 0.8)",
        zIndex: 1300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #f3f7fb 50%, #e0f7fa 100%)",
      }}>
      <CircularProgress />
    </Box>
  );
}
