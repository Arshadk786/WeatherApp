import React from 'react';
import { Card } from 'semantic-ui-react';
import "./style.css";
import moment from 'moment';

function Weather({weatherData}){
  return(
    <Card>
    <Card.Content>
        <Card.Header className="header">Division : {weatherData.name}</Card.Header>
        <p>Country : {weatherData.sys.country}</p>
        <p>Weather : {weatherData.weather[0].main}</p>
        <p>Temperature : {weatherData.main.temp}&deg;C</p>
        <p>Coordinates : {weatherData.coord.lat},{weatherData.coord.lon}</p>
        <p>Humidity : {weatherData.main.humidity}%</p>
        <p>Feels Like : {weatherData.main.feels_like}</p>
        <p>Wind : {weatherData.wind.speed}</p>
        <p>Day : {moment().format('dddd')}</p>
        <p>Date : {moment().format('LL')}</p>
    </Card.Content>
    </Card>
  );
}
export default Weather;