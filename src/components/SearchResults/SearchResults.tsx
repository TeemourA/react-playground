import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/predefinedHooks';
import { SearchStatuses } from '../../redux/features/search/searchSlice';
import { Loading } from '../index';
import {
  fetchCurrentData,
  fetchEightDaysData,
} from '../../redux/features/weatherData/weatherDataSlice';

// interface SearchResultsProps {
//   searchResults: any[];
//   isSearching: boolean;
//   notFound: boolean;
//   searchedCity: string;
//   getCurrentData: (cityID: number) => void;
//   getEightDayData: (coords: { lat: number; lon: number }, cityData: any) => void;
// }

const SearchResults: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchResults, searchedCity, searchStatus } = useAppSelector(
    ({ search }) => search
  );

  return (
    <div className="SearchResults">
      {searchResults?.length > 0 ? (
        searchResults.map((city: any) => (
          <div className="item" key={city.id}>
            <h4 className="item__title">{`${city.name}, ${city.sys.country}`}</h4>
            <div className="item__buttons">
              <i
                onClick={() => dispatch(fetchCurrentData(city.id))}
                className="item__button_current item__button"
              >
                Current
              </i>
              <i
                onClick={() => dispatch(fetchEightDaysData(city.coord))}
                className="item__button_eightday item__button"
              >
                8-day
              </i>
            </div>
          </div>
        ))
      ) : !searchedCity ? (
        <p>Search results</p>
      ) : searchStatus === SearchStatuses.searching ? (
        <Loading className="loading_small loading_searchResults" />
      ) : searchStatus === SearchStatuses.notFound && searchedCity ? (
        <p>We haven't found city "{searchedCity}", please specify your query</p>
      ) : null}
    </div>
  );
};

export { SearchResults };
