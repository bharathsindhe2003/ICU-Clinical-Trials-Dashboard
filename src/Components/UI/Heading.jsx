import Typography from "@mui/material/Typography";

export default function Heading({ text }) {
  return (
    <Typography variant="h6" component="div" gutterBottom>
      {text}
    </Typography>
  );
}
