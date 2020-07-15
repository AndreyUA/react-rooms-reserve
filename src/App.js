import React, { Component } from "react";

import "./styles.css";
import Layout from "./containers/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import WeekSheet from "./containers/WeekSheet/WeekSheet";

class App extends Component {
  render() {
    return (
      <Layout>
        {/*<Auth />*/}
        {<WeekSheet number="1" />}
        {/*<WeekSheet number='2' />*/}
      </Layout>
    );
  }
}

export default App;

//пришло время добавить роутинг в приложение.
//нужно разобраться в стилях #root и .Layout
//там какая-то каша со стилями и куча свободного места внизу при просмотре с телефона