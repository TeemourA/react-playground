import React from 'react';

interface SearchResultsProps {
  searchResults: any[];
  getCityData: (cityID: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  const { searchResults, getCityData } = props;

  return (
    <div>
      {searchResults.map(city => (
        <div key={city.id} onClick={() => getCityData(city.id)}>
          <h4>{`${city.name}, ${city.sys.country}`}</h4>
        </div>
      ))}
    </div>
  );
};

export { SearchResults };
