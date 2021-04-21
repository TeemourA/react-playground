import axios from 'axios';
import { apiKey } from '../../constants/apiKey';

const fetchDataByID = (cityID: number | string, daysCount?: number) =>
  axios(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${apiKey}`
  );

const fetchDataByName = (cityName: string) =>
  axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  );

const fetchDataByCoords = (coords: { lat: number; lon: number }) =>
  axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`
  );

export { fetchDataByID, fetchDataByName, fetchDataByCoords };
