import React, { Component } from "react";
import "./Auth.css";

import is from "is_js";

class Auth extends Component {
  state = {
    isEmailValid: true,
    isPasswordValid: true,
    email: {
      value: "",
      errorMessage: "Enter correct email",
    },
    password: {
      value: "",
      errorMessage: "Enter correct password",
    },
  };

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `login: ${this.state.email.value}, password: ${this.state.password.value}`
    );
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

  render() {
    return (
      <div className="Auth">
        <div className="Auth-block">
          <h1>Login</h1>
          <form onSubmit={this.submitHandler}>
            <div className="Auth-email">
              <label htmlFor="Auth-email">Email:</label>
              <input onChange={this.emailChangeHandler} id="Auth-email" />
            </div>

            {this.state.isEmailValid ? (
              <p className="Auth-correct">Enter your email</p>
            ) : (
              <p className="Auth-error">{this.state.email.errorMessage}</p>
            )}

            <div className="Auth-pass">
              <label htmlFor="Auth-pass">Password:</label>
              <input onChange={this.passwordChangeHandler} id="Auth-pass" />
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
