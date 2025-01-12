import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [data, setData] = useState();

  const handleData = (data) => {
    setData(data.data);
  };

  return (
    <div>
      <Child onDataChange={handleData} />
      <h1>{data?.id}</h1>
    </div>
  );
};

export default Parent;
