
import React, { useState, useEffect } from "react";
import Weather from './components/weather';

function App() {
  const [lat, setLat] = useState([]); //setlat is used to set the value os lat
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

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(res => {
          setData(res)
          console.log(res)
        })
      }
      fetchData()
    }
    , [lat, lon]);


  return (
    <div className="App">
      {/* ternery operator to check if data from api is undefined  */}
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
