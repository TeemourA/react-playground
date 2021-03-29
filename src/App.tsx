import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import {
  fetchDataByID,
  fetchDataByName,
  fetchDataByCoords,
} from './http/makeRequest';
import { SearchResults, WeatherInfo } from './components';

const App: React.FC = () => {
  const [searchedCity, setSearchedCity] = useState<any>(null);
  const [currentData, setCurrentData] = useState<any>(null);
  const [eightDaysData, setEightDaysData] = useState<any>(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [isFetching, setFething] = useState(false);
  const [isSearhing, setSearching] = useState(true);

  const makeDebouncedRequestByName = useCallback(
    debounce((cityName: string) => {
      fetchDataByName(cityName)
        .then(data => {
          setSearchResults([data.data]);
          setNotFound(false);
          setSearching(false);
        })
        .catch(e => {
          setSearchResults([]);
          setNotFound(true);
          setSearching(false);
          console.error(e.message);
        });
    }, 500),
    []
  );

  const handleCurrentDataClick = (cityID: number) => {
    setSearchInputValue('');
    // setSearchResults([]);
    setEightDaysData(null);
    setFething(true);
    fetchDataByID(cityID)
      .then(data => {
        setFething(false);
        setCurrentData(data.data);
        console.log(data.data);
      })
      .catch(e => {
        setFething(false);
        setCurrentData(null);
        console.error(e.message);
      });
  };

  const searchInputHandler = (e: React.SyntheticEvent) => {
    setNotFound(false);
    setSearching(true);
    const cityName = (e.target as HTMLInputElement).value;
    setSearchInputValue(cityName);
    makeDebouncedRequestByName(cityName);
  };

  const clearWeatherInfoHandler = () => {
    setCurrentData(null);
    setEightDaysData(null);
  };

  const handleEightDayClick = (
    coords: { lat: number; lon: number },
    cityData: any
  ) => {
    setSearchInputValue('');
    // setSearchResults([]);
    setCurrentData(null);
    setFething(true);
    fetchDataByCoords(coords)
      .then(data => {
        setSearchedCity(cityData);
        setEightDaysData(data.data.daily);
        setFething(false);
        console.log(data.data.daily);
      })
      .catch(e => {
        setFething(false);
        console.error(e.message);
      });
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
        getCurrentData={handleCurrentDataClick}
        getEightDayData={handleEightDayClick}
        isSearching={isSearhing}
        notFound={notFound}
        searchedCity={searchInputValue}
      />
      <WeatherInfo
        currentData={currentData}
        eightDaysData={eightDaysData}
        searchedCity={searchedCity}
        isFetching={isFetching}
        clear={clearWeatherInfoHandler}
      />
    </div>
  );
};

export default App;
