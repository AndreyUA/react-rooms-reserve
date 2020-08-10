import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Hello!</h1>
      <h2>Your email: {localStorage.getItem("email")}</h2>
      <h4>
        This web app is using <b>react.js</b>, <b>firebase</b>,{" "}
        <b>react-router-dom</b>, <b>redux</b>, <b>react-redux</b>,{" "}
        <b>redux-thunk</b>, <b>axios</b>, <b>is_js</b>.
      </h4>
      <h4>
        Also you can use <b>Redux DevTools</b> for this app.
      </h4>
    </div>
  );
};

export default Home;