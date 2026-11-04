import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TableData } from "@data/data";
import "./Table.css";
import PropTypes from "prop-types";

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

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(date),
  );

export default function BasicTable({ rows = TableData, title = "Recent orders" }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <>
      <section className="ordersSection">
        <h2>{title}</h2>
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
          <Table sx={{ minWidth: 650 }} aria-label="Recent orders">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">
                  <span className="visuallyHidden">Actions</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.trackingId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{formatDate(row.date)}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyles(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <button
                      type="button"
                      className="Details"
                      aria-label={`Details for ${row.name}`}
                      onClick={() => setSelectedOrder(row)}
                    >
                      Details
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <Dialog
        open={Boolean(selectedOrder)}
        onClose={() => setSelectedOrder(null)}
        aria-labelledby="order-dialog-title"
      >
        {selectedOrder && (
          <>
            <DialogTitle id="order-dialog-title">Order details</DialogTitle>
            <DialogContent>
              <dl className="orderDetails">
                <dt>Product</dt>
                <dd>{selectedOrder.name}</dd>
                <dt>Tracking ID</dt>
                <dd>{selectedOrder.trackingId}</dd>
                <dt>Order date</dt>
                <dd>{formatDate(selectedOrder.date)}</dd>
                <dt>Status</dt>
                <dd>{selectedOrder.status}</dd>
              </dl>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedOrder(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

BasicTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      trackingId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
};
