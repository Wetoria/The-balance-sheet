import React, { Component } from 'react';
import {
  Row,
  Button,
  message,
} from 'antd';

import Assets from './AssetsAndDebts/Assets';
import Debts from './AssetsAndDebts/Debts';
import Details from './AssetsAndDebts/MoneyDetails';

const { remote } = require('electron');

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

const basePath = `${remote.app.getPath('userData')}/data`;
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}
const writeToFile = (fileName, str) => {
  fs.writeFile(`${basePath}/${fileName}`, str, (err) => {
    if (err) {
    } else {
      message.info('saved');
    }
  });
}

class MainView extends Component {
  constructor(props) {
    super(props);
    let fileContent = {};
    try {
      const fileUrl = `${basePath}/AND.json`;
      fileContent = JSON.parse(fs.readFileSync(fileUrl));
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

  setter = (key, obj) => {
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
