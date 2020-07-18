import React from "react";

import sad_face from "../../pics/sad_face.svg";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <div className="ErrorPage">
        <h1 className="ErrorPage-main">
          404 <br /> ERROR
        </h1>
        <h2 className="ErrorPage-small">Page not found!</h2>
        <h3 className="ErrorPage-info">
          Please, login or check if the link is correct...
        </h3>
        <img className="ErrorPage-face" src={sad_face} alt="sad_face" />
      </div>
    </>
  );
};

export default ErrorPage;
