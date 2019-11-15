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
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        ...style,
      }}
    >
      <span>测试文本</span>
      {children}
    </div>
  );
}

export default AlignCenterGrid;
