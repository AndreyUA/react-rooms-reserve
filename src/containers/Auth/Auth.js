import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";

import eye from "../../pics/eye.svg";
import eye_off from "../../pics/eye_off.svg";

//redux
import { connect } from "react-redux";
import {
  setEmail,
  setPassword,
  changeEmail,
  changePassword,
} from "../../store/actions/auth";
import { loggedIn } from "../../store/actions/app";

class Auth extends Component {
  state = {
    passwordShow: false,
  };

  submitHandler = (e) => {
    e.preventDefault();
    document.getElementById("Auth-email").value = "";
    document.getElementById("Auth-pass").value = "";
  };

  showPasswordHandler = (e) => {
    e.preventDefault();
    this.setState({
      passwordShow: !this.state.passwordShow,
    });
  };

  registerHandler = async () => {
    const authData = {
      email: this.props.email.value,
      password: this.props.password.value,
      returnSecureToken: true,
    };

    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsMASd0VkdSUSdIdbpsQN_LFml1Chi8L0",
        authData
      );
    } catch (error) {
      console.log(error);
    }
  };

  loginHandler = async () => {
    const authData = {
      email: this.props.email.value,
      password: this.props.password.value,
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsMASd0VkdSUSdIdbpsQN_LFml1Chi8L0",
        authData
      );


      
      //ВОТ ТУТ НУЖНО ЗАПИСАТЬ ДАННЫЙ В СЕССИЮ!!!!!


      this.setState({
        userId: response.data.localId,
      });
      this.props.loggedIn();
      console.log(`это нужно сохранять в сессии для сравнения! ${this.state.userId}`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="Auth">
        <div className="Auth-block">
          <h1>Login</h1>
          <form onSubmit={(e) => this.submitHandler(e)}>
            <div className="Auth-email">
              <label htmlFor="Auth-email">Email:</label>
              <input
                type="email"
                onChange={(e) => this.props.changeEmail(e)}
                id="Auth-email"
                required
                placeholder="email"
              />
            </div>

            {this.props.isEmailValid ? (
              <p className="Auth-correct">Enter your email</p>
            ) : (
              <p className="Auth-error">{this.props.email.errorMessage}</p>
            )}

            <div className="Auth-pass">
              <label htmlFor="Auth-pass">Password:</label>
              <input
                type={this.state.passwordShow ? "text" : "password"}
                onChange={(e) => this.props.changePassword(e)}
                id="Auth-pass"
                required
                placeholder="password"
              />
              <div
                onClick={(e) => this.showPasswordHandler(e)}
                className="Auth-pass-show"
              >
                <img src={this.state.passwordShow ? eye_off : eye} alt="eye" />
              </div>
            </div>
            {this.props.isPasswordValid ? (
              <p className="Auth-correct">Enter your password</p>
            ) : (
              <p className="Auth-error">{this.props.password.errorMessage}</p>
            )}
            <div className="Auth-control">
              <button
                className="Auth-log"
                disabled={
                  !this.props.isEmailValid || !this.props.isPasswordValid
                }
                onClick={this.loginHandler}
              >
                Login
              </button>
              <button
                className="Auth-reg"
                disabled={
                  !this.props.isEmailValid || !this.props.isPasswordValid
                }
                onClick={this.registerHandler}
              >
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    password: state.auth.password,
    isEmailValid: state.auth.isEmailValid,
    isPasswordValid: state.auth.isPasswordValid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loggedIn: () => dispatch(loggedIn()),

    setEmail: (obj) => dispatch(setEmail(obj)),
    setPassword: (obj) => dispatch(setPassword(obj)),
    changeEmail: (e) => dispatch(changeEmail(e)),
    changePassword: (e) => dispatch(changePassword(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
