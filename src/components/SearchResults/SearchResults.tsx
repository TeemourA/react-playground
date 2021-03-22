import React from 'react';

interface SearchResultsProps {
  searchResults: any[];
  notFound: boolean;
  searchedCity: string;
  getCityData: (cityID: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  const { searchResults, notFound, getCityData, searchedCity } = props;

  return (
    <div className="SearchResults">
      {searchResults.length > 0 ? (
        searchResults.map(city => (
          <div
            className="item"
            key={city.id}
            onClick={() => getCityData(city.id)}
          >
            <h4>{`${city.name}, ${city.sys.country}`}</h4>
          </div>
        ))
      ) : notFound && searchedCity ? (
        <p>We haven't found city "{searchedCity}", please specify your query</p>
      ) : (
        <p>Search results</p>
      )}
    </div>
  );
};

export { SearchResults };
