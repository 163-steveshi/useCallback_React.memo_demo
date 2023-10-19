import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("button clicked");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
//with the memo, the current functional component will only execute if the currStates props changed.
export default React.memo(Button);
