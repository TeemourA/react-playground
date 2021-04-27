import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/predefinedHooks';
import {
  clear,
  WeatherStatuses,
} from '../../redux/features/weatherData/weatherDataSlice';
import { CurrentData, EightDaysData, Loading, Placeholder } from '../index';

// interface WeatherInfoProps {
//   currentData: any;
//   eightDaysData: any;
//   searchedCity: any;
//   isFetching: boolean;
//   clear: () => void;
// }

const WeatherInfo: React.FC<any> = (props) => {
  // const { currentData, eightDaysData, searchedCity, isFetching, clear } = props;
  const dispatch = useAppDispatch();
  const { currentData, eightDaysData, weatherStatus } = useAppSelector(
    ({ weather }) => weather
  );
  const { searchedCity } = useAppSelector(({ search }) => search);

  const isLoading = weatherStatus === WeatherStatuses.loading;

  return (
    <div className="WeatherInfo">
      <div className="container">
        {currentData && !isLoading ? (
          <CurrentData data={currentData} clear={clear} />
        ) : eightDaysData && !isLoading ? (
          <EightDaysData
            data={eightDaysData}
            searchedCity={searchedCity}
            clear={clear}
          />
        ) : isLoading ? (
          <Loading className="loading_weatherInfo" />
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
};

export { WeatherInfo };
