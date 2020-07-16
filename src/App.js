import React, { Component } from "react";

import "./styles.css";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import WeekSheet from "./containers/WeekSheet/WeekSheet";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    contentFirst: [
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
    contentNextFirst: [
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
    contentSecond: [
      {
        first: "1-1 Second",
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
        first: "2-1 Second",
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
        first: "3-1 Second",
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
        first: "4-1 Second",
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
        first: "5-1 Second",
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
    contentNextSecond: [
      {
        first: "1-1 2 Second",
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
        first: "2-1 2 Second",
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
        first: "3-1 2 Second",
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
        first: "4-1 2 Second",
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
        first: "5-1 2 Second",
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

  render() {
    const week1 = (
      <WeekSheet
        content={this.state.contentFirst}
        contentNext={this.state.contentNextFirst}
        number="1"
      />
    );

    const week2 = (
      <WeekSheet
        content={this.state.contentSecond}
        contentNext={this.state.contentNextSecond}
        number="2"
      />
    );
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/room1" render={() => week1} />
          <Route path="/room2" render={() => week2} />
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
