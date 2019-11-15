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
            background: 'black',
          }}
        >
          <AlignCenterGrid style={{ width: '40%' }}>

          </AlignCenterGrid>
          <div
            style={{
              width: '60%',
              height: '100%',
              borderRight: commonBorder,
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
          </div>
        </Row>
      );
    }
}

export default ContainerCommon;
