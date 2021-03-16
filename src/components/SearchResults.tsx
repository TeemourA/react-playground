import React from 'react';

interface SearchResultsProps {
  searchResults: any[];
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  const { searchResults } = props;

  return (
    <div>
      {searchResults.map(city => (
        <p>{JSON.stringify(city)}</p>
      ))}
    </div>
  );
};

export { SearchResults };
