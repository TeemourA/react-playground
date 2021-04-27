import React from 'react';
import { processEightDaysData } from '../../utils';

interface EightDaysDataProps {
  data: any;
  searchedCity: any;
  clear: () => void;
}

const EightDaysData: React.FC<EightDaysDataProps> = props => {
  const { data, searchedCity, clear } = props;

  return (
    <div className="eight-days-info">
      <ul className="eight-days-info__list">
        {data?.map((day: any, index: number) => (
          <li key={index} className="eight-days-info__item">
            <span className="eight-days-info__title">{day.date}</span>
            <figure className="eight-days-info__figure">
              <img
                src={day.weatherIcon}
                alt={day?.iconDescription}
                title={day?.iconDescription}
                className="eight-days-info__img"
              />
              <figcaption className="eight-days-info__img_info">{day.iconDescription}</figcaption>
            </figure>
            <div className="eight-days-info__temp">
              <span className="eight-days-info__temp_max">{day.temp.max}</span>
              {' / '}
              <span className="eight-days-info__temp_min">{day.temp.min}</span>
            </div>
          </li>
        ))}
      </ul>
      <i className="far fa-times-circle close-button" onClick={clear}></i>
    </div>
  );
};

export { EightDaysData };
