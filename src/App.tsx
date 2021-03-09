import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from './constants/apiKey';

import { Cities } from './components';
import { Loading } from './components';

const citiesList = [
  { id: 524894, name: 'Moscow' },
  { id: 536203, name: 'Saint Petersburg' },
];

const App: React.FC = () => {
  const [activeCityID, setActiveCityID] = useState(
    citiesList[Math.floor(Math.random() * citiesList.length)].id
  );
  const [activeCityTemperature, setTemperature] = useState<{
    temp: number;
    feelsLike: number;
  }>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios(
      `http://api.openweathermap.org/data/2.5/weather?id=${activeCityID}&units=metric&appid=${apiKey}`
    ).then(data => {
      const { temp, feels_like } = data.data.main;
      console.log(data.data);
      setTemperature(prevTempData => ({
        ...prevTempData,
        temp,
        feelsLike: feels_like,
      }));
      setIsLoading(false);
    });
  }, [activeCityID]);

  const citySelectHandler = (cityId: number) => {
    const selectedCity = citiesList.find(({ id }) => id === cityId);
    return selectedCity ? setActiveCityID(cityId) : null;
  };

  return (
    <div className="App">
      <span>{`${
        citiesList.find(city => city.id === activeCityID)?.name
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
      <Cities cities={citiesList} onSelect={citySelectHandler} />
    </div>
  );
};

export default App;
