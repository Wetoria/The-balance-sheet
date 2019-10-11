import React, { Component } from 'react';

import Assets from './Assets';
import Debts from './Debts';

const SplitContainer = ({ children }) => {
  return (
    <div
      style={{
        width: '50%',
        height: '100%',
        minWidth: '200px',
        display: 'inline-block',
      }}
    >
      { children }
    </div>
  );
}

class MainView extends Component {

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <SplitContainer>
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
