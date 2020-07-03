import React from "react";
import classes from './WeekSheet.module.css';

import Day from "../components/Day/Day";

const WeekSheet = (props) => {
  return (
    <div className={classes.WeekSheet}>
      <Day
      one="Time:"
      two="9.00-09.15"
      three="09.15-09.30"
      four="09.30-09.45"
      five="09.45-10.00"
      six="10.00-10.15"
      seven="10.15-10.30"
      eight="10.30-10.45"
      nine="10.45-11.00"
      ten="11.00-11.15"
      eleven="11.15-11.30"
      twelve="11.30-11.45"
      thirteen="11.45-12.00"
      fourteen="12.00-12.15"
      fifteen="12.15-12.30"
      sixteen="12.30-12.45"
      seventeen="12.45-13.00"
      eighteen="13.00-13.15"
      nineteen="13.15-13.30"
      twenty="13.30-13.45"
      twentyOne="13.45-14.00"
      twentyTwo="14.00-14.15"
      twentyThree="14.15-14.30"
      twentyFour="14.30-14.45"
      twentyFive="14.45-15.00"
      twentySix="15.00-15.15"
      twentySeven="15.15-15.30"
      twentyEight="15.30-15.45"
      twentyNine="15.45-16.00"
      />
      <Day
      one={`Monday, ${props.dates[0]}`}
      two="9:00"
      />
      <Day
      one={`Tuesday, ${props.dates[1]}`}
      two="9:00"
      />
      <Day
      one={`Wednesday, ${props.dates[2]}`}
      two="9:00"
      />
      <Day
      one={`Thursday, ${props.dates[3]}`}
      two="9:00"
      />
      <Day
      one={`Friday, ${props.dates[4]}`}
      two="9:00"
      />
      <Day
      one="Time:"
      two="9.00-09.15"
      three="09.15-09.30"
      four="09.30-09.45"
      five="09.45-10.00"
      six="10.00-10.15"
      seven="10.15-10.30"
      eight="10.30-10.45"
      nine="10.45-11.00"
      ten="11.00-11.15"
      eleven="11.15-11.30"
      twelve="11.30-11.45"
      thirteen="11.45-12.00"
      fourteen="12.00-12.15"
      fifteen="12.15-12.30"
      sixteen="12.30-12.45"
      seventeen="12.45-13.00"
      eighteen="13.00-13.15"
      nineteen="13.15-13.30"
      twenty="13.30-13.45"
      twentyOne="13.45-14.00"
      twentyTwo="14.00-14.15"
      twentyThree="14.15-14.30"
      twentyFour="14.30-14.45"
      twentyFive="14.45-15.00"
      twentySix="15.00-15.15"
      twentySeven="15.15-15.30"
      twentyEight="15.30-15.45"
      twentyNine="15.45-16.00"
      />
      <Day
      one={`Monday, ${props.dates[5]}`}
      two="9:00"
      />
      <Day
      one={`Tuesday, ${props.dates[6]}`}
      two="9:00"
      />
      <Day
      one={`Wednesday, ${props.dates[7]}`}
      two="9:00"
      />
      <Day
      one={`Thursday, ${props.dates[8]}`}
      two="9:00"
      />
      <Day
      one={`Friday, ${props.dates[9]}`}
      two="9:00"
      />
    </div>
  );
};

export default WeekSheet;
