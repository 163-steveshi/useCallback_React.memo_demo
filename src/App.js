import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  //use a State to display new HTML Element
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  //example to use useCallBack
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle)
      setShowParagraph((prevStateParagraph) => {
        return !prevStateParagraph;
      });
  }, [allowToggle]);
  //when the allowToggle changes, the inner content inside the useCallBack is recreated.
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
