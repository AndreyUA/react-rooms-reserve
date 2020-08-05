import React, { Component } from "react";
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
  auth,
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

  registerHandler = () => {
    this.props.auth(this.props.email.value, this.props.password.value, false);
  };

  loginHandler = async () => {
    this.props.auth(this.props.email.value, this.props.password.value, true);
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

            {this.props.isPasswordCorrect ? (
              <p className="Auth-error">&#160;</p>
            ) : (
              <p className="Auth-error">Incorrect email or password</p>
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
    isPasswordCorrect: state.auth.isPasswordCorrect,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loggedIn: () => dispatch(loggedIn()),
    setEmail: (obj) => dispatch(setEmail(obj)),
    setPassword: (obj) => dispatch(setPassword(obj)),
    changeEmail: (e) => dispatch(changeEmail(e)),
    changePassword: (e) => dispatch(changePassword(e)),
    auth: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
