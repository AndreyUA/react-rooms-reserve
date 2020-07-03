import React from "react";
import classes from "./Day.module.css";

const Day = (props) => {
  return (
    <table className={classes.Day}>
      <tbody>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.one}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.two}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.three}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.four}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.five}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.six}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.seven}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.eight}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.nine}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.ten}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.eleven}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twelve}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.thirteen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.fourteen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.fifteen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.sixteen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.seventeen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.eighteen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.nineteen}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twenty}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyOne}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyTwo}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyThree}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyFour}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyFive}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentySix}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentySeven}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyEight}</td>
        </tr>
        <tr className={classes.row}>
          <td className={classes.cell}>{props.twentyNine}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Day;
