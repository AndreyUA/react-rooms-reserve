import React from "react";
import classes from "./RowTable.module.css";
import { TableRow, TableCell } from "@material-ui/core";

const RowTable = (props) => {
  return (
    <TableRow>
              <TableCell style={{ fontWeight: 'bold', background: '#d9d9d9' }} align="center">{props.time}</TableCell>
              <TableCell align="center">
                <input
                  className={classes.cell}
                  value={props.content.one}
                />
              </TableCell>
              <TableCell align="center">
                <input
                  className={classes.cell}
                  value={props.content.two}
                />
              </TableCell>
              <TableCell align="center">
                <input
                  className={classes.cell}
                  value={props.content.three}
                />
              </TableCell>
              <TableCell align="center">
                <input
                  className={classes.cell}
                  value={props.content.four}
                />
              </TableCell>
              <TableCell align="center">
                <input
                  className={classes.cell}
                  value={props.content.five}
                />
              </TableCell>
            </TableRow>
  );
};

export default RowTable;
