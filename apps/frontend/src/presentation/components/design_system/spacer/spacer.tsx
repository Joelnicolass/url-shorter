import React from 'react';

type Props = {
  width?: string;
  height?: string;
};

const Spacer = ({ width, height }: Props) => {
  return (
    <div
      style={{
        height: height || '0',
        width: width || '0',
      }}
    />
  );
};

export default Spacer;
