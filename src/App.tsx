import React, { useState, useCallback } from 'react';
import { makeRequestByID, makeRequestByName } from './http/makeRequest';
import { debounce } from 'lodash';

import { SearchResults, WeatherInfo } from './components';

const App: React.FC = () => {
  const [activeCity, setActiveCity] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [isFetching, setFething] = useState(false);
  // const [isSearhing, setSearching] = useState(false);

  const makeDebouncedRequestByName = useCallback(
    debounce((cityName: string) => {
      makeRequestByName(cityName)
        .then(data => {
          setSearchResults([data.data]);
          setNotFound(false);
        })
        .catch(e => {
          setSearchResults([]);
          setNotFound(true);
          console.error(e.message);
        });
    }, 500),
    []
  );

  const handleSearchResultClick = (cityID: number) => {
    setSearchInputValue('');
    setSearchResults([]);
    setFething(true);
    makeRequestByID(cityID)
      .then(data => {
        setFething(false);
        setActiveCity(data.data);
        console.log(data.data);
      })
      .catch(e => {
        setFething(false);
        setActiveCity(null);
        console.error(e.message);
      });
  };

  const searchInputHandler = (e: React.SyntheticEvent) => {
    const cityName = (e.target as HTMLInputElement).value;
    setSearchInputValue(cityName);
    makeDebouncedRequestByName(cityName);
  };

  const clearWeatherInfoHandler = () => {
    setActiveCity(null);
  };

  return (
    <div className="App">
      <header>
        <h1>GetWeather</h1>
        <input
          placeholder="Find city..."
          value={searchInputValue}
          onChange={searchInputHandler}
        />
      </header>
      <SearchResults
        searchResults={searchResults}
        getCityData={handleSearchResultClick}
        notFound={notFound}
        searchedCity={searchInputValue}
      />
      <WeatherInfo
        cityData={activeCity}
        isFetching={isFetching}
        clear={clearWeatherInfoHandler}
      />
    </div>
  );
};

export default App;
