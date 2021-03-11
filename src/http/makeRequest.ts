import axios from 'axios';
import { apiKey } from '../constants/apiKey';

const makeRequest = (cityID: number) => {
  return axios(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${apiKey}`
  );
};

export { makeRequest };
