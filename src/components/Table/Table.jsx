import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableData } from "@data/data";
import "./Table.css";

const makeStyles = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  }

  if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  }

  return {
    background: "#59bfff",
    color: "white",
  };
};

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
      <Table sx={{ minWidth: 650 }} aria-label="Recent orders">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyles(row.status)}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell align="left">
                <button type="button" className="Details" aria-label={`Detail of ${row.name}`}>
                  Detail
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
