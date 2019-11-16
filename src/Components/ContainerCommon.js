import React, { Component } from 'react';
import {
  Row,
} from 'antd';
import AlignCenterGrid from './AlignCenterGrid';

const commonBorder = '1px solid black';

const WidthControlAlignCenterGrid = (props) => {
  return (
    <AlignCenterGrid
      style={{
        height: '100%',
        width: '50%',
      }}
      {...props}
    >
      { props.children }
    </AlignCenterGrid>
  )
}

const HeightControlRow = (props) => {
  return (
    <Row
      {...props}
      style={{
        height: '50%',
        ...props.style,
      }}
      type="flex"
    >
      { props.children }
    </Row>
  );
}

class ContainerCommon extends Component {

    render() {
      return (
        <Row
          type="flex"
          style={{
            height: '70px',
            // border: commonBorder,
          }}
        >
          <AlignCenterGrid style={{ width: '50%' }}>
            { this.props.label}
          </AlignCenterGrid>
          <AlignCenterGrid style={{ width: '50%' }}>
            {this.props.value}
          </AlignCenterGrid>
          {/* <div
            style={{
              width: '50%',
              height: '100%',
            }}
          >
            <HeightControlRow>
              <WidthControlAlignCenterGrid>

              </WidthControlAlignCenterGrid>
              <WidthControlAlignCenterGrid>

              </WidthControlAlignCenterGrid>
            </HeightControlRow>
            <HeightControlRow>
              <WidthControlAlignCenterGrid>

              </WidthControlAlignCenterGrid>
              <WidthControlAlignCenterGrid>

              </WidthControlAlignCenterGrid>
            </HeightControlRow>
          </div> */}
        </Row>
      );
    }
}

export default ContainerCommon;
