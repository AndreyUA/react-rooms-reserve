import React from "react";
import "./Auth.css";

import eye from "../../pics/eye.svg";
import eye_off from "../../pics/eye_off.svg";

const Auth = (props) => {
  return (
    <div className="Auth">
      <div className="Auth-block">
        <h1>Login</h1>
        <form onSubmit={(e) => props.submitHandler(e)}>
          <div className="Auth-email">
            <label htmlFor="Auth-email">Email:</label>
            <input
              type="email"
              onChange={(e) => props.emailChangeHandler(e)}
              id="Auth-email"
              required
              placeholder="email"
            />
          </div>

          {props.isEmailValid ? (
            <p className="Auth-correct">Enter your email</p>
          ) : (
            <p className="Auth-error">{props.email.errorMessage}</p>
          )}

          <div className="Auth-pass">
            <label htmlFor="Auth-pass">Password:</label>
            <input
              type={props.password.show ? "text" : "password"}
              onChange={(e) => props.passwordChangeHandler(e)}
              id="Auth-pass"
              required
              placeholder="password"
            />
            <div
              onClick={(e) => props.showPasswordHandler(e)}
              className="Auth-pass-show"
            >
              <img src={props.password.show ? eye_off : eye} alt="eye" />
            </div>
          </div>
          {props.isPasswordValid ? (
            <p className="Auth-correct">Enter your password</p>
          ) : (
            <p className="Auth-error">{props.password.errorMessage}</p>
          )}
          <div className="Auth-control">
            <button
              className="Auth-log"
              disabled={!props.isEmailValid || !props.isPasswordValid}
              onClick={props.loginHandler}
            >
              Login
            </button>
            <button
              className="Auth-reg"
              disabled={!props.isEmailValid || !props.isPasswordValid}
              onClick={props.registerHandler}
            >
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
