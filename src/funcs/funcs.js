export const getTwoWeeks = (dateNow) => {
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

  //функция определения последнего элемента из FireBase
  export const lastElementFromDataBase = (obj) => obj.data[Object.keys(obj.data)[Object.keys(obj.data).length-1]];

  //функция генерации пустой недели

  export const generateEmpryWeek = () => 
  [
        {
          a: {
            userId: "",
            text: "",
          },
          b: {
            userId: "",
            text: "",
          },
          c: {
            userId: "",
            text: "",
          },
          d: {
            userId: "",
            text: "",
          },
          e: {
            userId: "",
            text: "",
          },
          f: {
            userId: "",
            text: "",
          },
          g: {
            userId: "",
            text: "",
          },
          h: {
            userId: "",
            text: "",
          },
          i: {
            userId: "",
            text: "",
          },
          j: {
            userId: "",
            text: "",
          },
          k: {
            userId: "",
            text: "",
          },
          l: {
            userId: "",
            text: "",
          },
          m: {
            userId: "",
            text: "",
          },
          n: {
            userId: "",
            text: "",
          },
        },
        {
          a: {
            userId: "",
            text: "",
          },
          b: {
            userId: "",
            text: "",
          },
          c: {
            userId: "",
            text: "",
          },
          d: {
            userId: "",
            text: "",
          },
          e: {
            userId: "",
            text: "",
          },
          f: {
            userId: "",
            text: "",
          },
          g: {
            userId: "",
            text: "",
          },
          h: {
            userId: "",
            text: "",
          },
          i: {
            userId: "",
            text: "",
          },
          j: {
            userId: "",
            text: "",
          },
          k: {
            userId: "",
            text: "",
          },
          l: {
            userId: "",
            text: "",
          },
          m: {
            userId: "",
            text: "",
          },
          n: {
            userId: "",
            text: "",
          },
        },
        {
          a: {
            userId: "",
            text: "",
          },
          b: {
            userId: "",
            text: "",
          },
          c: {
            userId: "",
            text: "",
          },
          d: {
            userId: "",
            text: "",
          },
          e: {
            userId: "",
            text: "",
          },
          f: {
            userId: "",
            text: "",
          },
          g: {
            userId: "",
            text: "",
          },
          h: {
            userId: "",
            text: "",
          },
          i: {
            userId: "",
            text: "",
          },
          j: {
            userId: "",
            text: "",
          },
          k: {
            userId: "",
            text: "",
          },
          l: {
            userId: "",
            text: "",
          },
          m: {
            userId: "",
            text: "",
          },
          n: {
            userId: "",
            text: "",
          },
        },
        {
          a: {
            userId: "",
            text: "",
          },
          b: {
            userId: "",
            text: "",
          },
          c: {
            userId: "",
            text: "",
          },
          d: {
            userId: "",
            text: "",
          },
          e: {
            userId: "",
            text: "",
          },
          f: {
            userId: "",
            text: "",
          },
          g: {
            userId: "",
            text: "",
          },
          h: {
            userId: "",
            text: "",
          },
          i: {
            userId: "",
            text: "",
          },
          j: {
            userId: "",
            text: "",
          },
          k: {
            userId: "",
            text: "",
          },
          l: {
            userId: "",
            text: "",
          },
          m: {
            userId: "",
            text: "",
          },
          n: {
            userId: "",
            text: "",
          },
        },
        {
          a: {
            userId: "",
            text: "",
          },
          b: {
            userId: "",
            text: "",
          },
          c: {
            userId: "",
            text: "",
          },
          d: {
            userId: "",
            text: "",
          },
          e: {
            userId: "",
            text: "",
          },
          f: {
            userId: "",
            text: "",
          },
          g: {
            userId: "",
            text: "",
          },
          h: {
            userId: "",
            text: "",
          },
          i: {
            userId: "",
            text: "",
          },
          j: {
            userId: "",
            text: "",
          },
          k: {
            userId: "",
            text: "",
          },
          l: {
            userId: "",
            text: "",
          },
          m: {
            userId: "",
            text: "",
          },
          n: {
            userId: "",
            text: "",
          },
        },
      ];


  

  /*

  TEST INITIAL STATE!!!

  state = {
    contentFirst: [
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
    ],
    contentNextFirst: [
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
      {
        first: {
          userId: "",
          text: "1-1",
        },
        second: {
          userId: "",
          text: "1-2",
        },
        third: {
          userId: "",
          text: "1-3",
        },
        fourth: {
          userId: "",
          text: "1-4",
        },
        fifth: {
          userId: "",
          text: "1-5",
        },
        sixth: {
          userId: "",
          text: "1-6",
        },
        seventh: {
          userId: "",
          text: "1-7",
        },
        eighth: {
          userId: "",
          text: "1-8",
        },
        nineth: {
          userId: "",
          text: "1-9",
        },
        tenth: {
          userId: "",
          text: "1-10",
        },
        eleventh: {
          userId: "",
          text: "1-11",
        },
        twelveth: {
          userId: "",
          text: "1-12",
        },
        thirdteenth: {
          userId: "",
          text: "1-13",
        },
        fourteenth: {
          userId: "",
          text: "1-14",
        },
      },
    ],
    contentSecond: [
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
    ],
    contentNextSecond: [
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
      {
        first: {
          userId: "",
          text: "2-1",
        },
        second: {
          userId: "",
          text: "2-2",
        },
        third: {
          userId: "",
          text: "2-3",
        },
        fourth: {
          userId: "",
          text: "2-4",
        },
        fifth: {
          userId: "",
          text: "2-5",
        },
        sixth: {
          userId: "",
          text: "2-6",
        },
        seventh: {
          userId: "",
          text: "2-7",
        },
        eighth: {
          userId: "",
          text: "2-8",
        },
        nineth: {
          userId: "",
          text: "2-9",
        },
        tenth: {
          userId: "",
          text: "2-10",
        },
        eleventh: {
          userId: "",
          text: "2-11",
        },
        twelveth: {
          userId: "",
          text: "2-12",
        },
        thirdteenth: {
          userId: "",
          text: "2-13",
        },
        fourteenth: {
          userId: "",
          text: "2-14",
        },
      },
    ],
  };

  */