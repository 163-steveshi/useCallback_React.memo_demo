import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <p>{props.show ? "This is new!" : ""}</p>;
};
//with the memo, the current functional component will only execute if the currStates props changed.
//e.g: the props.show changed will trigger the render of current functional component
export default React.memo(DemoOutput);
