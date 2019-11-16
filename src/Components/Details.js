import React, { Component } from 'react';
import TreeDraggable from './TreeDraggable';
import DetailRow from './DetailRow';
import {
  Tree,
  Icon,
} from 'antd';
import './Details.css';

const { TreeNode } = Tree;

const commonBorder = '1px solid black'

class Details extends Component {
  addNew = () => {
    const { data } = this.props;
    data.addNewChild();
  }

  render() {
    const {
      data,
    } = this.props;
    const loop = (data, parent) =>
      data.map(item => {
        if (item.children && item.children.length) {
          return (
            <TreeNode
              key={item.key}
              style={{ cursor: 'default' }}
              title={
                <DetailRow
                  data={item}
                  parent={parent}
                />
              }
            >
              {loop(item.children, item)}
            </TreeNode>
          );
        }
        return (
          <TreeNode
            key={item.key}
            style={{ cursor: 'default' }}
            title={
              <DetailRow
                data={item}
                parent={parent}
              />
            }
          />
        );
      });
    return (
      <div
        style={{
          display: 'block',
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderTop: commonBorder,
          borderBottom: commonBorder,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            overflowY: 'scroll',
            paddingBottom: '50px',
          }}
        >
          <TreeDraggable>
            {loop(data.children, data)}
          </TreeDraggable>
        </div>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            position: 'absolute',
            bottom: '10px',
            right: '20px',
            border: '1px solid #DCDCDC',
            background: 'white',
            cursor: 'pointer',
            textAlign: 'center',
            lineHeight: '40px',
          }}
          onClick={this.addNew}
        >
          <Icon type="plus" style={{ fontSize: '30px' }} />
        </div>
      </div>
    );
  }
}

export default Details;
