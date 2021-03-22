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
                <p className="info-item">
                  <span className="title">Temp</span>
                  <span className="data">
                    {Math.round(cityData.main.temp)} ℃
                  </span>
                </p>
                <p className="info-item">
                  <span className="title">Feels like</span>
                  <span className="data">
                    {Math.round(cityData.main.feels_like)} ℃
                  </span>
                </p>
                <p className="info-item">
                  <span className="title">Cloud coverage</span>
                  <span className="data">{cityData.clouds.all}%</span>
                </p>
              </section>
              <section className="info-section-2">
                <p className="info-item">
                  <span className="title">Wind</span>
                  <span className="data">
                    {cityData.wind.speed}m/s |
                    {` ${translateAngleToDirection(cityData.wind.deg)}`}
                  </span>
                </p>
                <p className="info-item">
                  <span className="title">Pressure</span>
                  <span className="data">
                    {cityData.main.pressure * 0.75} MMC
                  </span>
                </p>
                <p className="info-item">
                  <span className="title">Visibility</span>
                  <span className="data">
                    {(cityData.visibility / 1000).toFixed(1)}km
                  </span>
                </p>
              </section>
              <section className="info-section-3">
              <p className="info-item">
                  <span className="title">Humidity</span>
                  <span className="data">
                    {cityData.main.humidity}%
                  </span>
                </p>
                <p className="info-item">
                  <span className="title">Sunrise</span>
                  <span className="data">
                    {getTimeFromMs(cityData.sys.sunrise)}
                  </span>
                </p>
                <p className="info-item">
                  <span className="title">Sunset</span>
                  <span className="data">
                    {getTimeFromMs(cityData.sys.sunset)}
                  </span>
                </p>
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
