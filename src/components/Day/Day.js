import React from "react";
import "./Day.css";

import Cell from "../Cell/Cell";

const Day = (props) => {
  return (
    <div className="Day">
      <div className="Day-header">
        {props.day}, {props.date}
      </div>
      <div className="Day-body">
        {props.times.map((time, index) => {
          return (
            <Cell
              contentChangeHandler={props.contentChangeHandler}
              focusHandler={props.focusHandler}
              key={index}
              dayNumber={props.dayNumber}
              index={index}
              timePoint={time}
              content={props.content}
              days={props.days}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Day;
