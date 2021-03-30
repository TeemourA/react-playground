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
    <div className={itemClassName ?? 'info__item'}>
      <span className={titleClassName ?? 'info__title'}>{title}</span>
      <span className={dataClassName ?? 'info__data'}>{data}</span>
    </div>
  );
};

export { CurrentDataItem };
