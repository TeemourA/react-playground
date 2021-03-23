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
    <div className={itemClassName ?? 'info__item'}>
      <span className={titleClassName ?? 'info__title'}>{title}</span>
      <span className={dataClassName ?? 'info__data'}>{data}</span>
    </div>
  );
};

export { InfoItem };
