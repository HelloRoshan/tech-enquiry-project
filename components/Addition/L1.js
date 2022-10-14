import React from "react";
import "../App.css";
function Level1(){

    return (
      <div>
        <button className="back" onClick={window.history.back()}>Back</button>
        <h1 className="mainHeading">Addition Level 1</h1>
        <h1 className="mainHeading"> 1.5 + 3</h1>
        <div className="textCenter">
          <input type="number" placeholder="Type your answer" />
          <button type="submit" className="submit">Submit</button>
        </div>
      </div>
    );
  
}


export default Level1;
