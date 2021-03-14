import React from 'react';
import { getCurrentDate } from '../utils';

interface WeatherInfoProps {
  cityData: any;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { cityData } = props;

  return cityData ? (
    <div className="WeatherInfo">
      <div className="container">
        <h3 className="title">{`${cityData.name}, ${
          cityData.sys.country
        } on ${getCurrentDate()}`}</h3>
        <div className="info">
          <p>Temp: {cityData.main.temp}℃</p>
          <p>Feels like: {cityData.main.feels_like}℃</p>
          <div>Details:</div>
        </div>
      </div>
    </div>
  ) : (
    <div>Выберите город</div>
  );
};

export { WeatherInfo };
