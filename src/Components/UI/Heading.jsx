import Typography from "@mui/material/Typography";

export default function Heading({ text, size, type = "normal" }) {
  // `type` can be "main" or "normal"
  const styles = {
    main: {
      fontWeight: 700,
      color: "#1976d2", // example: blue for main heading
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    normal: {
      fontWeight: 500,
      color: "#333",
    },
  };

  return (
    <Typography
      variant={size} // h5, h6 etc.
      component="div"
      gutterBottom
      sx={{ whiteSpace: "nowrap", ...styles[type] }}>
      {text}
    </Typography>
  );
}
