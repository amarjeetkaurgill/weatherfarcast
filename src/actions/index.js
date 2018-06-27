import axios from 'axios';
// Openweathermap API key
const API_KEY = '1929c211ebdc9f08daae2c0d21a83e31';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  let url = `${API_URL}&q=${city}, AU`;
  let request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
