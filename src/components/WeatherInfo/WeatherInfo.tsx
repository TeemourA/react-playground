import React from 'react';
import { CurrentData, EightDaysData, Loading, Placeholder } from '../index';

interface WeatherInfoProps {
  currentData: any;
  eightDaysData: any;
  isFetching: boolean;
  clear: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { currentData, eightDaysData, isFetching, clear } = props;

  return (
    <div className="WeatherInfo">
      <div className="container">
        {currentData && !isFetching ? (
          <CurrentData currentData={currentData} clear={clear} />
        ) : eightDaysData && !isFetching ? (
          <EightDaysData />
        ) : isFetching ? (
          <Loading />
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
};

export { WeatherInfo };
