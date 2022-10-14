import React from "react";
import "../App.css";

function Level3() {
  return(
    <div>
    <h1 className="mainHeading">Addition L3</h1>
    <h1 className="contentHeading">Two chimpanzees are throwing fruits to a pack of leopards to chase them away. 
    These leopards hunt in a pack of four. How many animals altogether?</h1>
    <div className="textCenter">
      <input type="number" placeholder="Type your answer" />
      <button type="submit" className="submit">
        Submit
      </button>
    </div>
  </div>
  )

}

export default Level3;
