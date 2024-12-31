import { useDispatch, useSelector } from "react-redux";
import { getwhether } from "../redux/whetherappslice";
import { useEffect, useState } from "react";
import search_icon from "../Assets/search.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

import "./whether.css";

const Whether = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.whether);
  const [city, setCity] = useState("London");

  useEffect(() => {
    dispatch(getwhether(city));
  }, []);

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
      <div className="search-bar">
        <input type="text" onChange={handleChange} placeholder="Search" />
        <div className="search-button" onClick={handleSearch}>
          <img src={search_icon} alt="search" />
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="weather-info">
            <p className="temperature">{data?.wind?.deg}°c</p>
            <p className="location">{data?.name}</p>
          </div>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="humidity" />
              <div>
                <p>{data?.main?.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="wind" />
              <div>
                <p>{data?.wind?.speed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Whether;
