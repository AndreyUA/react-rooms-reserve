import React, { Component } from "react";
import "./Auth.css";

import eye from "../../pics/eye.svg";
import eye_off from "../../pics/eye_off.svg";

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
                onChange={(e) => this.props.emailChangeHandler(e)}
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
                onChange={(e) => this.props.passwordChangeHandler(e)}
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
                onClick={this.props.loginHandler}
              >
                Login
              </button>
              <button
                className="Auth-reg"
                disabled={
                  !this.props.isEmailValid || !this.props.isPasswordValid
                }
                onClick={this.props.registerHandler}
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
