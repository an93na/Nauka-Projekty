import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSliceBook";
import axios from "axios";

export const Books = () => {
  const [city, setCity] = useState("gdańsk");
  const [pogoda, setPogoda] = useState({
    name: "",
    main: { temp: "" },
    weather: [{ id: "", main: "", description: "", icon: "" }],
    wind: { speed: "" },
  });
  const value = useSelector((state) => state.book.value);
  const dispatch = useDispatch();
  const api = "ac6428ea7fc0ef9caef037d08a02ce91";
  // const coord = {
  //   lat: 54.49,
  //   lon: 18.56,
  // };
  // const openWeatherMapLinkGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${api}`;
  const openweatherMapLinkCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&lang=pl`;

  const fetchData = async () => {
    try {
      const response = await axios.get(openweatherMapLinkCity);
      setPogoda(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(pogoda.name);
  return (
    <article>
      <h4>Books</h4>
      <div>
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <input type="text" readOnly value={value} />
        <button onClick={() => dispatch(decrement(5))}>-5</button>
      </div>
      <div>
        <h2>Pogoda bieżąca</h2>
        <ul>
          <li>
            Miasto: <span id="city">{pogoda.name}</span>
          </li>
          <li>
            Temperatura: <span id="temp">{pogoda.main.temp - 273.15}°C</span>
          </li>
          <li>
            Prędkość wiatru: <span id="temp">{pogoda.wind.speed}m/s</span>
          </li>
          <li>
            Opis pogody: <span id="desc">{pogoda.weather[0].description}</span>
          </li>
          <li>
            Ikona: <img src={`https://openweathermap.org/img/w/${pogoda.weather[0].icon}.png`} id="icon" alt="icona" style={{backgroundColor: 'rgba(230, 200, 222, 0.4)', borderRadius: '10px', padding: '3px'}} />
          </li>
        </ul>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </article>
  );
};
