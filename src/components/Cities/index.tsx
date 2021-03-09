import React from 'react';

type CitiesProps = {
  cities: { id: number; name: string }[];
  onSelect: (id: number) => void;
};

const Cities: React.FC<CitiesProps> = props => {
  const { cities, onSelect } = props;

  const mappedCities = cities.map(({ id, name }) => (
    <li key={id} onClick={() => onSelect(id)}>
      {name}
    </li>
  ));

  return <ul>{mappedCities}</ul>;
};

export { Cities };
