import React, { Component } from "react";
import "./WeekSheet.css";

import Day from "../../components/Day/Day";

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

  getTwoWeeks = (dateNow) => {
    let mondayThisWeek,
      tuesdayThisWeek,
      wednesdayThisWeek,
      thursdayThisWeek,
      fridayThisWeek,
      mondayNextWeek,
      tuesdayNextWeek,
      wednesdayNextWeek,
      thursdayNextWeek,
      fridayNextWeek,
      mondayDate,
      tuesdayDate,
      wednesdayDate,
      thursdayDate,
      fridayDate,
      mondayNextDate,
      tuesdayNextDate,
      wednesdayNextDate,
      thursdayNextDate,
      fridayNextDate;

    switch (+dateNow.getDay()) {
      case 0:
        //monday START
        mondayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 1
        );
        mondayThisWeek = `${
          mondayDate.getMonth() + 1
        }.${mondayDate.getDate()}.${mondayDate.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 2
        );
        tuesdayThisWeek = `${
          tuesdayDate.getMonth() + 1
        }.${tuesdayDate.getDate()}.${tuesdayDate.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 3
        );
        wednesdayThisWeek = `${
          wednesdayDate.getMonth() + 1
        }.${wednesdayDate.getDate()}.${wednesdayDate.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 4
        );
        thursdayThisWeek = `${
          thursdayDate.getMonth() + 1
        }.${thursdayDate.getDate()}.${thursdayDate.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 5
        );
        fridayThisWeek = `${
          fridayDate.getMonth() + 1
        }.${fridayDate.getDate()}.${fridayDate.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 8
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 9
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 10
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 11
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 12
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;

      case 1:
        //monday START
        mondayThisWeek = `${
          dateNow.getMonth() + 1
        }.${dateNow.getDate()}.${dateNow.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 1
        );
        tuesdayThisWeek = `${
          tuesdayDate.getMonth() + 1
        }.${tuesdayDate.getDate()}.${tuesdayDate.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 2
        );
        wednesdayThisWeek = `${
          wednesdayDate.getMonth() + 1
        }.${wednesdayDate.getDate()}.${wednesdayDate.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 3
        );
        thursdayThisWeek = `${
          thursdayDate.getMonth() + 1
        }.${thursdayDate.getDate()}.${thursdayDate.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 4
        );
        fridayThisWeek = `${
          fridayDate.getMonth() + 1
        }.${fridayDate.getDate()}.${fridayDate.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 7
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 8
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 9
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 10
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 11
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;

      case 2:
        //monday START
        mondayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 1
        );
        mondayThisWeek = `${
          mondayDate.getMonth() + 1
        }.${mondayDate.getDate()}.${mondayDate.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayThisWeek = `${
          dateNow.getMonth() + 1
        }.${dateNow.getDate()}.${dateNow.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 1
        );
        wednesdayThisWeek = `${
          wednesdayDate.getMonth() + 1
        }.${wednesdayDate.getDate()}.${wednesdayDate.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 2
        );
        thursdayThisWeek = `${
          thursdayDate.getMonth() + 1
        }.${thursdayDate.getDate()}.${thursdayDate.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 3
        );
        fridayThisWeek = `${
          fridayDate.getMonth() + 1
        }.${fridayDate.getDate()}.${fridayDate.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 6
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 7
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 8
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 9
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 10
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;

      case 3:
        //monday START
        mondayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 2
        );
        mondayThisWeek = `${
          mondayDate.getMonth() + 1
        }.${mondayDate.getDate()}.${mondayDate.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 1
        );
        tuesdayThisWeek = `${
          tuesdayDate.getMonth() + 1
        }.${tuesdayDate.getDate()}.${tuesdayDate.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayThisWeek = `${
          dateNow.getMonth() + 1
        }.${dateNow.getDate()}.${dateNow.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 1
        );
        thursdayThisWeek = `${
          thursdayDate.getMonth() + 1
        }.${thursdayDate.getDate()}.${thursdayDate.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 2
        );
        fridayThisWeek = `${
          fridayDate.getMonth() + 1
        }.${fridayDate.getDate()}.${fridayDate.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 5
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 6
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 7
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 8
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 9
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;

      case 4:
        //monday START
        mondayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 3
        );
        mondayThisWeek = `${
          mondayDate.getMonth() + 1
        }.${mondayDate.getDate()}.${mondayDate.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 2
        );
        tuesdayThisWeek = `${
          tuesdayDate.getMonth() + 1
        }.${tuesdayDate.getDate()}.${tuesdayDate.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 1
        );
        wednesdayThisWeek = `${
          wednesdayDate.getMonth() + 1
        }.${wednesdayDate.getDate()}.${wednesdayDate.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayThisWeek = `${
          dateNow.getMonth() + 1
        }.${dateNow.getDate()}.${dateNow.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 1
        );
        fridayThisWeek = `${
          fridayDate.getMonth() + 1
        }.${fridayDate.getDate()}.${fridayDate.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 4
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 5
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 6
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 7
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 8
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;

      case 5:
        //monday START
        mondayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 4
        );
        mondayThisWeek = `${
          mondayDate.getMonth() + 1
        }.${mondayDate.getDate()}.${mondayDate.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 3
        );
        tuesdayThisWeek = `${
          tuesdayDate.getMonth() + 1
        }.${tuesdayDate.getDate()}.${tuesdayDate.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 2
        );
        wednesdayThisWeek = `${
          wednesdayDate.getMonth() + 1
        }.${wednesdayDate.getDate()}.${wednesdayDate.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 1
        );
        thursdayThisWeek = `${
          thursdayDate.getMonth() + 1
        }.${thursdayDate.getDate()}.${thursdayDate.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayThisWeek = `${
          dateNow.getMonth() + 1
        }.${dateNow.getDate()}.${dateNow.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 3
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 4
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 5
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 6
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 7
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;

      case 6:
        //monday START
        mondayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 2
        );
        mondayThisWeek = `${
          mondayDate.getMonth() + 1
        }.${mondayDate.getDate()}.${mondayDate.getFullYear()}`;
        //monday FINISH

        //tuesday START
        tuesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 3
        );
        tuesdayThisWeek = `${
          tuesdayDate.getMonth() + 1
        }.${tuesdayDate.getDate()}.${tuesdayDate.getFullYear()}`;
        //tuesday FINISH

        //wednesday START
        wednesdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 4
        );
        wednesdayThisWeek = `${
          wednesdayDate.getMonth() + 1
        }.${wednesdayDate.getDate()}.${wednesdayDate.getFullYear()}`;
        //wednesday FINISH

        //thursday START
        thursdayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 5
        );
        thursdayThisWeek = `${
          thursdayDate.getMonth() + 1
        }.${thursdayDate.getDate()}.${thursdayDate.getFullYear()}`;
        //thursday FINISH

        //friday START
        fridayDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 6
        );
        fridayThisWeek = `${
          fridayDate.getMonth() + 1
        }.${fridayDate.getDate()}.${fridayDate.getFullYear()}`;
        //friday FINISH

        //next monday START
        mondayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 9
        );
        mondayNextWeek = `${
          mondayNextDate.getMonth() + 1
        }.${mondayNextDate.getDate()}.${mondayNextDate.getFullYear()}`;
        //next monday FINISH

        //next tuesday START
        tuesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 10
        );
        tuesdayNextWeek = `${
          tuesdayNextDate.getMonth() + 1
        }.${tuesdayNextDate.getDate()}.${tuesdayNextDate.getFullYear()}`;
        //next tuesday FINISH

        //next wednesday START
        wednesdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 11
        );
        wednesdayNextWeek = `${
          wednesdayNextDate.getMonth() + 1
        }.${wednesdayNextDate.getDate()}.${wednesdayNextDate.getFullYear()}`;
        //next wednesday FINISH

        //next thursday START
        thursdayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 12
        );
        thursdayNextWeek = `${
          thursdayNextDate.getMonth() + 1
        }.${thursdayNextDate.getDate()}.${thursdayNextDate.getFullYear()}`;
        //next thursday FINISH

        //next friday START
        fridayNextDate = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() + 13
        );
        fridayNextWeek = `${
          fridayNextDate.getMonth() + 1
        }.${fridayNextDate.getDate()}.${fridayNextDate.getFullYear()}`;
        //next friday FINISH

        break;
      default:
        break;
    }

    //с поенедльника по пятницу выводит эту неделю + следующую
    //выходные не считаются
    // в субботу и воскресенье выводит следющую неделю + через одну
    //тоже без выходных

    return [
      mondayThisWeek,
      tuesdayThisWeek,
      wednesdayThisWeek,
      thursdayThisWeek,
      fridayThisWeek,
      mondayNextWeek,
      tuesdayNextWeek,
      wednesdayNextWeek,
      thursdayNextWeek,
      fridayNextWeek,
    ];
  };

  contentChangeHandler = ([day, number], e) => {
    e.preventDefault();
    let data = [...this.props.content];

    const key = Object.keys(data[day])[number];

    //no empty cells whit spaces
    if (e.target.value.trim().length === 0) {
      data[day][key] = "";
    } else {
      data[day][key] = e.target.value;
    }

    this.setState({
      content: data,
    });
  };

  contentChangeNextHandler = ([day, number], e) => {
    e.preventDefault();
    let dataNext = [...this.props.contentNext];

    const keyNext = Object.keys(dataNext[day])[number];

    //no empty cells whit spaces
    if (e.target.value.trim().length === 0) {
      dataNext[day][keyNext] = "";
    } else {
      dataNext[day][keyNext] = e.target.value;
    }

    this.setState({
      contentNext: dataNext,
    });
  };

  componentDidMount() {
    const twoWeeksDates = this.getTwoWeeks(new Date());
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
                  contentChangeHandler={this.contentChangeHandler}
                  days={this.state.days}
                  dayNumber={index}
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
                  contentChangeHandler={this.contentChangeNextHandler}
                  days={this.state.days}
                  dayNumber={index}
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
