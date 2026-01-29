import Typography from "@mui/material/Typography";

export default function Heading({ text }) {
  return (
    <Typography variant="h5" component="div" gutterBottom>
      {text}
    </Typography>
  );
}
