import React from 'react';

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = props => (
  <div className={`loading ${props.className || ''}`}></div>
);

export { Loading };
