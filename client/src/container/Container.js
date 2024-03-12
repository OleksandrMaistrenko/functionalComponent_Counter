import "./Container.css";
import React, { useState } from "react";

function Container() {
  const [count, setCount] = useState(0);
  const buttonStyle = { backgroundColor: "lightgreen" };
  function decreaseCount() {
    setCount(count - 1);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="main">
        <div>
          <button onClick={decreaseCount} className="btn font_size_80">
            -
          </button>
        </div>
        <div className="font_size_80">{count}</div>
        <div>
          <button onClick={increaseCount} className="btn font_size_80">
            +
          </button>
        </div>
      </div>
      {!!count && (
        <div className="reset_container">
          <button onClick={reset} className="btn_reset" style={buttonStyle}>
            RESET
          </button>
        </div>
      )}
    </div>
  );
}

export default Container;
