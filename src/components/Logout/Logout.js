import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { loggedOut } from "../../store/actions/app";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
    this.props.loggedOut();

    console.log(this.props);
  }

  render() {
    return <Redirect to={"/"} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    loggedOut: () => dispatch(loggedOut()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
