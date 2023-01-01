import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  useEffect(
    function getLocation() {
      navigator.geolocation.getCurrentPosition(myLocation)
      function myLocation(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }
      console.log("Latitude = ", lat);
      console.log("Longitude = ", lon);

    }
    , [lat, lon]);


  return (
    <div className="App">

    </div>
  );
}

export default App;
