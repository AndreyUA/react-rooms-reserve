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
    content: [
      {
        first: "1-1",
        second: "1-2",
        third: "1-3",
        fourth: "1-4",
        fifth: "1-5",
        sixth: "1-6",
        seventh: "1-7",
        eighth: "1-8",
        nineth: "1-9",
        tenth: "1-10",
        eleventh: "1-11",
        twelveth: "1-12",
        thirdteenth: "1-13",
        fourteenth: "1-14",
      },
      {
        first: "2-1",
        second: "2-2",
        third: "2-3",
        fourth: "2-4",
        fifth: "2-5",
        sixth: "2-6",
        seventh: "2-7",
        eighth: "2-8",
        nineth: "2-9",
        tenth: "2-10",
        eleventh: "2-11",
        twelveth: "2-12",
        thirdteenth: "2-13",
        fourteenth: "2-14",
      },
      {
        first: "3-1",
        second: "3-2",
        third: "3-3",
        fourth: "3-4",
        fifth: "3-5",
        sixth: "3-6",
        seventh: "3-7",
        eighth: "3-8",
        nineth: "3-9",
        tenth: "3-10",
        eleventh: "3-11",
        twelveth: "3-12",
        thirdteenth: "3-13",
        fourteenth: "3-14",
      },
      {
        first: "4-1",
        second: "4-2",
        third: "4-3",
        fourth: "4-4",
        fifth: "4-5",
        sixth: "4-6",
        seventh: "4-7",
        eighth: "4-8",
        nineth: "4-9",
        tenth: "4-10",
        eleventh: "4-11",
        twelveth: "4-12",
        thirdteenth: "4-13",
        fourteenth: "4-14",
      },
      {
        first: "5-1",
        second: "5-2",
        third: "5-3",
        fourth: "5-4",
        fifth: "5-5",
        sixth: "5-6",
        seventh: "5-7",
        eighth: "5-8",
        nineth: "5-9",
        tenth: "5-10",
        eleventh: "5-11",
        twelveth: "5-12",
        thirdteenth: "5-13",
        fourteenth: "5-14",
      },
    ],
    contentNext: [
      {
        first: "1-1 2",
        second: "1-2 2",
        third: "1-3 2",
        fourth: "1-4 2",
        fifth: "1-5 2",
        sixth: "1-6 2",
        seventh: "1-7 2",
        eighth: "1-8 2",
        nineth: "1-9 2",
        tenth: "1-10 2",
        eleventh: "1-11 2",
        twelveth: "1-12 2",
        thirdteenth: "1-13 2",
        fourteenth: "1-14 2",
      },
      {
        first: "2-1 2",
        second: "2-2 2",
        third: "2-3 2",
        fourth: "2-4 2",
        fifth: "2-5 2",
        sixth: "2-6 2",
        seventh: "2-7 2",
        eighth: "2-8 2",
        nineth: "2-9 2",
        tenth: "2-10 2",
        eleventh: "2-11 2",
        twelveth: "2-12 2",
        thirdteenth: "2-13 2",
        fourteenth: "2-14 2",
      },
      {
        first: "3-1 2",
        second: "3-2 2",
        third: "3-3 2",
        fourth: "3-4 2",
        fifth: "3-5 2",
        sixth: "3-6 2",
        seventh: "3-7 2",
        eighth: "3-8 2",
        nineth: "3-9 2",
        tenth: "3-10 2",
        eleventh: "3-11 2",
        twelveth: "3-12 2",
        thirdteenth: "3-13 2",
        fourteenth: "3-14 2",
      },
      {
        first: "4-1 2",
        second: "4-2 2",
        third: "4-3 2",
        fourth: "4-4 2",
        fifth: "4-5 2",
        sixth: "4-6 2",
        seventh: "4-7 2",
        eighth: "4-8 2",
        nineth: "4-9 2",
        tenth: "4-10 2",
        eleventh: "4-11 2",
        twelveth: "4-12 2",
        thirdteenth: "4-13 2",
        fourteenth: "4-14 2",
      },
      {
        first: "5-1 2",
        second: "5-2 2",
        third: "5-3 2",
        fourth: "5-4 2",
        fifth: "5-5 2",
        sixth: "5-6 2",
        seventh: "5-7 2",
        eighth: "5-8 2",
        nineth: "5-9 2",
        tenth: "5-10 2",
        eleventh: "5-11 2",
        twelveth: "5-12 2",
        thirdteenth: "5-13 2",
        fourteenth: "5-14 2",
      },
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
    let data = [...this.state.content];

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
    let dataNext = [...this.state.contentNext];

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
                  content={this.state.content}
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
                  content={this.state.contentNext}
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
