import React, { Component } from 'react';

import Assets from './Assets';
import Debts from './Debts';

const commonBorder = '1px solid black'

const SplitContainer = ({ children, style }) => {
  return (
    <div
      style={{
        width: '50%',
        height: '100%',
        minWidth: '200px',
        display: 'flex',
        ...style,
      }}
    >
      { children }
    </div>
  );
}

class MainView extends Component {

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'white',
          display: 'flex'
        }}
      >
        <SplitContainer style={{ borderRight: commonBorder }}>
          <Assets />
        </SplitContainer>
        <SplitContainer>
          <Debts />
        </SplitContainer>
      </div>
    );
  }
}

export default MainView;
