import React from "react";
import "./Alert.css";

const Alert = (props) => {
  return (
    <div className={props.isAlert ? "Alert Alert-active" : "Alert"}>
      <div
        className={
          props.isAlert ? "Alert-window Alert-window-active" : "Alert-window"
        }
      >
        <div>
          <h1>You can edit only your posts!</h1>
        </div>
      </div>
    </div>
  );
};

export default Alert;
