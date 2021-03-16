import React from 'react';
import { getCurrentDate } from '../utils';
import sun from '../assets/icons/sun.png';

interface WeatherInfoProps {
  cityData: any;
  isFetching: boolean;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { cityData, isFetching } = props;
  const iconClassName = isFetching ? 'loading' : '';

  return (
    <div className="WeatherInfo">
      <div className="container">
        {cityData ? (
          <>
            <h3 className="title">{`${cityData.name}, ${
              cityData.sys.country
            } on ${getCurrentDate()}`}</h3>
            <div className="info">
              <p>Temp: {cityData.main.temp}℃</p>
              <p>Feels like: {cityData.main.feels_like}℃</p>
              <div>Details:</div>
            </div>
          </>
        ) : (
          <div className="placeholder">
            <img className={iconClassName} src={sun} alt="cloud icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export { WeatherInfo };
