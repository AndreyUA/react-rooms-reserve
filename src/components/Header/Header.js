import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const Header = (props) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ background: '#d9d9d9' }} align="center">Time:</TableCell>
        <TableCell style={{ background: '#d9d9d9' }} align="center">Monday - {props.dates[0]}</TableCell>
        <TableCell style={{ background: '#d9d9d9' }} align="center">Tuesday - {props.dates[1]}</TableCell>
        <TableCell style={{ background: '#d9d9d9' }} align="center">Wednesday - {props.dates[2]}</TableCell>
        <TableCell style={{ background: '#d9d9d9' }} align="center">Thursday - {props.dates[3]}</TableCell>
        <TableCell style={{ background: '#d9d9d9' }} align="center">Friday - {props.dates[4]}</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Header;
