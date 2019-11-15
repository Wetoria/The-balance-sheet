import React, { Component } from 'react';
import Container from 'src/Components/ContainerCommon';
import Details from 'src/Components/Details';
import AlignCenterGrid from 'src/Components/AlignCenterGrid';

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    parentKey: [],
    level: 1,
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        parentKey: ['0-0'],
        level: 2,
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0', level: 3,
            parentKey: ['0-0-0', '0-0'],
            children: [
              {
                title: 1,
                key: '1',
                parentKey: ['0-0-0', '0-0', '0-0-0-0'],
                level: 4,
              },
              {
                title: 2,
                key: '2',
                parentKey: ['0-0-0', '0-0', '0-0-0-0'],
                level: 4,
              },
              {
                title: 3,
                key: '3',
                parentKey: ['0-0-0', '0-0', '0-0-0-0'],
                level: 4,
              },
            ]
          },
          {
            title: '0-0-0-3',
            key: '0-0-0-3', level: 3,
            parentKey: ['0-0-0', '0-0'],
            children: [
              {
                title: 4,
                key: '4',
                parentKey: ['0-0-0', '0-0', '0-0-0-3'],
                level: 4,
              },
              {
                title: 5,
                key: '5',
                parentKey: ['0-0-0', '0-0', '0-0-0-3'],
                level: 4,
              },
              {
                title: 6,
                key: '6',
                parentKey: ['0-0-0', '0-0', '0-0-0-3'],
                level: 4,
              },
            ]
          },
          { title: '0-0-0-1', key: '0-0-0-1', level: 3, parentKey: ['0-0-0', '0-0'] },
          { title: '0-0-0-2', key: '0-0-0-2', level: 3, parentKey: ['0-0-0', '0-0'] },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        parentKey: ['0-0'],
        level: 2,
        children: [
          { title: '0-0-1-0', key: '0-0-1-0', level: 3, parentKey: ['0-0-1', '0-0'] },
          { title: '0-0-1-1', key: '0-0-1-1', level: 3, parentKey: ['0-0-1', '0-0'] },
          { title: '0-0-1-2', key: '0-0-1-2', level: 3, parentKey: ['0-0-1', '0-0'] },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
        parentKey: ['0-0'],
        level: 2,
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    level: 1,
    parentKey: [],
    children: [
      { title: '0-1-0-0', key: '0-1-0-0', level: 3, parentKey: ['0-1'] },
      { title: '0-1-0-1', key: '0-1-0-1', level: 3, parentKey: ['0-1'] },
      { title: '0-1-0-2', key: '0-1-0-2', level: 3, parentKey: ['0-1'] },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
    level: 1,
    children: [
      { title: '0-1-0-0', key: '0-1-0-4', level: 3, parentKey: ['0-1'] },
      { title: '0-1-0-0', key: '0-1-0-3', level: 3, parentKey: ['0-1'] },
      { title: '0-1-0-0', key: '0-1-0-5', level: 3, parentKey: ['0-1'] },
      { title: '0-1-0-0', key: '0-1-0-6', level: 3, parentKey: ['0-1'] },
      { title: '0-1-0-0', key: '0-1-0-7', level: 3, parentKey: ['0-1'] },
    ],
  },
];

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
        <AlignCenterGrid style={{ height: '50px', borderTop: 'unset' }}>

        </AlignCenterGrid>
        <Details data={treeData} />
        <Container />
        <Container />
        <Container />
      </div>
    );
  }
}

export default Debts;
