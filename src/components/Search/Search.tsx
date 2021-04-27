import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/predefinedHooks';
import {
  fetchCityByName,
  setSearchedCity,
  setSearchStatus,
  setSearchResults,
  SearchStatuses,
} from '../../redux/features/search/searchSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchedCity, placeholder } = useAppSelector(({ search }) => search);

  const handleSearchInput = (e: React.SyntheticEvent) => {
    const cityName = (e.target as HTMLInputElement).value;
    dispatch(setSearchedCity(cityName));
    dispatch(setSearchResults([]));

    if (cityName.length === 0) {
      dispatch(setSearchStatus(SearchStatuses.idle));
      return;
    }

    dispatch(setSearchStatus(SearchStatuses.searching));
    dispatch(fetchCityByName(cityName));
  };

  return (
    <input
      placeholder={placeholder}
      value={searchedCity}
      onChange={(e) => handleSearchInput(e)}
    />
  );
};

export { Search };
