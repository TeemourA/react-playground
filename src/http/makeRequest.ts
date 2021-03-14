import axios from 'axios';
import { apiKey } from '../constants/apiKey';

const makeRequestByID = (cityID: number | string) =>
  axios(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${apiKey}`
  );

const makeRequestByName = (cityName: string) =>
axios(
  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
);

export { makeRequestByID, makeRequestByName };
