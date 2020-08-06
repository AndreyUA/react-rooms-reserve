import React, { Component } from "react";

import "./styles.css";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Home from "./containers/Home/Home";
import WeekSheet from "./containers/WeekSheet/WeekSheet";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Loader from "./components/Loader/Loader";
import Logout from "./components/Logout/Logout";

import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import {
  lastElementFromDataBase,
  generateEmpryWeek,
  getTwoWeeks,
  getTodayDate,
  deletePrevStatesFromDB,
} from "./funcs/funcs";

//redux
import { connect } from "react-redux";
import {
  calculateDates,
  calculateNextDates,
  loggedIn,
  getContentFirst,
  getContentNextFirst,
  getContentSecond,
  getContentNextSecond,
  setTypingState,
  dataIsLoading,
} from "./store/actions/app";
import { autoLogin } from "./store/actions/auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlert: false,
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isTyping !== prevProps.isTyping) {
      try {
        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json",
          this.props.contentFirst
        );

        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json",
          this.props.contentNextFirst
        );

        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json",
          this.props.contentSecond
        );

        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json",
          this.props.contentNextSecond
        );
      } catch (error) {
        console.log(error);
      }
    }

    deletePrevStatesFromDB();
  }

  async componentDidMount() {
    this.props.autoLogin();

    //обработка смены дат
    try {
      //генерируем текущие даты
      const twoWeeksDates = getTwoWeeks(new Date());

      this.props.calculateDates([
        twoWeeksDates[0],
        twoWeeksDates[1],
        twoWeeksDates[2],
        twoWeeksDates[3],
        twoWeeksDates[4],
      ]);

      this.props.calculateNextDates([
        twoWeeksDates[5],
        twoWeeksDates[6],
        twoWeeksDates[7],
        twoWeeksDates[8],
        twoWeeksDates[9],
      ]);

      //получаем даты из БД
      const response = await axios.get(
        "https://react-rooms-reserve.firebaseio.com/two-weeks.json"
      );

      //сравниваем сгенерированные даты и даты из БД
      //это текущая неделя
      if (twoWeeksDates[0] === lastElementFromDataBase(response)[0]) {
        console.log("ok");
        console.log(`today: ${getTodayDate(new Date())}`);

        //получаем все записи из БД НАЧАЛО
        //для текущей недели относительно БД
        try {
          const responseFirstThis = await axios.get(
            "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json"
          );

          const responseFirstNext = await axios.get(
            "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json"
          );

          const responseSecondThis = await axios.get(
            "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json"
          );

          const responseSecondNext = await axios.get(
            "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json"
          );

          this.props.getContentFirst(
            lastElementFromDataBase(responseFirstThis)
          );
          this.props.getContentNextFirst(
            lastElementFromDataBase(responseFirstNext)
          );
          this.props.getContentSecond(
            lastElementFromDataBase(responseSecondThis)
          );
          this.props.getContentNextSecond(
            lastElementFromDataBase(responseSecondNext)
          );
          this.props.dataIsLoading();
        } catch (error) {
          console.log(error);
        }
        //получаем все записи из БД КОНЕЦ
      }

      //это следующая неделя относительно БД
      if (twoWeeksDates[0] === lastElementFromDataBase(response)[5]) {
        //получаем все записи из БД НАЧАЛО
        //для следующей недели относительно БД
        try {
          //получаем 2 следующие недели из БД и ставим их как текущие
          const responseFirstNext = await axios.get(
            "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json"
          );

          const responseSecondNext = await axios.get(
            "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json"
          );

          //а теперь переписываем все в ДБ
          //первая комната, текущая неделя
          try {
            await axios.post(
              "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json",
              lastElementFromDataBase(responseFirstNext)
            );
          } catch (error) {
            console.log(error);
          }

          //первая комната, следующая неделя
          try {
            await axios.post(
              "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json",
              generateEmpryWeek()
            );
          } catch (error) {
            console.log(error);
          }

          //вторая комната, текущая неделя
          try {
            await axios.post(
              "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json",
              lastElementFromDataBase(responseSecondNext)
            );
          } catch (error) {
            console.log(error);
          }

          //вторая комната, следующая неделя
          try {
            await axios.post(
              "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json",
              generateEmpryWeek()
            );
          } catch (error) {
            console.log(error);
          }
          //получаем все записи из БД КОНЕЦ

          //генерируем две чистые недели
          //и записываем их в состояние

          //переписываем новые даты
          await axios.post(
            "https://react-rooms-reserve.firebaseio.com/two-weeks.json",
            twoWeeksDates
          );

          this.props.getContentFirst(
            lastElementFromDataBase(responseFirstNext)
          );
          this.props.getContentNextFirst(generateEmpryWeek());
          this.props.getContentSecond(
            lastElementFromDataBase(responseSecondNext)
          );
          this.props.getContentNextSecond(generateEmpryWeek());

          this.props.dataIsLoading();
        } catch (error) {
          console.log(error);
        }
      }

      //если приложение не активировалось более 2 недель:

      if (
        twoWeeksDates[0] !== lastElementFromDataBase(response)[0] &&
        twoWeeksDates[0] !== lastElementFromDataBase(response)[5]
      ) {
        //генерируем все пустое
        try {
          await axios.post(
            "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json",
            generateEmpryWeek()
          );
        } catch (error) {
          console.log(error);
        }

        try {
          await axios.post(
            "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json",
            generateEmpryWeek()
          );
        } catch (error) {
          console.log(error);
        }

        try {
          await axios.post(
            "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json",
            generateEmpryWeek()
          );
        } catch (error) {
          console.log(error);
        }

        try {
          await axios.post(
            "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json",
            generateEmpryWeek()
          );
        } catch (error) {
          console.log(error);
        }

        //переписываем новые даты
        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/two-weeks.json",
          twoWeeksDates
        );

        //записываем пустые состояния

        this.props.getContentFirst(generateEmpryWeek());
        this.props.getContentNextFirst(generateEmpryWeek());
        this.props.getContentSecond(generateEmpryWeek());
        this.props.getContentNextSecond(generateEmpryWeek());

        this.props.dataIsLoading();
      }
    } catch (error) {
      console.log(error);
    }
  }

  //обработчик события для первой комнаты и текущей недели
  changeHandlerFirstRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.props.contentFirst];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== localStorage.getItem("userId") &&
      data[day][key].text !== ""
    ) {
      console.log("FAILED");
      e.target.blur();
      this.setState({
        isAlert: true,
      });
      setTimeout(() => {
        this.setState({
          isAlert: false,
        });
      }, 2000);
      return;
    } else if (
      data[day][key].userId === localStorage.getItem("userId") ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = localStorage.getItem("userId");
      }

      this.props.getContentFirst(data);
    }
  };

  //обработчик события для первой комнаты и следующей недели
  changeHandlerFirstRoomNextWeek = ([day, number], e) => {
    let data = [...this.props.contentNextFirst];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== localStorage.getItem("userId") &&
      data[day][key].text !== ""
    ) {
      console.log("FAILED");
      e.target.blur();
      this.setState({
        isAlert: true,
      });
      setTimeout(() => {
        this.setState({
          isAlert: false,
        });
      }, 2000);
      return;
    } else if (
      data[day][key].userId === localStorage.getItem("userId") ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = localStorage.getItem("userId");
      }

      this.props.getContentNextFirst(data);
    }
  };

  //обработчик события для второй комнаты и текущей недели
  changeHandlerSecondRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.props.contentSecond];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== localStorage.getItem("userId") &&
      data[day][key].text !== ""
    ) {
      console.log("FAILED");
      e.target.blur();
      this.setState({
        isAlert: true,
      });
      setTimeout(() => {
        this.setState({
          isAlert: false,
        });
      }, 2000);
      return;
    } else if (
      data[day][key].userId === localStorage.getItem("userId") ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = localStorage.getItem("userId");
      }

      this.props.getContentSecond(data);
    }
  };

  //обработчик события для второй комнаты и следующей недели
  changeHandlerSecondRoomNextWeek = ([day, number], e) => {
    let data = [...this.props.contentNextSecond];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== localStorage.getItem("userId") &&
      data[day][key].text !== ""
    ) {
      console.log("FAILED");
      e.target.blur();
      this.setState({
        isAlert: true,
      });
      setTimeout(() => {
        this.setState({
          isAlert: false,
        });
      }, 2000);
      return;
    } else if (
      data[day][key].userId === localStorage.getItem("userId") ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = localStorage.getItem("userId");
      }

      this.props.getContentNextSecond(data);
    }
  };

  showAlertWindow = () => {
    this.setState({
      isAlert: !this.state.isAlert,
    });
  };

  render() {
    const week1 = (
      <WeekSheet
        changeHandlerFirstRoomCurrentWeek={
          this.changeHandlerFirstRoomCurrentWeek
        }
        changeHandlerFirstRoomNextWeek={this.changeHandlerFirstRoomNextWeek}
        content={this.props.contentFirst}
        number="1"
        contentNext={this.props.contentNextFirst}
        focusHandler={this.focusHandler}
        dates={this.props.dates}
        datesNext={this.props.datesNext}
      />
    );

    const week2 = (
      <WeekSheet
        changeHandlerSecondRoomCurrentWeek={
          this.changeHandlerSecondRoomCurrentWeek
        }
        changeHandlerSecondRoomNextWeek={this.changeHandlerSecondRoomNextWeek}
        content={this.props.contentSecond}
        contentNext={this.props.contentNextSecond}
        number="2"
        focusHandler={this.focusHandler}
        dates={this.props.dates}
        datesNext={this.props.datesNext}
      />
    );

    const home = <Home email={this.props.email} />;

    return (
      <Layout isLoggedIn={this.props.isLoggedIn} isAlert={this.state.isAlert}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (this.props.isLoggedIn ? home : <Auth />)}
          />
          {this.props.isLoggedIn ? (
            <Route
              path="/room1"
              render={() => (this.props.isLoading ? <Loader /> : week1)}
            />
          ) : (
            <Route component={ErrorPage} />
          )}

          {this.props.isLoggedIn ? (
            <Route
              path="/room2"
              render={() => (this.props.isLoading ? <Loader /> : week2)}
            />
          ) : (
            <Route component={ErrorPage} />
          )}
          <Route path="/logout" render={() => <Logout />} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    dates: state.app.dates,
    datesNext: state.app.datesNext,
    isLoggedIn: state.app.isLoggedIn,
    contentFirst: state.app.contentFirst,
    contentNextFirst: state.app.contentNextFirst,
    contentSecond: state.app.contentSecond,
    contentNextSecond: state.app.contentNextSecond,
    isTyping: state.app.isTyping,
    isLoading: state.app.isLoading,
    email: state.auth.email,
    password: state.auth.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    calculateDates: (array) => dispatch(calculateDates(array)),
    calculateNextDates: (array) => dispatch(calculateNextDates(array)),
    loggedIn: () => dispatch(loggedIn()),
    getContentFirst: (array) => dispatch(getContentFirst(array)),
    getContentNextFirst: (array) => dispatch(getContentNextFirst(array)),
    getContentSecond: (array) => dispatch(getContentSecond(array)),
    getContentNextSecond: (array) => dispatch(getContentNextSecond(array)),
    setTypingState: () => dispatch(setTypingState()),
    dataIsLoading: () => dispatch(dataIsLoading()),
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//в будущем:
//поработать с домашней страницей
//добавить подтверждение регистрации по почте
