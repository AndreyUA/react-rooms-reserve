import React, { Component } from "react";
import "./Auth.css";

import eye from "../../pics/eye.svg";
import eye_off from "../../pics/eye_off.svg";
import is from "is_js";
import axios from "axios";

class Auth extends Component {
  state = {
    isEmailValid: true,
    isPasswordValid: true,
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

      console.log(response);
      this.props.loginHandler();
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

  render() {
    return (
      <div className="Auth">
        <div className="Auth-block">
          <h1>Login</h1>
          <form onSubmit={this.submitHandler}>
            <div className="Auth-email">
              <label htmlFor="Auth-email">Email:</label>
              <input
                type="email"
                onChange={this.emailChangeHandler}
                id="Auth-email"
                required
                placeholder="email"
              />
            </div>

            {this.state.isEmailValid ? (
              <p className="Auth-correct">Enter your email</p>
            ) : (
              <p className="Auth-error">{this.state.email.errorMessage}</p>
            )}

            <div className="Auth-pass">
              <label htmlFor="Auth-pass">Password:</label>
              <input
                type={this.state.password.show ? "text" : "password"}
                onChange={this.passwordChangeHandler}
                id="Auth-pass"
                required
                placeholder="password"
              />
              <div
                onClick={this.showPasswordHandler}
                className="Auth-pass-show"
              >
                <img src={this.state.password.show ? eye_off : eye} alt="eye" />
              </div>
            </div>
            {this.state.isPasswordValid ? (
              <p className="Auth-correct">Enter your password</p>
            ) : (
              <p className="Auth-error">{this.state.password.errorMessage}</p>
            )}
            <div className="Auth-control">
              <button
                className="Auth-log"
                disabled={
                  !this.state.isEmailValid || !this.state.isPasswordValid
                }
                onClick={this.loginHandler}
              >
                Login
              </button>
              <button
                className="Auth-reg"
                disabled={
                  !this.state.isEmailValid || !this.state.isPasswordValid
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

export default Auth;
