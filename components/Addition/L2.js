import React from "react";
import "../App.css";
function Level2() {
  return (
    <div>
      <button className="back" onClick={window.history.back()}>
        Back
      </button>
      <h1 className="mainHeading">Addition Level 2</h1>
      <img className="first" src="./img/imgL2.PNG" alt="not available" />
      <img className="second" src="./img/imgL2.PNG" alt="not available" />
      <img className="third" src="./img/imgL2.PNG" alt="not available" />
      <img className="fourth" src="./img/imgL2.PNG" alt="not available" />
      <div className="textCenter">
        <input type="number" placeholder="Type your answer" />
        <button type="submit" className="back">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Level2;
