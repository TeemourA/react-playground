import React, { useState, useEffect, useCallback } from 'react';
import { makeRequestByID, makeRequestByName } from './http/makeRequest';
import { debounce } from 'lodash';

import { SearchResults, WeatherInfo } from './components';

const baseCities = ['Moscow', 'Voronezh', 'Saint-Petersburg'];

const App: React.FC = () => {
  const [activeCity, setActiveCity] = useState(null);
  const [isFetching, setFething] = useState(false);
  const [isSearhing, setSearching] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   makeRequestByID(activeCity.id).then(data => {
  //     const { temp, feels_like } = data.data.main;
  //     setTemperature(prevTempData => ({
  //       ...prevTempData,
  //       temp,
  //       feelsLike: feels_like,
  //     }));
  //     setIsLoading(false);
  //   });
  // }, [activeCity]);

  // const citySelectHandler = (cityId: number) => {
  //   const selectedCity = citiesList.find(({ id }) => id === cityId);
  //   return selectedCity ? setActiveCity(selectedCity) : null;
  // };

  const makeDebouncedRequestByName = useCallback(
    debounce((cityName: string) => {
      makeRequestByName(cityName)
        .then(data => {
          setSearchResults([data.data]);
        })
        .catch(e => {
          setSearchResults([]);
          console.error(e.message);
        });
    }, 500),
    []
  );

  const makeDebouncedRequestByID = useCallback(
    debounce((cityID: string | number) => {
      makeRequestByID(cityID)
        .then(data => {
          setSearchResults([data.data]);
        })
        .catch(e => {
          setSearchResults([]);
          console.error(e.message);
        });
    }, 500),
    []
  );

  const searchInputHandler = (e: React.SyntheticEvent) => {
    const cityName = (e.target as HTMLInputElement).value;
    setSearchInputValue(cityName);
    makeDebouncedRequestByName(cityName);
  };

  return (
    <div className="App">
      <input
        placeholder="Введите название города..."
        value={searchInputValue}
        onChange={searchInputHandler}
      />
      <SearchResults searchResults={searchResults} />
      <WeatherInfo cityData={activeCity} isFetching={isFetching} />
    </div>
  );
};

export default App;
