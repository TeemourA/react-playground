import React from 'react';
import { CurrentData, EightDaysData, Loading, Placeholder } from '../index';

interface WeatherInfoProps {
  currentData: any;
  eightDaysData: any;
  searchedCity: any;
  isFetching: boolean;
  clear: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
  const { currentData, eightDaysData, searchedCity, isFetching, clear } = props;

  return (
    <div className="WeatherInfo">
      <div className="container">
        {currentData && !isFetching ? (
          <CurrentData currentData={currentData} clear={clear} />
        ) : eightDaysData && !isFetching ? (
          <EightDaysData eightDaysData={eightDaysData} searchedCity={searchedCity} clear={clear} />
        ) : isFetching ? (
          <Loading className="loading_weatherInfo" />
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
};

export { WeatherInfo };
