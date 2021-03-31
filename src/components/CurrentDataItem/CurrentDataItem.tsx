import React from 'react';

interface CurrentDataItemProps {
  title: string;
  data: string;
  itemClassName?: string;
  titleClassName?: string;
  dataClassName?: string;
}

const CurrentDataItem: React.FC<CurrentDataItemProps> = props => {
  const { title, data, itemClassName, titleClassName, dataClassName } = props;

  return (
    <div className={itemClassName ?? 'current-info__item'}>
      <span className={titleClassName ?? 'current-info__title'}>{title}</span>
      <span className={dataClassName ?? 'current-info__data'}>{data}</span>
    </div>
  );
};

export { CurrentDataItem };
