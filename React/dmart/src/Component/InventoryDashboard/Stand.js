import React, { useState } from "react";
import "../../Component/ClassBased.css";

function Stand() {
  let [state, setState] = useState(
    "https://images-cdn.ubuy.co.in/6350cb191bd7744fbc74df70-stepup-2in1-2022-model-laptop-stand-for.jpg"
  );
  return (
    <div className="train-info">
      <img src={state} width="200px" height="200px" />
    </div>
  );
}

export default Stand;
