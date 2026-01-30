import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableComponent({ data }) {
  const rows = data ? Object.entries(data) : [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} size="small" aria-label="vitals accuracy table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "gray",
            }}>
            <TableCell
              sx={{
                color: "white",
              }}>
              Metric
            </TableCell>
            <TableCell
              sx={{
                color: "white",
              }}
              align="right">
              Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={2} align="center">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            rows.map(([label, value]) => (
              <TableRow key={label}>
                <TableCell component="th" scope="row">
                  {label}
                </TableCell>
                <TableCell align="right">{value}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
