import React, { Component } from "react";

import "./styles.css";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Home from "./containers/Home/Home";
import WeekSheet from "./containers/WeekSheet/WeekSheet";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

import { Switch, Route } from "react-router-dom";
import axios from "axios";
import {
  lastElementFromDataBase,
  generateEmpryWeek,
  getTwoWeeks,
  getTodayDate,
} from "./funcs/funcs";
import is from "is_js";

//redux
import { connect } from "react-redux";
import { calculateDates, calculateNextDates } from "./store/actions/app";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentFirst: [],
      contentNextFirst: [],
      contentSecond: [],
      contentNextSecond: [],
      isLoading: true,
      isTyping: false,
      isLoggedIn: false,
      userId: "",
      isEmailValid: true,
      isPasswordValid: true,
      isAlert: false,
      email: {
        value: "your email",
        errorMessage: "Enter correct email",
      },
      password: {
        value: "your password",
        errorMessage: "Enter correct password",
        show: false,
      },
    };
  }

  loginHandler = async () => {
    const authData = {
      email: this.state.email.value,
      password: this.state.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsMASd0VkdSUSdIdbpsQN_LFml1Chi8L0",
        authData
      );
      this.setState({
        isLoggedIn: true,
        userId: response.data.localId,
      });
      console.log(this.props.userId);
    } catch (error) {
      console.log(error);
    }
  };

  registerHandler = async () => {
    const authData = {
      email: this.state.email.value,
      password: this.state.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsMASd0VkdSUSdIdbpsQN_LFml1Chi8L0",
        authData
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    document.getElementById("Auth-email").value = "";
    document.getElementById("Auth-pass").value = "";
  };

  emailChangeHandler = (e) => {
    const value = e.target.value;
    const email = { ...this.state.email };

    let isValid = true;

    if (value.trim() === "" || !is.email(value)) {
      isValid = false;
    }

    if (isValid) {
      email.value = value;
    }

    this.setState({
      isEmailValid: isValid,
      email,
    });
  };

  passwordChangeHandler = (e) => {
    const value = e.target.value;
    const password = { ...this.state.password };

    let isValid = true;

    if (value.length <= 5) {
      isValid = false;
    }

    if (isValid) {
      password.value = value;
    }

    this.setState({
      isPasswordValid: isValid,
      password,
    });
  };

  showPasswordHandler = (e) => {
    e.preventDefault();
    const password = { ...this.state.password };

    password.show = !this.state.password.show;
    this.setState({
      password,
    });
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isTyping !== prevState.isTyping) {
      try {
        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json",
          this.state.contentFirst
        );

        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json",
          this.state.contentNextFirst
        );

        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json",
          this.state.contentSecond
        );

        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json",
          this.state.contentNextSecond
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  async componentDidMount() {
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

      console.log(this.props);

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

          this.setState({
            contentFirst: lastElementFromDataBase(responseFirstThis),
            contentNextFirst: lastElementFromDataBase(responseFirstNext),
            contentSecond: lastElementFromDataBase(responseSecondThis),
            contentNextSecond: lastElementFromDataBase(responseSecondNext),
            isLoading: false,
          });
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
            const response = await axios.post(
              "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json",
              lastElementFromDataBase(responseFirstNext)
            );

            console.log(response);
          } catch (error) {
            console.log(error);
          }

          //первая комната, следующая неделя
          try {
            const response = await axios.post(
              "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json",
              generateEmpryWeek()
            );

            console.log(response);
          } catch (error) {
            console.log(error);
          }

          //вторая комната, текущая неделя
          try {
            const response = await axios.post(
              "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json",
              lastElementFromDataBase(responseSecondNext)
            );

            console.log(response);
          } catch (error) {
            console.log(error);
          }

          //вторая комната, следующая неделя
          try {
            const response = await axios.post(
              "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json",
              generateEmpryWeek()
            );

            console.log(response);
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

          this.setState({
            contentFirst: lastElementFromDataBase(responseFirstNext),
            contentNextFirst: generateEmpryWeek(),
            contentSecond: lastElementFromDataBase(responseSecondNext),
            contentNextSecond: generateEmpryWeek(),
            isLoading: false,
          });
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
          const response = await axios.post(
            "https://react-rooms-reserve.firebaseio.com/first-room-this-week.json",
            generateEmpryWeek()
          );

          console.log(response);
        } catch (error) {
          console.log(error);
        }

        try {
          const response = await axios.post(
            "https://react-rooms-reserve.firebaseio.com/first-room-next-week.json",
            generateEmpryWeek()
          );

          console.log(response);
        } catch (error) {
          console.log(error);
        }

        try {
          const response = await axios.post(
            "https://react-rooms-reserve.firebaseio.com/second-room-this-week.json",
            generateEmpryWeek()
          );

          console.log(response);
        } catch (error) {
          console.log(error);
        }

        try {
          const response = await axios.post(
            "https://react-rooms-reserve.firebaseio.com/second-room-next-week.json",
            generateEmpryWeek()
          );

          console.log(response);
        } catch (error) {
          console.log(error);
        }

        //переписываем новые даты
        await axios.post(
          "https://react-rooms-reserve.firebaseio.com/two-weeks.json",
          twoWeeksDates
        );

        //записываем пустые состояния
        this.setState({
          contentFirst: generateEmpryWeek(),
          contentNextFirst: generateEmpryWeek(),
          contentSecond: generateEmpryWeek(),
          contentNextSecond: generateEmpryWeek(),
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }

    //удаляем лишние данные

    try {
      const response = await axios.get(
        "https://react-rooms-reserve.firebaseio.com/.json"
      );

      for (let i = 0; i < Object.keys(response.data).length; i++) {
        const responseObj = await axios.get(
          `https://react-rooms-reserve.firebaseio.com/${
            Object.keys(response.data)[i]
          }.json`
        );

        for (let j = 0; j < Object.keys(responseObj.data).length - 1; j++) {
          await axios.delete(
            `https://react-rooms-reserve.firebaseio.com/${
              Object.keys(response.data)[i]
            }/${Object.keys(responseObj.data)[j]}.json`
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  //обработчик события для первой комнаты и текущей недели
  changeHandlerFirstRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.state.contentFirst];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== this.state.userId &&
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
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }

      this.setState({
        contentFirst: data,
      });
    }
  };

  //обработчик события для первой комнаты и следующей недели
  changeHandlerFirstRoomNextWeek = ([day, number], e) => {
    let data = [...this.state.contentNextFirst];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== this.state.userId &&
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
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }

      this.setState({
        contentNextFirst: data,
      });
    }
  };

  //обработчик события для второй комнаты и текущей недели
  changeHandlerSecondRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.state.contentSecond];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== this.state.userId &&
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
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }

      this.setState({
        contentSecond: data,
      });
    }
  };

  //обработчик события для второй комнаты и следующей недели
  changeHandlerSecondRoomNextWeek = ([day, number], e) => {
    let data = [...this.state.contentNextSecond];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId !== this.state.userId &&
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
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      data[day][key].text === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }

      this.setState({
        contentNextSecond: data,
      });
    }
  };

  focusHandler = () => {
    this.setState({
      isTyping: !this.state.isTyping,
    });
  };

  showAlertWindow = () => {
    this.setState({
      isAlert: !this.state.isAlert,
    });
  };

  render() {
    const auth = (
      <Auth
        email={this.state.email}
        password={this.state.password}
        isPasswordValid={this.state.isPasswordValid}
        isEmailValid={this.state.isEmailValid}
        loginHandler={this.loginHandler}
        registerHandler={this.registerHandler}
        submitHandler={this.submitHandler}
        emailChangeHandler={this.emailChangeHandler}
        passwordChangeHandler={this.passwordChangeHandler}
        showPasswordHandler={this.showPasswordHandler}
      />
    );

    const week1 = (
      <WeekSheet
        changeHandlerFirstRoomCurrentWeek={
          this.changeHandlerFirstRoomCurrentWeek
        }
        changeHandlerFirstRoomNextWeek={this.changeHandlerFirstRoomNextWeek}
        content={this.state.contentFirst}
        number="1"
        contentNext={this.state.contentNextFirst}
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
        content={this.state.contentSecond}
        contentNext={this.state.contentNextSecond}
        number="2"
        focusHandler={this.focusHandler}
        dates={this.props.dates}
        datesNext={this.props.datesNext}
      />
    );

    const home = (
      <Home
        contentFirst={this.state.contentFirst}
        contentNextFirst={this.state.contentNextFirst}
        contentSecond={this.state.contentSecond}
        contentNextSecond={this.state.contentNextSecond}
        email={this.state.email}
        userId={this.state.userId}
      />
    );

    return (
      <Layout isLoggedIn={this.state.isLoggedIn} isAlert={this.state.isAlert}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (this.state.isLoggedIn ? home : auth)}
          />
          {this.state.isLoggedIn ? (
            <Route path="/room1" render={() => week1} />
          ) : (
            <Route component={ErrorPage} />
          )}

          {this.state.isLoggedIn ? (
            <Route path="/room2" render={() => week2} />
          ) : (
            <Route component={ErrorPage} />
          )}
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    dates: state.app.dates,
    datesNext: state.app.datesNext,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    calculateDates: (array) => dispatch(calculateDates(array)),
    calculateNextDates: (array) => dispatch(calculateNextDates(array)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//в будущем:
//поработать с домашней страницей
//добавить подтверждение регистрации по почте

//также разобраться в userId
//бывает что остается и запрещает редактировать другому пользователю
