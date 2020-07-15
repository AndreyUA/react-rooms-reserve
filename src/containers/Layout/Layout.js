import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <nav className="Layout-nav">
          <ul>
            <li>
              <a href="/">Authorization</a>
            </li>
            <li>
              <a href="/room1">Room #1</a>
            </li>
            <li>
              <a href="/room2">Room #2</a>
            </li>
          </ul>
        </nav>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
