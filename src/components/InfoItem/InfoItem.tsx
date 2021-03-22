import React from 'react';

interface InfoItemProps {
  title: string;
  data: string;
  itemClassName?: string;
  titleClassName?: string;
  dataClassName?: string;
}

const InfoItem: React.FC<InfoItemProps> = props => {
  const { title, data, itemClassName, titleClassName, dataClassName } = props;

  return (
    <div className={`info-item ${itemClassName ?? ''}`}>
      <span className={`title ${titleClassName ?? ''}`}>{title}</span>
      <span className={`data ${dataClassName ?? ''}`}>{data}</span>
    </div>
  );
};

export { InfoItem };
