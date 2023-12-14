import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSliceBook";
import axios from "axios";

export const Books = () => {
  const [city, setCity] = useState("Kielce");
  const [pogoda, setPogoda] = useState({
    name: "",
    main: { temp: "" },
    weather: [{ id: "", main: "", description: "", icon: "" }],
    wind: { speed: "" },
  });
  const value = useSelector((state) => state.book.value);
  const dispatch = useDispatch();
  const api = "";
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
  }, [city]);
  console.log(pogoda.name);

  const temperatura = (temp) => {
    if (temp > 0) {
      return Math.round(temp - 273, 15);
    }
    return Math.round(temp + 273, 15);
  };

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
        <select
          name=""
          id=""
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" hidden>
            Wybierz miasto
          </option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Gdańsk">Gdańsk</option>
          <option value="Łódź">Łódź</option>
          <option value="Poznań">Poznań</option>
          <option value="Lublin">Lublin</option>
          <option value="Kielce">Kielce</option>
        </select>
        <ul>
          <li>
            Miasto: <span id="city">{pogoda.name}</span>
          </li>
          <li>
            Temperatura:{" "}
            <span id="temp">{temperatura(pogoda.main.temp)}°C</span>
          </li>
          <li>
            Prędkość wiatru: <span id="temp">{pogoda.wind.speed}m/s</span>
          </li>
          <li>
            Opis pogody: <span id="desc">{pogoda.weather[0].description}</span>
          </li>
          <li>
            Ikona:{" "}
            <img
              src={`https://openweathermap.org/img/w/${pogoda.weather[0].icon}.png`}
              id="icon"
              alt="icona"
              style={{
                backgroundColor: "rgba(230, 200, 222, 0.4)",
                borderRadius: "10px",
                padding: "3px",
              }}
            />
          </li>
        </ul>
      </div>
    </article>
  );
};
