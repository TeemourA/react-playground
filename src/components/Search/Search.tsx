import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/predefinedHooks';
import {
  fetchCityByName,
  setSearchedCity,
} from '../../redux/features/search/searchSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchedCity, placeholder } = useAppSelector(
    ({ search }) => search
  );

  const handleSearch = (e: React.SyntheticEvent) => {
    const cityName = (e.target as HTMLInputElement).value;

    dispatch(setSearchedCity(cityName));
    dispatch(fetchCityByName({ cityName }));
  };

  return (
    <input
      placeholder={placeholder}
      value={searchedCity}
      onChange={(e) => handleSearch(e)}
    />
  );
};

export { Search };
