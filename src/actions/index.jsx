import axios from 'axios';
import { OPEN_WEATHER_APIKEY } from '../../config/secrets.json';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_APIKEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;
  // redux-promise middleware captures a promise and resolves it first before sending
  // request object into the action payload
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export { FETCH_WEATHER, fetchWeather };
