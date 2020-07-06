import React from "react";
import classes from "./WeekSheet.module.css";

import { TableContainer, Table, TableBody, Paper } from "@material-ui/core";

import Header from "../components/Header/Header";
import RowTable from "../components/TableRow/RowTable";

const WeekSheet = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table
        style={{
          minWidth: "1700px",
        }}
        aria-label="simple table"
      >
        <Header dates={props.dates} />
        <TableBody>
          <RowTable time="9:00 - 9:30" content={props.content[0]} />
          <RowTable time="9:30 - 10:00" content={props.content[1]} />
          <RowTable time="10:00 - 10:30" content={props.content[2]} />
          <RowTable time="10:30 - 11:00" content={props.content[3]} />
          <RowTable time="11:00 - 11:30" content={props.content[4]} />
          <RowTable time="11:30 - 12:00" content={props.content[5]} />
          <RowTable time="12:00 - 12:30" content={props.content[6]} />
          <RowTable time="12:30 - 13:00" content={props.content[7]} />
          <RowTable time="13:00 - 13:30" content={props.content[8]} />
          <RowTable time="13:30 - 14:00" content={props.content[9]} />
          <RowTable time="14:00 - 14:30" content={props.content[10]} />
          <RowTable time="14:30 - 15:00" content={props.content[11]} />
          <RowTable time="15:00 - 15:30" content={props.content[12]} />
          <RowTable time="15:30 - 16:00" content={props.content[13]} />
          <RowTable time="16:00 - 16:30" content={props.content[14]} />
          <RowTable time="16:30 - 17:00" content={props.content[15]} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeekSheet;
