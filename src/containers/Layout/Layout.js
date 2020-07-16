import React, { Component } from "react";
import "./Layout.css";

import { NavLink } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <nav className="Layout-nav">
          <ul>
            <li>
              <NavLink to="/" exact>
                Authorization
              </NavLink>
            </li>
            <li>
              <NavLink to="/room1">Room #1</NavLink>
            </li>
            <li>
              <NavLink to="/room2">Room #2</NavLink>
            </li>
          </ul>
        </nav>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
