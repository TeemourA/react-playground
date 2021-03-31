import React from 'react';
import { CurrentDataSection, CurrentDataItem } from '../index';
import { getCurrentDate, processCurrentData } from '../../utils';

interface CurrentWeatherDataProps {
  currentData: any;
  clear: () => void;
}

const CurrentData: React.FC<CurrentWeatherDataProps> = props => {
  const { currentData, clear } = props;

  const data = processCurrentData(currentData);

  return (
    <>
      <div className="current-title">
        <div className="current-title__plate">
          <h3 className="current-title__text">{`${data.name}, ${data.country} on ${
            data.weekDay
          },  ${getCurrentDate()}`}</h3>
          <span className="current-title__time">{`Local time: ${data.localTime}`}</span>
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
      <div className="current-info">
        <CurrentDataSection className="current-info__section-1">
          <CurrentDataItem title="Temp" data={data.temp} />
          <CurrentDataItem title="Feels like" data={data.feelsLike} />
          <CurrentDataItem title="Cloud coverage" data={data.cloudCoverage} />
        </CurrentDataSection>
        <CurrentDataSection className="current-info__section-2">
          <CurrentDataItem title="Wind" data={data.wind} />
          <CurrentDataItem title="Pressure" data={data.pressure} />
          <CurrentDataItem title="Visibility" data={data.visibility} />
        </CurrentDataSection>
        <CurrentDataSection className="current-info__section-3">
          <CurrentDataItem title="Humidity" data={data.humidity} />
          <CurrentDataItem title="Sunrise" data={data.sunriseTime} />
          <CurrentDataItem title="Sunset" data={data.sunsetTime} />
        </CurrentDataSection>
      </div>
      <i className="far fa-times-circle close-button" onClick={clear}></i>
    </>
  );
};

export { CurrentData };
