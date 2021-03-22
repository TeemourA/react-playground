import React from 'react';
import { Loading } from '../index';
import {
  getCurrentDate,
  getTimeFromMs,
  translateAngleToDirection,
} from '../../utils';

interface WeatherInfoProps {
  cityData: any;
  isFetching: boolean;
  clear: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { cityData, isFetching, clear } = props;
  const data = {
    weatherIcon: `http://openweathermap.org/img/wn/${cityData?.weather[0].icon}@2x.png`,
  };

  return (
    <div className="WeatherInfo">
      <div className="container">
        {cityData && !isFetching ? (
          <>
            <div className="title-container">
              <h3 className="title">{`${cityData.name}, ${
                cityData.sys.country
              } on ${getCurrentDate()}`}</h3>
              <figure>
                <img
                  src={data.weatherIcon}
                  alt={cityData.weather[0].description}
                  title={cityData.weather[0].description}
                />
                <figcaption>{cityData.weather[0].description}</figcaption>
              </figure>
            </div>
            <div className="info-container">
              <section className="info-section-1">
                <p>Temp: {Math.round(cityData.main.temp)} ℃</p>
                <p>Feels like: {Math.round(cityData.main.feels_like)} ℃</p>
                <p>Clouds cover: {cityData.clouds.all}%</p>
              </section>
              <section className="info-section-2">
                <p>
                  Wind: {cityData.wind.speed}m/s |{' '}
                  {translateAngleToDirection(cityData.wind.deg)}
                </p>
                <p>Pressure: {cityData.main.pressure * 0.75} MMC</p>
                <p>Visibility: {cityData.visibility / 1000}km</p>
              </section>
              <section className="info-section-3">
                <p>Sunrise: {getTimeFromMs(cityData?.sys.sunrise)}</p>
                <p>Sunset: {getTimeFromMs(cityData?.sys.sunset)}</p>
              </section>
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
