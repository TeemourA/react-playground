import React from 'react';

interface InfoItemProps {
  itemClassName?: string;
  titleClassName?: string;
  dataClassName?: string;
} 

const InfoItem: React.FC<InfoItemProps> = (props) => {

  return (
    <p className="info-item">
      <span className="title">Feels like</span>
      <span className="data">{Math.round(cityData.main.feels_like)} ℃</span>
    </p>
  );
};

export { InfoItem };
