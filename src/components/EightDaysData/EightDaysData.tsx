import React from 'react';
import { processEightDaysData } from '../../utils';

interface EightDaysDataProps {
  eightDaysData: any;
  searchedCity: any;
  clear: () => void;
}

const EightDaysData: React.FC<EightDaysDataProps> = props => {
  const { eightDaysData, searchedCity, clear } = props;

  const data = processEightDaysData(eightDaysData);
  console.log(data);

  return (
    <div className="eight-days-info">
      <ul className="eight-days-info__list">
        {data.map((day: any, index: number) => (
          <li key={index} className="eight-days-info__item">
            <span>{day.date}</span>
            <figure>
              <img
                src={day.weatherIcon}
                alt={day?.iconDescription}
                title={day?.iconDescription}
              />
              <figcaption>{day.iconDescription}</figcaption>
            </figure>
            <span>{`Day: ${day.temp.max}`}</span>
            <span>{`Night: ${day.temp.min}`}</span>
          </li>
        ))}
      </ul>
      <i className="far fa-times-circle close-button" onClick={clear}></i>
    </div>
  );
};

export { EightDaysData };
