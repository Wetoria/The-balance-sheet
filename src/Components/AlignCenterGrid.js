import React from 'react';

const AlignCenterGrid = (props) => {
  const {
    children,
    style,
  } = props;
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

window.AlignCenterGrid = AlignCenterGrid;

export default AlignCenterGrid;
