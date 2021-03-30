import React from 'react';

interface CurrentDataSectionProps {
  className?: string;
};

const CurrentDataSection: React.FC<CurrentDataSectionProps> = props => {
  const { className, children } = props;

  return <section className={className ?? ''}>{children}</section>;
};
export { CurrentDataSection };
