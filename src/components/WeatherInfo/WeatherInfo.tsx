import React from 'react';
import { InfoSection, InfoItem, Loading } from '../index';
import { getCurrentDate, processCityData } from '../../utils';

interface WeatherInfoProps {
  cityData: any;
  isFetching: boolean;
  clear: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { cityData, isFetching, clear } = props;
  const data = processCityData(cityData);

  return (
    <div className="WeatherInfo">
      <div className="container">
        {cityData && !isFetching ? (
          <>
            <div className="title">
              <div className="title__plate">
                <h3 className="title__text">{`${data.name}, ${
                  data.country
                } on ${getCurrentDate()}`}</h3>
                <span className="title__time">{`Local time: ${data.localTime}`}</span>
              </div>
              <figure>
                <img
                  src={data.weatherIcon}
                  alt={data.iconDescription}
                  title={data.iconDescription}
                />
                <figcaption>{data.iconDescription}</figcaption>
              </figure>
            </div>
            <div className="info">
              <InfoSection className="info__section-1">
                <InfoItem title="Temp" data={data.temp} />
                <InfoItem title="Feels like" data={data.feelsLike} />
                <InfoItem title="Cloud coverage" data={data.cloudCoverage} />
              </InfoSection>
              <InfoSection className="info__section-2">
                <InfoItem title="Wind" data={data.wind} />
                <InfoItem title="Pressure" data={data.pressure} />
                <InfoItem title="Visibility" data={data.visibility} />
              </InfoSection>
              <InfoSection className="info__section-3">
                <InfoItem title="Humidity" data={data.humidity} />
                <InfoItem title="Sunrise" data={data.sunriseTime} />
                <InfoItem title="Sunset" data={data.sunsetTime} />
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
