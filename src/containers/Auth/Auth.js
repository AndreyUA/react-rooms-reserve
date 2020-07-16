import React, { Component } from "react";
import "./Auth.css";

class Auth extends Component {
  state = {
    email: {
      value: "",
      errorMessage: "Enter correct email",
      isFormValid: true,
    },
    password: {
      value: "",
      errorMessage: "Enter correct password",
      isFormValid: true,
    },
  };

  render() {
    return (
      <div className="Auth">
        <div className="Auth-block">
          <h1>Login</h1>
          <form>
            <div className="Auth-email">
              <label htmlFor="Auth-email">Email:</label>
              <input id="Auth-email" />
            </div>

            {this.state.email.isFormValid ? (
              <p className="Auth-correct">Enter your email</p>
            ) : (
              <p className="Auth-error">{this.state.email.errorMessage}</p>
            )}

            <div className="Auth-pass">
              <label htmlFor="Auth-pass">Password:</label>
              <input id="Auth-pass" />
            </div>
            {this.state.password.isFormValid ? (
              <p className="Auth-correct">Enter your password</p>
            ) : (
              <p className="Auth-error">{this.state.password.errorMessage}</p>
            )}
            <div className="Auth-control">
              <button className="Auth-log">Login</button>
              <button className="Auth-reg">Registration</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;

//нужно сделать форму авторизации с валидацией

//остались кнопки и обработчики
