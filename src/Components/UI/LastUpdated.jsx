import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LastUpdated({ lastUpdated }) {
  return (
    <Box sx={{ textAlign: "right", mt: 2 }}>
      <Typography variant="caption" color="textSecondary">
        Last Updated: {lastUpdated}
      </Typography>
    </Box>
  );
}
