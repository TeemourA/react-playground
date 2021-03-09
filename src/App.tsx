import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from './constants/apiKey';

import { Cities } from './components';

const citiesList = [
  { id: 524894, name: 'Moscow' },
  { id: 2, name: 'St-Petersburg' },
];

const App: React.FC = () => {
  const [activeCity, setActiveCity] = useState(
    `${citiesList[Math.floor(Math.random() * citiesList.length)].name}`
  );
  const [activeCityTemperature, setTemperature] = useState<any>();

  useEffect(() => {
    axios(
      `http://api.openweathermap.org/data/2.5/find?q=${activeCity}&units=metric&appid=${apiKey}`
    ).then(data => console.log(data.data));
  }, [activeCity]);

  const citySelectHandler = (cityId: number) => {
    const selectedCity = citiesList.find(({ id }) => id === cityId);
    return selectedCity ? setActiveCity(selectedCity.name) : null;
  };

  return (
    <div className="App">
      <span>{`${activeCity} `}</span>
      <span>{activeCityTemperature || 'Loading ...'}</span>
      <Cities cities={citiesList} onSelect={citySelectHandler} />
    </div>
  );
};

export default App;
