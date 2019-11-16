import React, { Component } from 'react';
import Container from 'src/Components/ContainerCommon';
import Details from 'src/Components/Details';
import AlignCenterGrid from 'src/Components/AlignCenterGrid';
import MoneyDetails from './MoneyDetails';

const treeData = {
  key: '0',
  children: [
    {
      name: '0-0',
      key: '0-0',
      parentKey: [],
      level: 1,
      children: [
        {
          name: '0-0-0',
          key: '0-0-0',
          parentKey: ['0-0'],
          level: 2,
          children: [
            {
              name: '0-0-0-0',
              key: '0-0-0-0', level: 3,
              parentKey: ['0-0-0', '0-0'],
              children: [
                {
                  name: 1,
                  key: '1',
                  parentKey: ['0-0-0', '0-0', '0-0-0-0'],
                  level: 4,
                },
                {
                  name: 2,
                  key: '2',
                  parentKey: ['0-0-0', '0-0', '0-0-0-0'],
                  level: 4,
                },
                {
                  name: 3,
                  key: '3',
                  parentKey: ['0-0-0', '0-0', '0-0-0-0'],
                  level: 4,
                },
              ]
            },
            {
              name: '0-0-0-3',
              key: '0-0-0-3', level: 3,
              parentKey: ['0-0-0', '0-0'],
              children: [
                {
                  name: 4,
                  key: '4',
                  parentKey: ['0-0-0', '0-0', '0-0-0-3'],
                  level: 4,
                },
                {
                  name: 5,
                  key: '5',
                  parentKey: ['0-0-0', '0-0', '0-0-0-3'],
                  level: 4,
                },
                {
                  name: 6,
                  key: '6',
                  parentKey: ['0-0-0', '0-0', '0-0-0-3'],
                  level: 4,
                },
              ]
            },
            { name: '0-0-0-1', key: '0-0-0-1', level: 3, parentKey: ['0-0-0', '0-0'] },
            { name: '0-0-0-2', key: '0-0-0-2', level: 3, parentKey: ['0-0-0', '0-0'] },
          ],
        },
        {
          name: '0-0-1',
          key: '0-0-1',
          parentKey: ['0-0'],
          level: 2,
          children: [
            { name: '0-0-1-0', key: '0-0-1-0', level: 3, parentKey: ['0-0-1', '0-0'] },
            { name: '0-0-1-1', key: '0-0-1-1', level: 3, parentKey: ['0-0-1', '0-0'] },
            { name: '0-0-1-2', key: '0-0-1-2', level: 3, parentKey: ['0-0-1', '0-0'] },
          ],
        },
        {
          name: '0-0-2',
          key: '0-0-2',
          parentKey: ['0-0'],
          level: 2,
        },
      ],
    },
    {
      name: '0-1',
      key: '0-1',
      level: 1,
      parentKey: [],
      children: [
        { name: '0-1-0-0', key: '0-1-0-0', level: 3, parentKey: ['0-1'] },
        { name: '0-1-0-1', key: '0-1-0-1', level: 3, parentKey: ['0-1'] },
        { name: '0-1-0-2', key: '0-1-0-2', level: 3, parentKey: ['0-1'] },
      ],
    },
    {
      name: '0-2',
      key: '0-2',
      level: 1,
      parentKey: [],
    },
  ],
};

class Assets extends Component {
  constructor(props) {
    super(props);
    const {
      data,
    } = this.props;
    data.refreshFunc = this.refreshDom;
    this.state = {
      details: data,
    };
    this.refreshDom = this.refreshDom.bind(this);
  }
  refreshDom = () => {
    const {
      details,
    } = this.state;
    details.refreshTotal();
    console.log(details);
    this.setState({
      details: details,
    });
  }
  render() {
    const {
      details,
    } = this.state;
    const {
      amount = 0,
    } = details;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AlignCenterGrid style={{ minHeight: '50px' }}>

        </AlignCenterGrid>
        <Details data={details} />
        <Container label="总资产" value={amount.toFixed(2)} />
      </div>
    );
  }
}

export default Assets;
