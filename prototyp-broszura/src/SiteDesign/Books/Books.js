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

  // funkcja zwracjąca liczbę z zerem wiodącym
  function getNumberAsStringWithLeadingZero(value) {
    if (value <= 9) {
      return `0${value}`;
    }
    return `${value}`;
  }

  const getDate = (dt) => {
    const date = new Date(dt * 1000);
    const year = date.getFullYear();
    const month = getNumberAsStringWithLeadingZero(date.getMonth() + 1);
    const day = getNumberAsStringWithLeadingZero(date.getDate());
    const hour = getNumberAsStringWithLeadingZero(date.getHours());
    const minutes = getNumberAsStringWithLeadingZero(date.getMinutes());
    const seconds = getNumberAsStringWithLeadingZero(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  };

  console.log(getDate(pogoda.dt));
  return (
    <article>
      <h4>Books</h4>
      <div>
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <input type="text" readOnly value={value} />
        <button onClick={() => dispatch(decrement(5))}>-5</button>
      </div>
      <div>
        <h2
          style={{
            backgroundColor: "palevioletred",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Pogoda bieżąca
        </h2>
        <p>Wybierz miasto:</p>
        <select
          name=""
          id=""
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Gdańsk">Gdańsk</option>
          <option value="Lodz">Łódź</option>
          <option value="Poznań">Poznań</option>
          <option value="Zamosc">Zamość</option>
          <option value="Kielce">Kielce</option>
        </select>
        <p style={{
            textAlign: "center",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
            width: 410,
          }}>{getDate(pogoda.dt)}</p>
        <div
          style={{
            textAlign: "center",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
            width: 410,
          }}
        >
          <p style={{ marginBottom: "15px" }}>
            Miasto: <b>{pogoda.name}</b>
          </p>{" "}
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
          <p style={{ marginBottom: "5px" }}>
            Temperatura: <b>{temperatura(pogoda.main.temp)}°C</b>
          </p>
          <p style={{ marginBottom: "5px" }}>
            Opis pogody: <b>{pogoda.weather[0].description}</b>
          </p>
          <p style={{ marginBottom: "5px" }}>
            Prędkość wiatru: <b>{pogoda.wind.speed}m/s</b>
          </p>
        </div>
      </div>
    </article>
  );
};
