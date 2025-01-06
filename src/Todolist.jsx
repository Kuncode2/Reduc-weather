import React, { useState } from "react";

const Todolist = () => {
  const [current, setCurrent] = useState("");
  const [store, setStore] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleAdd = () => {
    if (current.trim()) {
      if (isEditing !== null) {
        setStore(
          store.map((item, index) => (index === isEditing ? current : item))
        );
        setIsEditing(null);
      } else {
        setStore([...store, current]);
      }
      setCurrent("");
    }
  };
  const handleDelete = (index) => {
    setStore(store.filter((_, i) => i !== index));
  };
  const handleEdit = (index) => {
    setCurrent(store[index]);
    setIsEditing(index);
  };

  console.log(current);

  return (
    <div>
      <h1>Todolist</h1>
      <div className="input">
        <input value={current} onChange={(e) => setCurrent(e.target.value)} />
        <button onClick={handleAdd}>
          {isEditing !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {store.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
