import React from "react";
import "./WeekSheet.css";

import Day from "../../components/Day/Day";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = [
  "9:00 - 9:30",
  "9:30 - 10:00",
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 13:00",
  "13:00 - 13:30",
  "13:30 - 14:00",
  "14:00 - 14:30",
  "14:30 - 15:00",
  "15:00 - 15:30",
  "15:30 - 16:00"
];

const WeekSheet = props => {
  return (
    <>
      <div className="WeekSheet">
        <div className="WeekSheet-number">
          <h2>Room #{props.number}</h2>
        </div>

        <div className="WeekSheet-week">
          {props.dates.map((date, index) => {
            return (
              <Day
                key={index}
                date={date}
                day={days[index]}
                times={times}
                content={props.content}
                contentChangeHandler={
                  props.changeHandlerFirstRoomCurrentWeek ||
                  props.changeHandlerSecondRoomCurrentWeek
                }
                days={days}
                dayNumber={index}
                focusHandler={props.focusHandler}
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
                day={days[index]}
                times={times}
                content={props.contentNext}
                contentChangeHandler={
                  props.changeHandlerFirstRoomNextWeek ||
                  props.changeHandlerSecondRoomNextWeek
                }
                days={days}
                dayNumber={index}
                focusHandler={props.focusHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeekSheet;
