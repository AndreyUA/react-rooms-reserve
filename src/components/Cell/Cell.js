import React from "react";
import { connect } from "react-redux";
import { setTypingState } from "../../store/actions/app";

const Cell = (props) => {
  return (
    <div
      className={
        props.content[props.dayNumber][
          Object.keys(props.content[props.dayNumber])[props.index]
        ].text
          ? "Day-body-cell Day-body-cell-full"
          : "Day-body-cell"
      }
      onClick={(e) => {
        e.target
          .closest(".Day-body-cell")
          .querySelector(".Day-body-cell-content")
          .focus();
      }}
    >
      <p className="Day-body-cell-time">{props.timePoint}</p>
      <input
        onChange={(e) => {
          props.contentChangeHandler([props.dayNumber, props.index], e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            e.target.blur();
          }
        }}
        onBlur={(e) => {
          if (
            e.target
              .closest(".Day-body-cell")
              .querySelector(".Day-body-cell-content").value !== ""
          ) {
            e.target
              .closest(".Day-body-cell")
              .classList.add("Day-body-cell-full");
          } else if (
            props.content[props.dayNumber][
              Object.keys(props.content[props.dayNumber])[props.index]
            ].text === ""
          ) {
            e.target
              .closest(".Day-body-cell")
              .classList.remove("Day-body-cell-full");
          }
          props.setTypingState();
        }}
        className="Day-body-cell-content"
        value={
          props.content[props.dayNumber][
            Object.keys(props.content[props.dayNumber])[props.index]
          ].text
        }
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isTyping: state.app.isTyping,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTypingState: () => dispatch(setTypingState()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
