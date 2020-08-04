import React from "react";
import "./Layout.css";

import { NavLink } from "react-router-dom";
import Alert from "../../components/Alert/Alert";

const Layout = (props) => {
  return (
    <div className="Layout">
      <nav className="Layout-nav">
        <ul>
          <li>
            <NavLink to="/" exact>
              {props.isLoggedIn ? "Home Page" : "Authorization"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/room1">Room #1</NavLink>
          </li>
          <li>
            <NavLink to="/room2">Room #2</NavLink>
          </li>

          {props.isLoggedIn ? (
            <li>
              <NavLink to="/logout" exact>
                Logout
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
      <main>
        <Alert isAlert={props.isAlert} />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
