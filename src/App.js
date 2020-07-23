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
} from "./funcs/funcs";
import is from "is_js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      datesNext: [],
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

    const post = false;

    //временная конструкция, удали потом обязательно
    if (post) {
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
    }

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
  }

  //вот в следующие 4 обработчика нужно добавить условие. Если ID пользователя не совпадает - редактировать НЕЛЬЯ

  changeHandlerFirstRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.state.contentFirst];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      e.target.value === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
        data[day][key].userId = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }
    }

    if (data[day][key].userId !== this.state.userId) {
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
    }

    this.setState({
      contentFirst: data,
    });
  };

  changeHandlerFirstRoomNextWeek = ([day, number], e) => {
    let data = [...this.state.contentNextFirst];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      e.target.value === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }
    }

    if (data[day][key].userId !== this.state.userId) {
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
    }

    this.setState({
      contentNextFirst: data,
    });
  };

  changeHandlerSecondRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.state.contentSecond];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      e.target.value === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }
    }

    if (data[day][key].userId !== this.state.userId) {
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
    }

    this.setState({
      contentSecond: data,
    });
  };

  changeHandlerSecondRoomNextWeek = ([day, number], e) => {
    let data = [...this.state.contentNextSecond];

    const key = Object.keys(data[day])[number];

    if (
      data[day][key].userId === this.state.userId ||
      data[day][key].userId === "" ||
      e.target.value === ""
    ) {
      //no empty cells whit spaces
      if (e.target.value.trim().length === 0) {
        data[day][key].text = "";
      } else {
        data[day][key].text = e.target.value;
        data[day][key].userId = this.state.userId;
      }
    }

    if (data[day][key].userId !== this.state.userId) {
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
    }

    this.setState({
      contentNextSecond: data,
    });
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
        dates={this.state.dates}
        datesNext={this.state.datesNext}
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
        dates={this.state.dates}
        datesNext={this.state.datesNext}
      />
    );

    return (
      <Layout isLoggedIn={this.state.isLoggedIn} isAlert={this.state.isAlert}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (this.state.isLoggedIn ? <Home /> : auth)}
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

export default App;

//что нужно сделать:
//программа максимум: реализовать переключение на следующую неделю

//в будущем:
//поработать с домашней страницей
//добавить подтверждение регистрации по почте
