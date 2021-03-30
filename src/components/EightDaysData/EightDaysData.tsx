import React from 'react';
import { processEightDaysData } from '../../utils';

interface EightDaysDataProps {
  eightDaysData: any;
  searchedCity: any;
  clear: () => void;
}

const EightDaysData: React.FC<EightDaysDataProps> = props => {
  const { eightDaysData, searchedCity, clear } = props;
  
  const data = processEightDaysData(eightDaysData);

  return <div>
    {console.log(data)}
    {}
    <i className="far fa-times-circle close-button" onClick={clear}></i>
  </div>;
};

export { EightDaysData };
