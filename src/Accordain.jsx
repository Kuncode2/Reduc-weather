import React, { useState } from "react";
import "./Accordain.css";

const Accordain = () => {
  const [current, setCurrent] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setCurrent(!current)}>
          <span>this </span>
          <span>{current ? "-" : "+"}</span>
        </button>
      </div>
      <div className={`answer ${current ? "show" : ""}`}>
        This is the answer
      </div>
    </>
  );
};

export default Accordain;
