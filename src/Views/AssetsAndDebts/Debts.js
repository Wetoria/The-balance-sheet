import React, { Component } from 'react';
import Container from 'src/Components/ContainerCommon';
import Details from 'src/Components/Details';

class Debts extends Component {
  render() {
    const {
      data,
    } = this.props;
    const {
      assets,
    } = this.props;
    const {
      amount = 0,
    } = data;
    const aAmount = assets.amount;
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
        <Container label="总负债" value={ amount.toFixed(2) } />
        <Container
          label={<span style={{ textAlign: 'center' }}>所有者权益<br />(总资产-总负债)</span>}
          value={(assets.amount - amount).toFixed(2)}
        />
        <Container
          label={<span style={{ textAlign: 'center' }}>资产负债率<br />(总资产/总负债)</span>}
          value={<span>{(aAmount && amount) ? `${((amount / assets.amount) * 100).toFixed(2)}%` : ''}</span>}
        />
      </div>
    );
  }
}

export default Debts;
