import React, { useState, useEffect, useCallback } from 'react';
import { makeRequestByID, makeRequestByName } from './http/makeRequest';
import { debounce } from 'lodash';

import { Loading, WeatherInfo } from './components';

const baseCities = ['Moscow', 'Voronezh', 'Saint-Petersburg'];

const App: React.FC = () => {
  const [activeCity, setActiveCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedCity, setSearchedCity] = useState('');
  const [searchResults, setSearchResults] = useState('');

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

  const makeDebouncedRequest = useCallback(
    debounce((cityName: string) => {
      setIsLoading(true);
      makeRequestByName(cityName)
        .then(data => {
          setActiveCity(data.data);
          setIsLoading(false);
          console.log(data.data);
        })
        .catch(e => {
          setActiveCity(null);
          setIsLoading(false);
          console.log(e.message);
        });
    }, 500),
    []
  );

  const cityInputHandler = (e: React.SyntheticEvent) => {
    const cityName = (e.target as HTMLInputElement).value;
    setSearchedCity(cityName);
    makeDebouncedRequest(cityName);
  };

  return (
    <div className="App">
      <input
        placeholder="Введите название города..."
        value={searchedCity}
        onChange={cityInputHandler}
      />
      {isLoading ? <Loading /> : <WeatherInfo cityData={activeCity} />}
    </div>
  );
};

export default App;
