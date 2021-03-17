import React from 'react';

interface SearchResultsProps {
  searchResults: any[];
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  const { searchResults } = props;

  return (
    <div>
      {searchResults.map(city => (
        <div key={city.id}>
          <h4>{`${city.name}, ${city.sys.country}`}</h4>
        </div>
      ))}
    </div>
  );
};

export { SearchResults };
