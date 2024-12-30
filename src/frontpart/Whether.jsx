import { useDispatch, useSelector } from "react-redux";
import { getwhether } from "../redux/whetherappslice";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaWind } from "react-icons/fa";


import "./whether.css"

const Whether = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.whether);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSearch = () => {
    dispatch(getwhether(city));
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather">
    <div className="search-bar"><input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
      /></div>
      <button onClick={handleSearch}><FaSearch /></button>
      <div className="windspeed">
        <FaWind/>
      </div>
      <div className="windDegree">
        <h1>{data?.wind?.deg}</h1>
      </div>
      <h1>{data?.wind?.speed}</h1>
    </div>
  );
};

export default Whether;
