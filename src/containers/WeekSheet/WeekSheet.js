import React, { Component } from "react";
import "./WeekSheet.css";

import Day from "../../components/Day/Day";
import { getTwoWeeks } from "../../funcs/funcs";

class WeekSheet extends Component {
  state = {
    dates: [],
    datesNext: [],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    times: [
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
      "15:30 - 16:00",
    ],
  };

  componentDidMount() {
    const twoWeeksDates = getTwoWeeks(new Date());
    this.setState({
      dates: [
        twoWeeksDates[0],
        twoWeeksDates[1],
        twoWeeksDates[2],
        twoWeeksDates[3],
        twoWeeksDates[4],
      ],
      datesNext: [
        twoWeeksDates[5],
        twoWeeksDates[6],
        twoWeeksDates[7],
        twoWeeksDates[8],
        twoWeeksDates[9],
      ],
    });
  }

  render() {
    return (
      <>
        <div className="WeekSheet">
          <div className="WeekSheet-number">
            <h2>Room #{this.props.number}</h2>
          </div>

          <div className="WeekSheet-week">
            {this.state.dates.map((date, index) => {
              return (
                <Day
                  key={index}
                  date={date}
                  day={this.state.days[index]}
                  times={this.state.times}
                  content={this.props.content}
                  contentChangeHandler={
                    this.props.changeHandlerFirstRoomCurrentWeek ||
                    this.props.changeHandlerSecondRoomCurrentWeek
                  }
                  days={this.state.days}
                  dayNumber={index}
                  focusHandler={this.props.focusHandler}
                />
              );
            })}
          </div>
          <div className="WeekSheet-week">
            {this.state.datesNext.map((date, index) => {
              return (
                <Day
                  key={index}
                  date={date}
                  day={this.state.days[index]}
                  times={this.state.times}
                  content={this.props.contentNext}
                  contentChangeHandler={
                    this.props.changeHandlerFirstRoomNextWeek ||
                    this.props.changeHandlerSecondRoomNextWeek
                  }
                  days={this.state.days}
                  dayNumber={index}
                  focusHandler={this.props.focusHandler}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default WeekSheet;
