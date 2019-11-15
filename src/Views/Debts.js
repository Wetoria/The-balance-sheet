import React, { Component } from 'react';
import Container from 'src/Components/ContainerCommon';
import Details from 'src/Components/Details';
import AlignCenterGrid from 'src/Components/AlignCenterGrid';

class Debts extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AlignCenterGrid style={{ height: '50px' }}>

        </AlignCenterGrid>
        <Details />
        <Container />
        <Container />
        <Container />
      </div>
    );
  }
}

export default Debts;
