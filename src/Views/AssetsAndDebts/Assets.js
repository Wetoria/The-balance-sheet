import React, { Component } from 'react';
import Container from 'src/Components/ContainerCommon';
import Details from 'src/Components/Details';

class Assets extends Component {
  render() {
    const {
      data,
    } = this.props;
    const {
      amount = 0,
    } = data;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Details data={data} />
        <Container label="总资产" value={amount.toFixed(2)} />
      </div>
    );
  }
}

export default Assets;
