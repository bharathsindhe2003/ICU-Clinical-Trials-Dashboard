import Typography from "@mui/material/Typography";

export default function Heading({ text, size }) {
  return (
    <Typography variant={size} component="div" gutterBottom sx={{ whiteSpace: "nowrap" }}>
      {text}
    </Typography>
  );
}
