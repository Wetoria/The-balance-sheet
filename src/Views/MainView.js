import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'antd';

import Assets from './AssetsAndDebts/Assets';
import Debts from './AssetsAndDebts/Debts';

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

const ThirdHeightRow = ({ children }) => {
  return (
    <Row style={{ height: '33.33%' }} type="flex" align="middle">
      { children }
    </Row>
  );
}


const StatisticCard = (props) => {
  const assetsOrDebtsAmountStyle = {
    marginLeft: '10px',
  };
  const assetsOrDebtsLabelStyle = {

  };
  return (
    <div
      style={{
        width: '400px',
        height: '170px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '3px 3px 3px #DCDCDC',
        border: '1px solid #DCDCDC',
        padding: '15px 25px',
      }}
    >
      <ThirdHeightRow>
        <span>资金状况</span>
      </ThirdHeightRow>
      <ThirdHeightRow>
        <Col span={12}>
          <b style={{ fontSize: '26px' }}>1,234,567.00</b>
        </Col>
        <Col span={12}>
          <b>50%</b>
        </Col>
      </ThirdHeightRow>
      <ThirdHeightRow>
        <Col span={12}>
          <label style={assetsOrDebtsLabelStyle}>总资产</label>
          <b style={assetsOrDebtsAmountStyle}>¥12,233</b>
        </Col>
        <Col span={12}>
          <label style={assetsOrDebtsLabelStyle}>总资产</label>
          <b style={assetsOrDebtsAmountStyle}>¥12,233</b>
        </Col>
      </ThirdHeightRow>
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
          // Azure 蔚蓝色 F0FFFF
          // Snow	雪	#FFFAFA
          // WhiteSmoke	白烟	#F5F5F5
          background: '#FFFFFF',
          display: 'flex',
        }}
      >
        {/* <Row type="flex" style={{ padding: '5px 10px' }}>
          <StatisticCard></StatisticCard>
        </Row> */}
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
