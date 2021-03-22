import React from 'react';
import { InfoSection, InfoItem, Loading } from '../index';
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
              <InfoSection className="info-section-1">
                <InfoItem
                  title="Temp"
                  data={`${Math.round(cityData.main.temp)} ℃`}
                />
                <InfoItem
                  title="Feels like"
                  data={`${Math.round(cityData.main.feels_like)} ℃`}
                />
                <InfoItem
                  title="Cloud coverage"
                  data={`${cityData.clouds.all}%`}
                />
              </InfoSection>
              <InfoSection className="info-section-2">
                <InfoItem
                  title="Wind"
                  data={`${
                    cityData.wind.speed
                  } m/s | ${translateAngleToDirection(cityData.wind.deg)}`}
                />
                <InfoItem
                  title="Pressure"
                  data={`${cityData.main.pressure * 0.75} MMC`}
                />
                <InfoItem
                  title="Visibility"
                  data={`${(cityData.visibility / 1000).toFixed(1)}km`}
                />
              </InfoSection>
              <InfoSection className="info-section-3">
                <InfoItem
                  title="Humidity"
                  data={`${cityData.main.humidity}%`}
                />
                <InfoItem
                  title="Sunrise"
                  data={getTimeFromMs(cityData.sys.sunrise)}
                />
                <InfoItem
                  title="Sunset"
                  data={getTimeFromMs(cityData.sys.sunset)}
                />
              </InfoSection>
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
