import React, { Component } from 'react';
import {
  Row,
} from 'antd';
import AlignCenterGrid from './AlignCenterGrid';


class ContainerCommon extends Component {

    render() {
      return (
        <Row
          type="flex"
          style={{
            height: '70px',
          }}
        >
          <AlignCenterGrid style={{ width: '50%' }}>
            { this.props.label}
          </AlignCenterGrid>
          <AlignCenterGrid style={{ width: '50%' }}>
            {this.props.value}
          </AlignCenterGrid>
        </Row>
      );
    }
}

export default ContainerCommon;
