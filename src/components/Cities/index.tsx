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

  return (
    <div className="Cities">
      <figure>
        <figcaption>Выберите город из списка:</figcaption>
        <ul className="list">{mappedCities}</ul>
      </figure>
    </div>
  );
};

export { Cities };
