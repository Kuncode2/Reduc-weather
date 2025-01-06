import React from "react";

const Midnumber = () => {
  const rows = 5;

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let space = 1; space <= rows - i; space++) {
      line += " ";
    }

    for (let j = 1; j <= i; j++) {
      line += j;
    }

    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }

    console.log(line);
  }

  return <div>Midnumber</div>;
};

export default Midnumber;
