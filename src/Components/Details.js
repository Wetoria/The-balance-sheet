import React, { Component } from 'react';
import TreeDraggable from './TreeDraggable';
import DetailRow from './DetailRow';
import {
  Tree,
} from 'antd';
import './Details.css';

const { TreeNode } = Tree;

const commonBorder = '1px solid black'

class Details extends Component {
  state = {
    treeData: this.props.data || [],
  }

  refreshTree = () => {
    this.setState({
      treeData: this.state.treeData,
    });
  }

  render() {
    const {
      treeData,
    } = this.state;
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
                  onSuccess={this.refreshTree}
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
                onSuccess={this.refreshTree}
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
          }}
        >
          <TreeDraggable>
            {loop(treeData)}
          </TreeDraggable>
        </div>
      </div>
    );
  }
}

export default Details;
