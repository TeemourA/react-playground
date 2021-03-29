import React from 'react';

interface EightDaysDataProps {
  eightDaysData: any;
  searchedCity: any;
  clear: () => void;
}

const EightDaysData: React.FC<EightDaysDataProps> = props => {
  const { eightDaysData, searchedCity, clear } = props;

  return <div>
    {JSON.stringify(eightDaysData)}
    {}
    <i className="far fa-times-circle close-button" onClick={clear}></i>

  </div>;
};

export { EightDaysData };
