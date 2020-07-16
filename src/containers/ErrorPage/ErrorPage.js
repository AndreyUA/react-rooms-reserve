import React from "react";

import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <h1 className="ErrorPage-main">
        404 <br /> ERROR
      </h1>
      <h2 className="ErrorPage-small">Page not found!</h2>
      <h3 className="ErrorPage-info">
        Please, login or check if the link is correct...
      </h3>
    </>
  );
};

export default ErrorPage;

//нужно добавить грустный смайлик после текста
//и можно чтоб крутился, как у реакта логотип
//и чтоб крутился на заднем фоне текста
