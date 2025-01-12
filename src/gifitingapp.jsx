import React, { useState } from "react";

const Gifitingapp = () => {
  const [friends, setFriends] = useState("");
  const [store, setStore] = useState([{}]);
  const [assign, setAssign] = useState(false);

  const gift = ["a", "b", "c", "d"];

  const handleinput = (e) => {
    setFriends(e.target.value);
  };
  const handleclick = (e) => {
    e.preventDefault();
    handlesubmit();
  };
  const handlesubmit = () => {
    setStore([...store, { name: friends, gift: "no gift" }]);
    setFriends("");
  };
  const handleaddgift = () => {
    if (!assign) {
        
    }
  };

  // data.gifts= gift[Math.floor(Math.random() * gift.length)]
  const handlereseat = () => {
    // {gift[Math.floor(Math.random() * gift.length)]}
  };
  const handlesuffelegift = () => {};

  return (
    <>
      <h1>Diwali gift</h1>
      <form onSubmit={handleclick}>
        <input onChange={handleinput} value={friends} />
        <button type="submit">Add Person</button>
      </form>
      {store.map((data, i) => {
        return (
          <li key={i}>
            {data?.name} -
            <button>remove</button>
          </li>
        );
      })}
      <div>
        <button onClick={handleaddgift}>addgift</button>
        <button onClick={handlesuffelegift}>shufflegift</button>
        <button onClick={handlereseat}>reseat</button>
      </div>
    </>
  );
};

export default Gifitingapp;
