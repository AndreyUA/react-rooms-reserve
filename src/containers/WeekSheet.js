import React from "react";

import Day from "../components/Day/Day";

const WeekSheet = (props) => {
  return (
    <div className="WeekSheet">
      <div className="WeekSheet-week">
        {props.dates.map((date, index) => {
          return (
            <Day
              key={index}
              date={date}
              day={props.days[index]}
              times={props.times}
              content={props.content}
              contentChangeHandler={props.contentChangeHandler}
              days={props.days}
              dayNumber={index}
            />
          );
        })}
      </div>
      <div className="WeekSheet-week">
        {props.datesNext.map((date, index) => {
          return (
            <Day
              key={index}
              date={date}
              day={props.days[index]}
              times={props.times}
              content={props.contentNext}
              contentChangeHandler={props.contentChangeNextHandler}
              days={props.days}
              dayNumber={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekSheet;
