import React from "react";

const Star = () => {
  const rows = 5;
  const storestar = [];

  for (let i = 1; i <= rows; i++) {
    const space = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    storestar.push(space + stars);
  }

  return( 
  <div>
    {
      storestar.map((sta,index)=>(
        <pre key={index}>{sta}</pre>
      ))
    }
  </div>)
};

export default Star;
