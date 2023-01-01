import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([])

  useEffect(() =>{
      const fetchData = async() =>{
        navigator.geolocation.getCurrentPosition(myLocation)
        function myLocation(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }
        console.log("Latitude = ", lat);
        console.log("Longitude = ", lon);

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(result => {
          setData(result)
          console.log(result)
        })
      }
      fetchData()
    }
    , [lat, lon]);


  return (
    <div className="App">

    </div>
  );
}

export default App;
