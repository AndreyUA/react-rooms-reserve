import React from "react";

const Cell = (props) => {
  return (
    <div
      className="Day-body-cell"
      onClick={(e) => {
        e.target
          .closest(".Day-body-cell")
          .querySelector(".Day-body-cell-content")
          .focus();
      }}
    >
      <p className="Day-body-cell-time">{props.timePoint}</p>
      <input
        onChange={props.contentChangeHandler.bind(null, [
          props.dayNumber,
          props.index,
        ])}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            e.target.blur();
          }
        }}
        className="Day-body-cell-content"
        value={
          props.content[props.dayNumber][
            Object.keys(props.content[props.dayNumber])[props.index]
          ]
        }
      />
    </div>
  );
};

export default Cell;
