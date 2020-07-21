import React, { Component } from "react";

import "./styles.css";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import WeekSheet from "./containers/WeekSheet/WeekSheet";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { lastElementFromDataBase, generateEmpryWeek } from "./funcs/funcs";
import Loader from "./components/Loader/Loader";

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
    };
  }

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

  changeHandlerFirstRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.state.contentFirst];

    const key = Object.keys(data[day])[number];

    //no empty cells whit spaces
    if (e.target.value.trim().length === 0) {
      data[day][key].text = "";
    } else {
      data[day][key].text = e.target.value;
    }

    this.setState({
      contentFirst: data,
    });
  };

  changeHandlerFirstRoomNextWeek = ([day, number], e) => {
    let data = [...this.state.contentNextFirst];

    const key = Object.keys(data[day])[number];

    //no empty cells whit spaces
    if (e.target.value.trim().length === 0) {
      data[day][key].text = "";
    } else {
      data[day][key].text = e.target.value;
    }

    this.setState({
      contentNextFirst: data,
    });
  };

  changeHandlerSecondRoomCurrentWeek = ([day, number], e) => {
    let data = [...this.state.contentSecond];

    const key = Object.keys(data[day])[number];

    //no empty cells whit spaces
    if (e.target.value.trim().length === 0) {
      data[day][key].text = "";
    } else {
      data[day][key].text = e.target.value;
    }

    this.setState({
      contentSecond: data,
    });
  };

  focusHandler = () => {
    this.setState({
      isTyping: !this.state.isTyping,
    });
  };

  changeHandlerSecondRoomNextWeek = ([day, number], e) => {
    let data = [...this.state.contentNextSecond];

    const key = Object.keys(data[day])[number];

    //no empty cells whit spaces
    if (e.target.value.trim().length === 0) {
      data[day][key].text = "";
    } else {
      data[day][key].text = e.target.value;
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

  render() {
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
      />
    );

    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route
            path="/room1"
            render={() => (this.state.isLoading ? <Loader /> : week1)}
          />

          <Route
            path="/room2"
            render={() => (this.state.isLoading ? <Loader /> : week2)}
          />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

//после реализации авторизации:
//можно защитить роуты комнат
//без авторизации будет страница 404

//пример на всякий случай:
//{this.state.isLoggedIn ? <Route path="/room1" render={() => week1} /> : <Route component={ErrorPage} />}
//{this.state.isLoggedIn ? <Route path="/room2" render={() => week2} /> : <Route component={ErrorPage} />}


//что нужно сделать:
//красиво оформить загрузку: спиннер поставить в середину страницы или что-то такое
//посмотреть страницу ошибки. снова съехала грустная рожа
//можно уже делать авторизацию
//программа максимум: реализовать переключение на следующую неделю

//идея: сделать так, чтоб заполненная клетка имела другой цвет.