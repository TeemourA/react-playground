import React from 'react';
import { getCurrentDate, getTimeFromMs } from '../utils';
import { Loading } from './index';
import sun from '../assets/icons/sun.png';

interface WeatherInfoProps {
  cityData: any;
  isFetching: boolean;
  clear: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { cityData, isFetching, clear } = props;

  return (
    <div className="WeatherInfo">
      <div className="container">
        {cityData && !isFetching ? (
          <>
            <h3 className="title">{`${cityData.name}, ${
              cityData.sys.country
            } on ${getCurrentDate()}`}</h3>
            <div className="info">
              <p>Temp: {cityData.main.temp} ℃</p>
              <p>Feels like: {cityData.main.feels_like} ℃</p>
              <div>
                Details:
                <p>Sunrise: {getTimeFromMs(cityData?.sys.sunrise)}</p>
                <p>Sunset: {getTimeFromMs(cityData?.sys.sunset)}</p>
              </div>
            </div>
            <i className="far fa-times-circle close-button" onClick={clear}></i>
          </>
        ) : isFetching ? (
          <Loading />
        ) : (
          <div className="placeholder">
            <i className="fas fa-cloud-sun-rain icon"></i>
            <span>Forecast will be shown here</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { WeatherInfo };
