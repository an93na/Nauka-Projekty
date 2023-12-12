import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSliceBook";

export const Books = () => {
  const [pogoda, setPogoda] = useState([])
  const value = useSelector((state) => state.book.value);
  const dispatch = useDispatch();
  const api = "ac6428ea7fc0ef9caef037d08a02ce91";
  const coord = {
    lat: 54.49,
    lon: 18.56,
  };
  const city = 'Warszawa'
  const openWeatherMapLinkGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${api}`;
  const openweatherMapLinkCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
  useEffect(()=>{
    fetch(openweatherMapLinkCity).then((response) => response.json()).then((data) => setPogoda(data))
  },[openweatherMapLinkCity])
  
  console.log(pogoda);
  return (
    <article>
      <h4>Books</h4>
      <div>
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <input type="text" readOnly value={value} />
        <button onClick={() => dispatch(decrement(5))}>-5</button>
      </div>
    </article>
  );
};
