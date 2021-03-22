import React from 'react';

interface InfoSectionProps {
  className: string;
};

const InfoSection: React.FC<InfoSectionProps> = props => {
  const { className, children } = props;

  return <section className={className || ''}>{children}</section>;
};
export { InfoSection };
