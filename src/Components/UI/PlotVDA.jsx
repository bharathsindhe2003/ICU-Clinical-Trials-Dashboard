import Box from "@mui/material/Box";
import TableComponent from "./TableComponent";
export default function PLotVDA({ id, data, isVisible = true }) {
  return (
    <Box
      id={id}
      sx={{
        display: isVisible ? "block" : "none",
      }}>
      <TableComponent data={data} />
      <Box
        id={id + "1"}
        sx={{
          width: "fill-available",
          minHeight: { xs: 200, sm: 240 },

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          p: 2,
          mb: 2,
        }}></Box>
      <Box
        id={id + "2"}
        sx={{
          width: "fill-available",
          minHeight: { xs: 200, sm: 240 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          mb: 2,
          p: 2,
        }}></Box>
      <Box
        id={id + "3"}
        sx={{
          width: "fill-available",
          minHeight: { xs: 200, sm: 240 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          mb: 2,
          p: 2,
        }}></Box>
      <Box
        id={id + "4"}
        sx={{
          width: "fill-available",
          minHeight: { xs: 200, sm: 240 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderRadius: 2,
          mb: 2,
          p: 2,
        }}></Box>
    </Box>
  );
}
