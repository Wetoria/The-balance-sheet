import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
} from 'antd';

import Assets from './AssetsAndDebts/Assets';
import Debts from './AssetsAndDebts/Debts';
import Details from './AssetsAndDebts/MoneyDetails';

const commonBorder = '1px solid black';

const fs = window.require('electron').remote.require('fs');

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

const writeToFile = (fileName, str) => {
  fs.writeFile(`${fileName}`, str, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('done');
  });
}


class MainView extends Component {
  constructor(props) {
    super(props);
    let fileContent = {};
    try {
      fileContent = JSON.parse(fs.readFileSync('./AND.json'));
    } catch(err) {
    }
    this.setter = this.setter.bind(this);
    const assetsAndDebts = {
      assets: new Details(fileContent.assets, { func: this.setter, key: 'assets' }),
      debts: new Details(fileContent.debts, { func: this.setter, key: 'debts' }),
    }
    this.state = {
      assetsAndDebts,
    }
  }

  // componentDidMount() {
  //   this.getAssetsAndDebts(this.setter);
  // }

  // getAssetsAndDebts = (setter) => {

  // }

  setter = (key, obj) => {
    // obj.refreshTotal();
    const { assetsAndDebts } = this.state;
    assetsAndDebts[key].refreshTotal();
    this.setState({
      assetsAndDebts,
    });
  }

  handleSave = () => {
    writeToFile('AND.json', JSON.stringify(this.state.assetsAndDebts, null, 2));
  }

  render() {
    const {
      assetsAndDebts: {
        assets,
        debts,
      }
    } = this.state;
    console.log('ass is ', this.state.assetsAndDebts);
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          // Azure 蔚蓝色 F0FFFF
          // Snow	雪	#FFFAFA
          // WhiteSmoke	白烟	#F5F5F5
          background: '#FFFFFF',
        }}
      >
        {/* <Row type="flex" style={{ padding: '5px 10px' }}>
          <StatisticCard></StatisticCard>
        </Row> */}
        <Row>
          <Button onClick={this.handleSave}>保存</Button>
        </Row>
        <Row type="flex" style={{ height: 'calc(100% - 32px)' }}>
          <SplitContainer style={{ borderRight: commonBorder }}>
            <Assets data={assets} />
          </SplitContainer>
          <SplitContainer>
            <Debts data={debts} assets={assets} />
          </SplitContainer>
        </Row>
      </div>
    );
  }
}

export default MainView;
