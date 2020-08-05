import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    //this.showUserReserve();
  }

  //showUserReserve = () => {
  //for (let i in this.props.contentFirst) {
  //for (let j in this.props.contentFirst[i]) {
  //тут добавить проверку на юзерИд
  //соответствует - можно выводить
  //и продумать шутку со временем
  // console.log(this.props.contentFirst[i][j]);
  // }
  //}
  //};

  render() {
    return (
      <div className="Home">
        <h1>Hello!</h1>
        <h2>Your email: {localStorage.getItem("email")}</h2>
        <h4>This web app is using react.js, react-router-dom, redux, axios.</h4>
      </div>
    );
  }
}

export default Home;

//в планах:
//выводить информацию о пользователе
//формировать полный список забронированного

//удаление аккаунта, смена пароля, смена почты и тд
