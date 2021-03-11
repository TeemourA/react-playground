import React, { useState, useEffect, useCallback } from 'react';
import { makeRequestByID, makeRequestByName } from './http/makeRequest';
import { debounce } from 'lodash';
import { apiKey } from './constants/apiKey';

import { Cities } from './components';
import { Loading } from './components';

const citiesList = [
  { id: 524894, name: 'Москва' },
  { id: 536203, name: 'Санкт-Петербург' },
  { id: 472045, name: 'Воронеж' },
];

const App: React.FC = () => {
  const [activeCity, setActiveCity] = useState(
    citiesList[Math.floor(Math.random() * citiesList.length)]
  );
  const [activeCityTemperature, setTemperature] = useState<{
    temp: number;
    feelsLike: number;
  }>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchedCity, setSearchedCity] = useState('');

  useEffect(() => {
    setIsLoading(true);
    makeRequestByID(activeCity.id).then(data => {
      const { temp, feels_like } = data.data.main;
      setTemperature(prevTempData => ({
        ...prevTempData,
        temp,
        feelsLike: feels_like,
      }));
      setIsLoading(false);
    });
  }, [activeCity]);

  const citySelectHandler = (cityId: number) => {
    const selectedCity = citiesList.find(({ id }) => id === cityId);
    return selectedCity ? setActiveCity(selectedCity) : null;
  };

  const makeDebouncedRequest = useCallback(
    debounce(
      (cityName: string) =>
        makeRequestByName(cityName)
          .then(data => console.log(data.data))
          .catch(e => console.log(e.message)),
      500
    ),
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
      <Cities cities={citiesList} onSelect={citySelectHandler} />
      <span>{`${
        citiesList.find(city => city.id === activeCity.id)?.name
      } `}</span>
      <span>
        {activeCityTemperature && !isLoading ? (
          <>
            <p>{`Температура: ${activeCityTemperature.temp}℃`}</p>
            <p>{`Ощущается как: ${activeCityTemperature.feelsLike}℃`}</p>
          </>
        ) : (
          <Loading />
        )}
      </span>
    </div>
  );
};

export default App;
