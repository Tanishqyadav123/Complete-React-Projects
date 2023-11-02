import React, { useState, useEffect } from "react";

function Weather() {
  const [location, setlocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [key, setKey] = useState(
    "e9aa0559a3msh52c36dd91bfe9b0p1e6584jsn8669a8781902"
  );
  // useEffect (() =>{
  //    GetData ()
  // })

  const GetData = () => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${key}`,
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((raw) => raw.json())
      .then((actual) =>setWeatherData(actual));
  };
  return (
    <div>
      <div
        className="container my-4 "
        style={{
          border: "2px solid black",
          maxWidth: "min-content",
          minHeight: "50vh",
          borderRadius: "30px",

        }}
      >
        <div className="inputData my-4">
          <input
            type="text"
            style={{ padding: "5px", outline: "none", color: "#555" }}
            onChange={(e) => setlocation(e.target.value)}
          />

          <button className="btn  mx-4 btn-info" onClick={GetData}>
            Search
          </button>
        </div>

        <div className="temperature " style={{ marginTop: "50px" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"><i class="fa-solid fa-location-dot"></i></th>
                <th scope="col"><i class="fa-solid fa-temperature-high"></i></th>
                <th scope="col"><i class="fa-regular fa-snowflake"></i></th> 
                <th scope="col"> <i class="fa-solid fa-wind"></i></th> 
                <th scope="col"> <i class="fa-solid fa-house-flood-water-circle-arrow-right"></i></th>
            
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{location}</th>
                <td>{weatherData.temp}</td>
                <td>{weatherData.humidity}</td>
                <td>{weatherData.wind_degrees}</td>
                <td>{weatherData.wind_speed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Weather;
